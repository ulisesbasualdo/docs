---
titulo: "Subir tu proyecto a GitHub"
tecnologia: git
categoria: GitHub y colaboración
modulo: github
orden: 1
descripcion: "Conectar tu repositorio local con uno de GitHub y publicar tu código por primera vez."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - github
leccionesRelacionadas:
  - pull-requests
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git remote add origin https://github.com/usuario/proyecto.git
    - id: "2"
      indent: 0
      codigo: |-
        git push -u origin main
  explicaciones:
    - para: "1"
      tecnica: |-
        GitHub es el lugar donde tu repositorio vive en internet: respaldo, colaboración y vidriera de tu trabajo. Después de crear un repositorio vacío en GitHub, conectás tu repo local con `git remote add origin <url>`, dándole a esa dirección el alias `origin`. Git ya sabe a dónde mandar tu código, pero todavía no mandó nada.
      analogia: |-
        Es alquilar una oficina en la casa central y anotar su dirección en tu libreta bajo "origin": el espacio está reservado, falta mudar las cosas.
    - para: "2"
      tecnica: |-
        `git push -u origin main` sube tu rama `main` a GitHub por primera vez. El `-u` (de _upstream_) **vincula** tu `main` local con el `main` remoto: a partir de ahí, alcanza con escribir `git push` o `git pull` a secas, sin repetir `origin main` cada vez. Tras este comando, tu código ya está público (o privado) en GitHub.
      analogia: |-
        Es mudar tus cosas a la oficina central y, de paso, dejar fija la dirección: las próximas veces despachás sin tener que volver a anotar a dónde va.
      nota: |-
        GitHub es mucho más que almacenar código: ofrece _issues_ para seguir tareas y errores, _Actions_ para automatizar pruebas y despliegues, _Pages_ para publicar sitios gratis, y _releases_ para versiones. Pero todo eso se apoya en este primer paso: tu código versionado y subido.
---

GitHub aloja tu repositorio en internet para respaldarlo, compartirlo y colaborar. El flujo de publicación es: crear el repo vacío en GitHub, conectarlo con `git remote add origin`, y subir con `git push -u origin main` (el `-u` deja la conexión fija para los próximos push y pull). De ahí en más, todo el ecosistema de GitHub queda a tu alcance.
