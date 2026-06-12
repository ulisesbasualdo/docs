import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/marco').then((m) => m.Marco),
    children: [
      {
        path: '',
        loadComponent: () => import('./paginas/inicio').then((m) => m.Inicio),
      },
      {
        path: ':track/examen/:slug',
        loadComponent: () => import('./paginas/examen').then((m) => m.ExamenPagina),
      },
      {
        path: ':track/:leccion',
        loadComponent: () => import('./paginas/leccion').then((m) => m.LeccionPagina),
      },
      {
        path: ':track',
        loadComponent: () => import('./paginas/track').then((m) => m.TrackPagina),
      },
    ],
  },
];
