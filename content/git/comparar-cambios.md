---
titulo: "Comparar cambios con diff"
tecnologia: git
categoria: Historia y cambios
modulo: historia
orden: 2
descripcion: "Ver exactamente qué modificaste antes de confirmarlo, y la diferencia entre lo trabajado y lo preparado."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - historia
  - diff
leccionesRelacionadas:
  - ver-historial
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git diff
    - id: "2"
      indent: 0
      codigo: |-
        git add estilos.css
    - id: "3"
      indent: 0
      codigo: |-
        git diff --staged
  explicaciones:
    - para: "1"
      tecnica: |-
        `git diff` muestra los cambios que hiciste pero **todavía no preparaste** con `add`: lo que está en tu carpeta de trabajo comparado con la última versión confirmada. Las líneas con `+` son agregadas, las que tienen `-` fueron quitadas. Revisarlo antes de hacer `add` es un hábito que evita confirmar cosas sin querer.
      analogia: |-
        Es comparar tu borrador actual con la fotocopia del documento ya firmado: ves de un vistazo qué tachaste y qué agregaste antes de mandarlo a firmar.
    - para: "2"
      tecnica: |-
        Preparamos `estilos.css` con `add`, moviéndolo al área de preparación. Esto es clave para entender el comando siguiente: una vez preparado, `git diff` a secas **ya no** muestra esos cambios, porque compara contra la carpeta de trabajo y ahí ya no hay nada pendiente.
      analogia: |-
        Es pasar el documento del escritorio a la bandeja "para firmar": salió de la pila de borradores sueltos.
    - para: "3"
      tecnica: |-
        `git diff --staged` (también `--cached`) muestra lo que está **preparado** comparado con el último commit: o sea, exactamente lo que se va a confirmar si hacés `commit` ahora. Es la última revisión antes de firmar: "esto, y nada más que esto, va a entrar en el acta".
      analogia: |-
        Es leer una última vez el contenido de la bandeja "para firmar" antes de estampar la firma: confirmás que entra justo lo que querés.
---

`git diff` te muestra qué cambiaste, y distingue dos zonas: sin `--staged` ves lo que todavía no preparaste (carpeta de trabajo); con `--staged` ves lo que ya está listo para confirmar. Mirar el diff antes de cada `add` y cada `commit` es el hábito que separa los commits prolijos de los descuidados.
