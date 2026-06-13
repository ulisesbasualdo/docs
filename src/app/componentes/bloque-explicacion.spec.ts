import { TestBed } from '@angular/core/testing';
import { BloqueExplicacion, type TipoBloque } from './bloque-explicacion';

describe('BloqueExplicacion', () => {
  async function renderizar(tipo: TipoBloque, html: string) {
    const fixture = TestBed.createComponent(BloqueExplicacion);
    fixture.componentRef.setInput('tipo', tipo);
    fixture.componentRef.setInput('html', html);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it.each([
    ['tecnica', 'Técnico'],
    ['analogia', 'Analogía'],
    ['nota', 'Nota de elegancia'],
  ] as const)('renderiza el bloque %s con su etiqueta', async (tipo, etiqueta) => {
    const elemento = await renderizar(tipo, '<p>contenido</p>');

    expect(elemento.querySelector('.bloque')?.classList.contains(`bloque--${tipo}`)).toBe(true);
    expect(elemento.querySelector('.bloque__label')?.textContent).toBe(etiqueta);
    expect(elemento.querySelector('.bloque__cuerpo')?.innerHTML).toContain('<p>contenido</p>');
  });
});
