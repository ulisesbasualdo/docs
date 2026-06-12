import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Contenido } from '../contenido/contenido';
import { Seo } from '../seo';
import type { Examen } from '../contenido/esquema';

export interface ResultadoExamen {
  puntaje: number;
  total: number;
  porcentaje: number;
  aprobado: boolean;
}

// La correccion ocurre en el navegador: el sitio no tiene backend y el puntaje no se guarda.
export function corregir(examen: Examen, respuestas: Record<string, number>): ResultadoExamen {
  const puntaje = examen.preguntas.filter((p) => respuestas[p.id] === p.correcta).length;
  const total = examen.preguntas.length;
  const porcentaje = Math.round((puntaje / total) * 100);
  return { puntaje, total, porcentaje, aprobado: porcentaje >= examen.aprobacion };
}

@Component({
  selector: 'docs-examen',
  imports: [RouterLink],
  template: `
    @if (datos(); as ex) {
      <header class="concepto-head">
        <a class="leccion-track" [routerLink]="['/', ex.track]">← Volver al curso</a>
        <h1>{{ ex.titulo }}</h1>
        <p class="concepto-intro">
          {{ ex.preguntas.length }} preguntas. Necesitas {{ ex.aprobacion }}% para aprobar. El resultado no se guarda:
          es para que vos sepas donde estas parado.
        </p>
      </header>

      @for (pregunta of ex.preguntas; track pregunta.id; let i = $index) {
        <fieldset class="examen-pregunta" [disabled]="!!resultado()">
          <legend>{{ i + 1 }}. {{ pregunta.texto }}</legend>
          @for (opcion of pregunta.opciones; track $index; let o = $index) {
            <label
              class="examen-opcion"
              [class.is-elegida]="respuestas()[pregunta.id] === o"
              [class.is-correcta]="!!resultado() && pregunta.correcta === o"
              [class.is-incorrecta]="!!resultado() && respuestas()[pregunta.id] === o && pregunta.correcta !== o"
            >
              <input
                type="radio"
                [name]="pregunta.id"
                [checked]="respuestas()[pregunta.id] === o"
                (change)="elegir(pregunta.id, o)"
              />
              {{ opcion }}
            </label>
          }
          @if (resultado()) {
            <p class="examen-explicacion" [class.is-ok]="respuestas()[pregunta.id] === pregunta.correcta">
              {{ respuestas()[pregunta.id] === pregunta.correcta ? 'Correcto.' : pregunta.explicacion }}
            </p>
          }
        </fieldset>
      }

      @if (resultado(); as r) {
        <section class="examen-resultado" [class.is-aprobado]="r.aprobado">
          <h2>{{ r.aprobado ? 'Aprobado' : 'Todavia no' }}</h2>
          <p>
            Respondiste bien {{ r.puntaje }} de {{ r.total }} ({{ r.porcentaje }}%).
            {{ r.aprobado ? 'Excelente trabajo.' : 'Repasa las lecciones del modulo y volve a intentarlo.' }}
          </p>
          <div class="leccion-nav__links">
            <button type="button" class="btn-completar" (click)="reiniciar()">Intentar de nuevo</button>
            <a class="leccion-nav__link leccion-nav__link--next" [routerLink]="['/', ex.track]">Volver al curso →</a>
          </div>
        </section>
      } @else {
        <div class="leccion-nav">
          <button type="button" class="btn-completar" [disabled]="!todasRespondidas()" (click)="enviar()">
            Corregir respuestas
          </button>
          @if (!todasRespondidas()) {
            <p class="examen-pendientes">Te faltan responder {{ pendientes() }} pregunta(s).</p>
          }
        </div>
      }
    } @else {
      <p class="concepto-intro">Cargando examen...</p>
    }
  `,
})
export class ExamenPagina {
  readonly track = input.required<string>();
  readonly slug = input.required<string>();

  private readonly contenido = inject(Contenido);
  private readonly seo = inject(Seo);

  protected readonly datos = toSignal(
    toObservable(this.slug).pipe(switchMap((slug) => this.contenido.examen(slug))),
    { initialValue: null },
  );

  protected readonly respuestas = signal<Record<string, number>>({});
  protected readonly resultado = signal<ResultadoExamen | null>(null);

  readonly pendientes = computed(() => {
    const ex = this.datos();
    if (!ex) {
      return 0;
    }
    return ex.preguntas.filter((p) => this.respuestas()[p.id] === undefined).length;
  });
  readonly todasRespondidas = computed(() => this.pendientes() === 0);

  constructor() {
    effect(() => {
      const ex = this.datos();
      if (ex) {
        this.seo.aplicar({
          titulo: `${ex.titulo} — Docs — Ulises Basualdo`,
          descripcion: `Evaluacion del modulo, ${ex.preguntas.length} preguntas multiple choice con correccion al instante.`,
          rutaCanonica: `/${ex.track}/examen/${ex.slug}`,
        });
      }
    });
  }

  elegir(preguntaId: string, opcion: number): void {
    this.respuestas.update((r) => ({ ...r, [preguntaId]: opcion }));
  }

  enviar(): void {
    const ex = this.datos();
    if (ex && this.todasRespondidas()) {
      this.resultado.set(corregir(ex, this.respuestas()));
    }
  }

  reiniciar(): void {
    this.respuestas.set({});
    this.resultado.set(null);
  }
}
