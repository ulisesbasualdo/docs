---
titulo: "La estructura mínima de una página"
tecnologia: html
categoria: Fundamentos
modulo: fundamentos
orden: 2
descripcion: "El esqueleto que toda página web necesita: doctype, html, head y body. Qué hace cada parte y por qué el orden importa."
youtubeId: ""
publicadoEn: 2026-05-29
nivel: introductorio
tags:
  - html
  - fundamentos
leccionesRelacionadas:
  - que-es-una-etiqueta
  - atributos
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <!doctype html>
    - id: "2"
      indent: 0
      codigo: |-
        <html lang="es">
    - id: "3"
      indent: 1
      codigo: |-
        <head>
    - id: "4"
      indent: 2
      codigo: |-
        <title>Tienda La Esquina</title>
    - id: "5"
      indent: 1
      codigo: |-
        </head>
    - id: "6"
      indent: 1
      codigo: |-
        <body>
    - id: "7"
      indent: 2
      codigo: |-
        <h1>Tienda La Esquina</h1>
    - id: "8"
      indent: 1
      codigo: |-
        </body>
    - id: "9"
      indent: 0
      codigo: |-
        </html>
  explicaciones:
    - para: "1"
      tecnica: |-
        `<!doctype html>` es la primera línea de toda página moderna. No es una etiqueta normal: es un aviso al navegador que dice "esto está escrito en HTML actual, interpretalo con las reglas de hoy". Se escribe siempre igual y va siempre primero. Sin esto, algunos navegadores entran en un modo viejo y raro que rompe cosas.
      analogia: |-
        Es como la primera línea de un formulario oficial que aclara "complete con letra de imprenta". Antes de leer nada, ya sabés bajo qué reglas se llena todo el resto.
    - para: "2"
      tecnica: |-
        `<html>` es la etiqueta que envuelve **todo** el contenido de la página; es la raíz, la madre de todas las demás. El `lang="es"` que le agregamos dice que la página está en español, lo cual ayuda a los buscadores y a los lectores de pantalla a pronunciar bien. Fijate que recién la vamos a cerrar al final con `</html>`: todo lo de adentro vive dentro de ella.
      analogia: |-
        Es el terreno donde se construye la casa. Todo, las habitaciones y los muebles, va adentro del cerco del terreno. Nada queda afuera.
    - para: "3"
      tecnica: |-
        `<head>` es la primera de las dos grandes secciones. Contiene información **sobre** la página que el visitante no ve directamente en el cuerpo: el título de la pestaña, la codificación, enlaces a estilos, datos para Google. Es la "ficha técnica" del documento.
      analogia: |-
        Es la etiqueta cosida adentro de una remera: marca, talle, instrucciones de lavado. No es la remera en sí, pero dice todo lo importante sobre ella.
    - para: "4"
      tecnica: |-
        `<title>` define el texto que aparece en la pestaña del navegador y como título en los resultados de Google. Va adentro del `<head>` porque es información sobre la página, no contenido visible dentro de ella. Es de las pocas cosas del `head` que el usuario igual termina viendo, arriba de todo.
      analogia: |-
        Es el nombre escrito en el lomo de una carpeta: no es el contenido de adentro, pero es lo que te deja identificarla de un vistazo entre muchas.
    - para: "5"
      tecnica: |-
        `</head>` cierra la sección de información. Todo lo que pusimos entre `<head>` y `</head>` era la ficha técnica. A partir de acá viene lo otro: el contenido visible.
      analogia: |-
        Es terminar de completar la ficha técnica y dar vuelta la página para empezar con lo que de verdad se muestra.
    - para: "6"
      tecnica: |-
        `<body>` es la segunda gran sección y la más importante para el visitante: acá va **todo lo que se ve** en la pantalla. Títulos, textos, imágenes, botones, formularios. Si está dentro del `body`, el usuario lo puede ver.
      analogia: |-
        Si el `head` era la etiqueta de la remera, el `body` es la remera en sí: lo que efectivamente te ponen y todos ven.
    - para: "7"
      tecnica: |-
        Adentro del `body` ponemos el título principal con `<h1>`, igual al que ya conociste. Esta es la primera cosa que el visitante realmente va a ver en la página. Notá que está más indentado (corrido a la derecha): es porque vive **adentro** del `body`, que a su vez vive adentro del `html`.
      analogia: |-
        Es el primer mueble que entra a la habitación ya construida. La casa y la habitación ya estaban; ahora empezás a llenarla con lo que se usa.
    - para: "8"
      tecnica: |-
        `</body>` cierra el cuerpo. Todo lo visible de la página tiene que estar antes de esta línea.
      analogia: |-
        Es cerrar la puerta de la habitación una vez que terminaste de amueblarla.
    - para: "9"
      tecnica: |-
        `</html>` cierra la etiqueta raíz que abrimos en la línea 2. Con esto la página está completa: todo quedó encerrado dentro de `<html>` y `</html>`. Fijate el orden de cierre: lo último que abrimos (`body`) se cierra primero, y lo primero que abrimos (`html`) se cierra al final. Siempre se cierra de adentro hacia afuera.
      analogia: |-
        Es poner el cerco final al terreno. Y como con las cajas: la que metiste última adentro es la que sacás primero; el terreno, que fue lo primero, se cierra al final.
---

Toda página web, sin excepción, arranca con este mismo esqueleto. Cambiará lo que pongas adentro, pero esta estructura de cuatro piezas, `doctype`, `html`, `head` y `body`, es siempre la misma. Memorizala una vez y la vas a escribir en piloto automático para siempre.
