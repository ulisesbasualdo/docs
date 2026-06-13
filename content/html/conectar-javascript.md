---
titulo: "Conectar JavaScript al HTML"
tecnologia: html
categoria: HTML que conecta con CSS y JS
modulo: html-experto
orden: 2
descripcion: "Cómo el HTML le da al JavaScript puntos de enganche y cómo cargar el script sin frenar la página."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - html
  - javascript
leccionesRelacionadas:
  - conectar-css
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <button id="comprar" data-precio="3500">Comprar</button>
    - id: "2"
      indent: 0
      codigo: |-
        <script src="app.js" defer></script>
  explicaciones:
    - para: "1"
      tecnica: |-
        Este botón es el **punto de enganche** para el JavaScript. El `id="comprar"` es un nombre único en la página: el JS lo busca con ese id para "escuchar" sus clics. El `data-precio="3500"` lleva pegado un dato que el JS lee cuando el usuario toca el botón. Así el HTML provee los ganchos (id) y los datos (`data-`), y el JavaScript la lógica.
      analogia: |-
        Es la palanca de una máquina con su nombre grabado (`id`) y una etiqueta con el dato que necesita (`data-precio`): el operario (el JavaScript) sabe qué palanca accionar y con qué número trabajar, sin adivinar.
    - para: "2"
      tecnica: |-
        `<script src="app.js">` carga un archivo de JavaScript externo, igual que `<link>` carga CSS. El atributo `defer` es la clave: hace que el script se descargue en paralelo y se ejecute **recién cuando el HTML terminó de cargar**. Sin `defer`, el navegador frena el armado de la página para ejecutar el script, y el JS podría correr antes de que el botón exista. Con `defer`, todo el HTML ya está listo cuando el script arranca.
      analogia: |-
        Es contratar al técnico y decirle "andá llegando, pero empezá a trabajar recién cuando el local esté armado" (`defer`): así no tropieza con cosas que todavía no se instalaron, y mientras tanto el armado no se detiene.
      nota: |-
        Por mucho tiempo se puso el `<script>` justo antes de `</body>` para lograr este efecto. Hoy la forma recomendada es `defer` en el `<head>`: la intención queda explícita y el navegador puede ir descargando el script antes. Evitá los scripts sin `defer` ni `async` en el medio del documento.
---

El HTML y el JavaScript se conectan en dos sentidos: el HTML ofrece **ganchos** (un `id`, atributos `data-`) para que el JS encuentre los elementos y sus datos, y el `<script defer>` carga la lógica sin frenar el armado de la página. Con esto cerrás el círculo: estructura (HTML), estilo (CSS) y comportamiento (JS), cada uno en su lugar.
