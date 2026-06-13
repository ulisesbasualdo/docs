---
titulo: "Arrays: listas de valores"
tecnologia: javascript
categoria: Arrays y objetos
modulo: arrays-objetos
orden: 1
descripcion: "Cómo guardar una lista ordenada de valores, acceder a sus elementos y agregar nuevos."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - javascript
  - arrays
leccionesRelacionadas:
  - objetos
  - metodos-de-array
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const productos = ['café', 'té', 'mate'];
    - id: "2"
      indent: 0
      codigo: |-
        console.log(productos[0]);
    - id: "3"
      indent: 0
      codigo: |-
        console.log(productos.length);
    - id: "4"
      indent: 0
      codigo: |-
        productos.push('azúcar');
  explicaciones:
    - para: "1"
      tecnica: |-
        Un **array**: una lista ordenada de valores, escrita entre corchetes `[ ]` y separada por comas. Sirve para todo lo que sea "varios de lo mismo": los productos del carrito, los mensajes, los usuarios. Es de las estructuras que más vas a usar.
      analogia: |-
        Es una lista de compras numerada: varios ítems, en un orden, guardados bajo un solo nombre.
    - para: "2"
      tecnica: |-
        Se accede a un elemento por su **índice** entre corchetes. Atención: los arrays empiezan en `0`, así que `productos[0]` es el **primero**, `'café'`. El segundo es `[1]`, y así. Este "contar desde cero" confunde al principio, pero es universal en programación.
      analogia: |-
        Es pedir "el ítem número 0 de la lista". En programación el primero de la fila lleva el número 0, no el 1.
    - para: "3"
      tecnica: |-
        `.length` es una propiedad que todo array tiene: dice **cuántos elementos** contiene. Acá devuelve `3`. La usás constantemente para saber si una lista está vacía o para recorrerla.
      analogia: |-
        Es contar cuántos renglones tiene tu lista de compras de un vistazo.
    - para: "4"
      tecnica: |-
        `.push()` es un **método** (una función que vive dentro del array) que **agrega** un elemento al final. Después de esta línea, el array tiene cuatro ítems. Hay muchos métodos así (`pop`, `shift`, `includes`), pero `push` es el primero que vas a necesitar.
      analogia: |-
        Es agregar un renglón nuevo al final de la lista de compras: "ah, y también azúcar".
---

Un array es una lista ordenada de valores entre corchetes. Accedés a cada uno por su **índice empezando en 0**, sabés cuántos hay con `.length`, y agregás al final con `.push()`. Es la estructura para manejar colecciones de cosas, y la base sobre la que se montan los métodos de transformación.
