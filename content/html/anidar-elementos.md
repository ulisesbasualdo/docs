---
titulo: "Anidar elementos: padres e hijos"
tecnologia: html
categoria: Fundamentos
modulo: fundamentos
orden: 4
descripcion: "Las etiquetas viven unas dentro de otras formando un árbol de padres e hijos. Cómo anidar bien, por qué importa la indentación y cómo evitar el error más común."
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
        <h2>Café premium</h2>
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
        Abrimos un `<article>`, una etiqueta que agrupa contenido que tiene sentido por sí solo, como la ficha de un producto. Pero fijate que **no** ponemos su contenido y cierre en la misma línea: vamos a meterle otras etiquetas adentro. Cuando una etiqueta contiene a otras, se dice que las **anida**, y pasa a ser su _padre_.
      analogia: |-
        Es una caja grande abierta sobre la mesa. Todavía no pusiste nada adentro, pero ya sabés que ahí van a entrar cosas más chicas.
    - para: "2"
      tecnica: |-
        Adentro del article ponemos un `<h2>`, un subtítulo (un escalón por debajo del `<h1>`). Esta etiqueta es **hija** del article. Mirá la sangría: está corrida hacia la derecha respecto del article. Esa indentación no es obligatoria para el navegador, pero es clave para vos: muestra de un vistazo que el `h2` está **adentro** del article y no al lado.
      analogia: |-
        Es la primera cosa que metés en la caja. Está dentro de la caja, no sobre la mesa; por eso la dibujamos un poco más adentro.
    - para: "3"
      tecnica: |-
        Un `<p>` con la descripción, también hijo del article y hermano del `h2` (están al mismo nivel, los dos adentro del mismo padre). Por eso lleva la misma sangría que el `h2`. Así se va armando un **árbol**: el article es el tronco, el h2 y el p son dos ramas que salen de él.
      analogia: |-
        Es la segunda cosa que metés en la misma caja. El subtítulo y la descripción son como dos objetos distintos guardados en la misma caja: hermanos, al mismo nivel.
    - para: "4"
      tecnica: |-
        Cerramos el `<article>` con `</article>`, ya sin sangría, alineado con su apertura. Todo lo que quedó entre la apertura y este cierre es contenido del article. Acá está la **regla de oro** de la anidación: las etiquetas no se pueden cruzar. Si abriste `article` y después `h2`, tenés que cerrar el `h2` **antes** de cerrar el article. Cerrar en el orden equivocado (como `</article>` antes de `</h2>`) es el error más común de quien arranca, y rompe la página.
      analogia: |-
        Es cerrar la tapa de la caja, con todo adentro. Y lo lógico: no podés cerrar la caja grande si todavía tenés media mano metida sosteniendo una caja chica abierta. Primero cerrás lo de adentro, después lo de afuera.
---

Una página web no es una lista plana de etiquetas: es un **árbol** de etiquetas metidas unas dentro de otras. Entender quién es padre, quién es hijo y quiénes son hermanos es lo que después te va a permitir darle estilo con CSS y manipularla con JavaScript sin perderte. La indentación es tu mapa de ese árbol: respetala siempre.
