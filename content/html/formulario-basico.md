---
titulo: "Tu primer formulario"
tecnologia: html
categoria: Formularios
modulo: formularios
orden: 1
descripcion: "Las cuatro piezas de todo formulario: form, label, input y button, con un alta de suscripción real."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - formularios
leccionesRelacionadas:
  - tipos-de-input
  - validacion
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <form action="/suscribir" method="post">
    - id: "2"
      indent: 1
      codigo: |-
        <label for="email">Tu email</label>
    - id: "3"
      indent: 1
      codigo: |-
        <input id="email" name="email" type="email" />
    - id: "4"
      indent: 1
      codigo: |-
        <button type="submit">Suscribirme</button>
    - id: "5"
      indent: 0
      codigo: |-
        </form>
  explicaciones:
    - para: "1"
      tecnica: |-
        `<form>` envuelve un formulario. `action` dice **a dónde** se envían los datos y `method="post"` **cómo**: `post` manda los datos en el cuerpo del pedido (lo correcto para crear o enviar algo), a diferencia de `get`, que los pondría en la URL.
      analogia: |-
        Es el sobre de un formulario en papel: `action` es la dirección a la que lo mandás y `method` es si lo despachás cerrado por correo (`post`) o lo dejás a la vista en el mostrador (`get`).
    - para: "2"
      tecnica: |-
        `<label>` es la etiqueta de texto de un campo. Su atributo `for` debe coincidir con el `id` del input que describe. Eso conecta los dos: al tocar el texto, se activa el campo, y el lector de pantalla lee la etiqueta correcta. Un input sin label es un error de accesibilidad.
      analogia: |-
        Es el rótulo "Email" impreso justo arriba del casillero del formulario en papel: sin rótulo, no sabés qué va ahí.
    - para: "3"
      tecnica: |-
        `<input>` es el campo donde el usuario escribe. `type="email"` le dice al navegador que espere un correo (y en celulares muestra el teclado con la arroba). `name="email"` es la clave con la que el dato viaja al servidor. El `id` es lo que enlaza con el `for` del label.
      analogia: |-
        Es el casillero en blanco del formulario: `type` define qué clase de dato acepta, `name` es el nombre del campo que lee quien recibe el sobre.
    - para: "4"
      tecnica: |-
        `<button type="submit">` es el botón que **envía** el formulario. Al tocarlo, el navegador junta todos los campos y los manda al `action`. El `type="submit"` es lo que dispara el envío.
      analogia: |-
        Es el botón "Despachar" del mostrador: junta todo lo que completaste y lo manda.
    - para: "5"
      tecnica: |-
        `</form>` cierra el formulario. Solo los campos que estén **adentro** de estas etiquetas se envían al tocar el botón.
      analogia: |-
        Es cerrar el sobre: solo viaja lo que metiste adentro.
---

Todo formulario, por más grande que sea, se arma con estas piezas: `<form>` que envuelve y define a dónde van los datos, `<label>` que rotula, `<input>` que recibe y `<button>` que envía. Y una regla que no se negocia: **cada input con su label**.
