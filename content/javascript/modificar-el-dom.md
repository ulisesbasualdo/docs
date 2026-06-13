---
titulo: "Crear y modificar elementos"
tecnologia: javascript
categoria: Manipular la página (DOM)
modulo: dom
orden: 2
descripcion: "Cómo crear un elemento desde cero, darle contenido y clases, e insertarlo en la página."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - dom
leccionesRelacionadas:
  - seleccionar-elementos
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const item = document.createElement('li');
    - id: "2"
      indent: 0
      codigo: |-
        item.textContent = 'Café premium';
    - id: "3"
      indent: 0
      codigo: |-
        item.classList.add('destacado');
    - id: "4"
      indent: 0
      codigo: |-
        document.querySelector('ul').append(item);
  explicaciones:
    - para: "1"
      tecnica: |-
        `document.createElement('li')` crea un elemento nuevo, acá un `<li>`, **en memoria**. Todavía no está en la página: es como una pieza recién fabricada que aún no colgaste en ningún lado.
      analogia: |-
        Es fabricar un cartelito nuevo en el taller: existe, lo tenés en la mano, pero todavía no está pegado en la pared.
    - para: "2"
      tecnica: |-
        Le damos su texto con `textContent`, igual que cuando modificamos un elemento existente. La pieza nueva ya dice "Café premium".
      analogia: |-
        Es escribirle el texto al cartelito recién hecho.
    - para: "3"
      tecnica: |-
        `classList.add('destacado')` le agrega una clase CSS. Esto conecta JavaScript con tus estilos: agregando o quitando clases (`add`, `remove`, `toggle`), cambiás cómo se ve un elemento sin tocar el CSS, que ya tiene definida la clase `.destacado`.
      analogia: |-
        Es ponerle al cartelito el sello "destacado", para que la decoración (CSS) ya sepa cómo pintarlo.
    - para: "4"
      tecnica: |-
        `append` inserta el elemento como **último hijo** de otro, acá del primer `<ul>` de la página. Recién en esta línea la pieza aparece en pantalla: la creamos, la preparamos y por fin la colgamos. El orden importa: primero se arma completa, después se inserta.
      analogia: |-
        Es colgar por fin el cartelito en la pared (la lista): ahí el cliente lo ve. Lo armaste entero en el taller y lo pusiste de una.
---

Para agregar contenido dinámico: `createElement` fabrica el elemento, `textContent` le da su texto, `classList` lo conecta con tus estilos, y `append` lo inserta en la página. El patrón es siempre el mismo: crear y preparar en memoria, y recién al final insertar en el DOM.
