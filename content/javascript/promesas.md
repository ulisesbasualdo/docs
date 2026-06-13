---
titulo: "Promesas"
tecnologia: javascript
categoria: Asincronismo
modulo: asincronismo
orden: 1
descripcion: "Cómo JavaScript maneja operaciones que tardan, como pedir datos a un servidor, sin congelar la página."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - asincronismo
  - promesas
leccionesRelacionadas:
  - async-await-y-fetch
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        fetch('/api/productos')
    - id: "2"
      indent: 1
      codigo: |-
        .then((respuesta) => respuesta.json())
    - id: "3"
      indent: 1
      codigo: |-
        .then((productos) => console.log(productos))
    - id: "4"
      indent: 1
      codigo: |-
        .catch((error) => console.error(error));
  explicaciones:
    - para: "1"
      tecnica: |-
        `fetch` pide datos a un servidor. Eso **tarda** (viaja por internet), y JavaScript no se queda congelado esperando: sigue ejecutando el resto del código. `fetch` no devuelve los datos directamente, devuelve una **Promesa**: un objeto que representa "un resultado que va a llegar, pero todavía no".
      analogia: |-
        Es sacar un ticket numerado en la panadería: no te dan el pan al instante, te dan la promesa de que cuando esté listo te lo entregan. Mientras tanto, seguís con otras cosas.
    - para: "2"
      tecnica: |-
        `.then()` programa qué hacer **cuando** la promesa se cumpla. Recibe el resultado (la `respuesta` del servidor) y devuelve `respuesta.json()`, que convierte esa respuesta cruda en datos JavaScript usables. Como esa conversión también tarda, devuelve **otra** promesa, que encadenamos con el siguiente `.then`.
      analogia: |-
        Es decir "cuando me entreguen el pan, lo desenvuelvo": un paso que también lleva su tiempo y deja todo listo para el siguiente.
    - para: "3"
      tecnica: |-
        El segundo `.then` recibe ya los `productos` convertidos y los usa. Cada `.then` se ejecuta cuando termina el anterior, formando una **cadena** de pasos asincrónicos en orden, sin congelar la página en ningún momento.
      analogia: |-
        Es el paso final: "ya desenvuelto, lo pongo en la vidriera". Cada paso espera a que el anterior termine.
    - para: "4"
      tecnica: |-
        `.catch()` atrapa **cualquier error** de la cadena: si no hay internet, si el servidor falla, si la respuesta no es válida. Sin un `.catch`, un error quedaría silenciado y no sabrías por qué tu app no funciona. Siempre cerrá tus cadenas de promesas con un `.catch`.
      analogia: |-
        Es el plan B: si la panadería se queda sin pan, alguien te avisa. Sin ese aviso, te quedarías esperando un pan que nunca llega, sin entender por qué.
---

Las operaciones que tardan (pedir datos, leer archivos) son **asincrónicas**: JavaScript no se congela esperándolas. Una **Promesa** representa ese resultado futuro, y la manejás con `.then()` (cuando llega) encadenados y un `.catch()` (si algo falla). Es el modelo base sobre el que después se construye la sintaxis más cómoda de async/await.
