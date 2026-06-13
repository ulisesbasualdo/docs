---
titulo: "Objetos: datos con nombre"
tecnologia: javascript
categoria: Arrays y objetos
modulo: arrays-objetos
orden: 2
descripcion: "Cómo agrupar datos relacionados bajo un mismo nombre, con propiedades a las que accedés por su clave."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - javascript
  - objetos
leccionesRelacionadas:
  - arrays
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const usuario = {
    - id: "2"
      indent: 1
      codigo: |-
        nombre: 'Ana',
    - id: "3"
      indent: 1
      codigo: |-
        edad: 30,
    - id: "4"
      indent: 0
      codigo: |-
        };
    - id: "5"
      indent: 0
      codigo: |-
        console.log(usuario.nombre);
    - id: "6"
      indent: 0
      codigo: |-
        usuario.email = 'ana@mail.com';
  explicaciones:
    - para: "1"
      tecnica: |-
        Un **objeto**: agrupa datos relacionados entre llaves `{ }`. Mientras el array es una lista (acceso por número), el objeto guarda datos **con nombre** (acceso por clave). Es la forma de representar "una cosa con varias características": un usuario, un producto, una orden.
      analogia: |-
        Es una ficha de cliente: un solo papel que junta nombre, edad, email. Todo lo de esa persona, bajo su ficha.
    - para: "2"
      tecnica: |-
        Una **propiedad**: un par `clave: valor`. La clave es `nombre`, el valor es `'Ana'`. Cada propiedad describe una característica del objeto y se separa de la siguiente con una coma.
      analogia: |-
        Es un campo de la ficha: "Nombre: Ana". Un rótulo y su dato.
    - para: "3"
      tecnica: |-
        Otra propiedad, `edad: 30`. Un objeto puede tener todas las que necesite, de cualquier tipo (texto, número, booleano, incluso otros objetos o arrays).
      analogia: |-
        Otro campo de la misma ficha: "Edad: 30".
    - para: "4"
      tecnica: |-
        La llave cierra el objeto. Entre la `{` y esta `}` está toda la información de `usuario`, agrupada como una unidad.
      analogia: |-
        Cerrás la ficha del cliente: todos sus datos quedan juntos en un solo lugar.
    - para: "5"
      tecnica: |-
        Se accede a una propiedad con la **notación de punto**: `usuario.nombre` devuelve `'Ana'`. Es la forma más común de leer datos de un objeto. (También existe `usuario['nombre']`, útil cuando la clave es dinámica.)
      analogia: |-
        Es buscar un campo puntual en la ficha: "de este cliente, dame el nombre".
    - para: "6"
      tecnica: |-
        Asignar a una propiedad que no existía la **crea**: ahora `usuario` tiene también `email`. Los objetos son flexibles, se les pueden sumar propiedades después de creados. Combinados con arrays (un array de objetos), modelás casi cualquier dato de una app real.
      analogia: |-
        Es agregarle un campo nuevo a la ficha: "ah, y anotale el email también".
---

El objeto agrupa datos **con nombre** entre llaves: cada propiedad es un par `clave: valor`, y accedés a ella con el punto (`usuario.nombre`). Si el array es "varios de lo mismo", el objeto es "una cosa con varias características". Juntos, un array de objetos, son la base para modelar los datos de cualquier aplicación.
