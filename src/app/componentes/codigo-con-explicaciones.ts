import { Component, afterNextRender, computed, input, signal } from '@angular/core';
import { BloqueExplicacion } from './bloque-explicacion';
import { TablaComparacion } from './tabla-comparacion';
import { SafeHtmlPipe } from './safe-html-pipe';
import type { ArchivoResaltado } from '../contenido/esquema';

@Component({
  selector: 'docs-codigo-con-explicaciones',
  imports: [BloqueExplicacion, TablaComparacion, SafeHtmlPipe],
  template: `
    @let lista = archivos();

    @if (lista.length > 1) {
      <div class="archivos-tabs" role="tablist" aria-label="Archivos del ejemplo">
        @for (a of lista; track a.nombre; let i = $index) {
          <button
            class="archivo-tab"
            role="tab"
            type="button"
            [class.is-active]="i === archivoActivoIdx()"
            [attr.aria-selected]="i === archivoActivoIdx()"
            (click)="seleccionarArchivo(i)"
          >
            {{ a.nombre }}
          </button>
        }
      </div>
    }

    <p class="hint hint--mobile">Toca cualquier linea de codigo para leer la explicacion.</p>
    <p class="hint hint--desktop">Pasa el cursor sobre una linea de codigo para leer su explicacion a la derecha.</p>

    @for (archivo of lista; track archivo.nombre; let i = $index) {
      <div class="archivo" [hidden]="i !== archivoActivoIdx()">
        <div class="layout">
          <div class="codigo" role="group" [attr.aria-label]="'Codigo de ' + archivo.nombre">
            @for (linea of archivo.lineas; track linea.id) {
              <button
                class="linea"
                [class]="'linea--indent-' + linea.indent"
                [class.is-active]="esLineaActiva(i, linea.id)"
                [attr.popovertarget]="esDesktop() ? null : 'exp-' + i + '-' + linea.id"
                type="button"
                (pointerenter)="activar(i, linea.id)"
                (focus)="activar(i, linea.id)"
                [innerHTML]="linea.html | safeHtml"
              ></button>
            }
          </div>

          <aside class="panel" aria-label="Explicaciones">
            <div class="panel__placeholder">
              <p>Pasa el cursor sobre una linea de codigo para leer su explicacion.</p>
            </div>

            @for (exp of archivo.explicaciones; track exp.para) {
              <div
                class="explicacion"
                [id]="'exp-' + i + '-' + exp.para"
                popover
                [class.is-active]="esLineaActiva(i, exp.para)"
              >
                <header class="explicacion__head">
                  <code class="explicacion__codigo">{{ textoLinea(i, exp.para) }}</code>
                  <button
                    class="explicacion__close"
                    [attr.popovertarget]="'exp-' + i + '-' + exp.para"
                    popovertargetaction="hide"
                    type="button"
                    aria-label="Cerrar"
                  >
                    x
                  </button>
                </header>
                <div class="explicacion__cuerpo">
                  <docs-bloque-explicacion tipo="tecnica" [html]="exp.tecnicaHtml" />
                  @if (exp.tabla) {
                    <docs-tabla-comparacion [tabla]="exp.tabla" />
                  }
                  <docs-bloque-explicacion tipo="analogia" [html]="exp.analogiaHtml" />
                  @if (exp.notaHtml) {
                    <docs-bloque-explicacion tipo="nota" [html]="exp.notaHtml" />
                  }
                </div>
              </div>
            }
          </aside>
        </div>
      </div>
    }
  `,
})
export class CodigoConExplicaciones {
  readonly archivos = input.required<ArchivoResaltado[]>();

  private readonly archivoActivoIdxSig = signal(0);
  readonly archivoActivoIdx = this.archivoActivoIdxSig.asReadonly();
  protected readonly lineaActivaKey = signal<string | null>(null);
  private readonly esDesktopSig = signal(false);
  protected readonly esDesktop = this.esDesktopSig.asReadonly();

  private readonly textoPorArchivo = computed(() =>
    this.archivos().map((a) => new Map(a.lineas.map((l) => [l.id, l.textoPlano]))),
  );

  constructor() {
    afterNextRender(() => {
      const mq = matchMedia('(min-width: 80em)');
      this.esDesktopSig.set(mq.matches);
      mq.addEventListener('change', (e) => this.esDesktopSig.set(e.matches));
    });
  }

  seleccionarArchivo(idx: number): void {
    this.archivoActivoIdxSig.set(idx);
    this.lineaActivaKey.set(null);
  }

  activar(idx: number, lineaId: string): void {
    if (this.esDesktopSig()) {
      this.lineaActivaKey.set(`${idx}:${lineaId}`);
    }
  }

  esLineaActiva(idx: number, lineaId: string): boolean {
    return this.lineaActivaKey() === `${idx}:${lineaId}`;
  }

  textoLinea(idx: number, lineaId: string): string {
    return this.textoPorArchivo()[idx]?.get(lineaId) ?? '';
  }
}
