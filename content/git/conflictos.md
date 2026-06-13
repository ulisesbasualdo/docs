---
titulo: "Resolver conflictos de fusión"
tecnologia: git
categoria: Ramas y fusiones
modulo: ramas
orden: 3
descripcion: "Qué hacer cuando dos ramas cambiaron la misma línea y Git no sabe con cuál quedarse."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - ramas
  - conflictos
leccionesRelacionadas:
  - fusionar
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git merge feature/precios
    - id: "2"
      indent: 0
      codigo: |-
        git status
    - id: "3"
      indent: 0
      codigo: |-
        git add precios.js
    - id: "4"
      indent: 0
      codigo: |-
        git commit
  explicaciones:
    - para: "1"
      tecnica: |-
        Hacemos un merge, pero esta vez `main` y `feature/precios` **modificaron la misma línea** de `precios.js`. Git no puede decidir cuál versión es la correcta, así que **frena la fusión** y avisa que hay un conflicto. Un conflicto no es un error tuyo: es Git pidiéndote que decidas vos.
      analogia: |-
        Es cuando dos personas reescribieron el mismo renglón del expediente con textos distintos: el escribano no inventa, para todo y te pregunta cuál vale.
    - para: "2"
      tecnica: |-
        `git status` te muestra qué archivos quedaron "sin fusionar". Si abrís `precios.js`, vas a ver las dos versiones marcadas entre `<<<<<<<`, `=======` y `>>>>>>>`: arriba lo de tu rama, abajo lo de la otra. Tu trabajo es editar el archivo y dejarlo como debe quedar, borrando esas marcas.
      analogia: |-
        Es ver el renglón en disputa con las dos redacciones enfrentadas y un cartel "elegí". Tachás lo que sobra y escribís la versión final.
    - para: "3"
      tecnica: |-
        Una vez editado el archivo a mano y resuelto, `git add precios.js` le dice a Git "ya lo arreglé, esta es la versión buena". El `add` sobre un archivo en conflicto lo marca como **resuelto**.
      analogia: |-
        Es entregar el renglón ya redactado de forma definitiva: "listo, este es el texto que queda".
    - para: "4"
      tecnica: |-
        `git commit` (sin `-m` está bien: Git propone un mensaje de fusión) cierra el merge ya resuelto. Recién acá la fusión queda completa. La clave para tener menos conflictos: ramas cortas y fusionar seguido, así dos personas no editan lo mismo durante mucho tiempo.
      analogia: |-
        Es firmar el acta que da por cerrada la unión, con el renglón ya consensuado. Cuanto más seguido sincronizan, menos choques de redacción.
---

Un conflicto aparece cuando dos ramas cambiaron la misma línea: Git frena y te pide decidir. El proceso es siempre el mismo: `status` para ver qué quedó en conflicto, **editás el archivo a mano** quitando las marcas `<<<<<<<`, `add` para marcarlo resuelto y `commit` para cerrar. No es un error: es Git delegándote la decisión.
