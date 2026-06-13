---
titulo: "Transiciones: cambios suaves"
tecnologia: css
categoria: Transiciones y animaciones
modulo: transiciones
orden: 1
descripcion: "Cómo hacer que un cambio de estilo ocurra de forma gradual en vez de brusca, con el ejemplo de un botón al pasar el cursor."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - css
  - transiciones
  - animaciones
leccionesRelacionadas:
  - animaciones
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .boton {
    - id: "2"
      indent: 1
      codigo: |-
        background: teal;
    - id: "3"
      indent: 1
      codigo: |-
        transition: background 0.2s ease;
    - id: "4"
      indent: 0
      codigo: |-
        }
    - id: "5"
      indent: 0
      codigo: |-
        .boton:hover { background: darkcyan; }
  explicaciones:
    - para: "1"
      tecnica: |-
        Un botón. Sin transición, cuando cambia un estilo (por ejemplo al pasar el cursor) el cambio es **instantáneo y brusco**. La transición lo vuelve gradual.
      analogia: |-
        Es la diferencia entre prender la luz de golpe y subirla con un dimmer: el resultado final es el mismo, pero uno se siente mejor.
    - para: "2"
      tecnica: |-
        El color de fondo inicial: `teal`. Este es el estado de reposo, antes de cualquier interacción.
      analogia: |-
        Es el color del botón cuando nadie lo toca.
    - para: "3"
      tecnica: |-
        `transition: background 0.2s ease` es la instrucción clave. Dice: cuando el `background` cambie, hacelo de forma animada durante `0.2s` (segundos), con una curva `ease` (arranca y termina suave). Se declara en el estado **normal**, no en el `:hover`, para que la animación valga al entrar y al salir.
      analogia: |-
        Es ponerle un dimmer al botón y regularlo: "cualquier cambio de color, hacelo en dos décimas de segundo, suave".
    - para: "4"
      tecnica: |-
        Cierra la regla del botón. Hasta acá definimos el estado de reposo y cómo se anima.
      analogia: |-
        Cerrás la configuración base del botón con su dimmer puesto.
    - para: "5"
      tecnica: |-
        El estado `:hover` define el color de **destino**: `darkcyan`. Cuando el cursor entra, el fondo viaja de teal a darkcyan en 0.2s gracias a la transición de arriba; cuando sale, vuelve igual de suave. Consejo: animá solo propiedades baratas como `color`, `opacity` o `transform`, que no traban la página.
      analogia: |-
        Es la posición "encendido" del dimmer: al acercar la mano sube suave, al alejarla baja suave.
---

Una transición convierte un cambio de estilo brusco en uno gradual. Se declara con `transition` en el estado normal (qué propiedad, cuánto dura, con qué curva) y se dispara cuando esa propiedad cambia, típicamente en `:hover` o `:focus`. Es el recurso más simple para que una interfaz se sienta pulida.
