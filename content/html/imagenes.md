---
titulo: "Imágenes y figuras"
tecnologia: html
categoria: Enlaces e imágenes
modulo: enlaces-imagenes
orden: 2
descripcion: "Mostrar imágenes con texto alternativo, evitar saltos de layout y agrupar una imagen con su epígrafe."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - html
  - imagenes
  - accesibilidad
leccionesRelacionadas:
  - enlaces
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <img src="/productos/cafe.jpg" alt="Bolsa de café de 500 gramos" width="300" height="200" />
    - id: "2"
      indent: 0
      codigo: |-
        <figure>
    - id: "3"
      indent: 1
      codigo: |-
        <img src="/local.jpg" alt="Fachada de Tienda La Esquina" />
    - id: "4"
      indent: 1
      codigo: |-
        <figcaption>Nuestro local en la esquina de siempre.</figcaption>
    - id: "5"
      indent: 0
      codigo: |-
        </figure>
  explicaciones:
    - para: "1"
      tecnica: |-
        La etiqueta `<img>`. El `src` dice qué imagen cargar y el `alt` la describe en palabras para quien no la ve. Los atributos `width` y `height` le avisan al navegador el tamaño real **antes** de descargarla, así reserva el lugar y la página no "salta" cuando la imagen termina de cargar.
      analogia: |-
        Es enmarcar una foto: `src` es la foto, `alt` es la plaquita que la describe para un visitante con los ojos vendados, y `width`/`height` son las medidas del marco que ya dejás colgado en la pared aunque la foto todavía no llegó.
    - para: "2"
      tecnica: |-
        `<figure>` agrupa un contenido autónomo (una imagen, un diagrama) junto con su explicación. Es semántico: le dice al navegador "esta imagen y su texto van juntos como una unidad".
      analogia: |-
        Es el marco con plaquita de un cuadro en un museo: la obra y su cartelito son una sola pieza.
    - para: "3"
      tecnica: |-
        La imagen, ahora hija de la `<figure>`. Su `alt` describe la fachada. Va indentada porque vive dentro del grupo.
      analogia: |-
        Es la obra dentro del marco del museo.
    - para: "4"
      tecnica: |-
        `<figcaption>` es el **epígrafe** de la figura: el texto que la acompaña y se muestra visiblemente, a diferencia del `alt`, que es para quien no ve la imagen. Una figura puede tener los dos.
      analogia: |-
        Es la plaquita visible debajo del cuadro, la que lee todo el mundo en la pared.
    - para: "5"
      tecnica: |-
        `</figure>` cierra el grupo. Imagen y epígrafe quedan asociados de forma explícita, no solo "uno cerca del otro".
      analogia: |-
        Es cerrar el marco: obra y plaquita, una unidad que se cuelga junta.
---

Una imagen sin `alt` es invisible para los lectores de pantalla y para Google. Una imagen sin `width`/`height` hace saltar el layout al cargar. Y cuando una imagen necesita un pie de foto, `<figure>` con `<figcaption>` los une de forma semántica. Tres hábitos que separan al principiante del que ya sabe.
