---
titulo: "Title y meta: lo que el navegador y Google leen"
tecnologia: html
categoria: Metadatos y SEO
modulo: metadatos-seo
orden: 1
descripcion: "Las etiquetas del head que definen codificación, adaptación al celular, título y descripción de tu página."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - seo
  - metadatos
leccionesRelacionadas:
  - seo-y-redes
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <head>
    - id: "2"
      indent: 1
      codigo: |-
        <meta charset="utf-8" />
    - id: "3"
      indent: 1
      codigo: |-
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    - id: "4"
      indent: 1
      codigo: |-
        <title>Tienda La Esquina — Almacén con envío a domicilio</title>
    - id: "5"
      indent: 1
      codigo: |-
        <meta name="description" content="Almacén de barrio con envío. Café, fiambres y más." />
    - id: "6"
      indent: 0
      codigo: |-
        </head>
  explicaciones:
    - para: "1"
      tecnica: |-
        El `<head>` que ya conocés: la ficha técnica de la página, lo que el navegador y los buscadores leen pero el visitante no ve en el cuerpo. Acá van las `<meta>`.
      analogia: |-
        Es la etiqueta interna de la prenda: datos para quien la procesa, no para quien la usa.
    - para: "2"
      tecnica: |-
        `<meta charset="utf-8" />` declara la **codificación de caracteres**. UTF-8 es la que entiende tildes, ñ y emojis. Sin esta línea (o con otra codificación), un "café" puede mostrarse como "cafÃ©". Va lo más arriba posible del head.
      analogia: |-
        Es decirle a la imprenta en qué alfabeto está el texto: si no lo aclarás, te imprime símbolos raros donde van las tildes.
    - para: "3"
      tecnica: |-
        La `<meta name="viewport">` le dice al celular que use el ancho real de la pantalla en vez de simular una de escritorio. Sin esta línea, tu página se ve diminuta y alejada en el teléfono. Es imprescindible para que el diseño responsive funcione.
      analogia: |-
        Es ajustar el cartel al tamaño de la vidriera: sin el ajuste, mostrás un cartel gigante achicado a la fuerza que nadie puede leer.
    - para: "4"
      tecnica: |-
        El `<title>` es el texto de la pestaña del navegador **y** el título azul en los resultados de Google. Es de lo más importante para el SEO: poné el nombre y de qué trata, conciso. Uno por página, distinto en cada una.
      analogia: |-
        Es el nombre en el lomo de la carpeta y, a la vez, el titular del aviso clasificado: lo primero que decide si alguien hace clic.
    - para: "5"
      tecnica: |-
        La `<meta name="description">` es el resumen que Google suele mostrar **debajo** del título en los resultados. No cambia tu posición directamente, pero una buena descripción convence a la persona de entrar. Mantenela en una o dos frases claras.
      analogia: |-
        Es el copete del aviso clasificado: dos líneas que rematan la decisión de llamar o seguir de largo.
    - para: "6"
      tecnica: |-
        Cierra el `<head>`. Con `charset`, `viewport`, `title` y `description` tenés la base de metadatos que toda página necesita antes de pensar en cualquier otra cosa.
      analogia: |-
        Cerrás la ficha técnica: los datos esenciales ya están cargados.
---

El `<head>` no se ve, pero define cómo se interpreta y se encuentra tu página. `charset` para que las tildes funcionen, `viewport` para el celular, `title` y `description` para Google y para el clic. Son cuatro líneas que ninguna página seria debería omitir.
