---
titulo: "Las regiones de una página: header, nav, main y footer"
tecnologia: html
categoria: Estructura semántica
modulo: estructura-semantica
orden: 1
descripcion: "Las etiquetas que dividen una página en regiones con significado, en vez de usar div para todo."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - semantica
  - accesibilidad
leccionesRelacionadas:
  - secciones-de-contenido
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <header>
    - id: "2"
      indent: 1
      codigo: |-
        <nav>Inicio · Productos · Contacto</nav>
    - id: "3"
      indent: 0
      codigo: |-
        </header>
    - id: "4"
      indent: 0
      codigo: |-
        <main>
    - id: "5"
      indent: 1
      codigo: |-
        <h1>Tienda La Esquina</h1>
    - id: "6"
      indent: 0
      codigo: |-
        </main>
    - id: "7"
      indent: 0
      codigo: |-
        <footer>© 2026 Tienda La Esquina</footer>
  explicaciones:
    - para: "1"
      tecnica: |-
        `<header>` es la región de encabezado: lo que va arriba, típicamente el logo y la navegación. Es semántico, no decorativo: los lectores de pantalla lo anuncian como "encabezado" y permiten saltar directo a él.
      analogia: |-
        Es la marquesina del local: el cartel y la entrada, lo primero que ve quien llega.
    - para: "2"
      tecnica: |-
        `<nav>` envuelve la **navegación principal**: el grupo de enlaces para moverse por el sitio. Marcarlo como `<nav>` permite a quien usa lector de pantalla saltar al menú o saltearlo de un comando.
      analogia: |-
        Es el directorio de la galería en la entrada: la lista de a dónde podés ir.
    - para: "3"
      tecnica: |-
        Cierra el `<header>`. Todo lo de adentro (acá, el `<nav>`) es parte del encabezado de la página.
      analogia: |-
        Termina la marquesina; de acá para abajo, el local en sí.
    - para: "4"
      tecnica: |-
        `<main>` es el **contenido principal y único** de la página. Va **uno solo** por documento, y no debe incluir lo que se repite en todas las páginas (header, nav, footer). Permite el salto "ir al contenido", clave para accesibilidad.
      analogia: |-
        Es el salón de ventas: el corazón del local, lo que cambia de un local a otro, sin contar la entrada ni la caja.
    - para: "5"
      tecnica: |-
        El `<h1>` vive dentro del `<main>`, porque es el título del contenido principal. Header, nav y footer quedan afuera del `main` a propósito.
      analogia: |-
        Es el cartel grande adentro del salón, no el de la fachada.
    - para: "6"
      tecnica: |-
        Cierra el `<main>`. Entre su apertura y este cierre va todo el contenido propio de esta página.
      analogia: |-
        Termina el salón de ventas.
    - para: "7"
      tecnica: |-
        `<footer>` es el pie de página: copyright, datos de contacto, enlaces legales. Como el `<header>`, es una región que el navegador y los lectores de pantalla reconocen.
      analogia: |-
        Es el cartelito de la caja con horarios y datos legales: cierra el recorrido del local.
---

Antes se armaba todo con `<div>`. HTML moderno tiene etiquetas con **significado de región**: `<header>`, `<nav>`, `<main>` y `<footer>`. Usarlas no cambia cómo se ve la página, pero le da estructura real: Google la entiende mejor y quien navega con lector de pantalla puede saltar de región en región.
