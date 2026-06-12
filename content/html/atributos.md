---
titulo: "Atributos: configurar una etiqueta"
tecnologia: html
categoria: Fundamentos
modulo: fundamentos
orden: 3
descripcion: "Los atributos le dan informacion extra a una etiqueta: a donde apunta un enlace, que imagen mostrar, como identificarla. Que son y como se escriben."
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
        <img src="/productos/cafe.jpg" alt="Bolsa de cafe de 500 gramos" />
    - id: "2"
      indent: 0
      codigo: |-
        <a href="/carrito" class="boton-comprar">Ir al carrito</a>
  explicaciones:
    - para: "1"
      tecnica: |-
        Una etiqueta `<img>` para mostrar una imagen. Pero fijate que adentro de la apertura hay cosas extra: esos son **atributos**, configuracion para la etiqueta. Se escriben siempre igual: `nombre="valor"`. Aca hay dos. `src="/productos/cafe.jpg"` (de _source_, fuente) dice **que** imagen mostrar y donde encontrarla. `alt="Bolsa de cafe de 500 gramos"` es un texto que describe la imagen: lo lee quien no puede verla (por una ceguera, o porque la imagen no cargo). El `alt` no es opcional de verdad, es de las reglas mas importantes de accesibilidad. Ah, y `<img>` no lleva etiqueta de cierre porque no tiene contenido adentro: la barra final `/>` ya la cierra sola.
      analogia: |-
        La etiqueta es el formulario "mostrar una imagen" y los atributos son los campos que completas: en "archivo" ponés cual foto, en "descripcion" ponés que se ve. Sin completar el campo "archivo" (`src`), el formulario no sabe que mostrar.
    - para: "2"
      tecnica: |-
        Un enlace con `<a>` (de _anchor_, ancla). Su atributo estrella es `href="/carrito"`: dice **a donde** te lleva cuando hacés clic, en este caso a la pagina del carrito. El otro atributo, `class="boton-comprar"`, es una **etiqueta de nombre** que le ponemos nosotros para despues poder darle estilo con CSS o agarrarlo con JavaScript; no cambia lo que hace el enlace, solo lo identifica como parte de un grupo. El texto `Ir al carrito` es el contenido visible, lo que el usuario lee y toca.
      analogia: |-
        El `href` es el destino escrito en un pasaje de colectivo: define a donde te lleva. La `class` es como ponerle a varios pasajes el sello "promo estudiantes": no cambia el viaje, pero te deja agruparlos y tratarlos parecido despues.
---

Las etiquetas por si solas hacen lo basico; los **atributos** son los que las hacen utiles de verdad. Un enlace sin `href` no lleva a ningun lado, una imagen sin `src` no muestra nada. Casi toda etiqueta que escribas en la vida real va a llevar al menos un atributo.
