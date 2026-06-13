---
titulo: "Funciones flecha"
tecnologia: javascript
categoria: Funciones
modulo: funciones
orden: 2
descripcion: "La sintaxis corta de función que vas a ver en todos lados, con y sin retorno implícito."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - funciones
  - arrow
leccionesRelacionadas:
  - declarar-funciones
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const sumarIva = (precio) => precio * 1.21;
    - id: "2"
      indent: 0
      codigo: |-
        const saludar = (nombre) => {
    - id: "3"
      indent: 1
      codigo: |-
        return `Hola, ${nombre}`;
    - id: "4"
      indent: 0
      codigo: |-
        };
  explicaciones:
    - para: "1"
      tecnica: |-
        Una **función flecha** (_arrow function_): la sintaxis moderna y corta. Se guarda en una constante y la flecha `=>` separa los parámetros del cuerpo. Cuando el cuerpo es **una sola expresión**, el resultado se devuelve **automáticamente**, sin escribir `return`: a eso se le dice retorno implícito. Esta línea es equivalente a una función que recibe `precio` y devuelve `precio * 1.21`.
      analogia: |-
        Es la receta exprés escrita en una línea: "precio, entra; precio por 1.21, sale". Tan corta que ni hace falta aclarar "esto es lo que entrego".
    - para: "2"
      tecnica: |-
        Otra flecha, pero ahora con **cuerpo en bloque**: las llaves `{` abren varias líneas de lógica. En cuanto ponés llaves, el retorno automático **desaparece** y tenés que escribir `return` vos mismo (lo vemos en la línea siguiente).
      analogia: |-
        Es la receta con varios pasos: al abrir el recetario en una página entera, ya no alcanza con "entra y sale", hay que decir explícitamente qué plato servís.
    - para: "3"
      tecnica: |-
        Acá sí va el `return` explícito, porque usamos llaves. Devuelve un _template literal_ (texto entre comillas invertidas) que incrusta el `nombre` con `${ }`. Olvidarse de este `return` cuando hay llaves es uno de los errores más comunes: la función devolvería `undefined`.
      analogia: |-
        Es el paso final de la receta de varios pasos: "serví este plato". Si te lo olvidás, la cocina trabajó pero no entregó nada.
    - para: "4"
      tecnica: |-
        Cierra el cuerpo de la flecha y, como está guardada en una constante, lleva `;` al final. Las funciones flecha son las que más vas a ver al trabajar con arrays (`map`, `filter`) y eventos, por lo cortas que son.
      analogia: |-
        Cerrás la página del recetario. Esta forma compacta es la preferida para las recetas rápidas que se usan al pasar.
---

Las funciones flecha (`=>`) son la forma corta y omnipresente de escribir funciones. La regla clave: **sin llaves**, el resultado se devuelve solo (retorno implícito); **con llaves**, tenés que escribir `return`. Las vas a usar constantemente con arrays y eventos.
