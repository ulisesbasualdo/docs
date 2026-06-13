---
titulo: "Pull requests: colaborar en equipo"
tecnologia: git
categoria: GitHub y colaboración
modulo: github
orden: 2
descripcion: "El flujo estándar para proponer cambios y que un compañero los revise antes de integrarlos."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - github
  - colaboracion
leccionesRelacionadas:
  - trabajar-en-github
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git switch -c feature/checkout
    - id: "2"
      indent: 0
      codigo: |-
        git push -u origin feature/checkout
  explicaciones:
    - para: "1"
      tecnica: |-
        El flujo profesional **no trabaja directo sobre `main`**: cada cambio empieza en su propia rama. Acá creamos `feature/checkout` para una función nueva. La regla del equipo: `main` siempre estable, y todo lo nuevo madura en una rama aparte hasta estar listo.
      analogia: |-
        Es redactar tu propuesta en una copia aparte del expediente, nunca rayando el original que está en uso oficial.
    - para: "2"
      tecnica: |-
        Subís tu rama a GitHub con `push -u`. Ahora viene el paso que ocurre **en la web de GitHub**, no en la terminal: abrís un **Pull Request** (PR), un pedido formal de "quiero integrar `feature/checkout` en `main`". El PR muestra todos tus cambios y abre un espacio de discusión.
      analogia: |-
        Es presentar tu propuesta terminada en la mesa de entradas con un formulario: "pido que se incorpore esto al expediente oficial". Queda a la vista de todos para revisar.
      nota: |-
        En el Pull Request, un compañero hace la **revisión de código** (_code review_): comenta, sugiere cambios y aprueba. Esto detecta errores antes de que lleguen a `main` y reparte el conocimiento en el equipo. Una vez aprobado, se hace _merge_ del PR (desde GitHub) y la función queda integrada. Branch, push, PR, review, merge: ese es el ciclo de colaboración que usa casi toda la industria.
---

El trabajo en equipo gira alrededor del **Pull Request**: nunca se toca `main` directo. Creás una rama, la subís con `push -u`, y abrís un PR en GitHub para que un compañero lo **revise** antes de integrarlo. La revisión de código atrapa errores temprano y comparte conocimiento. El ciclo completo: rama → push → PR → review → merge.
