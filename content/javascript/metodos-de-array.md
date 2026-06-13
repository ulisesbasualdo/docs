---
titulo: "Transformar arrays: map y filter"
tecnologia: javascript
categoria: Arrays y objetos
modulo: arrays-objetos
orden: 3
descripcion: "Dos métodos que reemplazan la mayoría de los bucles: transformar cada elemento y quedarte solo con los que cumplen una condición."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - arrays
leccionesRelacionadas:
  - arrays
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const precios = [100, 250, 80];
    - id: "2"
      indent: 0
      codigo: |-
        const conIva = precios.map((precio) => precio * 1.21);
    - id: "3"
      indent: 0
      codigo: |-
        const caros = precios.filter((precio) => precio > 90);
  explicaciones:
    - para: "1"
      tecnica: |-
        Una lista de precios. Vamos a transformarla sin escribir un solo bucle `for`, usando dos métodos que toman una función y la aplican a cada elemento.
      analogia: |-
        Es la lista de productos en la cinta: ahora le vamos a poner estaciones que procesan cada uno al pasar.
    - para: "2"
      tecnica: |-
        `.map()` crea un **array nuevo** aplicando una función a **cada** elemento. Acá, cada precio se multiplica por 1.21 (le suma IVA), y `conIva` queda `[121, 302.5, 96.8]`. Entran tres, salen tres, todos transformados. El array original **no se toca**.
      analogia: |-
        Es la estación que le pega una etiqueta de precio final a cada producto que pasa: misma cantidad de productos, cada uno modificado, y los originales quedan intactos en otra cinta.
    - para: "3"
      tecnica: |-
        `.filter()` crea un array nuevo **conservando solo** los elementos cuya función devuelve `true`. Acá, solo los precios mayores a 90, así que `caros` queda `[100, 250]` (el 80 quedó afuera). A diferencia de `map`, puede devolver menos elementos.
      analogia: |-
        Es el colador de la cinta: solo dejo pasar los productos que cumplen el criterio (más de 90). Los demás quedan afuera.
      nota: |-
        `map` y `filter` son **declarativos**: decís *qué* querés (transformar, filtrar), no *cómo* recorrer la lista paso a paso. Son más legibles y menos propensos a errores que un bucle `for` manual, y devuelven arrays nuevos en vez de modificar el original, lo cual evita muchos bugs.
---

`map` (transformar cada elemento) y `filter` (quedarte con los que cumplen una condición) reemplazan a la mayoría de los bucles que escribirías a mano. Ambos devuelven un **array nuevo** sin tocar el original, y se leen casi como una frase. Dominarlos es un salto enorme en tu forma de escribir JavaScript.
