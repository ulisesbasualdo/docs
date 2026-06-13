import { Component, input } from '@angular/core';
import { SafeHtmlPipe } from './safe-html-pipe';

export type TipoBloque = 'tecnica' | 'analogia' | 'nota';

const ETIQUETAS: Record<TipoBloque, string> = {
  tecnica: 'Técnico',
  analogia: 'Analogía',
  nota: 'Nota de elegancia',
};

@Component({
  selector: 'docs-bloque-explicacion',
  imports: [SafeHtmlPipe],
  template: `
    <section class="bloque" [class]="'bloque--' + tipo()">
      <h4 class="bloque__label">{{ etiqueta() }}</h4>
      <div class="bloque__cuerpo" [innerHTML]="html() | safeHtml"></div>
    </section>
  `,
})
export class BloqueExplicacion {
  readonly tipo = input.required<TipoBloque>();
  readonly html = input.required<string>();

  etiqueta(): string {
    return ETIQUETAS[this.tipo()];
  }
}
