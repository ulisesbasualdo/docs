---
titulo: "Variables: guardar informacion"
tecnologia: javascript
categoria: JavaScript basico
modulo: js-basico
orden: 1
descripcion: "Que es una variable, la diferencia entre const y let, y como elegir buenos nombres."
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
        Una **variable** es un espacio con nombre donde guardas un dato para usarlo despues. Esta linea declara una con `const` (de _constante_): una variable cuyo valor **no se puede reasignar**. Le ponemos el nombre `nombreNegocio` y le asignamos con el signo `=` un _string_ (texto entre comillas). Fijate el estilo del nombre: `nombreNegocio`, palabras pegadas con mayuscula interna. Se llama _camelCase_ y es la convencion de JavaScript.
      analogia: |-
        Es una caja etiquetada en un deposito. La etiqueta dice "nombreNegocio" y adentro guardaste un cartel con el texto. `const` significa que la caja esta sellada: podes leer lo que tiene cuantas veces quieras, pero no cambiar el contenido.
      nota: |-
        Buena practica: usa `const` por defecto, siempre. Solo cambia a `let` cuando sepas que el valor SE VA a reasignar. Esto le dice a quien lee tu codigo que valores son fijos y cuales cambian, y el propio lenguaje te avisa con un error si reasignas una constante por accidente.
    - para: "2"
      tecnica: |-
        Esta variable se declara con `let`, que si permite reasignar. La usamos para un contador: cuantos productos hay en el carrito de compras. Arranca en `0`, un _number_ (numero, sin comillas: `0` es un numero y `'0'` seria texto, son tipos distintos y no conviene mezclarlos).
      analogia: |-
        Otra caja del deposito, pero esta con tapa abrible: el contenido se va a ir actualizando. Adentro pusiste un contador en cero, como el tablero de "dias sin accidentes" de una fabrica.
    - para: "3"
      tecnica: |-
        Una **reasignacion**: el valor de la variable cambia. Se lee de derecha a izquierda: primero se calcula `productosEnCarrito + 1` (cero mas uno, da uno) y el resultado se guarda de nuevo en la variable. El `=` en programacion no es "igual a" como en matematica: es "guarda esto aca". Esta linea es lo que ejecutarias cuando el usuario toca "Agregar al carrito".
      analogia: |-
        Abriste la caja con tapa, miraste el contador, le sumaste uno y lo volviste a guardar. La caja sellada del nombre del negocio no se toco; la abrible se actualizo. Por eso una era `const` y la otra `let`.
---

Todo programa, desde una calculadora hasta una tienda online, se reduce a guardar datos y transformarlos. Las **variables** son la forma de guardarlos. Si entendes esta leccion, ya estas programando.
