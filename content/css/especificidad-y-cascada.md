---
titulo: "Especificidad y cascada"
tecnologia: css
categoria: Selectores y cascada
modulo: selectores
orden: 2
descripcion: "Cuando dos reglas chocan, ¿cuál gana? La regla que explica el comportamiento más confuso de CSS."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - css
  - selectores
  - cascada
leccionesRelacionadas:
  - selectores-y-combinadores
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        p { color: gray; }
    - id: "2"
      indent: 0
      codigo: |-
        .destacado { color: blue; }
    - id: "3"
      indent: 0
      codigo: |-
        #aviso { color: red; }
  explicaciones:
    - para: "1"
      tecnica: |-
        Una regla por **elemento** (`p`). Es la de menor **especificidad**: vale para todos los párrafos, pero cualquier selector más preciso la pisa. Imaginá un párrafo con `class="destacado"` e `id="aviso"`: las tres reglas lo apuntan, y hay que decidir cuál gana.
      analogia: |-
        Es la regla general del reglamento: "todos los empleados visten de gris". Aplica a todos, pero admite excepciones más específicas.
    - para: "2"
      tecnica: |-
        Una regla por **clase** (`.destacado`). La clase tiene **más especificidad** que el elemento, así que en nuestro párrafo el azul le gana al gris. CSS no decide por orden acá, sino por **cuán específico** es el selector.
      analogia: |-
        Es la excepción por sector: "los de atención al cliente visten de azul". Más específica que la regla general, así que manda sobre ella.
    - para: "3"
      tecnica: |-
        Una regla por **id** (`#aviso`). El id es **más específico** todavía que la clase, así que gana: el párrafo termina rojo. El orden de mayor a menor peso es: id, luego clase, luego elemento. (Por encima de todo está `!important`, que conviene evitar.)
      analogia: |-
        Es la orden personal: "vos, Juan, hoy de rojo". Le gana al sector y a la regla general. Y un `!important` sería el gerente gritando: funciona, pero si todos gritan, nadie se entiende.
      nota: |-
        Cuando dos selectores tienen la **misma** especificidad, ahí sí decide el orden: gana el que está más abajo en el CSS. Por eso, ante un estilo que "no se aplica", revisá primero la especificidad y después el orden.
---

La **cascada** es cómo CSS resuelve los conflictos. Primero compara **especificidad** (id > clase > elemento); solo si empatan, gana la última regla escrita. Entender esto convierte el "no sé por qué no me toma el estilo" en un problema que podés diagnosticar en segundos.
