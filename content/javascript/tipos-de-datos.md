---
titulo: "Tipos de datos"
tecnologia: javascript
categoria: JavaScript básico
modulo: js-basico
orden: 3
descripcion: "Los tipos básicos con los que trabajás todo el tiempo: texto, números, booleanos y la ausencia de valor."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - javascript
  - basico
  - tipos
leccionesRelacionadas:
  - variables
  - condicionales
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const nombre = 'Ana';
    - id: "2"
      indent: 0
      codigo: |-
        const edad = 30;
    - id: "3"
      indent: 0
      codigo: |-
        const esCliente = true;
    - id: "4"
      indent: 0
      codigo: |-
        const descuento = null;
    - id: "5"
      indent: 0
      codigo: |-
        console.log(typeof edad);
  explicaciones:
    - para: "1"
      tecnica: |-
        Un _string_ (cadena de texto): cualquier valor entre comillas. Sirve para nombres, mensajes, direcciones. Las comillas pueden ser simples (`'`), dobles (`"`) o invertidas (las de los _template literals_, que permiten incrustar variables).
      analogia: |-
        Es lo que escribirías en un cartel: letras y palabras. Las comillas son el marco que dice "esto es texto, no una instrucción".
    - para: "2"
      tecnica: |-
        Un _number_ (número): se escribe **sin comillas**. JavaScript no separa enteros de decimales, todos son `number`. Con ellos hacés cuentas: precios, edades, cantidades. Ojo: `30` es un número y `'30'` es texto, y se comportan distinto.
      analogia: |-
        Es una cantidad real en la calculadora: podés sumarla y multiplicarla. El `'30'` con comillas sería el número escrito en un cartel, que no sirve para calcular.
    - para: "3"
      tecnica: |-
        Un _boolean_ (booleano): solo puede valer `true` (verdadero) o `false` (falso). Es el tipo de las respuestas sí/no: ¿es cliente?, ¿está pago?, ¿hay stock? Es la base de toda decisión con `if`.
      analogia: |-
        Es un interruptor: encendido o apagado, sin grises. ¿Cliente registrado? Sí o no.
    - para: "4"
      tecnica: |-
        `null` representa la **ausencia intencional** de valor: "acá no hay nada, a propósito". Lo usás cuando algo todavía no tiene valor, como un descuento que aún no se aplicó. Es distinto de `undefined`, que es "ni siquiera se definió".
      analogia: |-
        Es el casillero del formulario dejado en blanco a propósito: existe, pero está vacío porque así corresponde.
    - para: "5"
      tecnica: |-
        `typeof` es un operador que te dice **de qué tipo** es un valor. `typeof edad` devuelve `'number'`. Es muy útil para depurar cuando algo no se comporta como esperás: muchas veces el problema es que un número era en realidad un texto.
      analogia: |-
        Es preguntarle a una pieza "¿vos qué sos?" antes de usarla: te ahorra meter un tornillo donde iba un clavo.
---

JavaScript maneja varios tipos de datos, y los básicos son cuatro: _string_ (texto), _number_ (números), _boolean_ (verdadero/falso) y `null` (vacío a propósito). Distinguirlos es clave: el error más común al empezar es tratar un texto como número, o al revés. `typeof` es tu aliado para descubrirlo.
