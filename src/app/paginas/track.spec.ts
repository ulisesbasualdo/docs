import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Subject, of } from 'rxjs';
import { TrackPagina } from './track';
import { Contenido } from '../contenido/contenido';
import { Progreso } from '../contenido/progreso';
import type { TrackDoc } from '../contenido/esquema';

function crearTrack(): TrackDoc {
  return {
    tecnologia: 'html',
    titulo: 'HTML de cero a experto',
    descripcion: 'Curso completo de HTML.',
    modulos: [
      {
        slug: 'fundamentos',
        titulo: 'Fundamentos',
        quiz: 'html-fundamentos',
        lecciones: [
          {
            slug: 'que-es-una-etiqueta',
            tecnologia: 'html',
            titulo: 'Que es una etiqueta HTML',
            categoria: 'Fundamentos',
            descripcion: 'd',
            nivel: 'introductorio',
            tags: [],
            publicadoEn: '2026-06-12',
            modulo: 'fundamentos',
            orden: 1,
          },
        ],
      },
      { slug: 'texto', titulo: 'Texto', lecciones: [] },
    ],
  };
}

describe('TrackPagina', () => {
  async function renderizar(track: TrackDoc) {
    await TestBed.configureTestingModule({
      imports: [TrackPagina],
      providers: [provideRouter([]), { provide: Contenido, useValue: { track: () => of(track) } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(TrackPagina);
    fixture.componentRef.setInput('track', 'html');
    await fixture.whenStable();
    return fixture;
  }

  it('renderiza modulos, lecciones y el enlace al examen', async () => {
    const fixture = await renderizar(crearTrack());
    const elemento = fixture.nativeElement as HTMLElement;

    expect(elemento.querySelector('h1')?.textContent).toBe('HTML de cero a experto');
    expect(elemento.querySelectorAll('.modulo').length).toBe(2);
    expect(elemento.querySelector('.leccion-fila__titulo')?.textContent).toContain('Que es una etiqueta');
    expect(elemento.querySelector('.leccion-fila--examen')?.textContent).toContain('Evaluacion del modulo');
    expect(elemento.querySelector('.badge-acceso--nivel')?.textContent?.trim()).toBe('introductorio');
    expect(document.title).toContain('HTML de cero a experto');
  });

  it('marca el check de una leccion completada', async () => {
    const fixture = await renderizar(crearTrack());
    TestBed.inject(Progreso).alternar('que-es-una-etiqueta');
    await fixture.whenStable();

    const check = fixture.nativeElement.querySelector('.leccion-fila__check');
    expect(check?.classList.contains('is-done')).toBe(true);
    expect(check?.textContent?.trim()).toBe('✓');
  });

  it('muestra el estado de carga mientras no llego el track', async () => {
    const pendiente = new Subject<TrackDoc>();
    await TestBed.configureTestingModule({
      imports: [TrackPagina],
      providers: [provideRouter([]), { provide: Contenido, useValue: { track: () => pendiente.asObservable() } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(TrackPagina);
    fixture.componentRef.setInput('track', 'html');
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('Cargando curso');
  });
});
