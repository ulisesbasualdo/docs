---
titulo: "Énfasis y citas"
tecnologia: html
categoria: Texto y contenido
modulo: texto
orden: 2
descripcion: "Cómo marcar texto importante, citas y términos sin caer en usar etiquetas solo por su aspecto visual."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - html
  - texto
  - semantica
leccionesRelacionadas:
  - encabezados-y-parrafos
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <p>El pago es <strong>solo en efectivo</strong>.</p>
    - id: "2"
      indent: 0
      codigo: |-
        <p>Hoy <em>no</em> hacemos envíos.</p>
    - id: "3"
      indent: 0
      codigo: |-
        <blockquote>La mejor pizza del barrio.</blockquote>
    - id: "4"
      indent: 0
      codigo: |-
        <p>Una <abbr title="Aplicación">app</abbr> para pedir.</p>
  explicaciones:
    - para: "1"
      tecnica: |-
        `<strong>` marca texto de **mucha importancia**. El navegador lo muestra en negrita, pero lo que importa es el significado: un lector de pantalla lo lee con más énfasis. No lo uses solo para "poner en negrita": para eso existe el CSS.
      analogia: |-
        Es la parte del contrato que el vendedor te subraya y te dice "esto leelo sí o sí". No es decoración: es una advertencia.
    - para: "2"
      tecnica: |-
        `<em>` da **énfasis** (de _emphasis_), ese matiz que en el habla cambia el sentido de una frase. Se muestra en itálica. Acá, enfatizar el "no" deja claro que hoy no hay envíos, sin lugar a duda.
      analogia: |-
        Es cuando alguien recalca una palabra al hablar: "hoy NO hay envíos". El tono cambia el mensaje.
    - para: "3"
      tecnica: |-
        `<blockquote>` envuelve una **cita** larga o destacada, algo que dijo otra fuente. El navegador suele indentarla. Sirve para reseñas, testimonios o frases citadas.
      analogia: |-
        Es el testimonio de un cliente enmarcado en la pared del local: se nota que esas palabras son de otra persona, no del dueño.
    - para: "4"
      tecnica: |-
        `<abbr>` marca una abreviatura, y su atributo `title` guarda el significado completo. Al pasar el cursor, el navegador muestra "Aplicación". Ayuda a quien no conoce la sigla y a los lectores de pantalla.
      analogia: |-
        Es la nota al pie que aclara qué significa una sigla: el texto sigue corto, pero el significado completo está a un paso.
---

HTML no es para "poner negrita o itálica": es para decir **qué significa** cada texto. `<strong>` es importancia, `<em>` es énfasis, `<blockquote>` es una cita. El aspecto visual lo decide después el CSS; el significado lo define el HTML.
