---
titulo: "Rebase: una historia más limpia"
tecnologia: git
categoria: Git avanzado
modulo: avanzado
orden: 1
descripcion: "Una alternativa al merge que reordena tus commits para que la historia quede lineal, y cuándo NO usarla."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - git
  - avanzado
  - rebase
leccionesRelacionadas:
  - tags-y-cherry-pick
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git switch feature/login
    - id: "2"
      indent: 0
      codigo: |-
        git rebase main
  explicaciones:
    - para: "1"
      tecnica: |-
        Nos paramos en la rama de la función. A diferencia del merge (donde te ponés en el destino), el rebase se hace **desde la rama que querés reubicar**. La idea: mientras trabajabas en `feature/login`, `main` avanzó, y querés poner tus commits **encima** de ese `main` actualizado.
      analogia: |-
        Es agarrar tu propuesta, que arrancaste sobre una versión vieja del expediente, para reapoyarla sobre la versión más nueva.
    - para: "2"
      tecnica: |-
        `git rebase main` toma tus commits de `feature/login`, los "levanta", actualiza la base a la última versión de `main` y vuelve a aplicar tus commits uno por uno encima. El resultado es una historia **lineal**, sin el commit de fusión que deja el merge. Se lee más limpia, como si hubieras trabajado siempre sobre la última versión.
      analogia: |-
        Es rehacer tu propuesta partiendo de la versión nueva del expediente: queda como si la hubieras escrito recién, en una sola línea prolija, sin la nota de "acá se unieron dos caminos".
      nota: |-
        **Regla de oro del rebase:** nunca rebasees commits que ya **compartiste** (que están en el remoto y otros tienen). El rebase reescribe la historia, y hacerlo sobre algo compartido genera divergencias y un caos para el equipo. Rebase para tu trabajo local; merge para integrar lo público.
---

El rebase reubica tus commits sobre la punta actualizada de otra rama, logrando una historia **lineal** y limpia, sin commits de fusión. Es la alternativa "prolija" al merge para poner al día tu rama de función. Pero su regla es sagrada: jamás rebasees commits que ya subiste y otros tienen.
