---
titulo: "Condicionales: el if"
tecnologia: javascript
categoria: JavaScript basico
modulo: js-basico
orden: 2
descripcion: "Como un programa toma decisiones con if y else, explicado con un caso real: el envio gratis de una tienda."
youtubeId: ""
publicadoEn: 2026-06-12
nivel: introductorio
tags:
  - javascript
  - basico
  - condicionales
leccionesRelacionadas:
  - variables
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const totalCompra = 25000;
    - id: "2"
      indent: 0
      codigo: |-
        if (totalCompra >= 20000) {
    - id: "3"
      indent: 1
      codigo: |-
        console.log('Tu envio es gratis.');
    - id: "4"
      indent: 0
      codigo: |-
        } else {
    - id: "5"
      indent: 1
      codigo: |-
        console.log('Te faltan ' + (20000 - totalCompra) + ' pesos para el envio gratis.');
    - id: "6"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Una constante con el total de la compra del usuario, 25000 pesos. En una tienda real este numero vendria de sumar el carrito; aca lo fijamos para concentrarnos en la decision.
      analogia: |-
        Es el ticket que el cajero tiene en la mano antes de decidir si te corresponde la promo.
    - para: "2"
      tecnica: |-
        Aca el programa **decide**. `if` (si, en ingles) evalua la **condicion** entre parentesis: `totalCompra >= 20000`, que se lee "el total es mayor o igual a veinte mil". Esa comparacion da un valor _booleano_: `true` (verdadero) o `false` (falso), los unicos dos valores de ese tipo. Si da `true`, se ejecuta el bloque que abre la llave `{`. Si da `false`, ese bloque se saltea entero.
      analogia: |-
        Es el cartel de la promo pegado en la caja: "COMPRAS DESDE $20.000 -> ENVIO GRATIS". El cajero mira tu ticket, lo compara con el cartel, y segun el resultado toma un camino u otro. No hay terceras opciones: o cumple o no cumple.
    - para: "3"
      tecnica: |-
        El **camino del si**: esta linea solo se ejecuta cuando la condicion dio `true`. Con 25000 de compra, se cumple, asi que este mensaje se imprime. Mira la sangria: esta corrida a la derecha porque vive **adentro** del bloque del `if`, igual que la anidacion que viste en HTML.
      analogia: |-
        El cajero te dice "tu envio es gratis". Esa frase solo existe en la realidad donde tu ticket cumplio la condicion.
    - para: "4"
      tecnica: |-
        `} else {` cierra el camino del si y abre el **camino del no** (_else_ significa "si no"). Este bloque se ejecuta unicamente cuando la condicion dio `false`. El `else` es opcional: si no hay nada que hacer en el caso negativo, no se escribe.
      analogia: |-
        Es el "y si no..." del cartel: que pasa con los tickets que no llegan al minimo. El cajero tiene preparada una respuesta para ese caso tambien.
    - para: "5"
      tecnica: |-
        El mensaje del camino del no, con un calculo adentro: `20000 - totalCompra` da cuanto falta para la promo, y el operador `+` con strings **concatena** (pega los textos). Esto es mejor experiencia de usuario que un seco "no tenes envio gratis": le decis cuanto le falta, lo cual ademas empuja la venta. Los parentesis alrededor de la resta hacen que se calcule primero el numero y despues se pegue al texto.
      analogia: |-
        En vez de "no llegaste", el cajero te dice "te faltan 3000 pesos para el envio gratis". Mismo dato, pero accionable: capaz volves a la gondola a buscar algo mas. Asi piensan las tiendas reales sus mensajes.
    - para: "6"
      tecnica: |-
        La llave final cierra el bloque del `else` y con el toda la estructura condicional. El programa sigue su curso despues de esta linea, haya tomado el camino que haya tomado.
      analogia: |-
        La decision quedo tomada, el cajero te entrego el ticket y atiende al siguiente. La vida sigue por un unico camino de nuevo.
---

Un programa sin decisiones es una calculadora que siempre da lo mismo. El `if` es la estructura que permite que tu codigo reaccione distinto segun los datos: la primera herramienta de logica real que vas a usar todos los dias.
