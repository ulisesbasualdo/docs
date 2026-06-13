import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { Inicio } from './inicio';
import { Contenido } from '../contenido/contenido';
import type { TrackResumen } from '../contenido/esquema';

function crearTracks(): TrackResumen[] {
  return [
    { tecnologia: 'html', titulo: 'HTML de cero a experto', descripcion: 'Curso de HTML.', lecciones: 4 },
    { tecnologia: 'css', titulo: 'CSS de cero a experto', descripcion: 'Curso de CSS.', lecciones: 1 },
  ];
}

describe('Inicio', () => {
  async function renderizar(tracks: TrackResumen[]) {
    await TestBed.configureTestingModule({
      imports: [Inicio],
      providers: [provideRouter([]), { provide: Contenido, useValue: { tracks: () => of(tracks) } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(Inicio);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('renderiza una tarjeta por track con su pluralizacion', async () => {
    const elemento = await renderizar(crearTracks());

    const tarjetas = [...elemento.querySelectorAll('.card-concepto')];
    expect(tarjetas.length).toBe(2);
    expect(tarjetas[0].textContent).toContain('HTML');
    expect(tarjetas[0].textContent).toContain('4 lecciones');
    expect(tarjetas[1].textContent).toContain('1 lección');
    expect(document.title).toContain('Aprende a programar');
  });

  it('muestra el estado vacio cuando no hay cursos', async () => {
    const elemento = await renderizar([]);

    expect(elemento.querySelector('.lista-conceptos__vacio')?.textContent).toContain('Todavía no hay cursos');
  });
});
