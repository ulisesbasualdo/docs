import { Component, effect, inject, input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CodigoConExplicaciones } from '../componentes/codigo-con-explicaciones';
import { SafeHtmlPipe } from '../componentes/safe-html-pipe';
import { Contenido } from '../contenido/contenido';
import { Progreso } from '../contenido/progreso';
import { Seo } from '../seo';

@Component({
  selector: 'docs-leccion',
  imports: [UpperCasePipe, RouterLink, CodigoConExplicaciones, SafeHtmlPipe],
  template: `
    @if (datos(); as c) {
      <header class="concepto-head">
        <a class="leccion-track" [routerLink]="['/', c.tecnologia]">← {{ c.tecnologia | uppercase }}</a>
        <h1>{{ c.titulo }}</h1>
      </header>

      @if (c.introHtml) {
        <div class="concepto-intro" [innerHTML]="c.introHtml | safeHtml"></div>
      }

      <docs-codigo-con-explicaciones [archivos]="c.archivos" />

      @if (c.leccionesRelacionadas.length) {
        <nav class="concepto-rel" aria-label="Lecciones relacionadas">
          <h4>Lecciones relacionadas</h4>
          <ul>
            @for (rel of c.leccionesRelacionadas; track rel) {
              <li>
                <a [routerLink]="['/', c.tecnologia, rel]">{{ rel }}</a>
              </li>
            }
          </ul>
        </nav>
      }

      <div class="leccion-nav">
        <button
          type="button"
          class="btn-completar"
          [class.is-done]="progreso.estaCompletada(c.slug)"
          (click)="progreso.alternar(c.slug)"
        >
          {{ progreso.estaCompletada(c.slug) ? '✓ Leccion completada' : 'Marcar como completada' }}
        </button>
        <div class="leccion-nav__links">
          @if (c.anterior) {
            <a class="leccion-nav__link" [routerLink]="['/', c.anterior.tecnologia, c.anterior.slug]">
              ← {{ c.anterior.titulo }}
            </a>
          }
          @if (c.siguiente) {
            <a
              class="leccion-nav__link leccion-nav__link--next"
              [routerLink]="['/', c.siguiente.tecnologia, c.siguiente.slug]"
            >
              {{ c.siguiente.titulo }} →
            </a>
          }
        </div>
      </div>
    } @else {
      <p class="concepto-intro">Cargando leccion...</p>
    }
  `,
})
export class LeccionPagina {
  readonly leccion = input.required<string>();

  private readonly contenido = inject(Contenido);
  protected readonly progreso = inject(Progreso);
  private readonly seo = inject(Seo);

  protected readonly datos = toSignal(
    toObservable(this.leccion).pipe(switchMap((slug) => this.contenido.leccion(slug))),
    { initialValue: null },
  );

  constructor() {
    effect(() => {
      const c = this.datos();
      if (c) {
        this.seo.aplicar({
          titulo: `${c.titulo} — Docs — Ulises Basualdo`,
          descripcion: c.descripcion,
          rutaCanonica: `/${c.tecnologia}/${c.slug}`,
        });
      }
    });
  }
}
