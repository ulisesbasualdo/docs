---
titulo: "Unidades: px, rem, % y viewport"
tecnologia: css
categoria: CSS básico
modulo: css-basico
orden: 3
descripcion: "Cuándo usar píxeles fijos y cuándo unidades relativas, para que tu diseño escale bien."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - css
  - basico
  - unidades
leccionesRelacionadas:
  - que-es-css
  - conectar-css-al-html
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .boton {
    - id: "2"
      indent: 1
      codigo: |-
        padding: 12px 24px;
    - id: "3"
      indent: 1
      codigo: |-
        font-size: 1rem;
    - id: "4"
      indent: 1
      codigo: |-
        max-width: 20rem;
    - id: "5"
      indent: 1
      codigo: |-
        width: 100%;
    - id: "6"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Una regla para un botón. Adentro vamos a mezclar unidades a propósito, para ver cuál conviene en cada caso.
      analogia: |-
        Es la orden de trabajo del botón: ahora elegimos en qué medidas damos cada instrucción.
    - para: "2"
      tecnica: |-
        `px` (píxeles) es una unidad **absoluta**: 12 son 12, fijos. Va bien para detalles que no deberían escalar, como el espaciado interno (`padding`) o un borde fino.
      analogia: |-
        Es medir en centímetros exactos: el grosor del marco de un cuadro no cambia aunque agrandes la pared.
    - para: "3"
      tecnica: |-
        `rem` es **relativa** al tamaño de letra raíz del sitio (16px por defecto), así que `1rem` = 16px. Si el usuario agranda la letra en su navegador, todo lo medido en `rem` escala con él. Es la unidad recomendada para tipografía y la mayoría de los tamaños.
      analogia: |-
        Es medir "en cuántas baldosas": si cambia el tamaño de la baldosa base, todo se reacomoda en proporción solo.
    - para: "4"
      tecnica: |-
        `max-width: 20rem` pone un techo: el botón nunca será más ancho que 20rem, sin importar el espacio disponible. Evita que en pantallas grandes los elementos se estiren hasta quedar feos.
      analogia: |-
        Es decir "este mueble no puede medir más de tres metros, aunque la pared sea enorme".
    - para: "5"
      tecnica: |-
        `%` es relativa al **contenedor padre**. `width: 100%` hace que el botón ocupe todo el ancho disponible. Combinado con el `max-width` de arriba: ocupa todo el ancho, pero hasta un límite. Existen además `vw`/`vh`, relativas al tamaño de la ventana.
      analogia: |-
        Es decir "ocupá toda la pared que tengas" (`100%`), pero con la regla anterior poniéndole un tope.
    - para: "6"
      tecnica: |-
        Cierra la regla. La idea clave: `px` para lo que debe quedar fijo, `rem` para lo que debe escalar con la tipografía, `%` y unidades de viewport para adaptarse al espacio.
      analogia: |-
        Cerrás la orden de trabajo: cada medida en la unidad que mejor se banca los cambios.
---

Elegir bien la unidad es la diferencia entre un diseño que escala y uno que se rompe. Regla práctica: `rem` para tamaños y tipografía (respeta la accesibilidad), `px` para detalles que no deben escalar, y `%` o `vw`/`vh` para adaptarse al espacio disponible.
