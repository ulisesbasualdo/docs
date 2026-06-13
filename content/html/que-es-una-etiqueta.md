---
titulo: "Qué es una etiqueta HTML"
tecnologia: html
categoria: Fundamentos
modulo: fundamentos
orden: 1
descripcion: "La pieza más básica de la web: la etiqueta. Qué es, de qué partes se compone y cómo el navegador la convierte en algo que ves."
youtubeId: ""
publicadoEn: 2026-05-29
nivel: introductorio
tags:
  - html
  - fundamentos
leccionesRelacionadas:
  - estructura-de-una-pagina
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <h1>Tienda La Esquina</h1>
    - id: "2"
      indent: 0
      codigo: |-
        <p>Productos de almacén con envío a domicilio.</p>
  explicaciones:
    - para: "1"
      tecnica: |-
        Esto es una **etiqueta** de HTML, la pieza con la que se construye toda página web. Mirala con lupa, tiene tres partes. Primero `<h1>`: es la _etiqueta de apertura_, dice "acá empieza un título principal" (la `h` viene de _heading_, encabezado en inglés, y el `1` significa que es el de mayor jerarquía). En el medio, `Tienda La Esquina`: es el _contenido_, el texto que realmente se va a ver en la pantalla. Y al final `</h1>`: es la _etiqueta de cierre_; es igual a la de apertura pero con una barra `/`, y dice "acá termina el título". El navegador lee esto y lo dibuja como un texto grande y en negrita.
      analogia: |-
        Pensalo como un sobre de carta. `<h1>` es abrir el sobre, el texto del medio es la carta adentro, y `</h1>` es cerrar el sobre. El navegador es el cartero que abre el sobre, lee qué tipo de envío es (un título) y lo entrega con el formato que corresponde.
    - para: "2"
      tecnica: |-
        Otra etiqueta, con la misma estructura de apertura, contenido y cierre, pero distinta: `<p>` es un _párrafo_ (de _paragraph_). Se usa para bloques de texto normal, a diferencia del `<h1>` que es para títulos. El navegador no las trata igual: el título lo muestra grande y destacado, y el párrafo con letra normal. Por eso elegir la etiqueta correcta importa, no es solo decoración: le estás diciendo al navegador **qué significa** cada texto.
      analogia: |-
        Si el `<h1>` era el sobre marcado como "URGENTE", el `<p>` es un sobre común de correo normal. Mismo sistema de sobres, pero el cartero los trata distinto según lo que diga la etiqueta de afuera.
---

Toda página web, por más grande que sea, está hecha de miles de estas piezas: **etiquetas**. Si entendés cómo funciona una, entendés el ladrillo con el que se construye absolutamente todo lo demás. Empecemos por ahí.
