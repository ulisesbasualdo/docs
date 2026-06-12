---
titulo: "Anidar elementos: padres e hijos"
tecnologia: html
categoria: Fundamentos
modulo: fundamentos
orden: 4
descripcion: "Las etiquetas viven unas dentro de otras formando un arbol de padres e hijos. Como anidar bien, por que importa la indentacion y como evitar el error mas comun."
youtubeId: ""
publicadoEn: 2026-05-29
nivel: introductorio
tags:
  - html
  - fundamentos
  - anidacion
leccionesRelacionadas:
  - estructura-de-una-pagina
  - atributos
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <article>
    - id: "2"
      indent: 1
      codigo: |-
        <h2>Cafe premium</h2>
    - id: "3"
      indent: 1
      codigo: |-
        <p>Granos seleccionados, tostado medio.</p>
    - id: "4"
      indent: 0
      codigo: |-
        </article>
  explicaciones:
    - para: "1"
      tecnica: |-
        Abrimos un `<article>`, una etiqueta que agrupa contenido que tiene sentido por si solo, como la ficha de un producto. Pero fijate que **no** ponemos su contenido y cierre en la misma linea: vamos a meterle otras etiquetas adentro. Cuando una etiqueta contiene a otras, se dice que las **anida**, y pasa a ser su _padre_.
      analogia: |-
        Es una caja grande abierta sobre la mesa. Todavia no pusiste nada adentro, pero ya sabes que ahi van a entrar cosas mas chicas.
    - para: "2"
      tecnica: |-
        Adentro del article ponemos un `<h2>`, un subtitulo (un escalon por debajo del `<h1>`). Esta etiqueta es **hija** del article. Mira la sangria: esta corrida hacia la derecha respecto del article. Esa indentacion no es obligatoria para el navegador, pero es clave para vos: muestra de un vistazo que el `h2` esta **adentro** del article y no al lado.
      analogia: |-
        Es la primera cosa que metés en la caja. Esta dentro de la caja, no sobre la mesa; por eso la dibujamos un poco mas adentro.
    - para: "3"
      tecnica: |-
        Un `<p>` con la descripcion, tambien hijo del article y hermano del `h2` (estan al mismo nivel, los dos adentro del mismo padre). Por eso lleva la misma sangria que el `h2`. Asi se va armando un **arbol**: el article es el tronco, el h2 y el p son dos ramas que salen de el.
      analogia: |-
        Es la segunda cosa que metés en la misma caja. El subtitulo y la descripcion son como dos objetos distintos guardados en la misma caja: hermanos, al mismo nivel.
    - para: "4"
      tecnica: |-
        Cerramos el `<article>` con `</article>`, ya sin sangria, alineado con su apertura. Todo lo que quedo entre la apertura y este cierre es contenido del article. Acá esta la **regla de oro** de la anidacion: las etiquetas no se pueden cruzar. Si abriste `article` y despues `h2`, tenés que cerrar el `h2` **antes** de cerrar el article. Cerrar en el orden equivocado (como `</article>` antes de `</h2>`) es el error mas comun de quien arranca, y rompe la pagina.
      analogia: |-
        Es cerrar la tapa de la caja, con todo adentro. Y lo logico: no podés cerrar la caja grande si todavia tenés media mano metida sosteniendo una caja chica abierta. Primero cerrás lo de adentro, despues lo de afuera.
---

Una pagina web no es una lista plana de etiquetas: es un **arbol** de etiquetas metidas unas dentro de otras. Entender quien es padre, quien es hijo y quienes son hermanos es lo que despues te va a permitir darle estilo con CSS y manipularla con JavaScript sin perderte. La indentacion es tu mapa de ese arbol: respetala siempre.
