import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Progreso } from './progreso';

describe('Progreso', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  function crear(plataforma: 'browser' | 'server' = 'browser'): Progreso {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: plataforma }],
    });
    return TestBed.inject(Progreso);
  }

  it('arranca vacio y marca una leccion como completada', () => {
    const progreso = crear();

    progreso.alternar('variables');

    expect(progreso.estaCompletada('variables')).toBe(true);
    expect(JSON.parse(localStorage.getItem('docs:lecciones-completadas')!)).toEqual(['variables']);
  });

  it('al alternar dos veces vuelve a no completada', () => {
    const progreso = crear();

    progreso.alternar('variables');
    progreso.alternar('variables');

    expect(progreso.estaCompletada('variables')).toBe(false);
    expect(progreso.completadas().size).toBe(0);
  });

  it('carga el progreso previo desde localStorage', () => {
    localStorage.setItem('docs:lecciones-completadas', JSON.stringify(['condicionales']));

    const progreso = crear();

    expect(progreso.estaCompletada('condicionales')).toBe(true);
  });

  it('ignora un localStorage corrupto sin romper', () => {
    localStorage.setItem('docs:lecciones-completadas', 'esto-no-es-json{');

    const progreso = crear();

    expect(progreso.completadas().size).toBe(0);
  });

  it('en el servidor arranca vacio sin tocar localStorage', () => {
    localStorage.setItem('docs:lecciones-completadas', JSON.stringify(['variables']));

    const progreso = crear('server');

    expect(progreso.estaCompletada('variables')).toBe(false);
  });

  it('sigue funcionando en memoria si persistir falla', () => {
    const progreso = crear();
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('storage lleno');
    });

    progreso.alternar('variables');

    expect(progreso.estaCompletada('variables')).toBe(true);
  });
});
