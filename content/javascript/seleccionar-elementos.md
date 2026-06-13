---
titulo: "Seleccionar elementos del DOM"
tecnologia: javascript
categoria: Manipular la página (DOM)
modulo: dom
orden: 1
descripcion: "Cómo JavaScript encuentra elementos del HTML para leerlos o cambiarlos en vivo."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: intermedio
tags:
  - javascript
  - dom
leccionesRelacionadas:
  - modificar-el-dom
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        const titulo = document.querySelector('h1');
    - id: "2"
      indent: 0
      codigo: |-
        titulo.textContent = 'Oferta del día';
  explicaciones:
    - para: "1"
      tecnica: |-
        `document` es el objeto que representa **toda la página** cargada en el navegador (el DOM, _Document Object Model_). `querySelector` busca el **primer** elemento que coincida con un selector CSS, igual que los que viste en CSS: acá, el primer `<h1>`. Lo guardamos en una constante para usarlo después.
      analogia: |-
        Es agarrar el plano del local (`document`) y señalar "este cartel de acá" (`querySelector('h1')`), dejándolo a mano para modificarlo.
    - para: "2"
      tecnica: |-
        `textContent` es el texto de un elemento. Leerlo te da lo que dice; **asignarle** un valor nuevo lo **cambia en vivo**, y el usuario lo ve al instante, sin recargar la página. Acá reemplazamos el título por "Oferta del día". Así JavaScript le da dinamismo a un HTML que de por sí es estático.
      analogia: |-
        Es borrar lo que decía el cartel y escribir algo nuevo con el local abierto: los clientes ven el cambio en el momento, sin cerrar y reabrir.
      nota: |-
        `querySelector` usa la misma sintaxis de selectores que CSS: `'.clase'`, `'#id'`, `'nav a'`. Si necesitás **todos** los que coinciden y no solo el primero, está `querySelectorAll`, que devuelve una lista para recorrer.
---

El DOM es la página representada como objetos que JavaScript puede tocar. Con `document.querySelector` (mismos selectores que CSS) encontrás un elemento, y propiedades como `textContent` te dejan leerlo o cambiarlo en vivo. Seleccionar es el primer paso de toda interacción: primero encontrás el elemento, después hacés algo con él.
