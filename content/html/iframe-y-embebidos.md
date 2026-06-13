---
titulo: "Incrustar contenido con iframe"
tecnologia: html
categoria: Multimedia e incrustados
modulo: multimedia
orden: 2
descripcion: "Cómo embeber un mapa, un video de YouTube u otra página dentro de la tuya, de forma accesible y liviana."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - multimedia
  - iframe
leccionesRelacionadas:
  - audio-y-video
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <iframe src="https://maps.example.com/local" title="Mapa de cómo llegar al local" width="600" height="450" loading="lazy"></iframe>
  explicaciones:
    - para: "1"
      tecnica: |-
        Un `<iframe>` (de _inline frame_) incrusta **otra página completa** dentro de la tuya: un mapa, un video de YouTube, un reproductor de Spotify. El `src` es la página embebida. El `title` es obligatorio para accesibilidad: describe qué hay adentro, porque el lector de pantalla no puede entrar a leerlo. `width` y `height` definen el tamaño del recuadro, y `loading="lazy"` hace que el iframe se cargue recién cuando el usuario se acerca a él, lo que acelera la carga inicial de la página.
      analogia: |-
        Es poner un televisor sintonizado en otro canal dentro de tu local: el `src` es el canal que mostrás, el `title` es el cartelito que dice qué se ve (para quien no puede mirar la pantalla), las medidas son el tamaño del aparato, y `loading="lazy"` es no prenderlo hasta que alguien se acerca, para no gastar luz de gusto.
      nota: |-
        Cuidado con qué embebés: un iframe carga código de otro sitio dentro del tuyo. Embebé solo fuentes en las que confiás, y para casos sensibles existe el atributo `sandbox`, que restringe lo que la página embebida puede hacer.
---

El `<iframe>` es una ventana a otra página dentro de la tuya. Es la forma estándar de sumar mapas, videos o widgets de terceros. Dos cosas no se negocian: un `title` que lo describa (accesibilidad) y `loading="lazy"` para no penar la carga inicial. Y siempre embebé fuentes confiables.
