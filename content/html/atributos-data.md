---
titulo: "Atributos data: guardar datos en el HTML"
tecnologia: html
categoria: Tablas y datos
modulo: tablas-datos
orden: 2
descripcion: "Cómo adjuntar datos propios a un elemento con atributos data, el puente prolijo entre el HTML y el JavaScript."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - datos
  - javascript
leccionesRelacionadas:
  - tablas
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <li data-categoria="cafe">Café premium</li>
    - id: "2"
      indent: 0
      codigo: |-
        <button data-producto-id="42" data-precio="3500">Agregar al carrito</button>
  explicaciones:
    - para: "1"
      tecnica: |-
        Cualquier atributo que empiece con `data-` es un **atributo de datos personalizado**: información que vos adjuntás a un elemento para usarla después, sin que afecte cómo se ve. Acá, `data-categoria="cafe"` etiqueta este ítem como de la categoría café, un dato que un filtro de JavaScript puede leer para mostrar u ocultar productos.
      analogia: |-
        Es una etiqueta de inventario pegada por detrás del producto: el cliente no la ve, pero el sistema del depósito la usa para clasificar.
    - para: "2"
      tecnica: |-
        Un elemento puede llevar varios `data-`. Acá guardamos el id y el precio del producto pegados al botón. Cuando el usuario lo toca, el JavaScript lee `data-producto-id` y `data-precio` directo del botón, sin tener que buscar esos datos en otro lado. Es la forma estándar y prolija de pasar datos del HTML al JavaScript.
      analogia: |-
        Es anotar el código y el precio en la misma etiqueta del producto: cuando alguien lo lleva a la caja, toda la info necesaria viaja pegada, no hay que ir a buscarla a otra lista.
---

Cuando necesitás que un elemento "recuerde" un dato (un id, una categoría, un precio) para que el JavaScript lo use después, no lo metas en la clase ni en el id: usá un atributo `data-`. Es la manera oficial de adjuntar datos propios al HTML sin ensuciar el significado ni el aspecto.
