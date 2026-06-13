---
titulo: "Atributos: configurar una etiqueta"
tecnologia: html
categoria: Fundamentos
modulo: fundamentos
orden: 3
descripcion: "Los atributos le dan información extra a una etiqueta: a dónde apunta un enlace, qué imagen mostrar, cómo identificarla. Qué son y cómo se escriben."
youtubeId: ""
publicadoEn: 2026-05-29
nivel: introductorio
tags:
  - html
  - fundamentos
  - atributos
leccionesRelacionadas:
  - que-es-una-etiqueta
  - anidar-elementos
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <img src="/productos/cafe.jpg" alt="Bolsa de café de 500 gramos" />
    - id: "2"
      indent: 0
      codigo: |-
        <a href="/carrito" class="boton-comprar">Ir al carrito</a>
  explicaciones:
    - para: "1"
      tecnica: |-
        Una etiqueta `<img>` para mostrar una imagen. Pero fijate que adentro de la apertura hay cosas extra: esos son **atributos**, configuración para la etiqueta. Se escriben siempre igual: `nombre="valor"`. Acá hay dos. `src="/productos/cafe.jpg"` (de _source_, fuente) dice **qué** imagen mostrar y dónde encontrarla. `alt="Bolsa de café de 500 gramos"` es un texto que describe la imagen: lo lee quien no puede verla (por una ceguera, o porque la imagen no cargó). El `alt` no es opcional de verdad, es de las reglas más importantes de accesibilidad. Ah, y `<img>` no lleva etiqueta de cierre porque no tiene contenido adentro: la barra final `/>` ya la cierra sola.
      analogia: |-
        La etiqueta es el formulario "mostrar una imagen" y los atributos son los campos que completás: en "archivo" ponés cuál foto, en "descripción" ponés qué se ve. Sin completar el campo "archivo" (`src`), el formulario no sabe qué mostrar.
    - para: "2"
      tecnica: |-
        Un enlace con `<a>` (de _anchor_, ancla). Su atributo estrella es `href="/carrito"`: dice **a dónde** te lleva cuando hacés clic, en este caso a la página del carrito. El otro atributo, `class="boton-comprar"`, es una **etiqueta de nombre** que le ponemos nosotros para después poder darle estilo con CSS o agarrarlo con JavaScript; no cambia lo que hace el enlace, solo lo identifica como parte de un grupo. El texto `Ir al carrito` es el contenido visible, lo que el usuario lee y toca.
      analogia: |-
        El `href` es el destino escrito en un pasaje de colectivo: define a dónde te lleva. La `class` es como ponerle a varios pasajes el sello "promo estudiantes": no cambia el viaje, pero te deja agruparlos y tratarlos parecido después.
---

Las etiquetas por sí solas hacen lo básico; los **atributos** son los que las hacen útiles de verdad. Un enlace sin `href` no lleva a ningún lado, una imagen sin `src` no muestra nada. Casi toda etiqueta que escribas en la vida real va a llevar al menos un atributo.
