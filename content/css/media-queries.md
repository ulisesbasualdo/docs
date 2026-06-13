---
titulo: "Media queries: adaptar a cada pantalla"
tecnologia: css
categoria: Diseño responsive
modulo: responsive
orden: 1
descripcion: "Cómo cambiar estilos según el ancho de la pantalla, con el enfoque mobile-first que recomienda la industria."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - css
  - responsive
  - media-queries
leccionesRelacionadas:
  - diseno-fluido
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .contenedor { padding: 1rem; }
    - id: "2"
      indent: 0
      codigo: |-
        @media (min-width: 48rem) {
    - id: "3"
      indent: 1
      codigo: |-
        .contenedor { padding: 3rem; }
    - id: "4"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Los estilos **base**, pensados primero para el celular: un padding chico. Este es el enfoque **mobile-first**: escribís lo que sirve en la pantalla más chica, y después agregás lo que mejora en las grandes. Es más simple y rinde mejor que al revés.
      analogia: |-
        Es diseñar primero la vidriera de un local chico: lo esencial entra; después, si tenés un local más grande, sumás.
    - para: "2"
      tecnica: |-
        `@media (min-width: 48rem)` es una **media query**: un bloque de CSS que solo se aplica si se cumple la condición, acá "la pantalla mide al menos 48rem de ancho" (unos 768px, una tablet). Usar `rem` en el breakpoint, en vez de px, respeta el zoom del usuario.
      analogia: |-
        Es la instrucción "esto vale solo si la pared mide más de tal ancho": en paredes chicas se ignora.
    - para: "3"
      tecnica: |-
        Adentro de la media query, **sobreescribimos** el padding a uno más generoso. En pantallas chicas esta regla no existe; a partir de 48rem, pisa a la base. Solo cambiamos lo que hace falta, no repetimos todo.
      analogia: |-
        Es decir "en el local grande, dejá más espacio entre las góndolas": solo ajustás eso, lo demás queda igual.
    - para: "4"
      tecnica: |-
        Cierra la media query. Podés tener varias, con distintos breakpoints, para ir adaptando el diseño a tablet, escritorio, etc. Cada una solo agrega los ajustes de su rango.
      analogia: |-
        Cerrás el bloque de "instrucciones para locales grandes". Podés tener un set por cada tamaño de local.
---

Las media queries son la base del diseño responsive: aplican estilos según condiciones de la pantalla, típicamente el ancho. El enfoque **mobile-first** (estilos base para lo chico, `@media (min-width)` para agregar en lo grande) es el estándar de la industria porque es más simple y carga menos en los celulares.
