import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

interface EnlaceContacto {
  etiqueta: string;
  url: string;
}

const CONTACTO: EnlaceContacto[] = [
  { etiqueta: 'WhatsApp', url: 'https://wa.me/5492291407553' },
  { etiqueta: 'Email', url: 'mailto:ulimiramar@gmail.com' },
  { etiqueta: 'Web', url: 'https://ulisesbasualdo.com' },
  { etiqueta: 'LinkedIn', url: 'https://www.linkedin.com/in/ulisesbasualdo/' },
  { etiqueta: 'Facebook', url: 'https://www.facebook.com/ulibasualdo7' },
  { etiqueta: 'TikTok', url: 'https://www.tiktok.com/@ulibasualdo' },
  { etiqueta: 'YouTube', url: 'https://www.youtube.com/@ulibasualdo' },
];

@Component({
  selector: 'docs-marco',
  imports: [RouterOutlet, RouterLink],
  encapsulation: ViewEncapsulation.None,
  styleUrl: './marco.scss',
  template: `
    <div class="docs">
      <header class="docs-cabecera">
        <a routerLink="/" class="docs-cabecera__marca">Docs <span>por Ulises Basualdo</span></a>
      </header>
      <router-outlet />
      <footer class="docs-footer">
        <p>Documentacion linea por linea, gratuita y de codigo abierto.</p>
        <nav class="docs-footer__contacto" aria-label="Contacto con el desarrollador">
          @for (enlace of contacto; track enlace.url) {
            <a [href]="enlace.url" target="_blank" rel="noopener">{{ enlace.etiqueta }}</a>
          }
        </nav>
      </footer>
    </div>
  `,
})
export class Marco {
  protected readonly contacto = CONTACTO;
}
