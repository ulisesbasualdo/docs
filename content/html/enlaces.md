---
titulo: "Enlaces: navegar entre páginas"
tecnologia: html
categoria: Enlaces e imágenes
modulo: enlaces-imagenes
orden: 1
descripcion: "El elemento que hace que la web sea web: el enlace. Rutas, abrir en otra pestaña y enlaces seguros."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - html
  - enlaces
leccionesRelacionadas:
  - imagenes
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <a href="/contacto">Contacto</a>
    - id: "2"
      indent: 0
      codigo: |-
        <a href="https://wa.me/549...">Escribinos</a>
    - id: "3"
      indent: 0
      codigo: |-
        <a href="catalogo.pdf" target="_blank" rel="noopener">Ver catálogo</a>
  explicaciones:
    - para: "1"
      tecnica: |-
        Un enlace **interno**. El `href="/contacto"` arranca con `/`, así que es una ruta **absoluta dentro de tu sitio**: lleva a `tudominio.com/contacto`. El texto entre las etiquetas, "Contacto", es lo que el usuario ve y toca.
      analogia: |-
        Es el cartel "Caja" con una flecha adentro del local: te manda a otra parte del mismo negocio.
    - para: "2"
      tecnica: |-
        Un enlace **externo**: el `href` es una URL completa (empieza con `https://`) que apunta a otro sitio, en este caso WhatsApp. Misma etiqueta `<a>`, el navegador distingue por la forma del `href`.
      analogia: |-
        Es el cartel que te manda a otro local de la galería: la dirección completa, no un pasillo interno.
    - para: "3"
      tecnica: |-
        Dos atributos nuevos. `target="_blank"` abre el enlace en una pestaña nueva. `rel="noopener"` es de seguridad: evita que la página abierta pueda manipular la tuya. **Siempre** que uses `target="_blank"` agregá `rel="noopener"`.
      analogia: |-
        Es abrir un folleto aparte sin cerrar el que tenías en la mano (`_blank`), y hacerlo de forma que ese folleto no te pueda revolver el bolsillo (`noopener`).
---

El enlace (`<a>`, de _anchor_) es lo que conecta una página con otra y hace que la web sea una red. Su atributo central es `href`: una ruta interna que empieza con `/`, o una URL completa hacia afuera. Cuando abrís en pestaña nueva, no te olvides del `rel="noopener"`.
