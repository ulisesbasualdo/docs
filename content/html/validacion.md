---
titulo: "Validación sin JavaScript"
tecnologia: html
categoria: Formularios
modulo: formularios
orden: 3
descripcion: "El navegador valida formularios solo, con atributos: campos obligatorios, rangos y formatos."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - formularios
  - validacion
leccionesRelacionadas:
  - formulario-basico
  - tipos-de-input
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <form>
    - id: "2"
      indent: 1
      codigo: |-
        <input type="email" name="email" required />
    - id: "3"
      indent: 1
      codigo: |-
        <input type="number" name="edad" min="18" max="120" />
    - id: "4"
      indent: 1
      codigo: |-
        <button>Enviar</button>
    - id: "5"
      indent: 0
      codigo: |-
        </form>
  explicaciones:
    - para: "1"
      tecnica: |-
        Abrimos el formulario. La validación que viene es **nativa**: el navegador la hace solo, antes de enviar, sin que escribas JavaScript. Frena el envío y muestra el mensaje de error él mismo.
      analogia: |-
        Es el recepcionista que revisa el formulario antes de aceptarlo: si algo falta o está mal, te lo devuelve en el mostrador.
    - para: "2"
      tecnica: |-
        El atributo `required` hace el campo **obligatorio**: si está vacío, el navegador no deja enviar y avisa. Combinado con `type="email"`, además exige que tenga forma de correo (con arroba y dominio).
      analogia: |-
        Es el casillero marcado con asterisco rojo: sin completarlo, el recepcionista no te recibe el formulario.
    - para: "3"
      tecnica: |-
        `type="number"` solo acepta números, y `min="18"` / `max="120"` fijan el rango permitido. Si alguien pone 15, el navegador lo rechaza y explica el límite. Todo declarativo, en el HTML.
      analogia: |-
        Es la regla "solo mayores de 18": el recepcionista mira la edad y, si no entra en el rango, no te deja pasar.
    - para: "4"
      tecnica: |-
        El botón de envío. Cuando lo tocás, el navegador primero corre **todas** las validaciones de los campos. Solo si pasan, envía. Si no, se detiene en el primer campo con error y lo señala.
      analogia: |-
        Es apretar "Despachar": antes de mandarlo, el recepcionista revisa todo de un saque.
    - para: "5"
      tecnica: |-
        Cierra el formulario. Importante: la validación nativa mejora la experiencia, pero **no reemplaza** la validación en el servidor. Un usuario malicioso puede saltearla, así que el servidor siempre debe revalidar.
      analogia: |-
        El recepcionista filtra lo obvio en el mostrador, pero la oficina de atrás igual revisa todo nuevo: nunca confíes solo en el filtro de la entrada.
---

HTML trae una capa de validación gratis: `required`, `min`, `max`, `type` y otros atributos hacen que el navegador frene envíos inválidos y avise, sin JavaScript. Es la primera línea de defensa y mejora la experiencia, pero recordá: el servidor siempre tiene que volver a validar.
