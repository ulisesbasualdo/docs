import { TestBed } from '@angular/core/testing';
import { TablaComparacion } from './tabla-comparacion';
import type { Tabla } from '../contenido/esquema';

function crearTabla(titulo?: string): Tabla {
  return {
    titulo,
    columnas: [
      { id: 'a', etiqueta: 'Opcion A', variante: 'promesa' },
      { id: 'b', etiqueta: 'Opcion B', variante: 'observable' },
    ],
    filas: [{ aspecto: 'Velocidad', valores: { a: 'Lenta', b: 'Rapida' } }],
  };
}

describe('TablaComparacion', () => {
  async function renderizar(tabla: Tabla) {
    const fixture = TestBed.createComponent(TablaComparacion);
    fixture.componentRef.setInput('tabla', tabla);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('renderiza filas, badges y valores por columna', async () => {
    const elemento = await renderizar(crearTabla('Comparativa'));

    expect(elemento.querySelector('.comparacion')?.getAttribute('aria-label')).toBe('Comparativa');
    expect(elemento.querySelectorAll('.comparacion__fila').length).toBe(1);
    expect(elemento.querySelector('.badge--promesa')?.textContent?.trim()).toBe('Opcion A');
    expect(elemento.textContent).toContain('Rapida');
  });

  it('usa una aria-label por defecto cuando no hay titulo', async () => {
    const elemento = await renderizar(crearTabla());

    expect(elemento.querySelector('.comparacion')?.getAttribute('aria-label')).toBe('Tabla comparativa');
  });
});
