---
titulo: "Variables CSS (custom properties)"
tecnologia: css
categoria: Arquitectura CSS mantenible
modulo: arquitectura
orden: 1
descripcion: "Guardar valores reutilizables (colores, espacios) en un solo lugar para mantener un sistema de diseño coherente."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - css
  - variables
  - arquitectura
leccionesRelacionadas:
  - organizar-con-bem
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        :root {
    - id: "2"
      indent: 1
      codigo: |-
        --color-marca: #1a7f37;
    - id: "3"
      indent: 1
      codigo: |-
        --espacio: 1rem;
    - id: "4"
      indent: 0
      codigo: |-
        }
    - id: "5"
      indent: 0
      codigo: |-
        .boton { background: var(--color-marca); padding: var(--espacio); }
  explicaciones:
    - para: "1"
      tecnica: |-
        `:root` es un selector que apunta al elemento raíz del documento (el `<html>`). Definir variables acá las hace **globales**: disponibles en toda la página. Es el lugar habitual para el sistema de diseño.
      analogia: |-
        Es el tablero central de la fábrica: lo que configurás acá rige para todas las máquinas.
    - para: "2"
      tecnica: |-
        Una **variable CSS** (o custom property): se declara con dos guiones, `--color-marca`, y guarda un valor, acá el verde de la marca. El nombre lo elegís vos. La gracia: si mañana cambia el color de marca, lo tocás en **un solo lugar** y se actualiza en toda la página.
      analogia: |-
        Es anotar "color oficial de la marca = este verde" en el tablero central: todas las máquinas lo consultan, y si lo cambiás ahí, cambian todas.
    - para: "3"
      tecnica: |-
        Otra variable, `--espacio`, con una medida base de espaciado. Guardar los espacios en variables da **ritmo visual consistente**: todo usa múltiplos del mismo valor, en vez de números sueltos y arbitrarios.
      analogia: |-
        Es definir "unidad de separación estándar = 1rem" en el tablero: todo el taller mide con la misma regla.
    - para: "4"
      tecnica: |-
        Cierra el bloque `:root`. Las variables ya están definidas y listas para usarse en cualquier regla de la hoja.
      analogia: |-
        Cerrás el tablero central: la configuración quedó cargada.
    - para: "5"
      tecnica: |-
        Para **usar** una variable se llama con `var(--nombre)`. Acá el botón toma su fondo de `--color-marca` y su padding de `--espacio`. Si actualizás esas variables, el botón (y todo lo que las use) cambia solo. Es la base de los temas claro/oscuro y de cualquier sistema de diseño serio.
      analogia: |-
        Es la máquina consultando el tablero: "pintame con el color de marca y separá con la unidad estándar". No tiene los valores fijos: los pregunta.
---

Las variables CSS (`--nombre`, usadas con `var()`) centralizan los valores que se repiten: colores, espacios, tamaños. Definidas en `:root`, son globales y permiten cambiar todo el aspecto desde un solo lugar. Son el cimiento de un sistema de diseño coherente y de los temas claro/oscuro.
