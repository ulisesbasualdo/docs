---
titulo: "Animaciones con keyframes"
tecnologia: css
categoria: Transiciones y animaciones
modulo: transiciones
orden: 2
descripcion: "Cuando una transición de A a B no alcanza, los keyframes definen una animación con varios pasos."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - css
  - animaciones
leccionesRelacionadas:
  - transiciones
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        @keyframes aparecer {
    - id: "2"
      indent: 1
      codigo: |-
        from { opacity: 0; transform: translateY(8px); }
    - id: "3"
      indent: 1
      codigo: |-
        to { opacity: 1; transform: translateY(0); }
    - id: "4"
      indent: 0
      codigo: |-
        }
    - id: "5"
      indent: 0
      codigo: |-
        .aviso { animation: aparecer 0.4s ease-out; }
  explicaciones:
    - para: "1"
      tecnica: |-
        `@keyframes aparecer` define una animación llamada "aparecer". A diferencia de una transición (que va de un estado a otro al cambiar algo), una animación con keyframes describe **una secuencia propia** que podés disparar cuando quieras. El nombre lo elegís vos.
      analogia: |-
        Es coreografiar un movimiento y ponerle nombre: después se lo pedís a cualquier elemento por ese nombre.
    - para: "2"
      tecnica: |-
        `from` es el estado **inicial** de la animación: invisible (`opacity: 0`) y 8px más abajo (`transform: translateY(8px)`). Animar `opacity` y `transform` es lo recomendado: son baratas para el navegador y no traban la página.
      analogia: |-
        Es la pose de arranque de la coreografía: agachado y todavía sin luz.
    - para: "3"
      tecnica: |-
        `to` es el estado **final**: totalmente visible (`opacity: 1`) y en su lugar (`translateY(0)`). El navegador interpola todos los pasos intermedios entre `from` y `to`, generando el movimiento de "aparecer subiendo". Podés usar porcentajes (`0%`, `50%`, `100%`) para más pasos.
      analogia: |-
        Es la pose final: de pie y con la luz encendida. El navegador completa solo todo el movimiento entre una pose y la otra.
    - para: "4"
      tecnica: |-
        Cierra la definición de los keyframes. Ojo: hasta acá solo **describimos** la animación; todavía no la aplicamos a nada.
      analogia: |-
        Terminás de coreografiar el movimiento. Falta decir quién lo baila.
    - para: "5"
      tecnica: |-
        `animation: aparecer 0.4s ease-out` le aplica la animación al aviso: usa la secuencia `aparecer`, dura `0.4s` y con curva `ease-out` (rápida al principio, suave al final). Apenas el elemento aparece en la página, ejecuta la coreografía una vez.
      analogia: |-
        Es decirle al aviso "bailá la coreografía aparecer, en cuatro décimas, frenando suave al final".
      nota: |-
        Por accesibilidad, conviene respetar a quien pidió menos movimiento: envolviendo las animaciones en `@media (prefers-reduced-motion: reduce)` podés reducirlas o apagarlas para esas personas.
---

Cuando un cambio simple de A a B no alcanza, los `@keyframes` definen una animación con sus propios pasos, que luego aplicás con la propiedad `animation`. Animá `opacity` y `transform` para que sea fluida, y acordate de `prefers-reduced-motion` para quienes prefieren menos movimiento.
