---
titulo: "Tags y cherry-pick"
tecnologia: git
categoria: Git avanzado
modulo: avanzado
orden: 2
descripcion: "Marcar versiones para publicar, y traer un commit puntual de una rama a otra sin fusionar todo."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - git
  - avanzado
  - tags
leccionesRelacionadas:
  - rebase
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git tag v1.0.0
    - id: "2"
      indent: 0
      codigo: |-
        git push origin v1.0.0
    - id: "3"
      indent: 0
      codigo: |-
        git cherry-pick a1b2c3d
  explicaciones:
    - para: "1"
      tecnica: |-
        `git tag v1.0.0` pone una **etiqueta** con nombre a un commit. A diferencia de una rama, un tag no se mueve: marca para siempre un punto concreto de la historia, típicamente una **versión publicada**. El nombre `v1.0.0` sigue el versionado semántico (mayor.menor.parche).
      analogia: |-
        Es ponerle un marcador permanente a un acta importante: "esta es la versión que se entregó al cliente". El marcador queda clavado ahí, no se corre.
    - para: "2"
      tecnica: |-
        Los tags **no se suben con un push normal**: hay que empujarlos aparte con `git push origin v1.0.0`. Recién ahí GitHub lo reconoce, y sobre un tag podés crear un _release_ (una versión descargable y anunciada). Es el paso típico al publicar una versión estable.
      analogia: |-
        Es mandar a la casa central específicamente ese marcador, para que quede registrado oficialmente como la versión entregada.
    - para: "3"
      tecnica: |-
        `git cherry-pick <hash>` trae **un commit puntual** de otra rama a la actual, sin fusionar toda la rama. Le pasás el identificador del commit (lo ves con `git log`). Sirve para el caso "necesito justo ese arreglo de la otra rama, pero no el resto todavía".
      analogia: |-
        Es copiar un solo renglón aprobado de otro expediente al tuyo, sin traer todo el expediente: te llevás exactamente la decisión que necesitás.
---

Dos herramientas finas: `git tag` marca de forma permanente un commit (las versiones publicadas), y se sube aparte con `git push origin <tag>`. Y `git cherry-pick` trae un commit específico de otra rama sin fusionarla entera, ideal cuando necesitás justo ese arreglo y nada más.
