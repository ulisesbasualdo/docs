import { Component, input } from '@angular/core';
import type { Tabla } from '../contenido/esquema';

@Component({
  selector: 'docs-tabla-comparacion',
  template: `
    @let t = tabla();
    <dl class="comparacion" [attr.aria-label]="t.titulo ?? 'Tabla comparativa'">
      @for (fila of t.filas; track fila.aspecto) {
        <div class="comparacion__fila">
          <dt>{{ fila.aspecto }}</dt>
          @for (col of t.columnas; track col.id) {
            <dd>
              <span class="badge" [class]="'badge--' + col.variante">{{ col.etiqueta }}</span>
              {{ fila.valores[col.id] }}
            </dd>
          }
        </div>
      }
    </dl>
  `,
})
export class TablaComparacion {
  readonly tabla = input.required<Tabla>();
}
