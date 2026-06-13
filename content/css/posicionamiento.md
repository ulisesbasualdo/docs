---
titulo: "Posicionamiento: relative, absolute, fixed y sticky"
tecnologia: css
categoria: Layout con Flexbox
modulo: layout-flexbox
orden: 2
descripcion: "Cómo sacar un elemento del flujo normal para fijarlo, superponerlo o hacerlo pegarse al hacer scroll."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - css
  - position
  - layout
leccionesRelacionadas:
  - flexbox-fundamentos
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .tarjeta { position: relative; }
    - id: "2"
      indent: 0
      codigo: |-
        .insignia { position: absolute; top: 8px; right: 8px; }
    - id: "3"
      indent: 0
      codigo: |-
        .header { position: sticky; top: 0; }
  explicaciones:
    - para: "1"
      tecnica: |-
        `position: relative` casi no mueve el elemento, pero hace algo clave: lo convierte en **punto de referencia** para los hijos posicionados de forma absoluta. Es el primer paso del patrón "insignia sobre una tarjeta".
      analogia: |-
        Es declarar la tarjeta como "el tablero" sobre el que después vamos a pinchar cosas con chinches.
    - para: "2"
      tecnica: |-
        `position: absolute` **saca el elemento del flujo** (deja de empujar a los demás) y lo ubica respecto del ancestro posicionado más cercano, en este caso `.tarjeta`. `top: 8px; right: 8px` lo clava en la esquina superior derecha. Así se ponen insignias de "Nuevo" o "Oferta" sobre una tarjeta de producto.
      analogia: |-
        Es la chinche que clava un cartelito de "Oferta" en la esquina del tablero: queda flotando encima, sin correr lo demás.
    - para: "3"
      tecnica: |-
        `position: sticky` es híbrido: el elemento se comporta normal hasta que, al hacer scroll, llega al límite que marcás (`top: 0`) y ahí **se pega**, quedando visible mientras seguís bajando. Es lo que usan los encabezados que acompañan el scroll.
      analogia: |-
        Es el cartel que viaja con vos: sube con la página hasta el borde y ahí se queda pegado arriba mientras seguís recorriendo el local.
      nota: |-
        Falta `position: fixed`, parecido a `sticky` pero se fija respecto de la **ventana** y se queda ahí siempre (ideal para un botón flotante de WhatsApp). Y `static` es el valor por defecto: el elemento sigue el flujo normal, sin posicionamiento.
---

`position` te deja romper el flujo normal cuando lo necesitás: `relative` como ancla de referencia, `absolute` para superponer respecto de ese ancla, `fixed` para fijar a la ventana y `sticky` para que algo se pegue al hacer scroll. Para la disposición general usá Flexbox o Grid; `position` es para los casos puntuales de superposición.
