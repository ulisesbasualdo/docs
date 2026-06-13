---
titulo: "Tablas de datos"
tecnologia: html
categoria: Tablas y datos
modulo: tablas-datos
orden: 1
descripcion: "La estructura correcta de una tabla: encabezados, cuerpo y el atributo scope que la hace accesible."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - tablas
leccionesRelacionadas:
  - atributos-data
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <table>
    - id: "2"
      indent: 1
      codigo: |-
        <caption>Horarios de atención</caption>
    - id: "3"
      indent: 1
      codigo: |-
        <thead>
    - id: "4"
      indent: 2
      codigo: |-
        <tr><th scope="col">Día</th><th scope="col">Horario</th></tr>
    - id: "5"
      indent: 1
      codigo: |-
        </thead>
    - id: "6"
      indent: 1
      codigo: |-
        <tbody>
    - id: "7"
      indent: 2
      codigo: |-
        <tr><td>Lunes</td><td>9 a 18</td></tr>
    - id: "8"
      indent: 1
      codigo: |-
        </tbody>
    - id: "9"
      indent: 0
      codigo: |-
        </table>
  explicaciones:
    - para: "1"
      tecnica: |-
        `<table>` abre una tabla. Importante desde el día uno: las tablas son **solo para datos tabulares** (horarios, precios, comparativas), nunca para maquetar la página. Para eso está el CSS.
      analogia: |-
        Es la planilla de Excel pegada en la pared del local: filas y columnas de datos, no la decoración del salón.
    - para: "2"
      tecnica: |-
        `<caption>` es el título de la tabla, y va primero. Le dice al usuario y al lector de pantalla de qué son estos datos antes de leerlos.
      analogia: |-
        Es el encabezado escrito arriba de la planilla: "Horarios de atención".
    - para: "3"
      tecnica: |-
        `<thead>` agrupa la fila (o filas) de **encabezados**. Separar el encabezado del cuerpo ayuda al navegador, a la impresión y a la accesibilidad.
      analogia: |-
        Es la fila de títulos de columnas de la planilla, la que va arriba de todo.
    - para: "4"
      tecnica: |-
        Una fila (`<tr>`, _table row_) con dos celdas de encabezado (`<th>`, _table header_). El `scope="col"` dice que cada `<th>` encabeza su **columna**: es lo que permite al lector de pantalla anunciar "Día: Lunes" al leer una celda. Sin `scope`, la tabla se vuelve confusa para quien no la ve.
      analogia: |-
        Son los rótulos "Día" y "Horario" de las columnas: `scope="col"` es la flecha que aclara que mandan hacia abajo, sobre toda su columna.
    - para: "5"
      tecnica: |-
        Cierra el `<thead>`. De acá para abajo vienen los datos.
      analogia: |-
        Termina la fila de títulos.
    - para: "6"
      tecnica: |-
        `<tbody>` es el cuerpo de la tabla: las filas de datos reales. Puede tener muchas filas.
      analogia: |-
        Es el grueso de la planilla, los renglones con la información.
    - para: "7"
      tecnica: |-
        Una fila de datos: cada celda normal es un `<td>` (_table data_). A diferencia del `<th>`, no es un encabezado, es un valor. El navegador la alinea bajo la columna correspondiente.
      analogia: |-
        Es un renglón cargado: "Lunes" debajo de Día, "9 a 18" debajo de Horario.
    - para: "8"
      tecnica: |-
        Cierra el `<tbody>`. Entre su apertura y este cierre van todas las filas de datos.
      analogia: |-
        Termina el cuerpo de la planilla.
    - para: "9"
      tecnica: |-
        `</table>` cierra la tabla. La estructura completa, `caption` + `thead` + `tbody` con `th scope`, es lo que separa una tabla accesible de un amontonamiento de celdas.
      analogia: |-
        Guardás la planilla terminada: título, encabezados y datos, cada cosa en su lugar.
---

Una tabla bien hecha no es solo "celdas con bordes": tiene `<caption>`, separa `<thead>` de `<tbody>`, y usa `<th scope>` para que cada dato se entienda en relación con su encabezado. Eso es lo que la hace legible para quien usa lector de pantalla. Y nunca, jamás, tablas para maquetar.
