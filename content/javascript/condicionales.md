---
titulo: "Condicionales: el if"
tecnologia: javascript
categoria: JavaScript básico
modulo: js-basico
orden: 2
descripcion: "Cómo un programa toma decisiones con if y else, explicado con un caso real: el envío gratis de una tienda."
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
        console.log('Tu envío es gratis.');
    - id: "4"
      indent: 0
      codigo: |-
        } else {
    - id: "5"
      indent: 1
      codigo: |-
        console.log('Te faltan ' + (20000 - totalCompra) + ' pesos para el envío gratis.');
    - id: "6"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Una constante con el total de la compra del usuario, 25000 pesos. En una tienda real este número vendría de sumar el carrito; acá lo fijamos para concentrarnos en la decisión.
      analogia: |-
        Es el ticket que el cajero tiene en la mano antes de decidir si te corresponde la promo.
    - para: "2"
      tecnica: |-
        Acá el programa **decide**. `if` (si, en inglés) evalúa la **condición** entre paréntesis: `totalCompra >= 20000`, que se lee "el total es mayor o igual a veinte mil". Esa comparación da un valor _booleano_: `true` (verdadero) o `false` (falso), los únicos dos valores de ese tipo. Si da `true`, se ejecuta el bloque que abre la llave `{`. Si da `false`, ese bloque se saltea entero.
      analogia: |-
        Es el cartel de la promo pegado en la caja: "COMPRAS DESDE $20.000 -> ENVÍO GRATIS". El cajero mira tu ticket, lo compara con el cartel, y según el resultado toma un camino u otro. No hay terceras opciones: o cumple o no cumple.
    - para: "3"
      tecnica: |-
        El **camino del sí**: esta línea solo se ejecuta cuando la condición dio `true`. Con 25000 de compra, se cumple, así que este mensaje se imprime. Mirá la sangría: está corrida a la derecha porque vive **adentro** del bloque del `if`, igual que la anidación que viste en HTML.
      analogia: |-
        El cajero te dice "tu envío es gratis". Esa frase solo existe en la realidad donde tu ticket cumplió la condición.
    - para: "4"
      tecnica: |-
        `} else {` cierra el camino del sí y abre el **camino del no** (_else_ significa "si no"). Este bloque se ejecuta únicamente cuando la condición dio `false`. El `else` es opcional: si no hay nada que hacer en el caso negativo, no se escribe.
      analogia: |-
        Es el "y si no..." del cartel: qué pasa con los tickets que no llegan al mínimo. El cajero tiene preparada una respuesta para ese caso también.
    - para: "5"
      tecnica: |-
        El mensaje del camino del no, con un cálculo adentro: `20000 - totalCompra` da cuánto falta para la promo, y el operador `+` con strings **concatena** (pega los textos). Esto es mejor experiencia de usuario que un seco "no tenés envío gratis": le decís cuánto le falta, lo cual además empuja la venta. Los paréntesis alrededor de la resta hacen que se calcule primero el número y después se pegue al texto.
      analogia: |-
        En vez de "no llegaste", el cajero te dice "te faltan 3000 pesos para el envío gratis". Mismo dato, pero accionable: capaz volvés a la góndola a buscar algo más. Así piensan las tiendas reales sus mensajes.
    - para: "6"
      tecnica: |-
        La llave final cierra el bloque del `else` y con él toda la estructura condicional. El programa sigue su curso después de esta línea, haya tomado el camino que haya tomado.
      analogia: |-
        La decisión quedó tomada, el cajero te entregó el ticket y atiende al siguiente. La vida sigue por un único camino de nuevo.
---

Un programa sin decisiones es una calculadora que siempre da lo mismo. El `if` es la estructura que permite que tu código reaccione distinto según los datos: la primera herramienta de lógica real que vas a usar todos los días.
