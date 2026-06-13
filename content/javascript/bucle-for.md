---
titulo: "Repetir con for"
tecnologia: javascript
categoria: Control de flujo
modulo: control-de-flujo
orden: 1
descripcion: "Cómo recorrer una lista y ejecutar la misma lógica para cada elemento, con el legible for...of."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - javascript
  - bucles
leccionesRelacionadas:
  - while-y-control
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const productos = ['café', 'té', 'mate'];
    - id: "2"
      indent: 0
      codigo: |-
        for (const producto of productos) {
    - id: "3"
      indent: 1
      codigo: |-
        console.log(producto);
    - id: "4"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        La lista que vamos a recorrer. Un **bucle** sirve para ejecutar el mismo bloque de código una vez por cada elemento, sin escribirlo tres veces a mano.
      analogia: |-
        Es la pila de sobres por despachar: en vez de explicar el procedimiento sobre por sobre, das una instrucción que se repite para cada uno.
    - para: "2"
      tecnica: |-
        `for...of` es la forma más legible de recorrer un array. Se lee casi como español: "para cada `producto` de `productos`". En cada vuelta, la variable `producto` toma el valor del elemento actual: primero `'café'`, después `'té'`, después `'mate'`.
      analogia: |-
        Es decir "por cada sobre de la pila, hacé lo siguiente": el bucle te va pasando los sobres de a uno.
    - para: "3"
      tecnica: |-
        El **cuerpo** del bucle: lo que se ejecuta en cada vuelta. Acá solo imprimimos el producto, pero podría ser cualquier lógica (calcular, mostrar en pantalla, sumar). Está indentado porque vive dentro del `for`.
      analogia: |-
        Es el procedimiento que aplicás a cada sobre: en este caso, leer en voz alta lo que dice.
    - para: "4"
      tecnica: |-
        La llave cierra el bucle. Cuando no quedan más elementos, el `for` termina y el programa sigue después de esta línea. Existe también el `for` clásico con contador (`for (let i = 0; ...)`), útil cuando necesitás el número de la posición, pero `for...of` es más claro para el caso común.
      analogia: |-
        Es terminar con la pila: cuando no quedan sobres, cerrás la tarea y seguís con lo siguiente.
---

Un bucle ejecuta la misma lógica para muchos elementos. `for...of` es la forma más legible de recorrer un array: "para cada elemento, hacé esto". Para casos donde necesitás transformar o filtrar, los métodos `map` y `filter` suelen ser aún mejores, pero el `for` sigue siendo la herramienta base que conviene entender.
