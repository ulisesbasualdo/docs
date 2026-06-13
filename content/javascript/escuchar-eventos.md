---
titulo: "Escuchar eventos"
tecnologia: javascript
categoria: Eventos
modulo: eventos
orden: 1
descripcion: "Cómo hacer que tu página reaccione a las acciones del usuario, como un clic en un botón."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - eventos
leccionesRelacionadas:
  - el-evento
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const boton = document.querySelector('#comprar');
    - id: "2"
      indent: 0
      codigo: |-
        boton.addEventListener('click', () => {
    - id: "3"
      indent: 1
      codigo: |-
        console.log('Producto agregado al carrito');
    - id: "4"
      indent: 0
      codigo: |-
        });
  explicaciones:
    - para: "1"
      tecnica: |-
        Primero seleccionamos el botón por su id, como viste en el DOM. Para que algo reaccione, antes hay que tenerlo agarrado.
      analogia: |-
        Es señalar el botón rojo de la máquina que querés vigilar.
    - para: "2"
      tecnica: |-
        `addEventListener` pone a un elemento a **escuchar** un tipo de evento. El primer argumento es qué escuchar (`'click'`); el segundo es una función **callback**, que el navegador ejecuta **cada vez** que ocurre el evento. La función no se ejecuta ahora: queda esperando, lista para cuando el usuario haga clic.
      analogia: |-
        Es contratar a alguien que vigila el botón y le dejás dicho: "cada vez que lo aprieten, hacé esto". No hace nada hasta que alguien aprieta.
    - para: "3"
      tecnica: |-
        El cuerpo del callback: lo que pasa en cada clic. Acá imprimimos un mensaje, pero acá iría la lógica real: sumar el producto al carrito, abrir un modal, enviar datos. Esta es la línea que convierte una página estática en algo interactivo.
      analogia: |-
        Es la instrucción que ejecuta el vigilante en cada apretón: "anotá que se agregó un producto".
    - para: "4"
      tecnica: |-
        Cierra el callback y la llamada a `addEventListener`. Hay muchísimos tipos de evento además de `'click'`: `'submit'` (enviar formulario), `'input'` (escribir en un campo), `'mouseover'` (pasar el cursor). El patrón es siempre el mismo: elemento, tipo de evento, función a ejecutar.
      analogia: |-
        Cerrás el acuerdo con el vigilante. Podés contratar vigilantes para distintos gestos: apretar, pasar la mano, escribir. La fórmula no cambia.
---

Los eventos son cómo tu página reacciona al usuario. `elemento.addEventListener('evento', callback)` deja una función "en espera" que el navegador ejecuta cada vez que ocurre la acción. Es el corazón de la interactividad: clics, envíos de formulario, teclas. La fórmula es siempre: qué elemento, qué evento, qué función.
