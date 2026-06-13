---
titulo: "Accesibilidad: lo que no se ve pero importa"
tecnologia: html
categoria: Accesibilidad y buenas prácticas
modulo: accesibilidad
orden: 1
descripcion: "Cuatro hábitos que hacen tu página usable para todos: idioma, salto al contenido, textos alternativos y nombres accesibles."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - html
  - accesibilidad
leccionesRelacionadas:
  - aria-y-roles
codigo:
  lenguaje: html
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        <html lang="es">
    - id: "2"
      indent: 0
      codigo: |-
        <a href="#contenido" class="saltar">Saltar al contenido</a>
    - id: "3"
      indent: 0
      codigo: |-
        <img src="/cafe.jpg" alt="Bolsa de café recién molido" />
    - id: "4"
      indent: 0
      codigo: |-
        <button type="button" aria-label="Cerrar">×</button>
  explicaciones:
    - para: "1"
      tecnica: |-
        El atributo `lang="es"` en `<html>` declara el idioma de la página. Los lectores de pantalla lo usan para elegir la **voz y pronunciación** correctas: sin esto, leerían el español con fonética de inglés. Es una línea, y cambia toda la experiencia para quien escucha la página.
      analogia: |-
        Es decirle al guía turístico en qué idioma están los carteles: si no se lo aclarás, los lee con el acento equivocado y no se entiende nada.
    - para: "2"
      tecnica: |-
        Un **enlace de salto**: lleva directo al contenido principal, salteando el menú. Quien navega con teclado o lector de pantalla, en vez de recorrer 20 enlaces del menú en cada página, lo toca una vez y va al grano. Suele estar oculto hasta que recibe foco.
      analogia: |-
        Es la puerta exprés "directo a caja" para el que ya sabe qué quiere y no necesita recorrer todas las góndolas.
    - para: "3"
      tecnica: |-
        Lo viste antes y se repite por algo: el `alt` describe la imagen para quien no la ve. Si la imagen es decorativa, se pone `alt=""` (vacío) para que el lector la saltee. Lo que nunca va es una `<img>` sin atributo `alt`.
      analogia: |-
        Es la plaquita en braille de la foto: si la foto aporta info, la describís; si es solo adorno, una plaquita vacía avisa "no hace falta detenerse acá".
    - para: "4"
      tecnica: |-
        Un botón cuyo contenido visible es un símbolo, la "×". Para los ojos significa "cerrar", pero un lector de pantalla leería "equis". El `aria-label="Cerrar"` le da un **nombre accesible** claro: ahora se anuncia como "botón Cerrar". Úsalo cuando el contenido visible no es texto legible.
      analogia: |-
        Es ponerle al botón con ícono una etiqueta hablada: el que ve entiende por el dibujo, el que escucha entiende por el rótulo.
---

La accesibilidad no es una función aparte: son hábitos pequeños en el HTML de todos los días. `lang` para la pronunciación, un enlace de salto para el teclado, `alt` en las imágenes y un nombre accesible en los botones de ícono. Nada de esto se ve, y todo cambia para una parte de tus visitantes.
