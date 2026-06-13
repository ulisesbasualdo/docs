---
titulo: "ARIA: cuándo (y cuándo no) usarlo"
tecnologia: html
categoria: Accesibilidad y buenas prácticas
modulo: accesibilidad
orden: 2
descripcion: "Los atributos ARIA comunican estado y rol a las tecnologías de asistencia, pero la primera regla es no abusar de ellos."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - html
  - accesibilidad
  - aria
leccionesRelacionadas:
  - accesibilidad-basica
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <button aria-expanded="false" aria-controls="menu">Menú</button>
    - id: "2"
      indent: 0
      codigo: |-
        <nav id="menu" hidden>...</nav>
    - id: "3"
      indent: 0
      codigo: |-
        <p role="alert">Tus cambios se guardaron.</p>
  explicaciones:
    - para: "1"
      tecnica: |-
        ARIA (de _Accessible Rich Internet Applications_) son atributos que comunican **estado** y **rol** a los lectores de pantalla cuando el HTML solo no alcanza. `aria-expanded="false"` dice que este botón controla algo que ahora está cerrado; cuando el menú se abra, el JavaScript lo cambia a `"true"`. `aria-controls="menu"` lo enlaza con el elemento que abre, por su `id`.
      analogia: |-
        Es el cartelito de una persiana que dice "cerrada" o "abierta" y a qué local corresponde: alguien que no ve la persiana igual sabe su estado y de qué local es.
    - para: "2"
      tecnica: |-
        El `<nav>` que el botón controla, con el `id="menu"` que coincide con el `aria-controls`. El atributo `hidden` lo oculta de verdad (visualmente y para el lector). Cuando se abra, el JavaScript saca el `hidden` y pone `aria-expanded="true"` en el botón. HTML y ARIA trabajan juntos.
      analogia: |-
        Es la persiana en sí: bajada (`hidden`) hasta que alguien aprieta el botón que la controla.
    - para: "3"
      tecnica: |-
        `role="alert"` convierte este párrafo en una **región viva**: cuando aparece o cambia, el lector de pantalla lo anuncia al instante, sin que el usuario tenga que ir a buscarlo. Es ideal para confirmaciones y errores que surgen después de una acción.
      analogia: |-
        Es el altoparlante del local: cuando hay un anuncio, suena solo y todos lo escuchan, estén donde estén.
      nota: |-
        Primera regla de ARIA: **no uses ARIA si existe un elemento HTML nativo que ya lo hace**. Un `<button>` real ya es accesible; no le pongas `role="button"` a un `<div>`. ARIA es para cubrir lo que el HTML nativo no puede, no para reemplazarlo. Un ARIA mal puesto es peor que ninguno.
---

ARIA agrega lo que al HTML le falta para interfaces dinámicas: estados (`aria-expanded`), relaciones (`aria-controls`) y anuncios (`role="alert"`). Pero su regla de oro es defensiva: si una etiqueta HTML nativa ya hace el trabajo, usala. ARIA es el último recurso, no el primero.
