---
titulo: "Nombres claros y funciones pequeñas"
tecnologia: javascript
categoria: Código limpio y buenas prácticas
modulo: codigo-limpio
orden: 1
descripcion: "Dos hábitos que hacen tu código legible para tu yo del futuro: nombres que explican y funciones que hacen una sola cosa."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - javascript
  - codigo-limpio
leccionesRelacionadas:
  - modulos
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        function calcularPrecioConIva(precioBase) {
    - id: "2"
      indent: 1
      codigo: |-
        const IVA = 0.21;
    - id: "3"
      indent: 1
      codigo: |-
        return precioBase * (1 + IVA);
    - id: "4"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        El nombre de la función dice **exactamente qué hace**: `calcularPrecioConIva`. Comparalo con un `calc()` o un `fn1()`: este se entiende sin leer el cuerpo. Lo mismo el parámetro `precioBase`. El mejor comentario es un buen nombre: el código se lee como una frase y casi no necesita explicación aparte.
      analogia: |-
        Es rotular bien las cajas de una mudanza: "vajilla cocina" en vez de "caja 7". Cuando busques algo, lo encontrás sin abrir todas.
    - para: "2"
      tecnica: |-
        En vez de escribir el número `0.21` suelto en el cálculo (un **número mágico** que nadie sabe qué significa), lo guardamos en una constante con nombre, `IVA`. Ahora el cálculo se explica solo, y si la alícuota cambia, la tocás en un único lugar. Las MAYÚSCULAS son la convención para constantes de valor fijo.
      analogia: |-
        Es anotar "comisión = 21%" arriba de la planilla en vez de tipear 0.21 perdido entre las cuentas: cualquiera entiende de dónde sale, y se cambia en un solo lado.
    - para: "3"
      tecnica: |-
        El cálculo, ahora legible: precio base por `(1 + IVA)`. Usar la constante con nombre en lugar del número hace que esta línea se lea casi como la fórmula de un manual. La función hace **una sola cosa**, y bien: calcular un precio con IVA. Nada más.
      analogia: |-
        Es la cuenta final escrita con los rótulos de la planilla, no con números sueltos: se sigue de un vistazo.
    - para: "4"
      tecnica: |-
        Cierra la función. La regla de oro: **una función, una responsabilidad**. Si una función calcula, valida y además muestra en pantalla, conviene partirla en tres. Las funciones chicas y bien nombradas son más fáciles de entender, probar y reutilizar.
      analogia: |-
        Cerrás la caja bien rotulada. Una caja por tipo de cosa: si metés vajilla, ropa y herramientas juntas, después no encontrás nada.
---

El código se escribe una vez y se lee muchas. Dos hábitos que más impacto tienen: **nombres que explican** (funciones y variables que se entienden sin comentarios) y **funciones que hacen una sola cosa**. Evitá los números mágicos guardándolos en constantes con nombre. Tu yo de dentro de seis meses te lo va a agradecer.
