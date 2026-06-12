import { RenderMode, ServerRoute } from '@angular/ssr';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

interface EntradaManifest {
  tecnologia: string;
  slug: string;
}

function leerJson<T>(archivo: string): T {
  return JSON.parse(readFileSync(join(process.cwd(), 'public', 'contenido', archivo), 'utf-8')) as T;
}

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  {
    path: ':track',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const tracks = leerJson<{ tecnologia: string }[]>('tracks.json');
      return tracks.map((t) => ({ track: t.tecnologia }));
    },
  },
  {
    path: ':track/:leccion',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const manifest = leerJson<EntradaManifest[]>('conceptos.json');
      return manifest.map((e) => ({ track: e.tecnologia, leccion: e.slug }));
    },
  },
  // Los examenes son interactivos puros: se renderizan en el cliente.
  { path: '**', renderMode: RenderMode.Client },
];
