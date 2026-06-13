---
titulo: "Color: hex, rgb y hsl"
tecnologia: css
categoria: Tipografía y color
modulo: tipografia-color
orden: 1
descripcion: "Las formas de escribir un color en CSS, cuándo conviene cada una y cómo manejar la transparencia."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - css
  - color
leccionesRelacionadas:
  - tipografia
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .precio { color: #1a7f37; }
    - id: "2"
      indent: 0
      codigo: |-
        .alerta { color: rgb(200 30 30); }
    - id: "3"
      indent: 0
      codigo: |-
        .marca { color: hsl(220 90% 55%); }
    - id: "4"
      indent: 0
      codigo: |-
        .sutil { color: rgb(0 0 0 / 0.6); }
  explicaciones:
    - para: "1"
      tecnica: |-
        El formato **hexadecimal**: `#` seguido de seis dígitos que codifican rojo, verde y azul. Es el más común porque se copia y pega fácil de cualquier herramienta de diseño. Difícil de leer a ojo, pero universal.
      analogia: |-
        Es el código de pintura de la ferretería: ilegible para vos, pero exacto y reconocido en todos lados.
    - para: "2"
      tecnica: |-
        El formato **rgb**: das directamente las cantidades de rojo, verde y azul (de 0 a 255). `rgb(200 30 30)` es un rojo intenso. Es más legible que el hex y permite ajustar un canal a mano.
      analogia: |-
        Es mezclar la pintura vos mismo: "tanto de rojo, tanto de verde, tanto de azul".
    - para: "3"
      tecnica: |-
        El formato **hsl** (tono, saturación, luminosidad) es el más **intuitivo** para humanos: `220` es el tono (azul), `90%` la saturación (qué tan vívido) y `55%` la luminosidad (qué tan claro). Para hacer una variante más oscura del mismo color, bajás la luminosidad y listo, sin recalcular nada.
      analogia: |-
        Es describir el color como lo pensás: "un azul, bien vívido, ni muy claro ni muy oscuro". Para oscurecerlo, solo girás una perilla.
    - para: "4"
      tecnica: |-
        La **transparencia**: la barra `/ 0.6` agrega un canal alfa (opacidad) del 60%. `rgb(0 0 0 / 0.6)` es un negro semitransparente, perfecto para sombras o capas sobre una imagen. Funciona igual en `hsl( ... / 0.6)`.
      analogia: |-
        Es la misma pintura pero aguada al 60%: deja ver un poco lo que hay debajo, ideal para veladuras.
      nota: |-
        También existen los **colores con nombre** (`red`, `teal`, `whitesmoke`): cómodos para prototipar, pero limitados. Para una marca seria, conviene hex o hsl, que dan control exacto.
---

Un mismo color se puede escribir de varias formas: `hex` (universal, para copiar y pegar), `rgb` (legible) y `hsl` (la más intuitiva para crear variantes). Y con el canal alfa (`/ 0.6`) manejás la transparencia. Para un sistema de marca, `hsl` suele ser el más cómodo de mantener.
