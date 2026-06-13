---
titulo: "async / await"
tecnologia: javascript
categoria: Asincronismo
modulo: asincronismo
orden: 2
descripcion: "La forma moderna de escribir código asincrónico que se lee como si fuera sincrónico, paso a paso."
youtubeId: ""
publicadoEn: 2026-06-13
nivel: avanzado
tags:
  - javascript
  - asincronismo
  - async-await
leccionesRelacionadas:
  - promesas
codigo:
  lenguaje: javascript
  lineas:
    - id: "1"
      indent: 0
      codigo: |-
        async function cargarProductos() {
    - id: "2"
      indent: 1
      codigo: |-
        const respuesta = await fetch('/api/productos');
    - id: "3"
      indent: 1
      codigo: |-
        const productos = await respuesta.json();
    - id: "4"
      indent: 1
      codigo: |-
        return productos;
    - id: "5"
      indent: 0
      codigo: |-
        }
  explicaciones:
    - para: "1"
      tecnica: |-
        La palabra `async` antes de `function` marca que esta función trabaja con operaciones asincrónicas. Es el permiso para usar `await` adentro. `async`/`await` no reemplazan a las promesas: son una forma **más legible** de usarlas, que evita las cadenas de `.then`.
      analogia: |-
        Es declarar "esta receta tiene pasos que requieren esperas". Avisás de entrada que adentro vas a tener que aguardar cosas.
    - para: "2"
      tecnica: |-
        `await` **pausa** la función hasta que la promesa de `fetch` se resuelva, y entonces guarda el resultado ya listo en `respuesta`. La gran ventaja: en vez de anidar callbacks, escribís línea por línea como si fuera sincrónico. Importante: la página **no** se congela; solo se pausa esta función, el resto sigue.
      analogia: |-
        Es esperar el pan en la fila pero sin bloquear la panadería entera: vos aguardás tu turno, los demás clientes siguen siendo atendidos.
    - para: "3"
      tecnica: |-
        Otro `await`, ahora para convertir la respuesta a JSON (que también devuelve una promesa). Cuando termina, `productos` ya tiene los datos. Mirá lo claro que se lee: pedí, esperé, convertí, esperé. Sin `.then` anidados, de arriba hacia abajo.
      analogia: |-
        Es el segundo paso con espera: "ahora desenvuelvo el pan y aguardo a tenerlo en la mano". Un paso después del otro, sin nudos.
    - para: "4"
      tecnica: |-
        `return productos` devuelve el resultado. Detalle importante: una función `async` **siempre devuelve una promesa**, así que quien la llame usará `await` o `.then` para obtener el valor. El `await` te dejó trabajar cómodo adentro, pero hacia afuera sigue siendo asincrónica.
      analogia: |-
        Es entregar el pan ya listo. Aunque adentro esperaste cómodo, para quien te lo pide sigue siendo "te lo doy cuando esté".
    - para: "5"
      tecnica: |-
        Cierra la función. Para manejar errores con async/await se usa `try`/`catch` (lo vas a ver en el módulo de errores), que es el equivalente al `.catch` de las promesas. async/await es hoy la forma estándar de escribir código asincrónico en JavaScript.
      analogia: |-
        Cerrás la receta. El "plan B si falla" se arma con try/catch, el equivalente del aviso de la panadería, pero con esta sintaxis más prolija.
---

`async`/`await` es azúcar sobre las promesas: hace que el código asincrónico se **lea de arriba hacia abajo**, como si fuera sincrónico, sin cadenas de `.then`. Marcás la función con `async` y usás `await` para esperar cada promesa. Es la forma moderna y recomendada; por debajo, siguen siendo promesas.
