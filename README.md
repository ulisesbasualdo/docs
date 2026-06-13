# Docs — Aprende a programar, línea por línea

Cursos interactivos y **gratuitos** de HTML, CSS y JavaScript, explicados línea por línea con analogías de la vida real y exámenes por módulo. Sin cuentas, sin pagos, sin tracking: solo contenido.

**Sitio:** https://ulisesbasualdo.github.io/docs/

## Cómo funciona

- Cada **lección** es un archivo Markdown en `content/<tecnologia>/` con un frontmatter validado por [Zod](src/app/contenido/esquema.ts): el código del ejemplo (uno o varios archivos) y una explicación **técnica + analogía** por cada línea.
- Cada **track** declara sus módulos ordenados en `content/<tecnologia>/_track.yaml`, con un examen opcional por módulo.
- Los **exámenes** son YAML en `content/examenes/` y se corrigen en el navegador; el resultado no se guarda en ningún lado.
- `tools/content-build.ts` valida todo, resalta el código con Shiki en build, convierte el Markdown y emite JSON estático a `public/contenido/`.
- El sitio es Angular 22 (zoneless, signals) **prerenderizado**: cada lección existe como HTML real, indexable, sin backend.

## Desarrollo

```bash
npm ci
npm start             # pipeline de contenido + servidor de desarrollo
npm run test:coverage # tests con umbral de cobertura al 100%
npm run build:pages   # build de producción con base href /docs/
```

Requiere Node 24.

## Agregar una lección nueva

1. Crear `content/<tecnologia>/<slug>.md` siguiendo el formato de cualquier lección existente.
2. Si el módulo es nuevo, declararlo en `content/<tecnologia>/_track.yaml` (el orden de la lista define el orden del curso).
3. `npm run content:build` valida el frontmatter y falla con un mensaje claro si algo está mal.
4. El prerender y la navegación anterior/siguiente se recalculan solos.

Para un track nuevo: crear la carpeta con su `_track.yaml`, sumar la tecnología al enum `TECNOLOGIAS` del [esquema](src/app/contenido/esquema.ts) y listo: la portada lo muestra automáticamente.

## Calidad

- Cobertura de tests **al 100%** (statements, branches, functions y lines), verificada en CI: el deploy no sale si baja.
- Deploy automático a GitHub Pages en cada push a `main` vía [GitHub Actions](.github/workflows/deploy.yml).

## Contacto

Hecho por **Ulises Basualdo** — [ulisesbasualdo.com](https://ulisesbasualdo.com) · [LinkedIn](https://www.linkedin.com/in/ulisesbasualdo/) · [YouTube](https://www.youtube.com/@ulibasualdo) · [TikTok](https://www.tiktok.com/@ulibasualdo) · [Facebook](https://www.facebook.com/ulibasualdo7) · ulimiramar@gmail.com

## Licencia

[MIT](LICENSE)
