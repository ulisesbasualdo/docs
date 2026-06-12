import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface MetadatosSeo {
  titulo: string;
  descripcion: string;
  rutaCanonica: string;
}

export const URL_SITIO = 'https://ulisesbasualdo.github.io/docs';

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly documento = inject(DOCUMENT);

  aplicar({ titulo, descripcion, rutaCanonica }: MetadatosSeo): void {
    this.title.setTitle(titulo);
    this.meta.updateTag({ name: 'description', content: descripcion });
    this.meta.updateTag({ property: 'og:title', content: titulo });
    this.meta.updateTag({ property: 'og:description', content: descripcion });

    const url = `${URL_SITIO}${rutaCanonica}`;
    this.meta.updateTag({ property: 'og:url', content: url });
    this.canonico(url);
  }

  private canonico(url: string): void {
    let enlace = this.documento.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!enlace) {
      enlace = this.documento.createElement('link');
      enlace.setAttribute('rel', 'canonical');
      this.documento.head.appendChild(enlace);
    }
    enlace.setAttribute('href', url);
  }
}
