import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigoConExplicaciones } from './codigo-con-explicaciones';
import type { ArchivoResaltado } from '../contenido/esquema';

function crearArchivo(nombre: string): ArchivoResaltado {
  return {
    nombre,
    lenguaje: 'html',
    lineas: [
      { id: '1', indent: 0, textoPlano: '<h1>Hola</h1>', html: '<span>&lt;h1&gt;Hola&lt;/h1&gt;</span>' },
      { id: '2', indent: 1, textoPlano: '<p>Texto</p>', html: '<span>&lt;p&gt;Texto&lt;/p&gt;</span>' },
    ],
    explicaciones: [
      { para: '1', tecnicaHtml: '<p>tecnica</p>', analogiaHtml: '<p>analogia</p>' },
      {
        para: '2',
        tecnicaHtml: '<p>tecnica 2</p>',
        analogiaHtml: '<p>analogia 2</p>',
        notaHtml: '<p>nota</p>',
        tabla: {
          columnas: [
            { id: 'a', etiqueta: 'A', variante: 'neutro' },
            { id: 'b', etiqueta: 'B', variante: 'acento' },
          ],
          filas: [{ aspecto: 'x', valores: { a: '1', b: '2' } }],
        },
      },
    ],
  };
}

type EscuchaCambio = (evento: { matches: boolean }) => void;

function simularMatchMedia(matches: boolean): { dispararCambio: (matches: boolean) => void } {
  let escucha: EscuchaCambio = () => {};
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches,
    media: query,
    addEventListener: (_tipo: string, fn: EscuchaCambio) => {
      escucha = fn;
    },
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }));
  return { dispararCambio: (m: boolean) => escucha({ matches: m }) };
}

describe('CodigoConExplicaciones', () => {
  afterEach(() => vi.unstubAllGlobals());

  async function renderizar(archivos: ArchivoResaltado[]): Promise<ComponentFixture<CodigoConExplicaciones>> {
    const fixture = TestBed.createComponent(CodigoConExplicaciones);
    fixture.componentRef.setInput('archivos', archivos);
    await fixture.whenStable();
    return fixture;
  }

  it('renderiza las lineas y las explicaciones del archivo', async () => {
    simularMatchMedia(true);
    const fixture = await renderizar([crearArchivo('index.html')]);
    const elemento = fixture.nativeElement as HTMLElement;

    expect(elemento.querySelectorAll('.linea').length).toBe(2);
    expect(elemento.querySelectorAll('.explicacion').length).toBe(2);
    expect(elemento.querySelector('.archivos-tabs')).toBeNull();
  });

  it('en desktop, pasar el cursor activa la explicacion de la linea', async () => {
    simularMatchMedia(true);
    const fixture = await renderizar([crearArchivo('index.html')]);
    const elemento = fixture.nativeElement as HTMLElement;

    elemento.querySelectorAll<HTMLButtonElement>('.linea')[0].dispatchEvent(new Event('pointerenter'));
    await fixture.whenStable();

    expect(elemento.querySelector('.linea')?.classList.contains('is-active')).toBe(true);
    expect(elemento.querySelector('#exp-0-1')?.classList.contains('is-active')).toBe(true);
    expect(elemento.querySelectorAll('.linea')[0].getAttribute('popovertarget')).toBeNull();
  });

  it('en mobile no activa el panel y usa popovertarget nativo', async () => {
    simularMatchMedia(false);
    const fixture = await renderizar([crearArchivo('index.html')]);
    const elemento = fixture.nativeElement as HTMLElement;

    elemento.querySelectorAll<HTMLButtonElement>('.linea')[0].dispatchEvent(new Event('pointerenter'));
    await fixture.whenStable();

    expect(elemento.querySelector('.linea.is-active')).toBeNull();
    expect(elemento.querySelectorAll('.linea')[0].getAttribute('popovertarget')).toBe('exp-0-1');
  });

  it('reacciona al cambio de tamanio de pantalla', async () => {
    const { dispararCambio } = simularMatchMedia(false);
    const fixture = await renderizar([crearArchivo('index.html')]);

    dispararCambio(true);
    await fixture.whenStable();

    const elemento = fixture.nativeElement as HTMLElement;
    expect(elemento.querySelectorAll('.linea')[0].getAttribute('popovertarget')).toBeNull();
  });

  it('con varios archivos muestra pestanias y cambiar de pestania resetea la linea activa', async () => {
    simularMatchMedia(true);
    const fixture = await renderizar([crearArchivo('index.html'), crearArchivo('estilos.css')]);
    const elemento = fixture.nativeElement as HTMLElement;

    expect(elemento.querySelectorAll('.archivo-tab').length).toBe(2);

    elemento.querySelectorAll<HTMLButtonElement>('.linea')[0].dispatchEvent(new Event('pointerenter'));
    await fixture.whenStable();
    elemento.querySelectorAll<HTMLButtonElement>('.archivo-tab')[1].click();
    await fixture.whenStable();

    expect(fixture.componentInstance.archivoActivoIdx()).toBe(1);
    expect(elemento.querySelector('.linea.is-active')).toBeNull();
  });

  it('muestra el texto plano de la linea en el encabezado del popover', async () => {
    simularMatchMedia(true);
    const fixture = await renderizar([crearArchivo('index.html')]);
    const elemento = fixture.nativeElement as HTMLElement;

    expect(elemento.querySelector('#exp-0-1 .explicacion__codigo')?.textContent?.trim()).toBe('<h1>Hola</h1>');
  });

  it('devuelve texto vacio para lineas o archivos inexistentes', async () => {
    simularMatchMedia(true);
    const fixture = await renderizar([crearArchivo('index.html')]);

    expect(fixture.componentInstance.textoLinea(0, '99')).toBe('');
    expect(fixture.componentInstance.textoLinea(5, '1')).toBe('');
  });

  it('el foco de teclado tambien activa la explicacion en desktop', async () => {
    simularMatchMedia(true);
    const fixture = await renderizar([crearArchivo('index.html')]);
    const elemento = fixture.nativeElement as HTMLElement;

    elemento.querySelectorAll<HTMLButtonElement>('.linea')[1].dispatchEvent(new Event('focus'));
    await fixture.whenStable();

    expect(elemento.querySelector('#exp-0-2')?.classList.contains('is-active')).toBe(true);
  });
});
