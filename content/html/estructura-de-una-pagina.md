---
titulo: "La estructura minima de una pagina"
tecnologia: html
categoria: Fundamentos
modulo: fundamentos
orden: 2
descripcion: "El esqueleto que toda pagina web necesita: doctype, html, head y body. Que hace cada parte y por que el orden importa."
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
        `<!doctype html>` es la primera linea de toda pagina moderna. No es una etiqueta normal: es un aviso al navegador que dice "esto esta escrito en HTML actual, interpretalo con las reglas de hoy". Se escribe siempre igual y va siempre primero. Sin esto, algunos navegadores entran en un modo viejo y raro que rompe cosas.
      analogia: |-
        Es como la primera linea de un formulario oficial que aclara "complete con letra de imprenta". Antes de leer nada, ya sabes bajo que reglas se llena todo el resto.
    - para: "2"
      tecnica: |-
        `<html>` es la etiqueta que envuelve **todo** el contenido de la pagina; es la raiz, la madre de todas las demas. El `lang="es"` que le agregamos dice que la pagina esta en espaniol, lo cual ayuda a los buscadores y a los lectores de pantalla a pronunciar bien. Fijate que recien la vamos a cerrar al final con `</html>`: todo lo de adentro vive dentro de ella.
      analogia: |-
        Es el terreno donde se construye la casa. Todo, las habitaciones y los muebles, va adentro del cerco del terreno. Nada queda afuera.
    - para: "3"
      tecnica: |-
        `<head>` es la primera de las dos grandes secciones. Contiene informacion **sobre** la pagina que el visitante no ve directamente en el cuerpo: el titulo de la pestania, la codificacion, enlaces a estilos, datos para Google. Es la "ficha tecnica" del documento.
      analogia: |-
        Es la etiqueta cosida adentro de una remera: marca, talle, instrucciones de lavado. No es la remera en si, pero dice todo lo importante sobre ella.
    - para: "4"
      tecnica: |-
        `<title>` define el texto que aparece en la pestania del navegador y como titulo en los resultados de Google. Va adentro del `<head>` porque es informacion sobre la pagina, no contenido visible dentro de ella. Es de las pocas cosas del `head` que el usuario igual termina viendo, arriba de todo.
      analogia: |-
        Es el nombre escrito en el lomo de una carpeta: no es el contenido de adentro, pero es lo que te deja identificarla de un vistazo entre muchas.
    - para: "5"
      tecnica: |-
        `</head>` cierra la seccion de informacion. Todo lo que pusimos entre `<head>` y `</head>` era la ficha tecnica. A partir de aca viene lo otro: el contenido visible.
      analogia: |-
        Es terminar de completar la ficha tecnica y dar vuelta la pagina para empezar con lo que de verdad se muestra.
    - para: "6"
      tecnica: |-
        `<body>` es la segunda gran seccion y la mas importante para el visitante: aca va **todo lo que se ve** en la pantalla. Titulos, textos, imagenes, botones, formularios. Si esta dentro del `body`, el usuario lo puede ver.
      analogia: |-
        Si el `head` era la etiqueta de la remera, el `body` es la remera en si: lo que efectivamente te ponen y todos ven.
    - para: "7"
      tecnica: |-
        Adentro del `body` ponemos el titulo principal con `<h1>`, igual al que ya conociste. Esta es la primera cosa que el visitante realmente va a ver en la pagina. Notá que esta mas indentado (corrido a la derecha): es porque vive **adentro** del `body`, que a su vez vive adentro del `html`.
      analogia: |-
        Es el primer mueble que entra a la habitacion ya construida. La casa y la habitacion ya estaban; ahora empezas a llenarla con lo que se usa.
    - para: "8"
      tecnica: |-
        `</body>` cierra el cuerpo. Todo lo visible de la pagina tiene que estar antes de esta linea.
      analogia: |-
        Es cerrar la puerta de la habitacion una vez que terminaste de amueblarla.
    - para: "9"
      tecnica: |-
        `</html>` cierra la etiqueta raiz que abrimos en la linea 2. Con esto la pagina esta completa: todo quedo encerrado dentro de `<html>` y `</html>`. Fijate el orden de cierre: lo ultimo que abrimos (`body`) se cierra primero, y lo primero que abrimos (`html`) se cierra al final. Siempre se cierra de adentro hacia afuera.
      analogia: |-
        Es poner el cerco final al terreno. Y como con las cajas: la que metiste ultima adentro es la que sacas primero; el terreno, que fue lo primero, se cierra al final.
---

Toda pagina web, sin excepcion, arranca con este mismo esqueleto. Cambiara lo que pongas adentro, pero esta estructura de cuatro piezas, `doctype`, `html`, `head` y `body`, es siempre la misma. Memorizala una vez y la vas a escribir en piloto automatico para siempre.
