---
titulo: "El objeto del evento"
tecnologia: javascript
categoria: Eventos
modulo: eventos
orden: 2
descripcion: "Cada evento trae información, y a veces hay que evitar el comportamiento por defecto del navegador."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - eventos
leccionesRelacionadas:
  - escuchar-eventos
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        formulario.addEventListener('submit', (evento) => {
    - id: "2"
      indent: 1
      codigo: |-
        evento.preventDefault();
    - id: "3"
      indent: 1
      codigo: |-
        console.log('Enviado sin recargar la página');
    - id: "4"
      indent: 0
      codigo: |-
        });
  explicaciones:
    - para: "1"
      tecnica: |-
        Escuchamos el evento `'submit'` de un formulario. Fijate que el callback recibe un parámetro, `evento`: el navegador le pasa automáticamente un **objeto con información** sobre lo que ocurrió (qué elemento lo disparó, qué tecla se apretó, la posición del mouse). Vos elegís el nombre; por convención se usa `evento` o `e`.
      analogia: |-
        Es el vigilante que, cuando algo pasa, no solo avisa, sino que te entrega un informe: qué pasó, dónde y cuándo.
    - para: "2"
      tecnica: |-
        `evento.preventDefault()` **cancela el comportamiento por defecto** del navegador. Un formulario, al enviarse, por defecto recarga la página; esta línea lo evita, para manejar el envío con JavaScript (validar, enviar con `fetch`) sin que la página se recargue. Es de los métodos del evento que más vas a usar.
      analogia: |-
        Es frenar el piloto automático: el formulario "quería" recargar la página solo; vos le decís "pará, de esto me encargo yo".
    - para: "3"
      tecnica: |-
        Ahora sí, tu lógica: acá iría la validación o el envío de los datos con `fetch`. Como cancelaste el comportamiento por defecto, la página no se recargó y la experiencia es fluida, sin parpadeos.
      analogia: |-
        Es lo que hacés vos en lugar del piloto automático: revisar y despachar a mano, con más control.
    - para: "4"
      tecnica: |-
        Cierra el callback. Otros usos del objeto evento: `evento.target` (el elemento que lo disparó, útil para saber en qué ítem de una lista se hizo clic) y `evento.key` (la tecla apretada). El objeto evento es la fuente de información de toda interacción.
      analogia: |-
        Cerrás el acuerdo. El informe del vigilante (`evento`) tiene muchos datos más: quién apretó, qué tecla, dónde, listos para que los uses.
---

Cada vez que ocurre un evento, el navegador le pasa al callback un **objeto evento** con toda la información de lo que pasó. Su método estrella es `preventDefault()`, para frenar comportamientos automáticos como la recarga al enviar un formulario. Y `evento.target` te dice exactamente qué elemento disparó el evento.
