---
titulo: "Sincronizar: push, pull y fetch"
tecnologia: git
categoria: Repositorios remotos
modulo: remotos
orden: 2
descripcion: "Cómo subir tus commits al remoto y traer los que hicieron los demás."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - remotos
leccionesRelacionadas:
  - clonar-y-remotos
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git push origin main
    - id: "2"
      indent: 0
      codigo: |-
        git pull
    - id: "3"
      indent: 0
      codigo: |-
        git fetch
  explicaciones:
    - para: "1"
      tecnica: |-
        `git push origin main` **sube** tus commits locales de la rama `main` al remoto `origin`. Hasta que no hacés push, tu trabajo vive solo en tu máquina: nadie más lo ve. Es el comando que comparte tu trabajo con el equipo y lo respalda fuera de tu computadora.
      analogia: |-
        Es enviar tus actas firmadas a la casa central: hasta que no las despachás, son las únicas copias y están solo en tu oficina.
    - para: "2"
      tecnica: |-
        `git pull` hace lo inverso: **trae** los commits nuevos del remoto y los integra en tu rama actual. En realidad son dos pasos en uno: descarga los cambios y los fusiona (merge) con los tuyos. Conviene hacer `pull` antes de empezar a trabajar, para arrancar desde la última versión del equipo.
      analogia: |-
        Es ir a buscar a la casa central las actas nuevas que firmaron otros y sumarlas a tu copia, así trabajás sobre lo más reciente.
    - para: "3"
      tecnica: |-
        `git fetch` descarga los cambios del remoto **pero no los fusiona**: te deja verlos antes de integrarlos. Es la versión cautelosa de `pull`. La diferencia clave: `pull` = `fetch` + `merge` automático; `fetch` = solo traer y mirar. Útil cuando querés revisar qué cambió antes de mezclarlo con tu trabajo.
      analogia: |-
        Es traer las actas nuevas de la central y dejarlas sobre el escritorio para leerlas, sin meterlas todavía en tu expediente: primero mirás, después decidís.
---

Sincronizar con el remoto son tres comandos: `push` sube lo tuyo (y lo respalda), `pull` baja e integra lo de los demás, y `fetch` baja sin integrar para que revises primero. Regla práctica: `pull` antes de empezar a trabajar y `push` cuando terminás algo, para mantenerte en sincronía con el equipo.
