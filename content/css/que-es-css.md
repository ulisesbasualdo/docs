---
titulo: "Qué es CSS y tu primera regla"
tecnologia: css
categoria: CSS básico
modulo: css-basico
orden: 1
descripcion: "CSS es el lenguaje que le da estilo al HTML. Aprende la anatomía de una regla: selector, propiedad y valor."
youtubeId: ""
publicadoEn: 2026-06-12
nivel: introductorio
tags:
  - css
  - basico
leccionesRelacionadas:
  - conectar-css-al-html
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        h1 {
    - id: "2"
      indent: 1
      codigo: |-
        color: darkblue;
    - id: "3"
      indent: 1
      codigo: |-
        font-size: 2rem;
    - id: "4"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Esto es el comienzo de una **regla CSS**. La palabra `h1` es el **selector**: dice a qué elementos del HTML se les va a aplicar el estilo, en este caso a todos los títulos `<h1>` de la página. La llave `{` abre el bloque de declaraciones, la lista de estilos que vamos a aplicar.
      analogia: |-
        Si el HTML es la casa construida, CSS es el equipo de pintores y decoradores. El selector es la orden de trabajo: "todo lo que sea puerta principal" (`h1`). La llave abierta es abrir la lata de pintura: ahora viene la lista de qué hacerle.
    - para: "2"
      tecnica: |-
        Esta es una **declaración**, la unidad mínima de estilo. Tiene dos partes separadas por dos puntos: la **propiedad** (`color`, que controla el color del texto) y el **valor** (`darkblue`, azul oscuro). El punto y coma final cierra la declaración, igual que un punto cierra una oración. Sin el punto y coma, CSS se confunde con la declaración siguiente.
      analogia: |-
        Es una instrucción puntual de la orden de trabajo: "pintura: azul oscuro". Propiedad es QUÉ aspecto tocás, valor es CÓMO lo dejás. El punto y coma es el renglón terminado en la lista del pintor.
    - para: "3"
      tecnica: |-
        Otra declaración en la misma regla: `font-size` controla el tamaño de la letra. El valor `2rem` significa "dos veces el tamaño base del sitio" (el `rem` es una unidad relativa; si el sitio tiene letra base de 16 píxeles, esto son 32). Usar `rem` en vez de píxeles fijos hace que tu sitio respete el tamaño de letra que el usuario configuró en su navegador, lo cual es una buena práctica de accesibilidad.
      analogia: |-
        Segunda instrucción de la misma orden: "letrero: el doble de grande que el estándar de la casa". Fijate que no decís "32 centímetros exactos": decís "el doble del estándar", así si alguien cambia el estándar, todo escala en proporción.
    - para: "4"
      tecnica: |-
        La llave de cierre termina la regla. Todo lo que quedó entre `{` y `}` se aplica a los elementos que matchea el selector. Una hoja de estilos real es una sucesión de muchas reglas como esta, una tras otra.
      analogia: |-
        Es cerrar la lata de pintura y dar por terminada esa orden de trabajo. La próxima regla será otra orden, para otra parte de la casa.
---

HTML define **qué es** cada cosa (un título, un párrafo, un botón). CSS define **cómo se ve**: colores, tamaños, espacios, disposición. Esta es la anatomía de una regla CSS, la pieza que vas a escribir miles de veces.
