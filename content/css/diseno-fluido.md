---
titulo: "Diseño fluido con clamp y unidades de viewport"
tecnologia: css
categoria: Diseño responsive
modulo: responsive
orden: 2
descripcion: "Tamaños que se adaptan de forma continua, sin saltos entre breakpoints, usando clamp y unidades relativas a la ventana."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - css
  - responsive
leccionesRelacionadas:
  - media-queries
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .titulo {
    - id: "2"
      indent: 1
      codigo: |-
        font-size: clamp(1.5rem, 5vw, 3rem);
    - id: "3"
      indent: 0
      codigo: |-
        }
    - id: "4"
      indent: 0
      codigo: |-
        .hero { min-height: 100vh; }
  explicaciones:
    - para: "1"
      tecnica: |-
        Un título de portada. Las media queries cambian de a saltos en cada breakpoint; el **diseño fluido** ajusta de forma continua, sin escalones. Acá lo aplicamos al tamaño del título.
      analogia: |-
        En vez de tener "tres tamaños de cartel" según el local, el cartel se agranda y achica suave según el ancho exacto de la pared.
    - para: "2"
      tecnica: |-
        `clamp(mínimo, ideal, máximo)` fija un valor que crece con la pantalla pero con topes. Acá: nunca menos de `1.5rem`, idealmente `5vw` (5% del ancho de la ventana), nunca más de `3rem`. El título crece al ensanchar la ventana, pero nunca queda ni minúsculo ni gigante. Una línea reemplaza varias media queries.
      analogia: |-
        Es decir "que el cartel mida el 5% del ancho de la pared, pero nunca menos de tan chico ni más de tan grande": se adapta solo, dentro de límites sensatos.
    - para: "3"
      tecnica: |-
        Cierra la regla del título. `vw` (viewport width) es 1% del ancho de la ventana; existe también `vh` (viewport height), 1% del alto. Son las unidades que miran el tamaño de la pantalla, no el del contenedor.
      analogia: |-
        `vw` y `vh` son "porcentajes de la pared entera", no del mueble donde está colgado el cartel.
    - para: "4"
      tecnica: |-
        `min-height: 100vh` hace que la sección de portada ocupe **como mínimo el alto completo de la ventana**: el clásico "hero" a pantalla completa al cargar. Usamos `min-height` y no `height` para que, si el contenido es más alto, igual se vea entero.
      analogia: |-
        Es decir "esta sección ocupa al menos toda la pared visible de entrada": lo primero que ve quien llega, a pantalla completa.
---

El diseño fluido complementa a las media queries: en vez de saltar entre breakpoints, los tamaños se adaptan de forma continua. `clamp()` define un valor que escala con topes, y `vw`/`vh` lo atan al tamaño de la ventana. El resultado se ve bien en cualquier ancho, no solo en los que probaste.
