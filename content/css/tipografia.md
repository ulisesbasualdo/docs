---
titulo: "Tipografía: familia, tamaño y altura de línea"
tecnologia: css
categoria: Tipografía y color
modulo: tipografia-color
orden: 2
descripcion: "Las propiedades que definen cómo se lee el texto: la fuente, su tamaño, su peso y el espacio entre renglones."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - css
  - tipografia
leccionesRelacionadas:
  - color
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        body {
    - id: "2"
      indent: 1
      codigo: |-
        font-family: system-ui, sans-serif;
    - id: "3"
      indent: 1
      codigo: |-
        font-size: 1rem;
    - id: "4"
      indent: 1
      codigo: |-
        line-height: 1.6;
    - id: "5"
      indent: 0
      codigo: |-
        }
    - id: "6"
      indent: 0
      codigo: |-
        h1 { font-weight: 700; }
  explicaciones:
    - para: "1"
      tecnica: |-
        Aplicamos la tipografía al `body`, así **toda la página la hereda** y no hay que repetirla en cada elemento. La tipografía base se define una vez, acá.
      analogia: |-
        Es elegir la letra de toda la cartelería del local de una sola vez, en la entrada.
    - para: "2"
      tecnica: |-
        `font-family` con una **lista de respaldo**: el navegador usa la primera disponible. `system-ui` toma la fuente nativa del sistema del visitante (rápida, familiar, cero descarga); si no existe, cae a cualquier `sans-serif`. Para una fuente propia se suma una web font, pero `system-ui` es un default excelente.
      analogia: |-
        Es decir "usá la letra de la casa; si no la tenés, cualquier letra sin adornos": siempre hay un plan B.
    - para: "3"
      tecnica: |-
        `font-size: 1rem` fija el tamaño base relativo a la raíz (16px por defecto). Usar `rem` y no `px` deja que el texto escale si el usuario agranda la letra del navegador. El resto de los tamaños se piensan en relación a este.
      analogia: |-
        Es el tamaño de letra estándar de la cartelería: el punto de referencia del que cuelgan los demás.
    - para: "4"
      tecnica: |-
        `line-height: 1.6` es el espacio entre renglones, y va **sin unidad**: significa 1.6 veces el tamaño de la fuente. Un valor entre 1.4 y 1.7 hace el texto mucho más legible. Sin unidad es lo correcto, porque escala junto con cada `font-size`.
      analogia: |-
        Es el interlineado de un texto bien tipeado: ni apretado ni desparramado, cómodo para el ojo.
    - para: "5"
      tecnica: |-
        Cierra la regla del `body`. Con familia, tamaño e interlineado definidos en un solo lugar, toda la página arranca con una tipografía coherente.
      analogia: |-
        Cerrás las reglas generales de cartelería: todo el local hereda esa base.
    - para: "6"
      tecnica: |-
        `font-weight: 700` pone el `<h1>` en negrita. El peso va de 100 a 900: 400 es normal, 700 es negrita (`bold`). Es lo que da contraste entre un título y el texto, sin cambiar de fuente.
      analogia: |-
        Es usar la versión más gruesa de la misma letra para el cartel principal: resalta sin desentonar.
---

La tipografía se controla con pocas propiedades clave: `font-family` (con lista de respaldo), `font-size` en `rem`, `line-height` sin unidad para un interlineado legible, y `font-weight` para el contraste. Definila en el `body` para que toda la página la herede, y ajustá solo los casos especiales.
