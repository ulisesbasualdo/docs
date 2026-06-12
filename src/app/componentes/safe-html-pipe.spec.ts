import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html-pipe';

describe('SafeHtmlPipe', () => {
  function crear(): { pipe: SafeHtmlPipe; sanitizer: DomSanitizer } {
    const pipe = TestBed.runInInjectionContext(() => new SafeHtmlPipe());
    return { pipe, sanitizer: TestBed.inject(DomSanitizer) };
  }

  it('marca el HTML como confiable', () => {
    const { pipe, sanitizer } = crear();

    const resultado = pipe.transform('<strong>hola</strong>');

    expect(sanitizer.sanitize(1, resultado)).toBe('<strong>hola</strong>');
  });

  it('convierte null y undefined en string vacio', () => {
    const { pipe, sanitizer } = crear();

    expect(sanitizer.sanitize(1, pipe.transform(null))).toBe('');
    expect(sanitizer.sanitize(1, pipe.transform(undefined))).toBe('');
  });
});
