---
titulo: "git reset: soft, mixed y hard"
tecnologia: git
categoria: Deshacer y rescatar
modulo: deshacer
orden: 2
descripcion: "El comando para mover el historial hacia atrás, y la diferencia crucial entre sus tres modos."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - git
  - deshacer
  - reset
leccionesRelacionadas:
  - descartar-cambios
  - revert-y-stash
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git reset --soft HEAD~1
    - id: "2"
      indent: 0
      codigo: |-
        git reset --mixed HEAD~1
    - id: "3"
      indent: 0
      codigo: |-
        git reset --hard HEAD~1
  explicaciones:
    - para: "1"
      tecnica: |-
        `git reset` mueve la rama hacia atrás en la historia. `HEAD~1` significa "un commit antes del actual". Con `--soft`, **deshace el commit pero conserva todo**: los cambios vuelven al área de preparación, listos para volver a confirmar. Es ideal para rehacer un commit que dividiste mal o cuyo mensaje querés rearmar.
      analogia: |-
        Es despegar la última acta del libro pero dejar todos sus papeles ordenados en la bandeja "para firmar": el acta ya no está, pero el contenido espera intacto para rearmarla.
    - para: "2"
      tecnica: |-
        `--mixed` (el modo **por defecto** si no aclarás) también deshace el commit, pero deja los cambios en tu carpeta de trabajo **sin preparar**: tenés que volver a hacer `add`. Es un paso más atrás que `--soft`. Útil cuando querés reorganizar qué archivos entran en el commit.
      analogia: |-
        Es despegar el acta y devolver sus papeles al escritorio, fuera de la bandeja: el contenido sigue ahí, pero tenés que volver a elegir qué mandás a firmar.
    - para: "3"
      tecnica: |-
        `--hard` es el peligroso: deshace el commit **y borra los cambios** de la carpeta de trabajo, sin vuelta atrás por las vías normales. Deja todo exactamente como estaba un commit antes. Es potente para descartar trabajo que no querés, pero un `--hard` de más se lleva puesto laburo de horas. Usalo con la mano firme y seguro de lo que hacés.
      analogia: |-
        Es despegar el acta y además tirar todos sus papeles al incinerador: no solo desaparece el acta, desaparece el contenido. Si te equivocás de acta, no hay vuelta.
      nota: |-
        Igual que `--amend`, `reset` reescribe la historia: usalo solo en commits que **no compartiste**. Y si alguna vez creés que perdiste algo con un `--hard`, no te rindas todavía: existe `git reflog`, que registra dónde estuvo HEAD y suele permitir recuperarlo.
---

`git reset` mueve la rama hacia atrás, y el modo cambia qué pasa con tus cambios: `--soft` los conserva preparados, `--mixed` (por defecto) los deja sin preparar, y `--hard` los **borra**. Los tres reescriben historia, así que úsalos en commits no compartidos. Ante un `--hard` accidental, `git reflog` es tu salvavidas.
