---
titulo: "Encabezados y párrafos"
tecnologia: html
categoria: Texto y contenido
modulo: texto
orden: 1
descripcion: "Los seis niveles de encabezado, el párrafo y los separadores. Cómo darle jerarquía al texto de una página real."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - html
  - texto
leccionesRelacionadas:
  - enfasis-y-citas
  - listas
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
        <h2>Ofertas de la semana</h2>
    - id: "3"
      indent: 0
      codigo: |-
        <p>Envío gratis en compras desde $20.000.</p>
    - id: "4"
      indent: 0
      codigo: |-
        <hr />
    - id: "5"
      indent: 0
      codigo: |-
        <p>Atendemos de lunes a sábado.</p>
  explicaciones:
    - para: "1"
      tecnica: |-
        `<h1>` es el encabezado de mayor jerarquía. Regla de oro: una página tiene **un solo** `<h1>`, que dice de qué trata todo el documento. Acá es el nombre del negocio.
      analogia: |-
        Es el cartel principal en la fachada del local: hay uno solo y se ve desde la otra cuadra.
    - para: "2"
      tecnica: |-
        `<h2>` es un subtítulo, un escalón por debajo del `<h1>`. Hay seis niveles, de `<h1>` a `<h6>`, y se usan en orden, sin saltearse: el `<h2>` abre una sección dentro del tema general.
      analogia: |-
        Son los carteles de cada góndola adentro del local: más chicos que el de la fachada, pero ordenan por sector.
    - para: "3"
      tecnica: |-
        `<p>` es un párrafo: un bloque de texto corrido. El navegador le pone un espacio arriba y abajo para separarlo del resto. Es la etiqueta más común para texto normal.
      analogia: |-
        Es un renglón del folleto del negocio: una idea completa, con aire alrededor para que se lea cómoda.
    - para: "4"
      tecnica: |-
        `<hr />` es una separación temática: marca un cambio de tema dentro de la página y se dibuja como una línea horizontal. No tiene contenido, por eso se cierra sola con `/>`.
      analogia: |-
        Es la línea divisoria en el folleto entre la sección de ofertas y la de horarios: avisa "hasta acá un tema, de acá en más otro".
    - para: "5"
      tecnica: |-
        Otro `<p>`, ya del otro lado del separador. Demuestra que el `<hr />` no corta el documento: solo separa visual y semánticamente dos bloques que siguen siendo parte de la misma página.
      analogia: |-
        Es el siguiente renglón del folleto, debajo de la línea divisoria: tema nuevo, mismo papel.
---

El texto de una página no es plano: tiene **jerarquía**. Los encabezados (`<h1>` a `<h6>`) ordenan la información en niveles, y los párrafos (`<p>`) la desarrollan. Usar el nivel correcto no es estética: es lo que ayuda a Google y a los lectores de pantalla a entender tu página.
