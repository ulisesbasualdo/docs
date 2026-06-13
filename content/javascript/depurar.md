---
titulo: "Depurar con la consola"
tecnologia: javascript
categoria: Manejo de errores
modulo: errores
orden: 2
descripcion: "Las herramientas básicas para entender qué está haciendo tu código cuando no se comporta como esperás."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - depuracion
leccionesRelacionadas:
  - try-catch
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        console.log('Total calculado:', total);
    - id: "2"
      indent: 0
      codigo: |-
        console.table(productos);
    - id: "3"
      indent: 0
      codigo: |-
        console.error('No se pudo cargar el carrito');
  explicaciones:
    - para: "1"
      tecnica: |-
        `console.log` imprime valores en la **consola** del navegador (se abre con F12). Es la herramienta de depuración número uno: cuando algo no anda, imprimís las variables para ver qué valor tienen **realmente**, que muchas veces no es el que creías. El truco de pasar una etiqueta primero (`'Total calculado:'`) hace que el resultado sea fácil de identificar entre muchos mensajes.
      analogia: |-
        Es abrir la tapa de la máquina y mirar qué hay adentro mientras funciona: dejás de adivinar y ves el valor real con tus ojos.
    - para: "2"
      tecnica: |-
        `console.table` muestra arrays y objetos como una **tabla** ordenada, mucho más legible que un `log` cuando tenés una lista de productos o usuarios. Es uno de esos métodos que poca gente conoce y que ahorran muchísimo tiempo al inspeccionar datos.
      analogia: |-
        Es volcar el contenido del cajón sobre una planilla prolija en vez de mirarlo amontonado: de un vistazo ves todo ordenado.
    - para: "3"
      tecnica: |-
        `console.error` imprime un mensaje marcado como error (en rojo, con el detalle de dónde se llamó). Sirve para distinguir tus avisos de problema de los `log` informativos. Hay más: `console.warn` para advertencias, `console.count` para contar llamadas.
      analogia: |-
        Es la luz roja del tablero, distinta de las luces informativas: salta a la vista entre todo lo demás.
      nota: |-
        La consola es el primer paso, pero la herramienta más potente es el **debugger** del navegador: poniendo un punto de interrupción (_breakpoint_) podés **pausar** el código en una línea y revisar todas las variables en ese instante, ejecutando paso a paso. Cuando un `console.log` no alcanza, ese es el siguiente nivel.
---

Depurar es entender qué hace tu código en realidad, no lo que creés que hace. La consola del navegador (F12) es tu aliada: `console.log` para ver valores, `console.table` para listas, `console.error` para destacar problemas. Y cuando eso no alcanza, los breakpoints del debugger te dejan pausar y revisar todo paso a paso.
