---
titulo: "Display: block, inline e inline-block"
tecnologia: css
categoria: El modelo de caja
modulo: cajas
orden: 2
descripcion: "Por qué algunos elementos ocupan todo el ancho y otros no, y cómo cambiar ese comportamiento."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - css
  - display
leccionesRelacionadas:
  - modelo-de-caja
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .seccion { display: block; }
    - id: "2"
      indent: 0
      codigo: |-
        .etiqueta { display: inline; }
    - id: "3"
      indent: 0
      codigo: |-
        .boton { display: inline-block; padding: 8px 16px; }
    - id: "4"
      indent: 0
      codigo: |-
        .oculto { display: none; }
  explicaciones:
    - para: "1"
      tecnica: |-
        `display: block` hace que el elemento ocupe **todo el ancho** disponible y empuje al siguiente abajo. Es el comportamiento por defecto de `<div>`, `<p>`, `<section>` y la mayoría de los bloques.
      analogia: |-
        Es un cajón de góndola: ocupa todo el ancho del estante y el de abajo va en otro estante.
    - para: "2"
      tecnica: |-
        `display: inline` hace que el elemento ocupe **solo lo que mide su contenido** y conviva en la misma línea con otros, como el texto. Es el comportamiento de `<span>`, `<a>` o `<strong>`. Importante: a un inline no le funcionan `width`, `height` ni los márgenes verticales.
      analogia: |-
        Es una palabra dentro de una oración: ocupa su lugar justo y la frase sigue en el mismo renglón.
    - para: "3"
      tecnica: |-
        `display: inline-block` es el híbrido: fluye en línea como el texto, **pero** acepta `width`, `height` y `padding` en todas direcciones. Por eso es ideal para botones o etiquetas que van uno al lado del otro pero necesitan tamaño propio.
      analogia: |-
        Es un sticker pegado en una oración: convive en el renglón con las palabras, pero tiene su propio tamaño y margen alrededor.
    - para: "4"
      tecnica: |-
        `display: none` **saca** el elemento del documento: no se ve y no ocupa lugar, como si no existiera. Distinto de `visibility: hidden`, que lo oculta pero le deja el espacio reservado.
      analogia: |-
        Es retirar el cartel de la pared y tapar el agujero: no solo no se ve, tampoco queda el hueco.
---

El valor de `display` define cómo un elemento ocupa espacio y se relaciona con sus vecinos: `block` apila a lo ancho completo, `inline` fluye con el texto sin aceptar tamaño, `inline-block` combina ambas, y `none` lo quita por completo. Es la base sobre la que se montan layouts más potentes como Flexbox y Grid.
