---
titulo: "Ver el historial"
tecnologia: git
categoria: Historia y cambios
modulo: historia
orden: 1
descripcion: "Cómo leer la lista de commits del proyecto y revisar qué cambió en cada uno."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - git
  - historia
leccionesRelacionadas:
  - comparar-cambios
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git log
    - id: "2"
      indent: 0
      codigo: |-
        git log --oneline
    - id: "3"
      indent: 0
      codigo: |-
        git show HEAD
  explicaciones:
    - para: "1"
      tecnica: |-
        `git log` muestra la historia completa de commits, del más nuevo al más viejo: cada uno con su identificador (_hash_), autor, fecha y mensaje. Es como leer el libro de actas de adelante hacia atrás. Para salir de la vista, se presiona `q`.
      analogia: |-
        Es abrir el libro de actas del consorcio y leer todas las decisiones tomadas, con quién y cuándo, empezando por la última.
    - para: "2"
      tecnica: |-
        `git log --oneline` es la versión resumida: un commit por línea, con el hash corto y el mensaje. Es la forma más usada en el día a día, porque de un vistazo ves toda la historia sin scrollear. Hay muchas más opciones (`--graph` para ver las ramas, `--author` para filtrar por persona).
      analogia: |-
        Es el índice del libro de actas: solo el número y el título de cada acta, para ubicarte rápido sin leer el texto completo.
    - para: "3"
      tecnica: |-
        `git show HEAD` muestra el detalle de un commit: su mensaje **y** exactamente qué líneas cambió. `HEAD` es un apodo para "el commit actual, el último". Podés mostrar cualquier commit pasándole su hash en lugar de `HEAD`.
      analogia: |-
        Es abrir un acta puntual y leer no solo el título, sino el cambio concreto que aprobó, renglón por renglón. `HEAD` es "el acta más reciente".
---

El historial es la memoria del proyecto. `git log` lista los commits, `git log --oneline` los resume para el día a día, y `git show` te deja inspeccionar uno en detalle. `HEAD` es el apodo del commit actual, una referencia que vas a ver constantemente en Git.
