---
titulo: "Conectar CSS al HTML"
tecnologia: css
categoria: CSS basico
modulo: css-basico
orden: 2
descripcion: "Como enlazar una hoja de estilos externa con la etiqueta link, y por que es mejor que escribir estilos sueltos en cada pagina."
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
          Estamos dentro del `<head>` de la pagina, la seccion de informacion que ya conoces del curso de HTML. Aca es donde se declara que hoja de estilos usa el documento.
        analogia: |-
          Volvemos a la ficha tecnica de la remera. Vamos a agregarle un dato nuevo: "que manual de estilo aplicarle".
      - para: "2"
        tecnica: |-
          El titulo de la pestania, igual que siempre. Lo dejamos para que veas donde se ubica el `link` en un `head` real: conviven varias etiquetas de informacion.
        analogia: |-
          El nombre en el lomo de la carpeta. Ya estaba; lo nuevo viene en la linea siguiente.
      - para: "3"
        tecnica: |-
          Esta es la conexion. La etiqueta `<link>` enlaza el documento con un recurso externo. Sus dos atributos clave: `rel="stylesheet"` declara la **relacion** ("esto que enlazo es una hoja de estilos") y `href="estilos.css"` dice **donde** esta el archivo. Cuando el navegador lee esta linea, descarga `estilos.css` y aplica todas sus reglas a la pagina. Es una etiqueta sin cierre, como `<img>`.
        analogia: |-
          Es contratar al equipo de decoradores y entregarles el manual de estilo de la marca. La casa (HTML) esta en una carpeta y el manual (CSS) en otra; esta linea es el contrato que los une.
        nota: |-
          Existe la alternativa de escribir estilos directo en el HTML con la etiqueta `<style>` o el atributo `style=""`. Para paginas reales casi siempre conviene el archivo externo: una sola hoja de estilos sirve a todas las paginas del sitio, se cachea (el navegador la descarga una vez y la reutiliza) y mantiene separado el contenido del aspecto, que es mas facil de mantener.
      - para: "4"
        tecnica: |-
          Cerramos el `head`. A partir de aca vendria el `<body>`, cuyo contenido ya se va a renderizar con los estilos de `estilos.css` aplicados.
        analogia: |-
          Ficha tecnica completa: la remera ya tiene marca, talle y manual de estilo asignado.
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
          Este es el archivo `estilos.css` que el HTML enlazo. Arranca con una regla cuyo selector es `body`: aplica a todo el cuerpo visible de la pagina. Como casi todo lo que esta dentro del `body` hereda estos valores, es el lugar tipico para definir la base del sitio.
        analogia: |-
          Es la primera pagina del manual de estilo: las reglas generales que aplican a toda la casa, antes de entrar en detalles habitacion por habitacion.
      - para: "2"
        tecnica: |-
          `font-family` define la tipografia. Le pasamos una **lista de respaldo** separada por comas: primero `system-ui` (la letra nativa del sistema operativo del visitante) y si no existe, cualquier `sans-serif` (letra sin remates). El navegador usa la primera que encuentre disponible. Toda la pagina hereda esta tipografia sin tener que repetirla en cada elemento.
        analogia: |-
          Es elegir la tipografia oficial de la marca con un plan B: "usen la letra corporativa, y si la imprenta no la tiene, cualquier letra limpia sin adornos".
      - para: "3"
        tecnica: |-
          `background-color` pinta el fondo. `whitesmoke` es un blanco apenas grisaceo, mas descansado que el blanco puro. Como esta en el `body`, es el fondo de toda la pagina.
        analogia: |-
          El color de las paredes de toda la casa. Las habitaciones (secciones) podran pintarse distinto despues, pero esta es la base.
      - para: "4"
        tecnica: |-
          Cierra la regla del `body`. Este archivo va a crecer con muchas reglas mas, pero ya esta conectado y funcionando: cualquier regla que agregues aca se refleja en la pagina con solo recargar.
        analogia: |-
          Primera orden de trabajo del manual cumplida. El resto del manual se ira escribiendo pagina por pagina.
---

Una hoja de estilos no sirve de nada si la pagina no la conoce. La conexion se hace con una sola linea en el `head` del HTML. Aca ves los dos lados del enlace: la pagina que pide los estilos y el archivo que los define.
