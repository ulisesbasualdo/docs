---
titulo: "Tu primer commit"
tecnologia: git
categoria: Fundamentos
modulo: fundamentos
orden: 1
descripcion: "El ciclo básico de Git: init, status, add y commit, los cuatro comandos que vas a usar todos los días."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - git
  - fundamentos
leccionesRelacionadas:
  - configuracion-y-gitignore
codigo:
  lenguaje: bash
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        git init
    - id: "2"
      indent: 0
      codigo: |-
        git status
    - id: "3"
      indent: 0
      codigo: |-
        git add index.html estilos.css
    - id: "4"
      indent: 0
      codigo: |-
        git commit -m "Página inicial de la tienda con estilos base"
  explicaciones:
    - para: "1"
      tecnica: |-
        `git init` se ejecuta **una sola vez por proyecto** y convierte la carpeta actual en un repositorio: crea una subcarpeta oculta `.git` donde Git va a guardar toda la historia de cambios. No toca tus archivos, solo prepara el terreno.
      analogia: |-
        Es comprar el libro de actas de un consorcio nuevo: todavía no hay ningún acta, pero ya existe el libro oficial donde va a quedar registrada cada decisión.
    - para: "2"
      tecnica: |-
        `git status` es el comando que más vas a escribir en tu vida. Muestra el estado actual: qué archivos son nuevos, cuáles cambiaron y cuáles están listos para confirmar. No modifica nada, es pura lectura. Costumbre de oro: correrlo antes y después de cualquier otro comando.
      analogia: |-
        Es asomarte a la mesa de entradas y preguntar "¿qué hay pendiente?". El empleado te lista lo que llegó y todavía no se archivó. Preguntar es gratis y te salva de archivar cualquier cosa.
    - para: "3"
      tecnica: |-
        `git add` mueve archivos al **área de preparación** (_staging_): la lista de cambios que van a entrar en la próxima confirmación. Acá elegimos dos archivos puntuales por nombre. Esta etapa intermedia existe para que el commit sea **deliberado**: vos elegís qué entra y qué queda afuera.
      analogia: |-
        Es poner papeles en la bandeja de "para firmar". Sobre el escritorio hay borradores y dos documentos terminados; a la bandeja van solo los terminados.
    - para: "4"
      tecnica: |-
        `git commit` crea la confirmación: una foto permanente de lo que estaba en el área de preparación, con autor, fecha y un identificador único. La bandera `-m` adjunta el **mensaje**. El mensaje describe QUÉ logra el cambio, no qué archivos toca: dentro de seis meses, es lo único que te va a explicar por qué existió.
      analogia: |-
        Es firmar el acta en el libro del consorcio: queda numerada, fechada y firmada, para siempre. Cualquiera que lea el libro entiende la historia del edificio sin revisar los planos.
---

Git es la red de seguridad de todo programador: te deja guardar fotos del proyecto en cada paso y volver a cualquiera. `init` prepara el repositorio, `status` te dice dónde estás parado, `add` elige qué entra y `commit` lo confirma. Este ciclo lo vas a repetir decenas de veces por día.
