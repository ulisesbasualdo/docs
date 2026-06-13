---
titulo: "El modelo de caja"
tecnologia: css
categoria: El modelo de caja
modulo: cajas
orden: 1
descripcion: "Todo elemento es una caja con contenido, padding, borde y margen. Y el truco de box-sizing que evita dolores de cabeza."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - css
  - box-model
leccionesRelacionadas:
  - display
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .tarjeta {
    - id: "2"
      indent: 1
      codigo: |-
        box-sizing: border-box;
    - id: "3"
      indent: 1
      codigo: |-
        width: 300px;
    - id: "4"
      indent: 1
      codigo: |-
        padding: 16px;
    - id: "5"
      indent: 1
      codigo: |-
        border: 1px solid #ccc;
    - id: "6"
      indent: 1
      codigo: |-
        margin: 8px;
    - id: "7"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Una tarjeta. Pensá cada elemento de la página como una **caja** con cuatro capas, de adentro hacia afuera: el contenido, el `padding`, el `border` y el `margin`. Toda la disposición de CSS gira alrededor de este modelo.
      analogia: |-
        Es un cuadro colgado: la foto (contenido), el espacio entre la foto y el marco (padding), el marco (border) y el espacio libre hasta el cuadro de al lado (margin).
    - para: "2"
      tecnica: |-
        `box-sizing: border-box` cambia cómo se calcula el ancho: hace que el `width` incluya el padding y el borde, en vez de sumarse aparte. Sin esto, una caja de `300px` con padding termina midiendo más de 300 y todo se descuadra. Ponelo siempre.
      analogia: |-
        Es decir "los 300px incluyen el marco y el espacio interno": pedís un cuadro de 300 y mide 300 colgado, no 332 por sorpresa.
    - para: "3"
      tecnica: |-
        `width: 300px` define el ancho. Gracias al `border-box` de arriba, estos 300px son el total visible de la caja, padding y borde adentro.
      analogia: |-
        Es el ancho total del cuadro ya colgado, marco incluido.
    - para: "4"
      tecnica: |-
        `padding: 16px` es el espacio **interno**, entre el contenido y el borde, por los cuatro lados. Le da aire al texto para que no toque el marco.
      analogia: |-
        Es el paspartú: ese margen blanco entre la foto y el marco que la hace respirar.
    - para: "5"
      tecnica: |-
        `border: 1px solid #ccc` es el borde: grosor, estilo y color en una sola línea. Rodea al padding.
      analogia: |-
        Es el marco propiamente dicho: su grosor y su color.
    - para: "6"
      tecnica: |-
        `margin: 8px` es el espacio **externo**, entre esta caja y las de alrededor. A diferencia del padding, está afuera del borde y no tiene color de fondo.
      analogia: |-
        Es el espacio libre en la pared entre este cuadro y el de al lado: separa, pero no es parte del cuadro.
    - para: "7"
      tecnica: |-
        Cierra la regla. La clave a recordar: **padding adentro, margin afuera**, y `box-sizing: border-box` para que el `width` se comporte como esperás.
      analogia: |-
        Cerrás la ficha del cuadro: foto, paspartú, marco y aire alrededor, en ese orden.
---

Cada elemento de una página es una caja con cuatro capas: contenido, `padding` (adentro), `border` y `margin` (afuera). Entender este modelo es entender cómo ocupa espacio cada cosa. Y `box-sizing: border-box` es el ajuste que hace que los anchos no te jueguen sucio.
