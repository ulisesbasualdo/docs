---
titulo: "Las tres formas de conectar CSS"
tecnologia: html
categoria: HTML que conecta con CSS y JS
modulo: html-experto
orden: 1
descripcion: "Hoja externa, bloque interno y estilo en línea: qué son, cuál conviene y por qué."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - html
  - css
leccionesRelacionadas:
  - conectar-javascript
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <link rel="stylesheet" href="estilos.css" />
    - id: "2"
      indent: 0
      codigo: |-
        <style>
    - id: "3"
      indent: 1
      codigo: |-
        h1 { color: teal; }
    - id: "4"
      indent: 0
      codigo: |-
        </style>
    - id: "5"
      indent: 0
      codigo: |-
        <p style="color: red;">Oferta</p>
  explicaciones:
    - para: "1"
      tecnica: |-
        La forma **recomendada**: una hoja de estilos **externa**, enlazada desde el `<head>` con `<link>`. El CSS vive en su propio archivo, sirve a todas las páginas del sitio y el navegador lo cachea (lo descarga una vez y lo reutiliza). Separa el aspecto del contenido, que es más fácil de mantener.
      analogia: |-
        Es el manual de estilo de la marca en una carpeta aparte: todos los locales lo consultan y se actualiza en un solo lugar.
    - para: "2"
      tecnica: |-
        `<style>` abre un bloque de CSS **interno**, escrito dentro del propio HTML. Sirve para estilos puntuales de una sola página, pero no se comparte con las demás. Úsalo con moderación.
      analogia: |-
        Es pegar instrucciones de decoración en la pared de un solo local: rápido, pero no le sirve a las otras sucursales.
    - para: "3"
      tecnica: |-
        Una regla CSS dentro del bloque `<style>`. La sintaxis es la misma que en un archivo `.css`: selector, llaves y declaraciones. Lo único distinto es que vive embebida en el HTML.
      analogia: |-
        Es una orden de decoración escrita a mano en esa pared: misma instrucción que en el manual, pero local.
    - para: "4"
      tecnica: |-
        Cierra el bloque interno. Todo lo que quedó entre `<style>` y `</style>` es CSS que aplica solo a esta página.
      analogia: |-
        Termina el cartel de instrucciones pegado en la pared.
    - para: "5"
      tecnica: |-
        El atributo `style` aplica CSS **en línea**, directo sobre un elemento. Es la forma a **evitar**: pisa a las otras dos, mezcla aspecto con contenido y no se puede reutilizar. Quedó acá para que lo reconozcas y, salvo casos muy puntuales, no lo uses.
      analogia: |-
        Es escribir la instrucción de color con fibrón sobre el producto mismo: imposible de mantener y arruina la pieza. Mejor el manual.
---

Hay tres maneras de meter CSS en HTML, y conviene conocerlas para elegir bien: hoja **externa** con `<link>` (la que usarás casi siempre), bloque **interno** con `<style>` (para casos puntuales) y estilo **en línea** con el atributo `style` (a evitar). La regla práctica: el CSS, en su propio archivo.
