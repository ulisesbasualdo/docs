---
titulo: "Tipos de campo"
tecnologia: html
categoria: Formularios
modulo: formularios
orden: 2
descripcion: "El mismo input cambia de comportamiento según su type, más las listas desplegables y las opciones."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - formularios
leccionesRelacionadas:
  - formulario-basico
  - validacion
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <input type="text" name="nombre" placeholder="Nombre y apellido" />
    - id: "2"
      indent: 0
      codigo: |-
        <input type="password" name="clave" />
    - id: "3"
      indent: 0
      codigo: |-
        <input type="checkbox" name="terminos" id="terminos" />
    - id: "4"
      indent: 0
      codigo: |-
        <select name="provincia">
    - id: "5"
      indent: 1
      codigo: |-
        <option value="ba">Buenos Aires</option>
    - id: "6"
      indent: 0
      codigo: |-
        </select>
  explicaciones:
    - para: "1"
      tecnica: |-
        `type="text"` es el campo más básico: una línea de texto libre. El `placeholder` es el texto gris de ejemplo que se ve mientras el campo está vacío y desaparece al escribir. Ojo: el placeholder **no** reemplaza al `<label>`.
      analogia: |-
        Es el casillero en blanco con un ejemplo escrito en lápiz: te orienta, pero se borra apenas escribís.
    - para: "2"
      tecnica: |-
        `type="password"` se ve igual que un texto, pero el navegador **oculta** lo que se escribe con puntitos. Es lo único que cambia respecto de `text`, y lo hace el navegador solo por poner ese `type`.
      analogia: |-
        Es el mismo casillero, pero con un vidrio esmerilado: vos escribís normal, los demás solo ven manchas.
    - para: "3"
      tecnica: |-
        `type="checkbox"` es una casilla de tildar: dos estados, marcada o no. Sirve para un sí/no, como aceptar los términos. Conviene darle un `id` para enlazarlo con su `<label>`.
      analogia: |-
        Es el cuadradito que tildás en un formulario de papel: o lo marcás o no.
    - para: "4"
      tecnica: |-
        `<select>` es una lista desplegable: el usuario elige una opción de varias. El `name` es la clave con la que se envía la elección. No es un `<input>`, es su propia etiqueta.
      analogia: |-
        Es el menú desplegable de "elegí tu provincia": una sola respuesta entre muchas predefinidas.
    - para: "5"
      tecnica: |-
        Cada `<option>` es una opción de la lista. El `value="ba"` es lo que viaja al servidor cuando se elige; el texto "Buenos Aires" es lo que ve el usuario. Separar valor y texto te deja mostrar algo lindo y enviar algo cómodo de procesar.
      analogia: |-
        Es cada renglón del menú desplegable: lo que leés ("Buenos Aires") y el código interno ("ba") que se anota en el pedido.
    - para: "6"
      tecnica: |-
        Cierra el `<select>`. Adentro pueden ir todas las `<option>` que necesites; el navegador arma el desplegable solo.
      analogia: |-
        Cierra el menú de opciones: la lista quedó definida.
---

Cambiar el `type` de un input cambia su comportamiento, su teclado en el celular y su validación, todo sin una línea de JavaScript. Y cuando las opciones son fijas, `<select>` con `<option>` es más prolijo y accesible que escribirlas a mano.
