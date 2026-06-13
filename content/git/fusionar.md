---
titulo: "Fusionar ramas con merge"
tecnologia: git
categoria: Ramas y fusiones
modulo: ramas
orden: 2
descripcion: "Cómo traer el trabajo terminado de una rama de función de vuelta a la rama principal."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - ramas
  - merge
leccionesRelacionadas:
  - crear-y-cambiar-rama
  - conflictos
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git switch main
    - id: "2"
      indent: 0
      codigo: |-
        git merge feature/login
  explicaciones:
    - para: "1"
      tecnica: |-
        Antes de fusionar, te parás en la rama que va a **recibir** los cambios, en este caso `main`. Esto confunde al principio: no se mergea "estando en la función", sino estando en el destino. La pregunta clave es "¿a dónde quiero traer el trabajo?", y ahí te ubicás.
      analogia: |-
        Es volver al expediente original, porque es ahí donde vas a incorporar tu propuesta terminada. Te ponés en el documento que va a quedar.
    - para: "2"
      tecnica: |-
        `git merge feature/login` trae todos los commits de `feature/login` a `main`. Si `main` no cambió desde que creaste la rama, Git hace un _fast-forward_: simplemente adelanta el puntero, sin crear nada nuevo. Si `main` avanzó por otro lado, Git crea un **commit de fusión** que une las dos historias. En ambos casos, el trabajo de la función queda integrado en la principal.
      analogia: |-
        Es copiar tu propuesta terminada al expediente original. Si nadie más lo tocó mientras tanto, es un pegado directo; si hubo otros cambios, se hace un acta que deja constancia de que se unieron dos líneas de trabajo.
---

Fusionar (`merge`) es traer el trabajo de una rama a otra. La regla que más cuesta al inicio: primero te parás en la rama **destino** (la que recibe), y desde ahí hacés `git merge <rama-origen>`. Si las historias no divergieron, es un avance directo; si sí, Git crea un commit de fusión que las une.
