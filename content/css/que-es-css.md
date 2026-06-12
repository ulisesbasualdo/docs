---
titulo: "Que es CSS y tu primera regla"
tecnologia: css
categoria: CSS basico
modulo: css-basico
orden: 1
descripcion: "CSS es el lenguaje que le da estilo al HTML. Aprende la anatomia de una regla: selector, propiedad y valor."
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
        Esto es el comienzo de una **regla CSS**. La palabra `h1` es el **selector**: dice a que elementos del HTML se les va a aplicar el estilo, en este caso a todos los titulos `<h1>` de la pagina. La llave `{` abre el bloque de declaraciones, la lista de estilos que vamos a aplicar.
      analogia: |-
        Si el HTML es la casa construida, CSS es el equipo de pintores y decoradores. El selector es la orden de trabajo: "todo lo que sea puerta principal" (`h1`). La llave abierta es abrir la lata de pintura: ahora viene la lista de que hacerle.
    - para: "2"
      tecnica: |-
        Esta es una **declaracion**, la unidad minima de estilo. Tiene dos partes separadas por dos puntos: la **propiedad** (`color`, que controla el color del texto) y el **valor** (`darkblue`, azul oscuro). El punto y coma final cierra la declaracion, igual que un punto cierra una oracion. Sin el punto y coma, CSS se confunde con la declaracion siguiente.
      analogia: |-
        Es una instruccion puntual de la orden de trabajo: "pintura: azul oscuro". Propiedad es QUE aspecto tocas, valor es COMO lo dejas. El punto y coma es el renglon terminado en la lista del pintor.
    - para: "3"
      tecnica: |-
        Otra declaracion en la misma regla: `font-size` controla el tamanio de la letra. El valor `2rem` significa "dos veces el tamanio base del sitio" (el `rem` es una unidad relativa; si el sitio tiene letra base de 16 pixeles, esto son 32). Usar `rem` en vez de pixeles fijos hace que tu sitio respete el tamanio de letra que el usuario configuro en su navegador, lo cual es una buena practica de accesibilidad.
      analogia: |-
        Segunda instruccion de la misma orden: "letrero: el doble de grande que el estandar de la casa". Fijate que no decis "32 centimetros exactos": decis "el doble del estandar", asi si alguien cambia el estandar, todo escala en proporcion.
    - para: "4"
      tecnica: |-
        La llave de cierre termina la regla. Todo lo que quedo entre `{` y `}` se aplica a los elementos que matchea el selector. Una hoja de estilos real es una sucesion de muchas reglas como esta, una tras otra.
      analogia: |-
        Es cerrar la lata de pintura y dar por terminada esa orden de trabajo. La proxima regla sera otra orden, para otra parte de la casa.
---

HTML define **que es** cada cosa (un titulo, un parrafo, un boton). CSS define **como se ve**: colores, tamanios, espacios, disposicion. Esta es la anatomia de una regla CSS, la pieza que vas a escribir miles de veces.
