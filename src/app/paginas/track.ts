import { Component, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { Contenido } from '../contenido/contenido';
import { Progreso } from '../contenido/progreso';
import { Seo } from '../seo';

@Component({
  selector: 'docs-track',
  imports: [RouterLink],
  template: `
    @if (datos(); as t) {
      <header class="concepto-head">
        <h1>{{ t.titulo }}</h1>
        <p class="concepto-intro">{{ t.descripcion }}</p>
      </header>

      @for (modulo of t.modulos; track modulo.slug; let m = $index) {
        <section class="modulo">
          <h2 class="modulo__titulo">
            <span class="modulo__num">{{ m + 1 }}</span> {{ modulo.titulo }}
          </h2>
          <ol class="lista-lecciones">
            @for (leccion of modulo.lecciones; track leccion.slug) {
              <li>
                <a class="leccion-fila" [routerLink]="['/', leccion.tecnologia, leccion.slug]">
                  <span
                    class="leccion-fila__check"
                    [class.is-done]="progreso.estaCompletada(leccion.slug)"
                    aria-hidden="true"
                  >
                    {{ progreso.estaCompletada(leccion.slug) ? '✓' : '' }}
                  </span>
                  <span class="leccion-fila__titulo">{{ leccion.titulo }}</span>
                  <span class="badge-acceso badge-acceso--nivel">{{ leccion.nivel }}</span>
                </a>
              </li>
            }
            @if (modulo.quiz) {
              <li>
                <a class="leccion-fila leccion-fila--examen" [routerLink]="['/', t.tecnologia, 'examen', modulo.quiz]">
                  <span class="leccion-fila__check" aria-hidden="true">?</span>
                  <span class="leccion-fila__titulo">Evaluación del módulo</span>
                  <span class="badge-acceso badge-acceso--examen">Examen</span>
                </a>
              </li>
            }
          </ol>
        </section>
      }
    } @else {
      <p class="concepto-intro">Cargando curso...</p>
    }
  `,
})
export class TrackPagina {
  readonly track = input.required<string>();

  private readonly contenido = inject(Contenido);
  protected readonly progreso = inject(Progreso);
  private readonly seo = inject(Seo);

  protected readonly datos = toSignal(
    toObservable(this.track).pipe(switchMap((t) => this.contenido.track(t))),
    { initialValue: null },
  );

  constructor() {
    effect(() => {
      const t = this.datos();
      if (t) {
        this.seo.aplicar({
          titulo: `${t.titulo} — Docs — Ulises Basualdo`,
          descripcion: t.descripcion,
          rutaCanonica: `/${t.tecnologia}`,
        });
      }
    });
  }
}
