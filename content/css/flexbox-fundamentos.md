---
titulo: "Flexbox: alinear en una dimensión"
tecnologia: css
categoria: Layout con Flexbox
modulo: layout-flexbox
orden: 1
descripcion: "La forma moderna de alinear y distribuir elementos en una fila o columna, con una barra de navegación de ejemplo."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - css
  - flexbox
  - layout
leccionesRelacionadas:
  - posicionamiento
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .barra {
    - id: "2"
      indent: 1
      codigo: |-
        display: flex;
    - id: "3"
      indent: 1
      codigo: |-
        justify-content: space-between;
    - id: "4"
      indent: 1
      codigo: |-
        align-items: center;
    - id: "5"
      indent: 1
      codigo: |-
        gap: 1rem;
    - id: "6"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Una barra de navegación con el logo a un lado y los enlaces al otro. Flexbox convierte un contenedor en un sistema de alineación: vos le hablás al **padre** y él acomoda a los hijos.
      analogia: |-
        Es la repisa donde vas a acomodar objetos: en vez de mover cada objeto a mano, le das instrucciones a la repisa y ella los distribuye.
    - para: "2"
      tecnica: |-
        `display: flex` activa Flexbox en el contenedor. Sus hijos directos pasan a alinearse en una fila (el comportamiento por defecto). Con esta sola línea ya cambia todo el acomodo interno.
      analogia: |-
        Es encender el modo "acomodar en repisa": los objetos se ponen en fila solos.
    - para: "3"
      tecnica: |-
        `justify-content` distribuye los hijos a lo largo del **eje principal** (la fila). `space-between` los empuja a los extremos con el espacio sobrante repartido en el medio: logo a la izquierda, enlaces a la derecha. Otros valores útiles: `center`, `flex-start`, `space-around`.
      analogia: |-
        Es "uno bien a la izquierda, otro bien a la derecha, y el aire que sobra, al medio".
    - para: "4"
      tecnica: |-
        `align-items` alinea los hijos en el **eje transversal** (la altura, en una fila). `center` los centra verticalmente, así el logo grande y el texto chico quedan a la misma altura. Centrar vertical, que antes era un dolor, hoy es una línea.
      analogia: |-
        Es "que todos los objetos queden centrados en altura sobre la repisa, sin importar que unos sean más altos".
    - para: "5"
      tecnica: |-
        `gap` es el espacio **entre** los hijos. Reemplaza al viejo truco de poner márgenes a cada uno: con `gap` definís la separación una sola vez, en el padre, y no se aplica en los bordes.
      analogia: |-
        Es decir "dejá un dedo de separación entre objeto y objeto", una sola instrucción para toda la repisa.
    - para: "6"
      tecnica: |-
        Cierra la regla. Con cuatro líneas tenés una barra alineada, distribuida y espaciada. Flexbox es para **una dimensión**: una fila o una columna. Para dos a la vez, está Grid.
      analogia: |-
        Cerrás las instrucciones de la repisa: una sola línea de objetos, perfectamente acomodada.
---

Flexbox resolvió el problema más viejo de CSS: alinear y distribuir elementos sin trucos. `display: flex` en el padre, y después `justify-content` (eje principal), `align-items` (eje transversal) y `gap` (separación). Es la herramienta para todo lo que va en una fila o una columna.
