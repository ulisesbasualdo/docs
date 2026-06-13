---
titulo: "Módulos: import y export"
tecnologia: javascript
categoria: Código limpio y buenas prácticas
modulo: codigo-limpio
orden: 2
descripcion: "Cómo partir el código en archivos que comparten funciones entre sí, la base de cualquier proyecto serio."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - javascript
  - modulos
leccionesRelacionadas:
  - nombres-y-funciones
archivos:
  - nombre: iva.js
    lenguaje: javascript
    lineas:
      - id: "1"
        indent: 0
        codigo: |-
          export function sumarIva(precio) {
      - id: "2"
        indent: 1
        codigo: |-
          return precio * 1.21;
      - id: "3"
        indent: 0
        codigo: |-
          }
    explicaciones:
      - para: "1"
        tecnica: |-
          Este es el archivo `iva.js`. La palabra `export` antes de la función la hace **pública**: disponible para que otros archivos la usen. Lo que no exportás queda privado de este archivo. Partir el código en módulos por responsabilidad (uno para impuestos, otro para el carrito) mantiene cada archivo chico y enfocado.
        analogia: |-
          Es el taller de impuestos del negocio que pone un cartel "servicio disponible: sumar IVA". Lo que no tiene cartel, no se ofrece afuera.
      - para: "2"
        tecnica: |-
          La lógica de la función, una sola y bien acotada: sumar el IVA. Este archivo se dedica solo a esto, y se puede entender, probar y reutilizar por separado.
        analogia: |-
          Es el procedimiento puntual de ese taller, sin mezclarlo con otras tareas del negocio.
      - para: "3"
        tecnica: |-
          Cierra la función exportada. Un módulo puede exportar varias funciones o valores; cada uno se vuelve parte de su "interfaz pública".
        analogia: |-
          Termina el servicio ofrecido. El taller podría poner varios carteles de servicios disponibles.
  - nombre: app.js
    lenguaje: javascript
    lineas:
      - id: "1"
        indent: 0
        codigo: |-
          import { sumarIva } from './iva.js';
      - id: "2"
        indent: 0
        codigo: |-
          const total = sumarIva(1000);
    explicaciones:
      - para: "1"
        tecnica: |-
          En otro archivo, `app.js`, **importamos** lo que el otro exportó. `import { sumarIva } from './iva.js'` trae esa función puntual desde su archivo. El nombre entre llaves debe coincidir con el que se exportó. Así un archivo usa la lógica de otro sin copiarla: se escribe una vez y se reutiliza donde haga falta.
        analogia: |-
          Es ir al taller de impuestos a pedir su servicio "sumar IVA": no recreás el procedimiento, usás el que ya existe.
      - para: "2"
        tecnica: |-
          Ya importada, la función se usa como cualquier otra. Esta es la gran ventaja de los módulos: el código vive en un solo lugar, y si mañana cambia el cálculo del IVA, lo arreglás en `iva.js` y **todos** los archivos que lo importan quedan actualizados.
        analogia: |-
          Es usar el servicio del taller en tu sucursal. Si el taller cambia el procedimiento, todas las sucursales que lo usan reciben la mejora sin hacer nada.
        nota: |-
          Este sistema (`import`/`export`) se llama ES Modules y es el estándar moderno. En el navegador se activa con `<script type="module">`. Es la base sobre la que se montan herramientas más grandes y frameworks como Angular o React.
---

Los módulos parten tu código en archivos que se comparten lo necesario con `export` (hacer público) e `import` (traer de otro archivo). Cada archivo queda chico y enfocado, la lógica vive en un solo lugar, y se reutiliza sin copiar. Es la base de cualquier proyecto que crezca más allá de un archivo.
