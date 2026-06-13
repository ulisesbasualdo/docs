---
titulo: "Conectar CSS al HTML"
tecnologia: css
categoria: CSS básico
modulo: css-basico
orden: 2
descripcion: "Cómo enlazar una hoja de estilos externa con la etiqueta link, y por qué es mejor que escribir estilos sueltos en cada página."
youtubeId: ""
publicadoEn: 2026-06-12
nivel: introductorio
tags:
  - css
  - basico
leccionesRelacionadas:
  - que-es-css
archivos:
  - nombre: index.html
    lenguaje: html
    lineas:
      - id: "1"
        indent: 0
        codigo: |-
          <head>
      - id: "2"
        indent: 1
        codigo: |-
          <title>Tienda La Esquina</title>
      - id: "3"
        indent: 1
        codigo: |-
          <link rel="stylesheet" href="estilos.css" />
      - id: "4"
        indent: 0
        codigo: |-
          </head>
    explicaciones:
      - para: "1"
        tecnica: |-
          Estamos dentro del `<head>` de la página, la sección de información que ya conocés del curso de HTML. Acá es donde se declara qué hoja de estilos usa el documento.
        analogia: |-
          Volvemos a la ficha técnica de la remera. Vamos a agregarle un dato nuevo: "qué manual de estilo aplicarle".
      - para: "2"
        tecnica: |-
          El título de la pestaña, igual que siempre. Lo dejamos para que veas dónde se ubica el `link` en un `head` real: conviven varias etiquetas de información.
        analogia: |-
          El nombre en el lomo de la carpeta. Ya estaba; lo nuevo viene en la línea siguiente.
      - para: "3"
        tecnica: |-
          Esta es la conexión. La etiqueta `<link>` enlaza el documento con un recurso externo. Sus dos atributos clave: `rel="stylesheet"` declara la **relación** ("esto que enlazo es una hoja de estilos") y `href="estilos.css"` dice **dónde** está el archivo. Cuando el navegador lee esta línea, descarga `estilos.css` y aplica todas sus reglas a la página. Es una etiqueta sin cierre, como `<img>`.
        analogia: |-
          Es contratar al equipo de decoradores y entregarles el manual de estilo de la marca. La casa (HTML) está en una carpeta y el manual (CSS) en otra; esta línea es el contrato que los une.
        nota: |-
          Existe la alternativa de escribir estilos directo en el HTML con la etiqueta `<style>` o el atributo `style=""`. Para páginas reales casi siempre conviene el archivo externo: una sola hoja de estilos sirve a todas las páginas del sitio, se cachea (el navegador la descarga una vez y la reutiliza) y mantiene separado el contenido del aspecto, que es más fácil de mantener.
      - para: "4"
        tecnica: |-
          Cerramos el `head`. A partir de acá vendría el `<body>`, cuyo contenido ya se va a renderizar con los estilos de `estilos.css` aplicados.
        analogia: |-
          Ficha técnica completa: la remera ya tiene marca, talle y manual de estilo asignado.
  - nombre: estilos.css
    lenguaje: css
    lineas:
      - id: "1"
        indent: 0
        codigo: |-
          body {
      - id: "2"
        indent: 1
        codigo: |-
          font-family: system-ui, sans-serif;
      - id: "3"
        indent: 1
        codigo: |-
          background-color: whitesmoke;
      - id: "4"
        indent: 0
        codigo: |-
          }
    explicaciones:
      - para: "1"
        tecnica: |-
          Este es el archivo `estilos.css` que el HTML enlazó. Arranca con una regla cuyo selector es `body`: aplica a todo el cuerpo visible de la página. Como casi todo lo que está dentro del `body` hereda estos valores, es el lugar típico para definir la base del sitio.
        analogia: |-
          Es la primera página del manual de estilo: las reglas generales que aplican a toda la casa, antes de entrar en detalles habitación por habitación.
      - para: "2"
        tecnica: |-
          `font-family` define la tipografía. Le pasamos una **lista de respaldo** separada por comas: primero `system-ui` (la letra nativa del sistema operativo del visitante) y si no existe, cualquier `sans-serif` (letra sin remates). El navegador usa la primera que encuentre disponible. Toda la página hereda esta tipografía sin tener que repetirla en cada elemento.
        analogia: |-
          Es elegir la tipografía oficial de la marca con un plan B: "usen la letra corporativa, y si la imprenta no la tiene, cualquier letra limpia sin adornos".
      - para: "3"
        tecnica: |-
          `background-color` pinta el fondo. `whitesmoke` es un blanco apenas grisáceo, más descansado que el blanco puro. Como está en el `body`, es el fondo de toda la página.
        analogia: |-
          El color de las paredes de toda la casa. Las habitaciones (secciones) podrán pintarse distinto después, pero esta es la base.
      - para: "4"
        tecnica: |-
          Cierra la regla del `body`. Este archivo va a crecer con muchas reglas más, pero ya está conectado y funcionando: cualquier regla que agregues acá se refleja en la página con solo recargar.
        analogia: |-
          Primera orden de trabajo del manual cumplida. El resto del manual se irá escribiendo página por página.
---

Una hoja de estilos no sirve de nada si la página no la conoce. La conexión se hace con una sola línea en el `head` del HTML. Acá ves los dos lados del enlace: la página que pide los estilos y el archivo que los define.
