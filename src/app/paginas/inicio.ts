import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Contenido } from '../contenido/contenido';
import { Seo } from '../seo';

@Component({
  selector: 'docs-inicio',
  imports: [UpperCasePipe, RouterLink],
  template: `
    <header class="concepto-head">
      <h1>Aprende a programar, línea por línea</h1>
      <h2>Cursos interactivos y gratuitos, con ejemplos reales y explicaciones que no saltean nada.</h2>
      <h3>Elegí una tecnología para empezar</h3>
    </header>

    <ul class="lista-conceptos">
      @for (track of tracks(); track track.tecnologia) {
        <li>
          <a class="card-concepto" [routerLink]="['/', track.tecnologia]">
            <span class="card-concepto__cat">Curso</span>
            <span class="card-concepto__titulo">{{ track.tecnologia | uppercase }}</span>
            <p class="card-concepto__desc">{{ track.descripcion }}</p>
            <p class="card-concepto__pie">
              {{ track.lecciones }} {{ track.lecciones === 1 ? 'lección' : 'lecciones' }}
            </p>
          </a>
        </li>
      } @empty {
        <li class="lista-conceptos__vacio">Todavía no hay cursos publicados.</li>
      }
    </ul>
  `,
})
export class Inicio {
  private readonly contenido = inject(Contenido);
  private readonly seo = inject(Seo);

  protected readonly tracks = toSignal(this.contenido.tracks(), { initialValue: [] });

  constructor() {
    this.seo.aplicar({
      titulo: 'Docs — Aprende a programar línea por línea — Ulises Basualdo',
      descripcion:
        'Cursos interactivos y gratuitos de HTML, CSS y JavaScript explicados línea por línea, con analogías de la vida real y exámenes por módulo.',
      rutaCanonica: '/',
    });
  }
}
