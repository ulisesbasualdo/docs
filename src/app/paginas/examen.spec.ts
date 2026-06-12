import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Subject, of } from 'rxjs';
import { ExamenPagina, corregir } from './examen';
import { Contenido } from '../contenido/contenido';
import type { Examen } from '../contenido/esquema';

function crearExamen(): Examen {
  return {
    slug: 'html-fundamentos',
    titulo: 'Examen de fundamentos',
    track: 'html',
    modulo: 'fundamentos',
    aprobacion: 70,
    preguntas: [
      { id: 'q1', texto: 'Pregunta uno', opciones: ['a', 'b'], correcta: 0, explicacion: 'Era la a.' },
      { id: 'q2', texto: 'Pregunta dos', opciones: ['c', 'd'], correcta: 1, explicacion: 'Era la d.' },
    ],
  };
}

describe('corregir', () => {
  it('calcula puntaje, porcentaje y aprobacion', () => {
    const resultado = corregir(crearExamen(), { q1: 0, q2: 1 });

    expect(resultado).toEqual({ puntaje: 2, total: 2, porcentaje: 100, aprobado: true });
  });

  it('desaprueba por debajo del umbral', () => {
    const resultado = corregir(crearExamen(), { q1: 0, q2: 0 });

    expect(resultado).toEqual({ puntaje: 1, total: 2, porcentaje: 50, aprobado: false });
  });
});

describe('ExamenPagina', () => {
  async function renderizar(examen: Examen) {
    await TestBed.configureTestingModule({
      imports: [ExamenPagina],
      providers: [provideRouter([]), { provide: Contenido, useValue: { examen: () => of(examen) } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ExamenPagina);
    fixture.componentRef.setInput('track', 'html');
    fixture.componentRef.setInput('slug', 'html-fundamentos');
    await fixture.whenStable();
    return fixture;
  }

  function elegirOpcion(fixture: { nativeElement: HTMLElement }, pregunta: number, opcion: number): void {
    const fieldset = fixture.nativeElement.querySelectorAll('.examen-pregunta')[pregunta];
    fieldset.querySelectorAll<HTMLInputElement>('input[type="radio"]')[opcion].dispatchEvent(new Event('change'));
  }

  it('renderiza las preguntas y deshabilita corregir hasta responder todo', async () => {
    const fixture = await renderizar(crearExamen());
    const elemento = fixture.nativeElement as HTMLElement;
    const boton = elemento.querySelector('.btn-completar') as HTMLButtonElement;

    expect(elemento.querySelectorAll('.examen-pregunta').length).toBe(2);
    expect(boton.disabled).toBe(true);
    expect(elemento.querySelector('.examen-pendientes')?.textContent).toContain('2 pregunta(s)');
    expect(document.title).toContain('Examen de fundamentos');
  });

  it('corrige, muestra el resultado aprobado y las marcas por opcion', async () => {
    const fixture = await renderizar(crearExamen());
    const elemento = fixture.nativeElement as HTMLElement;

    elegirOpcion(fixture, 0, 0);
    elegirOpcion(fixture, 1, 1);
    await fixture.whenStable();
    (elemento.querySelector('.btn-completar') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(elemento.querySelector('.examen-resultado')?.classList.contains('is-aprobado')).toBe(true);
    expect(elemento.textContent).toContain('Respondiste bien 2 de 2 (100%)');
    expect(elemento.querySelectorAll('.examen-opcion.is-correcta').length).toBe(2);
    expect(elemento.textContent).toContain('Correcto.');
  });

  it('al desaprobar muestra la explicacion de las incorrectas y permite reintentar', async () => {
    const fixture = await renderizar(crearExamen());
    const elemento = fixture.nativeElement as HTMLElement;

    elegirOpcion(fixture, 0, 1);
    elegirOpcion(fixture, 1, 0);
    await fixture.whenStable();
    (elemento.querySelector('.btn-completar') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(elemento.textContent).toContain('Todavia no');
    expect(elemento.textContent).toContain('Era la a.');
    expect(elemento.querySelectorAll('.examen-opcion.is-incorrecta').length).toBe(2);

    (elemento.querySelector('.examen-resultado .btn-completar') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(elemento.querySelector('.examen-resultado')).toBeNull();
    expect((elemento.querySelector('.btn-completar') as HTMLButtonElement).disabled).toBe(true);
  });

  it('ignora enviar mientras falten respuestas', async () => {
    const fixture = await renderizar(crearExamen());

    fixture.componentInstance.enviar();
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('.examen-resultado')).toBeNull();
  });

  it('muestra el estado de carga mientras no llego el examen', async () => {
    const pendiente = new Subject<Examen>();
    await TestBed.configureTestingModule({
      imports: [ExamenPagina],
      providers: [provideRouter([]), { provide: Contenido, useValue: { examen: () => pendiente.asObservable() } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ExamenPagina);
    fixture.componentRef.setInput('track', 'html');
    fixture.componentRef.setInput('slug', 'x');
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toContain('Cargando examen');
    expect(fixture.componentInstance.pendientes()).toBe(0);
    expect(fixture.componentInstance.enviar()).toBeUndefined();
  });
});
