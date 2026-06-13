---
titulo: "revert y stash"
tecnologia: git
categoria: Deshacer y rescatar
modulo: deshacer
orden: 3
descripcion: "Deshacer un commit ya compartido sin reescribir la historia, y guardar trabajo a medio hacer para retomarlo después."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - git
  - deshacer
  - stash
leccionesRelacionadas:
  - reset
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git revert HEAD
    - id: "2"
      indent: 0
      codigo: |-
        git stash
    - id: "3"
      indent: 0
      codigo: |-
        git stash pop
  explicaciones:
    - para: "1"
      tecnica: |-
        `git revert HEAD` deshace un commit creando **otro commit nuevo** que aplica los cambios inversos. La diferencia clave con `reset`: no borra ni reescribe nada, solo agrega. Por eso es **la forma segura** de deshacer algo que ya subiste y otros tienen: la historia sigue siendo compartida y coherente.
      analogia: |-
        En vez de despegar un acta del libro (que rompería la numeración para todos), escribís un acta nueva que dice "se deja sin efecto lo anterior". El libro queda completo y todos lo entienden.
    - para: "2"
      tecnica: |-
        `git stash` guarda tu trabajo a medio hacer en un cajón aparte y **limpia** tu carpeta de trabajo, dejándola como en el último commit. Sirve para esa situación clásica: estás en el medio de algo, pero necesitás cambiar de rama urgente para un arreglo. Guardás con stash, hacés el arreglo, y después volvés.
      analogia: |-
        Es meter el trabajo a medio terminar en un cajón con etiqueta para liberar el escritorio: te urge atender otra cosa, así que despejás sin perder nada.
    - para: "3"
      tecnica: |-
        `git stash pop` saca lo último que guardaste del cajón y lo vuelve a aplicar en tu carpeta, para retomar donde habías dejado. (Existe `git stash list` para ver todo lo guardado, si acumulaste varios.) El `pop`, además de aplicarlo, lo quita del cajón.
      analogia: |-
        Es abrir el cajón, sacar el trabajo que habías guardado y ponerlo de nuevo sobre el escritorio para seguir: ya atendiste la urgencia, volvés a lo tuyo.
---

Dos rescates más maduros: `git revert` deshace un commit **agregando** uno inverso, la forma segura cuando el commit ya es compartido (a diferencia de `reset`, que reescribe). Y `git stash` guarda trabajo a medio hacer para cambiar de contexto sin perderlo, recuperándolo después con `git stash pop`.
