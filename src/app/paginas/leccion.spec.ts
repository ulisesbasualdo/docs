import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Subject, of } from 'rxjs';
import { LeccionPagina } from './leccion';
import { Contenido } from '../contenido/contenido';
import type { LeccionDoc } from '../contenido/esquema';

function crearLeccion(extra: Partial<LeccionDoc> = {}): LeccionDoc {
  return {
    slug: 'que-es-una-etiqueta',
    titulo: 'Que es una etiqueta HTML',
    tecnologia: 'html',
    categoria: 'Fundamentos',
    descripcion: 'La pieza basica.',
    youtubeId: '',
    publicadoEn: '2026-06-12',
    tags: [],
    nivel: 'introductorio',
    leccionesRelacionadas: [],
    modulo: 'fundamentos',
    introHtml: '',
    archivos: [
      {
        nombre: 'index.html',
        lenguaje: 'html',
        lineas: [{ id: '1', indent: 0, textoPlano: '<h1>Hola</h1>', html: '<span>hola</span>' }],
        explicaciones: [{ para: '1', tecnicaHtml: '<p>t</p>', analogiaHtml: '<p>a</p>' }],
      },
    ],
    ...extra,
  };
}

describe('LeccionPagina', () => {
  beforeEach(() => localStorage.clear());

  async function renderizar(leccion: LeccionDoc) {
    await TestBed.configureTestingModule({
      imports: [LeccionPagina],
      providers: [provideRouter([]), { provide: Contenido, useValue: { leccion: () => of(leccion) } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(LeccionPagina);
    fixture.componentRef.setInput('leccion', 'que-es-una-etiqueta');
    await fixture.whenStable();
    return fixture;
  }

  it('renderiza titulo, codigo y el enlace al track', async () => {
    const fixture = await renderizar(crearLeccion());
    const elemento = fixture.nativeElement as HTMLElement;

    expect(elemento.querySelector('h1')?.textContent).toBe('Que es una etiqueta HTML');
    expect(elemento.querySelector('.leccion-track')?.textContent).toContain('HTML');
    expect(elemento.querySelectorAll('.linea').length).toBe(1);
    expect(elemento.querySelector('.concepto-intro')).toBeNull();
    expect(elemento.querySelector('.concepto-rel')).toBeNull();
    expect(document.title).toContain('Que es una etiqueta HTML');
  });

  it('renderiza la intro, las relacionadas y los vecinos cuando existen', async () => {
    const fixture = await renderizar(
      crearLeccion({
        introHtml: '<p>Bienvenido a la leccion.</p>',
        leccionesRelacionadas: ['atributos'],
        anterior: { slug: 'previa', titulo: 'La previa', tecnologia: 'html' },
        siguiente: { slug: 'proxima', titulo: 'La proxima', tecnologia: 'html' },
      }),
    );
    const elemento = fixture.nativeElement as HTMLElement;

    expect(elemento.querySelector('.concepto-intro')?.textContent).toContain('Bienvenido');
    expect(elemento.querySelector('.concepto-rel a')?.textContent?.trim()).toBe('atributos');
    expect(elemento.querySelector('.leccion-nav__link')?.textContent).toContain('La previa');
    expect(elemento.querySelector('.leccion-nav__link--next')?.textContent).toContain('La proxima');
  });

  it('alterna la leccion como completada desde el boton', async () => {
    const fixture = await renderizar(crearLeccion());
    const boton = fixture.nativeElement.querySelector('.btn-completar') as HTMLButtonElement;

    expect(boton.textContent).toContain('Marcar como completada');
    boton.click();
    await fixture.whenStable();

    expect(boton.textContent).toContain('✓ Lección completada');
  });

  it('muestra el estado de carga mientras no llego la leccion', async () => {
    const pendiente = new Subject<LeccionDoc>();
    await TestBed.configureTestingModule({
      imports: [LeccionPagina],
      providers: [provideRouter([]), { provide: Contenido, useValue: { leccion: () => pendiente.asObservable() } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(LeccionPagina);
    fixture.componentRef.setInput('leccion', 'x');
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('Cargando lección');
  });
});
