---
titulo: "Grid: layouts en dos dimensiones"
tecnologia: css
categoria: Layout con Grid
modulo: layout-grid
orden: 1
descripcion: "Armar una grilla de columnas y filas para una galería de productos, con la unidad fr y gap."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - css
  - grid
  - layout
leccionesRelacionadas:
  - grid-responsivo
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .galeria {
    - id: "2"
      indent: 1
      codigo: |-
        display: grid;
    - id: "3"
      indent: 1
      codigo: |-
        grid-template-columns: repeat(3, 1fr);
    - id: "4"
      indent: 1
      codigo: |-
        gap: 1rem;
    - id: "5"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Una galería de productos. Mientras Flexbox acomoda en una dimensión (una fila o una columna), Grid trabaja en **dos a la vez**: filas y columnas. Es ideal para galerías, tableros y layouts de página completa.
      analogia: |-
        Es una estantería con casilleros: filas y columnas definidas de antemano, donde cada producto entra en su casillero.
    - para: "2"
      tecnica: |-
        `display: grid` activa Grid en el contenedor. Igual que con Flexbox, le hablás al **padre** y él ubica a los hijos en la grilla.
      analogia: |-
        Es montar la estructura de casilleros vacía: todavía no dijimos cuántas columnas, pero la estantería ya existe.
    - para: "3"
      tecnica: |-
        `grid-template-columns` define las columnas. `repeat(3, 1fr)` crea **tres columnas iguales**: `repeat(3, ...)` es "tres veces" y `1fr` es una **fracción** del espacio disponible. Tres columnas de `1fr` se reparten el ancho en partes iguales, sin que tengas que calcular porcentajes.
      analogia: |-
        Es decir "tres columnas de casilleros, todas del mismo ancho": la estantería reparte el espacio sola.
    - para: "4"
      tecnica: |-
        `gap` es la separación entre celdas, igual que en Flexbox: un solo valor para el espacio entre filas y columnas. Los productos quedan separados de forma pareja sin márgenes a mano.
      analogia: |-
        Es el espacio entre casillero y casillero: una sola medida para toda la estantería.
    - para: "5"
      tecnica: |-
        Cierra la regla. Con tres líneas, cualquier cantidad de hijos se acomoda en una grilla de tres columnas que se llena sola, fila por fila.
      analogia: |-
        Cerrás el plano de la estantería: metés productos y se van ubicando en los casilleros en orden.
---

Grid es la herramienta para layouts de **dos dimensiones**. `display: grid` en el padre, `grid-template-columns` para definir las columnas (con la cómoda unidad `fr`) y `gap` para separarlas. Flexbox para una línea, Grid para una grilla: juntos cubren casi todo el layout moderno.
