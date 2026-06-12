import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// El progreso vive solo en el navegador del visitante: no hay backend ni cuentas.
const CLAVE = 'docs:lecciones-completadas';

@Injectable({ providedIn: 'root' })
export class Progreso {
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly completadasSig = signal<ReadonlySet<string>>(this.cargar());
  readonly completadas = this.completadasSig.asReadonly();

  estaCompletada(slug: string): boolean {
    return this.completadasSig().has(slug);
  }

  alternar(slug: string): void {
    const proximo = new Set(this.completadasSig());
    if (proximo.has(slug)) {
      proximo.delete(slug);
    } else {
      proximo.add(slug);
    }
    this.completadasSig.set(proximo);
    this.persistir(proximo);
  }

  private cargar(): ReadonlySet<string> {
    if (!this.esNavegador) {
      return new Set();
    }
    try {
      const crudo = localStorage.getItem(CLAVE);
      return new Set(crudo ? (JSON.parse(crudo) as string[]) : []);
    } catch {
      return new Set();
    }
  }

  private persistir(valor: ReadonlySet<string>): void {
    try {
      localStorage.setItem(CLAVE, JSON.stringify([...valor]));
    } catch {
      // Modo privado o storage lleno: el progreso de la sesion sigue en memoria.
    }
  }
}
