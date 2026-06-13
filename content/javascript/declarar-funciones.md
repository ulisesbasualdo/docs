---
titulo: "Declarar funciones"
tecnologia: javascript
categoria: Funciones
modulo: funciones
orden: 1
descripcion: "Cómo empaquetar un bloque de lógica reutilizable que recibe datos y devuelve un resultado."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - javascript
  - funciones
leccionesRelacionadas:
  - arrow-y-scope
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        function calcularTotal(precio, cantidad) {
    - id: "2"
      indent: 1
      codigo: |-
        return precio * cantidad;
    - id: "3"
      indent: 0
      codigo: |-
        }
    - id: "4"
      indent: 0
      codigo: |-
        const total = calcularTotal(150, 3);
  explicaciones:
    - para: "1"
      tecnica: |-
        `function` declara una función: un bloque de lógica con nombre que podés ejecutar las veces que quieras. Entre paréntesis van los **parámetros** (`precio`, `cantidad`): los datos que la función necesita para trabajar, como casilleros vacíos a la espera de valores.
      analogia: |-
        Es una receta de cocina con nombre: "calcular total". Los parámetros son los ingredientes que pide; la receta es siempre la misma, los ingredientes cambian cada vez.
    - para: "2"
      tecnica: |-
        `return` define **qué devuelve** la función. Acá, el precio por la cantidad. Cuando el programa llega al `return`, calcula ese valor, lo entrega y **termina** la función: lo que venga después del return no se ejecuta.
      analogia: |-
        Es el plato terminado que sale de la cocina: la receta hace su trabajo y entrega el resultado. Una vez servido, la cocina cierra.
    - para: "3"
      tecnica: |-
        La llave cierra el **cuerpo** de la función: todo lo que está entre la `{` de la línea 1 y esta `}` es lo que la función hace. Hasta acá solo la **definimos**; todavía no la ejecutamos.
      analogia: |-
        Es guardar la receta en el recetario: está escrita y lista, pero nadie cocinó nada todavía.
    - para: "4"
      tecnica: |-
        Acá **llamamos** (ejecutamos) la función, pasándole los **argumentos** `150` y `3`. Esos valores entran en los parámetros `precio` y `cantidad`. La función calcula `450`, lo devuelve con su `return`, y ese resultado se guarda en `total`. Una función definida pero nunca llamada no hace nada.
      analogia: |-
        Es pedirle a la cocina "hacé la receta del total con estos ingredientes: 150 y 3". Recién ahí cocina y te entrega el plato (450), que ponés en la mesa (`total`).
---

Una función empaqueta lógica para reutilizarla: recibe datos por sus **parámetros**, hace su trabajo y entrega un resultado con `return`. Definirla no la ejecuta; hay que **llamarla** pasándole argumentos. Es la herramienta para no repetir código y darle nombre a cada cosa que tu programa sabe hacer.
