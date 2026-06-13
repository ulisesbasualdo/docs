---
titulo: "Organizar el CSS con BEM"
tecnologia: css
categoria: Arquitectura CSS mantenible
modulo: arquitectura
orden: 2
descripcion: "Una convención de nombres para clases que mantiene el CSS predecible y sin conflictos a medida que el proyecto crece."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - css
  - arquitectura
  - bem
leccionesRelacionadas:
  - variables-css
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .card { }
    - id: "2"
      indent: 0
      codigo: |-
        .card__titulo { }
    - id: "3"
      indent: 0
      codigo: |-
        .card__precio { }
    - id: "4"
      indent: 0
      codigo: |-
        .card--destacada { }
  explicaciones:
    - para: "1"
      tecnica: |-
        A medida que el CSS crece, el problema no es escribirlo, sino **mantenerlo** sin que un estilo pise a otro sin querer. BEM es una convención de nombres para evitarlo. El **bloque** (`card`) es el componente independiente: la tarjeta de producto.
      analogia: |-
        Es ponerle apellido a una familia: todo lo que pertenece a la tarjeta va a llevar el apellido "card".
    - para: "2"
      tecnica: |-
        El **elemento**, con doble guion bajo: `card__titulo` es una parte que vive **dentro** del bloque. El nombre dice a las claras "el título de la tarjeta". Leyendo la clase ya sabés a qué componente pertenece, sin rastrear el HTML.
      analogia: |-
        Es "Pérez, el del título": el doble guion bajo aclara que es un integrante de la familia card, no uno suelto.
    - para: "3"
      tecnica: |-
        Otro elemento del mismo bloque, `card__precio`. Todos los elementos comparten el prefijo del bloque. Esto evita choques: `.card__precio` nunca va a colisionar con un `.precio` de otra parte del sitio, porque su nombre es único.
      analogia: |-
        Es otro integrante de la familia: "Pérez, el del precio". Aunque haya otros precios en el barrio, este lleva el apellido y no se confunde.
    - para: "4"
      tecnica: |-
        El **modificador**, con doble guion medio: `card--destacada` es una **variante** del bloque, por ejemplo una tarjeta resaltada. Se pone junto a la clase base (`class="card card--destacada"`) y solo cambia lo distinto, sin duplicar todo el componente.
      analogia: |-
        Es "Pérez, versión edición especial": el mismo de siempre, con un detalle distinto, sin ser otra familia.
      nota: |-
        BEM es una convención, no una herramienta: funciona solo escribiendo los nombres así. En proyectos grandes se suman preprocesadores como Sass o sistemas como CSS Modules, que automatizan parte de esto, pero la idea de fondo (nombres predecibles y sin colisiones) es la misma.
---

BEM (Bloque, Elemento, Modificador) es una convención de nombres: `bloque`, `bloque__elemento`, `bloque--modificador`. No es una librería, es disciplina al nombrar clases. Su recompensa es enorme: leyendo una clase sabés a qué componente pertenece, y los estilos dejan de pisarse entre sí cuando el proyecto crece.
