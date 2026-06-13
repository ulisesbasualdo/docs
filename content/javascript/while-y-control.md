---
titulo: "While, break y continue"
tecnologia: javascript
categoria: Control de flujo
modulo: control-de-flujo
orden: 2
descripcion: "Repetir mientras se cumpla una condición, y cómo cortar o saltear vueltas de un bucle."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - bucles
leccionesRelacionadas:
  - bucle-for
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        let intentos = 0;
    - id: "2"
      indent: 0
      codigo: |-
        while (intentos < 3) {
    - id: "3"
      indent: 1
      codigo: |-
        intentos = intentos + 1;
    - id: "4"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        Un contador en `0`, declarado con `let` porque **va a cambiar**. Mientras el `for` se usa cuando sabés cuántas vueltas dar, el `while` sirve cuando repetís **hasta que pase algo**, sin saber de antemano cuántas veces.
      analogia: |-
        Es el contador de intentos de una clave: arranca en cero y va a ir subiendo hasta cumplir una condición.
    - para: "2"
      tecnica: |-
        `while` repite el bloque **mientras** la condición entre paréntesis sea verdadera. Antes de cada vuelta, evalúa `intentos < 3`: si es `true`, ejecuta; si es `false`, corta. Clave: algo adentro tiene que ir acercando la condición a falsa, o el bucle nunca termina (un bucle infinito que cuelga la página).
      analogia: |-
        Es la regla "seguí intentando mientras tengas menos de 3 intentos": en algún momento la condición deja de cumplirse y parás.
    - para: "3"
      tecnica: |-
        El cuerpo: sumamos uno al contador. **Esta línea es la que evita el bucle infinito**: en cada vuelta `intentos` crece, así que tras tres vueltas la condición `intentos < 3` se vuelve falsa y el `while` termina. Olvidar esta actualización es el error clásico del `while`.
      analogia: |-
        Es marcar un intento más en la cuenta: sin esta marca, intentarías para siempre.
    - para: "4"
      tecnica: |-
        Cierra el `while`. Dentro de cualquier bucle podés usar `break` para **cortarlo** de inmediato (por ejemplo, encontraste lo que buscabas) y `continue` para **saltear** la vuelta actual y pasar a la siguiente. Son dos herramientas finas para controlar el flujo desde adentro.
      analogia: |-
        Es cerrar la regla de intentos. `break` sería "ya está, lo logré, paro"; `continue` sería "este intento no cuenta, paso al próximo".
---

El `while` repite **mientras** una condición sea verdadera, ideal cuando no sabés cuántas vueltas vas a necesitar. Cuidado con actualizar la condición adentro, o tenés un bucle infinito. Y desde cualquier bucle, `break` lo corta y `continue` saltea a la próxima vuelta.
