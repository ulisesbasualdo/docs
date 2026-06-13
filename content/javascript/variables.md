---
titulo: "Variables: guardar información"
tecnologia: javascript
categoria: JavaScript básico
modulo: js-basico
orden: 1
descripcion: "Qué es una variable, la diferencia entre const y let, y cómo elegir buenos nombres."
youtubeId: ""
publicadoEn: 2026-06-12
nivel: introductorio
tags:
  - javascript
  - basico
  - variables
leccionesRelacionadas:
  - condicionales
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const nombreNegocio = 'Tienda La Esquina';
    - id: "2"
      indent: 0
      codigo: |-
        let productosEnCarrito = 0;
    - id: "3"
      indent: 0
      codigo: |-
        productosEnCarrito = productosEnCarrito + 1;
  explicaciones:
    - para: "1"
      tecnica: |-
        Una **variable** es un espacio con nombre donde guardás un dato para usarlo después. Esta línea declara una con `const` (de _constante_): una variable cuyo valor **no se puede reasignar**. Le ponemos el nombre `nombreNegocio` y le asignamos con el signo `=` un _string_ (texto entre comillas). Fijate el estilo del nombre: `nombreNegocio`, palabras pegadas con mayúscula interna. Se llama _camelCase_ y es la convención de JavaScript.
      analogia: |-
        Es una caja etiquetada en un depósito. La etiqueta dice "nombreNegocio" y adentro guardaste un cartel con el texto. `const` significa que la caja está sellada: podés leer lo que tiene cuantas veces quieras, pero no cambiar el contenido.
      nota: |-
        Buena práctica: usá `const` por defecto, siempre. Solo cambiá a `let` cuando sepas que el valor SE VA a reasignar. Esto le dice a quien lee tu código qué valores son fijos y cuáles cambian, y el propio lenguaje te avisa con un error si reasignás una constante por accidente.
    - para: "2"
      tecnica: |-
        Esta variable se declara con `let`, que sí permite reasignar. La usamos para un contador: cuántos productos hay en el carrito de compras. Arranca en `0`, un _number_ (número, sin comillas: `0` es un número y `'0'` sería texto, son tipos distintos y no conviene mezclarlos).
      analogia: |-
        Otra caja del depósito, pero esta con tapa abrible: el contenido se va a ir actualizando. Adentro pusiste un contador en cero, como el tablero de "días sin accidentes" de una fábrica.
    - para: "3"
      tecnica: |-
        Una **reasignación**: el valor de la variable cambia. Se lee de derecha a izquierda: primero se calcula `productosEnCarrito + 1` (cero más uno, da uno) y el resultado se guarda de nuevo en la variable. El `=` en programación no es "igual a" como en matemática: es "guardá esto acá". Esta línea es lo que ejecutarías cuando el usuario toca "Agregar al carrito".
      analogia: |-
        Abriste la caja con tapa, miraste el contador, le sumaste uno y lo volviste a guardar. La caja sellada del nombre del negocio no se tocó; la abrible se actualizó. Por eso una era `const` y la otra `let`.
---

Todo programa, desde una calculadora hasta una tienda online, se reduce a guardar datos y transformarlos. Las **variables** son la forma de guardarlos. Si entendés esta lección, ya estás programando.
