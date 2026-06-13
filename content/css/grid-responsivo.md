---
titulo: "Grid responsivo sin media queries"
tecnologia: css
categoria: Layout con Grid
modulo: layout-grid
orden: 2
descripcion: "El patrón que hace que una grilla se adapte sola a cualquier pantalla, combinando auto-fill y minmax."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - css
  - grid
  - responsive
leccionesRelacionadas:
  - grid-fundamentos
codigo:
  lenguaje: css
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        .galeria {
    - id: "2"
      indent: 1
      codigo: |-
        display: grid;
    - id: "3"
      indent: 1
      codigo: |-
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    - id: "4"
      indent: 1
      codigo: |-
        gap: 1rem;
    - id: "5"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        La misma galería, pero ahora la queremos **responsiva**: que muestre más columnas en una pantalla ancha y menos en el celular, sin escribir media queries. Una sola regla lo resuelve.
      analogia: |-
        Es una estantería que agrega o saca columnas de casilleros según el ancho de la pared donde la colgás.
    - para: "2"
      tecnica: |-
        `display: grid`, igual que antes: activamos la grilla en el contenedor.
      analogia: |-
        Montamos la estructura de la estantería.
    - para: "3"
      tecnica: |-
        Acá está la magia. `auto-fill` le dice a Grid "meté tantas columnas como entren". `minmax(220px, 1fr)` define el ancho de cada una: **mínimo 220px, máximo 1fr** (lo que sobre). Resultado: en una pantalla ancha entran muchas columnas de 220px o más; en el celular, una sola que ocupa todo. La grilla se reacomoda sola al cambiar el ancho.
      analogia: |-
        Es la instrucción "poné todas las columnas que entren, cada una de al menos 220px y como mucho lo que quede libre": la estantería calcula sola cuántos casilleros caben en cada pared.
    - para: "4"
      tecnica: |-
        El `gap` de siempre, separando las celdas de forma pareja sin importar cuántas columnas haya en cada momento.
      analogia: |-
        El espacio entre casilleros, constante aunque cambie la cantidad.
    - para: "5"
      tecnica: |-
        Cierra la regla. Sin una sola media query, esta galería funciona desde un celular hasta un monitor ancho. Es uno de los patrones más usados de CSS moderno.
      analogia: |-
        Cerrás el plano: la misma estantería se adapta a cualquier pared sin rehacer el diseño.
---

El combo `repeat(auto-fill, minmax(MÍNIMO, 1fr))` es el patrón estrella de Grid: una grilla que agrega y quita columnas sola según el ancho disponible, sin media queries. Definís el ancho mínimo de cada celda y el navegador hace el resto. Guardalo: lo vas a usar muchísimo.
