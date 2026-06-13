---
titulo: "Audio y video"
tecnologia: html
categoria: Multimedia e incrustados
modulo: multimedia
orden: 1
descripcion: "Reproducir video y audio nativos del navegador, con controles, portada y un mensaje de respaldo."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - multimedia
leccionesRelacionadas:
  - iframe-y-embebidos
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <video src="/demo.mp4" controls width="640" poster="/portada.jpg">
    - id: "2"
      indent: 1
      codigo: |-
        Tu navegador no puede reproducir este video.
    - id: "3"
      indent: 0
      codigo: |-
        </video>
    - id: "4"
      indent: 0
      codigo: |-
        <audio src="/aviso.mp3" controls></audio>
  explicaciones:
    - para: "1"
      tecnica: |-
        `<video>` reproduce video sin plugins. `src` es el archivo, `controls` muestra los botones de play, volumen y barra (sin ese atributo no aparecen). `poster` es la imagen de portada que se ve antes de darle play, y `width` fija el ancho.
      analogia: |-
        Es la tele del local mostrando un demo: `controls` es el control remoto a la vista, `poster` es la imagen congelada en pantalla mientras nadie aprieta play.
    - para: "2"
      tecnica: |-
        El texto **entre** las etiquetas de `<video>` es el respaldo: solo se muestra si el navegador no puede reproducir el video. En un navegador moderno nunca se ve; es una red de seguridad.
      analogia: |-
        Es el cartelito "TV fuera de servicio" que solo aparece si la pantalla no prende: si funciona, nadie lo lee.
    - para: "3"
      tecnica: |-
        Cierra el `<video>`. A diferencia de `<img>`, el video sí tiene etiqueta de cierre porque puede tener contenido adentro (el texto de respaldo y, en casos avanzados, subtítulos y fuentes alternativas).
      analogia: |-
        Apagás la tele: el bloque del video termina acá.
    - para: "4"
      tecnica: |-
        `<audio>` funciona igual que `<video>` pero para sonido: `src` y `controls` para mostrar el reproductor. Sirve para un aviso, un podcast o música. Acá está vacío entre etiquetas, así que no lleva texto de respaldo.
      analogia: |-
        Es el parlante del local con su botón de play a la vista: misma lógica que la tele, pero solo sonido.
---

El navegador trae reproductores de audio y video incorporados: con `<video>` y `<audio>` más el atributo `controls`, mostrás contenido multimedia sin librerías externas. Acordate del `poster` para el video y de poner siempre un mensaje de respaldo entre las etiquetas.
