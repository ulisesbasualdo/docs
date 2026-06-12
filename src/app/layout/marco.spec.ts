import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Marco } from './marco';

describe('Marco', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marco],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renderiza la marca y todos los enlaces de contacto', async () => {
    const fixture = TestBed.createComponent(Marco);
    await fixture.whenStable();
    const elemento = fixture.nativeElement as HTMLElement;

    expect(elemento.querySelector('.docs-cabecera__marca')?.textContent).toContain('Docs');

    const enlaces = [...elemento.querySelectorAll<HTMLAnchorElement>('.docs-footer__contacto a')];
    const urls = enlaces.map((a) => a.href);
    expect(enlaces.length).toBe(7);
    expect(urls).toContain('https://wa.me/5492291407553');
    expect(urls).toContain('mailto:ulimiramar@gmail.com');
    expect(urls).toContain('https://ulisesbasualdo.com/');
    expect(urls).toContain('https://www.linkedin.com/in/ulisesbasualdo/');
    expect(urls).toContain('https://www.facebook.com/ulibasualdo7');
    expect(urls).toContain('https://www.tiktok.com/@ulibasualdo');
    expect(urls).toContain('https://www.youtube.com/@ulibasualdo');
    expect(enlaces.every((a) => a.rel === 'noopener')).toBe(true);
  });
});
