import { TestBed } from '@angular/core/testing';
import { Seo, URL_SITIO } from './seo';

describe('Seo', () => {
  let servicio: Seo;

  beforeEach(() => {
    document.querySelector('link[rel="canonical"]')?.remove();
    servicio = TestBed.inject(Seo);
  });

  it('aplica titulo, description y canonical', () => {
    servicio.aplicar({ titulo: 'Mi titulo', descripcion: 'Mi descripcion', rutaCanonica: '/html' });

    expect(document.title).toBe('Mi titulo');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('Mi descripcion');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(`${URL_SITIO}/html`);
  });

  it('reutiliza el link canonical existente en vez de duplicarlo', () => {
    servicio.aplicar({ titulo: 'Uno', descripcion: 'd', rutaCanonica: '/html' });
    servicio.aplicar({ titulo: 'Dos', descripcion: 'd', rutaCanonica: '/css' });

    const canonicos = document.querySelectorAll('link[rel="canonical"]');
    expect(canonicos.length).toBe(1);
    expect(canonicos[0].getAttribute('href')).toBe(`${URL_SITIO}/css`);
  });
});
