---
titulo: "Section, article y aside"
tecnologia: html
categoria: Estructura semántica
modulo: estructura-semantica
orden: 2
descripcion: "Cómo dividir el contenido principal en piezas con sentido: artículos autónomos, secciones temáticas y contenido lateral."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - semantica
leccionesRelacionadas:
  - landmarks-de-pagina
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <main>
    - id: "2"
      indent: 1
      codigo: |-
        <article>
    - id: "3"
      indent: 2
      codigo: |-
        <h2>Café premium</h2>
    - id: "4"
      indent: 1
      codigo: |-
        </article>
    - id: "5"
      indent: 1
      codigo: |-
        <aside>También te puede interesar: té en hebras.</aside>
    - id: "6"
      indent: 0
      codigo: |-
        </main>
  explicaciones:
    - para: "1"
      tecnica: |-
        El `<main>` que ya conocés, abriendo el contenido principal. Adentro vamos a dividir en piezas con significado.
      analogia: |-
        Es el salón de ventas; ahora lo dividimos en góndolas.
    - para: "2"
      tecnica: |-
        `<article>` es contenido **autónomo**: tiene sentido por sí solo y podría publicarse aparte. Una ficha de producto, una nota del blog, un comentario. Si lo sacás de la página y sigue teniendo sentido, es un `<article>`.
      analogia: |-
        Es la ficha de un producto que podrías recortar y poner en otra vidriera: se entiende sola.
    - para: "3"
      tecnica: |-
        El título del artículo. Cada `<article>` suele empezar con su propio encabezado, que lo nombra.
      analogia: |-
        Es el nombre del producto en su ficha.
    - para: "4"
      tecnica: |-
        Cierra el `<article>`. Para agrupar contenido por **tema** (no necesariamente autónomo) existe `<section>`: úsala cuando un bloque tiene su propio encabezado pero no se sostiene solo afuera de la página.
      analogia: |-
        Cierra la ficha. Una `<section>` sería "la góndola de cafés": agrupa por tema, pero no la recortás para otra vidriera.
    - para: "5"
      tecnica: |-
        `<aside>` es contenido **tangencial**: relacionado pero secundario. Recomendaciones, publicidad, notas al margen. El lector de pantalla lo anuncia como "complementario", así quien quiere ir al grano lo puede saltear.
      analogia: |-
        Es el exhibidor de "llevátelo también" al lado de la góndola: relacionado, pero no es lo que viniste a buscar.
    - para: "6"
      tecnica: |-
        Cierra el `<main>`. Quedó un contenido principal dividido en una pieza autónoma (`<article>`) y una complementaria (`<aside>`), cada una con su rol claro.
      analogia: |-
        Cierra el salón: una góndola principal y un exhibidor lateral, cada cosa en su lugar.
---

Dentro del contenido principal, no todo pesa igual. `<article>` es lo que se sostiene solo, `<section>` agrupa por tema, y `<aside>` es lo secundario. Elegir bien hace que la página se "lea" estructurada incluso sin ver los estilos, que es exactamente como la leen Google y los lectores de pantalla.
