---
titulo: "Situación: me equivoqué, ¿cómo lo deshago?"
tecnologia: git
categoria: Deshacer y rescatar
modulo: deshacer
orden: 1
descripcion: "Tres rescates frecuentes: descartar cambios sin confirmar, sacar algo del área de preparación y corregir el último commit."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - deshacer
leccionesRelacionadas:
  - reset
  - revert-y-stash
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git restore estilos.css
    - id: "2"
      indent: 0
      codigo: |-
        git restore --staged index.html
    - id: "3"
      indent: 0
      codigo: |-
        git commit --amend -m "Página inicial con menú de navegación"
  explicaciones:
    - para: "1"
      tecnica: |-
        **Situación: toqué un archivo, quedó mal y quiero volver a la última versión confirmada.** `git restore <archivo>` descarta los cambios sin confirmar y deja el archivo como estaba en el último commit. Atención: esos cambios **se pierden de verdad**, no hay papelera. Por eso conviene mirar `git status` y `git diff` antes.
      analogia: |-
        Arrugaste el borrador y volvés a la fotocopia del documento firmado. Lo que habías garabateado no se recupera, así que miralo bien antes de tirarlo al cesto.
    - para: "2"
      tecnica: |-
        **Situación: agregué al área de preparación un archivo que no quería confirmar todavía.** `git restore --staged <archivo>` lo saca de la bandeja **sin tocar su contenido**: tus cambios siguen intactos en el archivo, solo dejan de estar marcados para el próximo commit. Es la inversa exacta de `git add`.
      analogia: |-
        Pusiste un documento en la bandeja de "para firmar" y te arrepentiste: lo sacás y lo devolvés al escritorio. El documento no se rompe, solo deja de estar en la cola de la firma.
    - para: "3"
      tecnica: |-
        **Situación: acabo de confirmar y el mensaje quedó mal, o me olvidé un archivo.** `git commit --amend` **reemplaza** el último commit por uno nuevo: toma lo ya confirmado, le suma lo que tengas preparado ahora y te deja reescribir el mensaje. El commit anterior desaparece como si nunca hubiera existido.
      analogia: |-
        Es despegar la última acta del libro, corregirla y volver a pegarla prolija. Como es la última y todavía no la vio nadie, no pasa nada.
      nota: |-
        Regla de seguridad: usá `--amend` solo sobre commits que **todavía no subiste** a un repositorio compartido. Si el commit ya está en el servidor y otra persona lo tiene, reescribirlo genera historias divergentes. Para corregir algo ya publicado, hacé un commit nuevo que lo arregle.
---

La mitad del valor de Git está en poder **deshacer**. Tres rescates de tus primeras semanas: `git restore` descarta cambios sin confirmar (ojo, se pierden), `git restore --staged` saca algo del área de preparación sin tocarlo, y `git commit --amend` corrige el último commit (solo si no lo subiste).
