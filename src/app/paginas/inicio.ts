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
      <h1>Aprende a programar, linea por linea</h1>
      <h2>Cursos interactivos y gratuitos, con ejemplos reales y explicaciones que no saltean nada.</h2>
      <h3>Elegi una tecnologia para empezar</h3>
    </header>

    <ul class="lista-conceptos">
      @for (track of tracks(); track track.tecnologia) {
        <li>
          <a class="card-concepto" [routerLink]="['/', track.tecnologia]">
            <span class="card-concepto__cat">Curso</span>
            <span class="card-concepto__titulo">{{ track.tecnologia | uppercase }}</span>
            <p class="card-concepto__desc">{{ track.descripcion }}</p>
            <p class="card-concepto__pie">
              {{ track.lecciones }} {{ track.lecciones === 1 ? 'leccion' : 'lecciones' }}
            </p>
          </a>
        </li>
      } @empty {
        <li class="lista-conceptos__vacio">Todavia no hay cursos publicados.</li>
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
      titulo: 'Docs — Aprende a programar linea por linea — Ulises Basualdo',
      descripcion:
        'Cursos interactivos y gratuitos de HTML, CSS y JavaScript explicados linea por linea, con analogias de la vida real y examenes por modulo.',
      rutaCanonica: '/',
    });
  }
}
