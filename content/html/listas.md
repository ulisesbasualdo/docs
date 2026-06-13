---
titulo: "Listas: ordenadas, sin ordenar y de definición"
tecnologia: html
categoria: Texto y contenido
modulo: texto
orden: 3
descripcion: "Los tres tipos de lista de HTML y cuándo usar cada uno, con un menú y unos pasos como ejemplo."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - html
  - texto
  - listas
leccionesRelacionadas:
  - encabezados-y-parrafos
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <ul>
    - id: "2"
      indent: 1
      codigo: |-
        <li>Café</li>
    - id: "3"
      indent: 1
      codigo: |-
        <li>Medialunas</li>
    - id: "4"
      indent: 0
      codigo: |-
        </ul>
    - id: "5"
      indent: 0
      codigo: |-
        <ol>
    - id: "6"
      indent: 1
      codigo: |-
        <li>Elegí los productos</li>
    - id: "7"
      indent: 1
      codigo: |-
        <li>Pagá en la caja</li>
    - id: "8"
      indent: 0
      codigo: |-
        </ol>
  explicaciones:
    - para: "1"
      tecnica: |-
        `<ul>` abre una lista **sin ordenar** (de _unordered list_): un conjunto de ítems donde el orden no importa. El navegador la muestra con viñetas.
      analogia: |-
        Es la lista de ingredientes del menú: da igual leer primero el café o las medialunas, son opciones sueltas.
    - para: "2"
      tecnica: |-
        `<li>` es un ítem de la lista (de _list item_). Cada elemento de la lista va en su propio `<li>`, y vive **adentro** del `<ul>`, por eso la sangría.
      analogia: |-
        Es cada renglón con su viñeta en la lista del menú.
    - para: "3"
      tecnica: |-
        Otro `<li>`, hermano del anterior. Una lista puede tener todos los ítems que necesites, siempre como hijos directos del `<ul>`.
      analogia: |-
        El segundo producto del menú, con su propia viñeta.
    - para: "4"
      tecnica: |-
        `</ul>` cierra la lista sin ordenar. Todo lo que quedó entre la apertura y este cierre son sus ítems.
      analogia: |-
        Es el final de esa sección del menú.
    - para: "5"
      tecnica: |-
        `<ol>` abre una lista **ordenada** (de _ordered list_): acá el orden **sí** importa, y el navegador numera los ítems solo (1, 2, 3). Se usa para pasos o rankings.
      analogia: |-
        Son los pasos para comprar pegados en la caja: primero uno, después el otro, en ese orden.
    - para: "6"
      tecnica: |-
        El primer paso, dentro de un `<li>`. Fijate que el `<li>` es el mismo que en la `<ul>`: lo que cambia es el padre. El navegador le pondrá el número "1" automáticamente.
      analogia: |-
        El paso 1 del instructivo de la caja.
    - para: "7"
      tecnica: |-
        El segundo paso. No escribimos el "2": lo agrega el navegador. Si después insertás un paso en el medio, la numeración se reacomoda sola.
      analogia: |-
        El paso 2: si mañana sumás un paso intermedio, no tenés que renumerar todo a mano.
    - para: "8"
      tecnica: |-
        `</ol>` cierra la lista ordenada. Existe además un tercer tipo, la lista de definición (`<dl>` con `<dt>` y `<dd>`), ideal para pares término y descripción, como un glosario.
      analogia: |-
        Cierra el instructivo. La lista de definición sería el cartelito "Término: significado" de un glosario.
---

Casi todo lo que se ve "en lista" en una web es un `<ul>` o un `<ol>`: menús de navegación, pasos, características de un producto. Elegir entre ordenada y sin ordenar comunica si la secuencia importa o no, y deja que el navegador maneje la numeración por vos.
