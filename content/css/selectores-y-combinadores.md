---
titulo: "Selectores y combinadores"
tecnologia: css
categoria: Selectores y cascada
modulo: selectores
orden: 1
descripcion: "Cómo apuntar a los elementos correctos: por clase, por id, por relación entre ellos y por estado."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: introductorio
tags:
  - css
  - selectores
leccionesRelacionadas:
  - especificidad-y-cascada
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .precio { color: green; }
    - id: "2"
      indent: 0
      codigo: |-
        #carrito { font-weight: bold; }
    - id: "3"
      indent: 0
      codigo: |-
        nav a { text-decoration: none; }
    - id: "4"
      indent: 0
      codigo: |-
        .card > h2 { margin: 0; }
    - id: "5"
      indent: 0
      codigo: |-
        li:hover { background: whitesmoke; }
  explicaciones:
    - para: "1"
      tecnica: |-
        El **selector de clase**: el punto `.` apunta a todos los elementos con `class="precio"`. Es el selector que más vas a usar, porque podés ponerle la misma clase a muchos elementos y reutilizar el estilo.
      analogia: |-
        Es la orden "pintá de verde todo lo que tenga el sello PRECIO": cualquier producto con ese sello queda pintado.
    - para: "2"
      tecnica: |-
        El **selector de id**: el `#` apunta al elemento con `id="carrito"`. Como el id es único en la página, apunta a uno solo. Por eso, para estilos, conviene preferir clases: el id es más rígido.
      analogia: |-
        Es "poné en negrita el cartel del carrito", que hay uno solo en todo el local.
    - para: "3"
      tecnica: |-
        Un **combinador descendiente**: `nav a` apunta a los `<a>` que estén **dentro** de un `<nav>`, sin importar qué tan adentro. Permite estilar enlaces del menú sin tocar el resto de los enlaces.
      analogia: |-
        Es "sacale el subrayado a los carteles que estén adentro del sector navegación", dejando los demás como están.
    - para: "4"
      tecnica: |-
        El combinador **hijo directo**, `>`: apunta solo a los `<h2>` que sean hijos **inmediatos** de `.card`, no a los nietos. Es más preciso que el descendiente.
      analogia: |-
        Es "solo los títulos que cuelgan directo de la tarjeta", no los que están metidos en una caja dentro de la tarjeta.
    - para: "5"
      tecnica: |-
        Una **pseudo-clase**: `:hover` aplica el estilo solo cuando el cursor está encima del elemento. Las pseudo-clases (`:hover`, `:focus`, `:first-child`) apuntan a estados o posiciones, no a elementos por su nombre.
      analogia: |-
        Es "cuando alguien pasa la mano por encima de este renglón, iluminalo": la regla se activa por una situación, no por un sello fijo.
---

Para estilar algo, primero hay que **apuntarle**. Las clases (`.`) son tu herramienta principal, los id (`#`) para casos únicos, los combinadores (`nav a`, `.card > h2`) describen relaciones, y las pseudo-clases (`:hover`) responden a estados. Dominar los selectores es la mitad de saber CSS.
