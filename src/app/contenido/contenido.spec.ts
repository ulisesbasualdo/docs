import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Contenido } from './contenido';

describe('Contenido', () => {
  let servicio: Contenido;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    servicio = TestBed.inject(Contenido);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('pide los tracks una sola vez y comparte el resultado', () => {
    servicio.tracks().subscribe();
    servicio.tracks().subscribe();

    const req = http.expectOne('contenido/tracks.json');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('pide el manifest a contenido/conceptos.json', () => {
    servicio.manifest().subscribe();

    http.expectOne('contenido/conceptos.json').flush([]);
  });

  it('pide un track por tecnologia', () => {
    servicio.track('html').subscribe();

    http.expectOne('contenido/track-html.json').flush({});
  });

  it('pide una leccion por slug', () => {
    servicio.leccion('que-es-una-etiqueta').subscribe();

    http.expectOne('contenido/que-es-una-etiqueta.json').flush({});
  });

  it('pide un examen por slug', () => {
    servicio.examen('html-fundamentos').subscribe();

    http.expectOne('contenido/examenes/html-fundamentos.json').flush({});
  });
});
