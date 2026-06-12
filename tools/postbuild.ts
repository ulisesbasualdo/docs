import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

// GitHub Pages no conoce el router de Angular: 404.html actua de fallback SPA
// para las rutas que no quedaron prerenderizadas (por ejemplo, los examenes).
const DIR_SALIDA = resolve(process.cwd(), 'dist', 'docs', 'browser');

const shellCsr = join(DIR_SALIDA, 'index.csr.html');
const indexRaiz = join(DIR_SALIDA, 'index.html');
const origen = existsSync(shellCsr) ? shellCsr : indexRaiz;

if (!existsSync(origen)) {
  console.error(`postbuild: no se encontro ${origen}. El build fallo antes?`);
  process.exit(1);
}

copyFileSync(origen, join(DIR_SALIDA, '404.html'));
// .nojekyll evita que GitHub Pages procese el sitio con Jekyll.
writeFileSync(join(DIR_SALIDA, '.nojekyll'), '');
console.log('postbuild: 404.html y .nojekyll listos para GitHub Pages.');
