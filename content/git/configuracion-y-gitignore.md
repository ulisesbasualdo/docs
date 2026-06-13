---
titulo: "Configuración y .gitignore"
tecnologia: git
categoria: Fundamentos
modulo: fundamentos
orden: 2
descripcion: "Decirle a Git quién sos para firmar tus commits, y qué archivos no debe seguir nunca."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - git
  - fundamentos
  - configuracion
leccionesRelacionadas:
  - primer-commit
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git config --global user.name "Ulises Basualdo"
    - id: "2"
      indent: 0
      codigo: |-
        git config --global user.email "uli@ejemplo.com"
    - id: "3"
      indent: 0
      codigo: |-
        echo "node_modules/" > .gitignore
    - id: "4"
      indent: 0
      codigo: |-
        git status
  explicaciones:
    - para: "1"
      tecnica: |-
        `git config` define ajustes de Git. `--global` significa que vale para **todos** tus proyectos en esta computadora (sin él, sería solo para el repo actual). Acá grabamos tu nombre: Git lo estampa como autor en cada commit que hagas. Se configura una vez por máquina.
      analogia: |-
        Es registrar tu firma en la escribanía: una vez hecho, todas las actas que firmes en cualquier consorcio salen con tu nombre.
    - para: "2"
      tecnica: |-
        Lo mismo con el email. Junto al nombre, identifica quién hizo cada commit, y es lo que GitHub usa para vincular tus commits a tu cuenta. Usá el mismo email que en GitHub para que te reconozca.
      analogia: |-
        Es agregar tu documento a la firma registrada: ata cada acta a vos de forma inequívoca.
    - para: "3"
      tecnica: |-
        Creamos un archivo `.gitignore` con una línea: `node_modules/`. Todo lo que listes ahí, Git lo **ignora por completo**: no lo sigue ni lo sube. Es esencial para no versionar dependencias, archivos de credenciales o builds, que no deben vivir en el repositorio. (El `echo ... >` solo es una forma rápida de crear el archivo; podés editarlo a mano.)
      analogia: |-
        Es la lista de "esto no se archiva nunca" pegada en la mesa de entradas: facturas internas, borradores, cosas que no deben quedar en el libro oficial.
    - para: "4"
      tecnica: |-
        Al correr `git status`, vas a ver que la carpeta `node_modules/` **no aparece** entre los cambios, aunque exista en tu proyecto: Git la está ignorando gracias al `.gitignore`. El propio archivo `.gitignore`, en cambio, sí conviene versionarlo, para que todo el equipo comparta las mismas reglas.
      analogia: |-
        Es comprobar en la mesa de entradas que los papeles de la lista negra ya no figuran como pendientes: el filtro funciona.
---

Antes de trabajar en serio, dos pasos: configurar tu identidad con `git config --global` (una vez por máquina) para que tus commits queden firmados, y crear un `.gitignore` para que Git no siga archivos que no corresponden, como `node_modules`, builds o credenciales. Versioná el `.gitignore`, pero nunca lo que él ignora.
