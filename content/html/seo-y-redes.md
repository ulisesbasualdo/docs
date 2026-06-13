---
titulo: "Open Graph: cómo se ve tu página al compartirla"
tecnologia: html
categoria: Metadatos y SEO
modulo: metadatos-seo
orden: 2
descripcion: "Las metaetiquetas Open Graph controlan la tarjeta que aparece cuando alguien comparte tu enlace en redes y chats."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - seo
  - redes
leccionesRelacionadas:
  - title-y-meta
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <meta property="og:title" content="Tienda La Esquina" />
    - id: "2"
      indent: 0
      codigo: |-
        <meta property="og:description" content="Almacén de barrio con envío a domicilio." />
    - id: "3"
      indent: 0
      codigo: |-
        <meta property="og:image" content="https://tienda.com/portada.jpg" />
  explicaciones:
    - para: "1"
      tecnica: |-
        Las metaetiquetas que empiezan con `og:` son **Open Graph**, un estándar que usan Facebook, WhatsApp, LinkedIn y otros para armar la tarjeta de vista previa de un enlace. `og:title` es el título de esa tarjeta. Fijate que usa `property` (no `name` como la description): es la sintaxis de Open Graph.
      analogia: |-
        Es el titular de la postal que se arma sola cuando alguien reenvía la dirección de tu local por mensaje.
    - para: "2"
      tecnica: |-
        `og:description` es el texto de la tarjeta de vista previa. Puede coincidir con tu `meta description` o ser más orientado a "venta", porque acá el objetivo es que alguien haga clic desde un chat o una red.
      analogia: |-
        Es el copete de esa postal: la frase que acompaña la imagen cuando reenvían tu enlace.
    - para: "3"
      tecnica: |-
        `og:image` es la imagen de la tarjeta, y es la que más impacto visual tiene. Importante: debe ser una URL **absoluta** (con `https://` y dominio completo), porque la lee un servidor externo que no sabe cuál es tu sitio. Sin esta etiqueta, tu enlace compartido se ve sin imagen y rinde mucho menos.
      analogia: |-
        Es la foto de la postal: tiene que tener la dirección completa de dónde está guardada, porque la busca un cartero ajeno a tu casa.
      nota: |-
        El SEO no es solo metaetiquetas. Lo más importante sigue siendo el HTML bien hecho que venís viendo: un solo `<h1>`, jerarquía de encabezados correcta, etiquetas semánticas y textos `alt`. Google premia las páginas que entiende, y entiende las que están bien estructuradas.
---

Cuando compartís un enlace en WhatsApp o redes, la tarjeta con imagen y título que aparece la definen las etiquetas Open Graph (`og:`). Con `og:title`, `og:description` y una `og:image` de URL absoluta, controlás esa primera impresión. Y nunca olvides: la mejor optimización para buscadores es, antes que nada, HTML semántico y bien jerarquizado.
