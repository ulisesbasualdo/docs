---
titulo: "Crear y cambiar de rama"
tecnologia: git
categoria: Ramas y fusiones
modulo: ramas
orden: 1
descripcion: "Las ramas te dejan trabajar en una función sin tocar el código estable. Cómo crearlas y moverte entre ellas."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - git
  - ramas
leccionesRelacionadas:
  - fusionar
  - conflictos
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git switch -c feature/login
    - id: "2"
      indent: 0
      codigo: |-
        git branch
    - id: "3"
      indent: 0
      codigo: |-
        git switch main
  explicaciones:
    - para: "1"
      tecnica: |-
        `git switch -c feature/login` crea una **rama** nueva y se cambia a ella en un solo paso (`-c` es de _create_). Una rama es una línea de trabajo paralela: podés desarrollar el login acá sin tocar la rama principal. El nombre `feature/login` sigue una convención común: el tipo de trabajo y de qué se trata.
      analogia: |-
        Es sacar una fotocopia del expediente para trabajar tu propuesta aparte: garabateás, probás y cambiás lo que quieras sin ensuciar el original que todos usan.
    - para: "2"
      tecnica: |-
        `git branch` lista todas las ramas del repositorio y marca con un asterisco en cuál estás parado. Después de la línea anterior, verías `main` y `feature/login`, con el asterisco en esta última. Es tu mapa para saber dónde estás trabajando.
      analogia: |-
        Es mirar el tablero con todas las copias del expediente en curso y ver, señalada, en cuál estás escribiendo ahora.
    - para: "3"
      tecnica: |-
        `git switch main` te devuelve a la rama principal. Al cambiar de rama, Git **reemplaza los archivos** de tu carpeta por los de esa rama: tu trabajo de `feature/login` no se pierde, queda guardado en su rama, simplemente deja de verse mientras estás en `main`. Cambiar de rama es viajar entre líneas de trabajo.
      analogia: |-
        Es volver a dejar tu copia y agarrar de nuevo el expediente original: tu propuesta sigue intacta en su carpeta, esperándote para cuando vuelvas.
---

Las ramas son el corazón del flujo de trabajo con Git: te permiten desarrollar una función en una línea aparte sin arriesgar el código estable de `main`. `git switch -c` crea y cambia, `git branch` te muestra dónde estás, y `git switch` te lleva de una a otra. Cada función, su rama.
