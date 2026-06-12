import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import type { Examen, LeccionDoc, LeccionResumen, TrackDoc, TrackResumen } from './esquema';

const BASE = 'contenido';

@Injectable({ providedIn: 'root' })
export class Contenido {
  private readonly http = inject(HttpClient);

  private readonly tracks$ = this.http
    .get<TrackResumen[]>(`${BASE}/tracks.json`)
    .pipe(shareReplay({ bufferSize: 1, refCount: false }));

  private readonly manifest$ = this.http
    .get<LeccionResumen[]>(`${BASE}/conceptos.json`)
    .pipe(shareReplay({ bufferSize: 1, refCount: false }));

  tracks(): Observable<TrackResumen[]> {
    return this.tracks$;
  }

  manifest(): Observable<LeccionResumen[]> {
    return this.manifest$;
  }

  track(tecnologia: string): Observable<TrackDoc> {
    return this.http.get<TrackDoc>(`${BASE}/track-${tecnologia}.json`);
  }

  leccion(slug: string): Observable<LeccionDoc> {
    return this.http.get<LeccionDoc>(`${BASE}/${slug}.json`);
  }

  examen(slug: string): Observable<Examen> {
    return this.http.get<Examen>(`${BASE}/examenes/${slug}.json`);
  }
}
