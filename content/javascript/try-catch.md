---
titulo: "try / catch: manejar errores"
tecnologia: javascript
categoria: Manejo de errores
modulo: errores
orden: 1
descripcion: "Cómo evitar que un error tire abajo todo el programa y reaccionar a él de forma controlada."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - errores
leccionesRelacionadas:
  - depurar
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        try {
    - id: "2"
      indent: 1
      codigo: |-
        const datos = JSON.parse(textoDelUsuario);
    - id: "3"
      indent: 0
      codigo: |-
        } catch (error) {
    - id: "4"
      indent: 1
      codigo: |-
        console.error('El texto no es JSON válido:', error.message);
    - id: "5"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        `try` abre un bloque de código "vigilado". Si algo adentro lanza un error, en vez de **romper todo el programa**, el control salta al `catch`. Se usa para operaciones que pueden fallar por causas fuera de tu control: datos del usuario, respuestas de red, lectura de archivos.
      analogia: |-
        Es trabajar con una red de seguridad debajo: intentás la maniobra arriesgada sabiendo que, si te caés, hay algo que te atrapa.
    - para: "2"
      tecnica: |-
        La operación riesgosa: `JSON.parse` convierte un texto en datos, pero si ese texto no es JSON válido (porque el usuario escribió cualquier cosa), **lanza un error**. Dentro del `try`, ese error no rompe la app: dispara el salto al `catch`.
      analogia: |-
        Es la maniobra arriesgada en sí: intentar leer algo que capaz está mal escrito. Si sale mal, caés en la red, no al piso.
    - para: "3"
      tecnica: |-
        `catch (error)` se ejecuta **solo si** hubo un error en el `try`. Recibe un objeto `error` con la información de qué falló. Si el `try` salió bien, este bloque se saltea por completo.
      analogia: |-
        Es la red de seguridad: solo entra en acción si te caés, y te dice exactamente cómo fue la caída.
    - para: "4"
      tecnica: |-
        Manejamos el error de forma controlada: `error.message` es la descripción legible de qué pasó. Acá lo registramos; en una app real podrías mostrarle al usuario un mensaje amable ("revisá el formato") en lugar de una pantalla rota. La clave es **reaccionar**, no ignorarlo.
      analogia: |-
        Es lo que hacés tras la caída: en vez de quedar tirado, te levantás y avisás "esto salió mal por tal motivo". El show continúa.
    - para: "5"
      tecnica: |-
        Cierra el `catch`. Existe además un bloque opcional `finally`, que se ejecuta **siempre** (haya error o no), ideal para tareas de limpieza. Y para **lanzar** tus propios errores a propósito está `throw`. En async/await, el `try`/`catch` es la forma de atrapar promesas que fallan.
      analogia: |-
        Cerrás la red. `finally` sería "pase lo que pase, al final guardo los elementos"; `throw` sería vos haciendo sonar la alarma cuando detectás algo mal.
---

`try`/`catch` evita que un error inesperado tire abajo todo el programa: el código riesgoso va en el `try`, y si falla, el `catch` lo maneja de forma controlada con acceso al `error`. Es imprescindible para datos del usuario, red y todo lo que pueda fallar por causas externas. En async/await, además, es cómo atrapás promesas rechazadas.
