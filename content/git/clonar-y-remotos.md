---
titulo: "Clonar y conectar remotos"
tecnologia: git
categoria: Repositorios remotos
modulo: remotos
orden: 1
descripcion: "Cómo bajar un repositorio que vive en internet y cómo conectar tu repo local con uno remoto."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - remotos
leccionesRelacionadas:
  - sincronizar
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git clone https://github.com/usuario/proyecto.git
    - id: "2"
      indent: 0
      codigo: |-
        git remote -v
    - id: "3"
      indent: 0
      codigo: |-
        git remote add origin https://github.com/usuario/proyecto.git
  explicaciones:
    - para: "1"
      tecnica: |-
        `git clone` descarga una **copia completa** de un repositorio remoto (en GitHub, GitLab, etc.) a tu máquina: todo el código y toda la historia. Crea una carpeta con el proyecto, ya inicializado y conectado al remoto. Es lo primero que hacés para empezar a trabajar en un proyecto que ya existe.
      analogia: |-
        Es pedir una copia completa del libro de actas de la casa central y traértela a tu oficina: te llevás todo, no solo la última hoja.
    - para: "2"
      tecnica: |-
        `git remote -v` lista los **remotos** configurados: los repositorios externos con los que tu repo local se sincroniza, con sus URLs. Después de un `clone`, ya vas a ver uno llamado `origin`, que apunta al lugar de donde clonaste. Un remoto es la dirección de la "casa central".
      analogia: |-
        Es consultar la libreta de direcciones: a qué oficina central le mandás las copias de tus actas y de cuál las traés.
    - para: "3"
      tecnica: |-
        `git remote add origin <url>` se usa en el caso inverso: cuando arrancaste un repo **local** con `git init` y querés conectarlo a uno remoto recién creado en GitHub. Le da el nombre `origin` (la convención para el remoto principal) a esa URL. Después de esto, ya podés empujar tu código.
      analogia: |-
        Es anotar por primera vez la dirección de la casa central en tu libreta, bajo el alias "origin": desde ahora sabés a dónde enviar tus actas.
---

Hay dos formas de empezar: `git clone` para bajar un proyecto que ya existe en internet (queda conectado solo), o `git remote add origin` para conectar un repo local que arrancaste vos con uno remoto. `git remote -v` te muestra esas conexiones. `origin` es el nombre estándar del remoto principal.
