import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { load as parseYaml } from 'js-yaml';
import { marked } from 'marked';
import { createHighlighter, type Highlighter } from 'shiki';
import {
  ExamenSchema,
  LeccionFrontmatterSchema,
  TrackMetaSchema,
  type ArchivoResaltado,
  type Examen,
  type LeccionDoc,
  type LeccionResumen,
  type ModuloTrack,
  type TrackDoc,
  type TrackMeta,
  type TrackResumen,
} from '../src/app/contenido/esquema';

const RAIZ = process.cwd();
const DIR_CONTENIDO = resolve(RAIZ, 'content');
const DIR_EXAMENES = join(DIR_CONTENIDO, 'examenes');
const DIR_SALIDA = resolve(RAIZ, 'public', 'contenido');
const TEMAS = ['github-light', 'github-dark'] as const;
const LENGUAJES = ['typescript', 'javascript', 'tsx', 'jsx', 'html', 'scss', 'css', 'json', 'bash'];

marked.setOptions({ gfm: true, breaks: false });

function listarMarkdown(dir: string): string[] {
  const salida: string[] = [];
  for (const entrada of readdirSync(dir, { withFileTypes: true })) {
    const ruta = join(dir, entrada.name);
    if (entrada.isDirectory()) salida.push(...listarMarkdown(ruta));
    else if (entrada.isFile() && entrada.name.endsWith('.md')) salida.push(ruta);
  }
  return salida;
}

function separarFrontmatter(crudo: string): { frontmatter: string; cuerpo: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(crudo);
  if (!match) throw new Error('El archivo no tiene frontmatter delimitado por ---.');
  return { frontmatter: match[1], cuerpo: match[2] ?? '' };
}

function md(texto: string): string {
  return marked.parse(texto.trim(), { async: false }) as string;
}

function resaltarLinea(highlighter: Highlighter, codigo: string, lenguaje: string): string {
  return highlighter.codeToHtml(codigo, {
    lang: lenguaje,
    themes: { light: 'github-light', dark: 'github-dark' },
    defaultColor: 'dark',
    structure: 'inline',
  });
}

interface BloqueArchivo {
  nombre: string;
  lenguaje: string;
  lineas: { id: string; codigo: string; indent: number }[];
  explicaciones: { para: string; tecnica: string; analogia: string; nota?: string; tabla?: unknown }[];
}

function nombreDefault(lenguaje: string): string {
  const extensiones: Record<string, string> = {
    typescript: 'ejemplo.ts',
    javascript: 'ejemplo.js',
    html: 'index.html',
    scss: 'estilos.scss',
    css: 'estilos.css',
    bash: 'terminal',
    json: 'datos.json',
  };
  return extensiones[lenguaje] ?? `ejemplo.${lenguaje}`;
}

function construirArchivo(highlighter: Highlighter, bloque: BloqueArchivo): ArchivoResaltado {
  const lenguaje = LENGUAJES.includes(bloque.lenguaje) ? bloque.lenguaje : 'typescript';
  return {
    nombre: bloque.nombre,
    lenguaje,
    lineas: bloque.lineas.map((l) => ({
      id: l.id,
      indent: l.indent,
      textoPlano: l.codigo,
      html: resaltarLinea(highlighter, l.codigo, lenguaje),
    })),
    explicaciones: bloque.explicaciones.map((e) => ({
      para: e.para,
      tecnicaHtml: md(e.tecnica),
      analogiaHtml: md(e.analogia),
      notaHtml: e.nota ? md(e.nota) : undefined,
      tabla: e.tabla as ArchivoResaltado['explicaciones'][number]['tabla'],
    })),
  };
}

function construirLeccion(
  highlighter: Highlighter,
  ruta: string,
): { doc: LeccionDoc; resumen: LeccionResumen } {
  const crudo = readFileSync(ruta, 'utf-8');
  const { frontmatter, cuerpo } = separarFrontmatter(crudo);
  const parsed = LeccionFrontmatterSchema.safeParse(parseYaml(frontmatter));
  if (!parsed.success) {
    const detalle = parsed.error.issues.map((i) => `  - ${i.path.join('.') || '(raiz)'}: ${i.message}`).join('\n');
    throw new Error(`Frontmatter invalido en ${ruta}:\n${detalle}`);
  }
  const fm = parsed.data;
  const slug = ruta.replace(/\\/g, '/').split('/').pop()!.replace(/\.md$/, '');

  const bloques: BloqueArchivo[] = fm.archivos
    ? (fm.archivos as BloqueArchivo[])
    : [{ nombre: nombreDefault(fm.codigo!.lenguaje), ...fm.codigo! } as BloqueArchivo];

  const publicadoEn = fm.publicadoEn.toISOString().slice(0, 10);

  const doc: LeccionDoc = {
    slug,
    titulo: fm.titulo,
    tecnologia: fm.tecnologia,
    categoria: fm.categoria,
    descripcion: fm.descripcion,
    youtubeId: fm.youtubeId,
    publicadoEn,
    tags: fm.tags,
    nivel: fm.nivel,
    leccionesRelacionadas: fm.leccionesRelacionadas,
    modulo: fm.modulo,
    introHtml: cuerpo.trim() ? md(cuerpo) : '',
    archivos: bloques.map((b) => construirArchivo(highlighter, b)),
  };

  const resumen: LeccionResumen = {
    slug,
    tecnologia: fm.tecnologia,
    titulo: fm.titulo,
    categoria: fm.categoria,
    descripcion: fm.descripcion,
    nivel: fm.nivel,
    tags: fm.tags,
    publicadoEn,
    modulo: fm.modulo,
    orden: fm.orden,
  };

  return { doc, resumen };
}

function leerTrackMetas(): Map<string, TrackMeta> {
  const metas = new Map<string, TrackMeta>();
  for (const entrada of readdirSync(DIR_CONTENIDO, { withFileTypes: true })) {
    if (!entrada.isDirectory() || entrada.name === 'examenes') continue;
    const ruta = join(DIR_CONTENIDO, entrada.name, '_track.yaml');
    if (!existsSync(ruta)) {
      throw new Error(`Falta ${entrada.name}/_track.yaml: todo track necesita su metadata.`);
    }
    const meta = TrackMetaSchema.parse(parseYaml(readFileSync(ruta, 'utf-8')));
    metas.set(meta.tecnologia, meta);
  }
  return metas;
}

function leerExamenes(): Examen[] {
  if (!existsSync(DIR_EXAMENES)) return [];
  return readdirSync(DIR_EXAMENES)
    .filter((a) => a.endsWith('.yaml'))
    .map((archivo) => {
      const examen = ExamenSchema.parse(parseYaml(readFileSync(join(DIR_EXAMENES, archivo), 'utf-8')));
      for (const p of examen.preguntas) {
        if (p.correcta >= p.opciones.length) {
          throw new Error(`Examen ${examen.slug}: la pregunta ${p.id} marca una opcion correcta inexistente.`);
        }
      }
      return examen;
    });
}

function agruparTrack(
  meta: TrackMeta,
  resumenes: LeccionResumen[],
): { trackDoc: TrackDoc; ordenadas: LeccionResumen[] } {
  const ordenModulo = new Map(meta.modulos.map((m, i) => [m.slug, i]));
  for (const r of resumenes) {
    if (!ordenModulo.has(r.modulo)) {
      throw new Error(`La leccion "${r.slug}" usa el modulo "${r.modulo}" que no existe en ${meta.tecnologia}/_track.yaml.`);
    }
  }

  const ordenadas = [...resumenes].sort((a, b) => {
    const porModulo = ordenModulo.get(a.modulo)! - ordenModulo.get(b.modulo)!;
    return porModulo !== 0 ? porModulo : a.orden - b.orden;
  });

  const modulos: ModuloTrack[] = meta.modulos
    .map((m) => ({
      slug: m.slug,
      titulo: m.titulo,
      quiz: m.quiz,
      lecciones: ordenadas.filter((r) => r.modulo === m.slug),
    }))
    .filter((m) => m.lecciones.length > 0);

  return {
    trackDoc: { tecnologia: meta.tecnologia, titulo: meta.titulo, descripcion: meta.descripcion, modulos },
    ordenadas,
  };
}

async function main(): Promise<void> {
  if (!existsSync(DIR_CONTENIDO)) {
    throw new Error(`No existe el directorio de contenido: ${DIR_CONTENIDO}`);
  }
  const rutasMd = listarMarkdown(DIR_CONTENIDO).sort();
  if (rutasMd.length === 0) {
    throw new Error('No se encontro ningun archivo .md en /content.');
  }

  const highlighter = await createHighlighter({ themes: [...TEMAS], langs: LENGUAJES });

  rmSync(DIR_SALIDA, { recursive: true, force: true });
  mkdirSync(join(DIR_SALIDA, 'examenes'), { recursive: true });

  const docs = new Map<string, LeccionDoc>();
  const manifest: LeccionResumen[] = [];

  for (const rutaMd of rutasMd) {
    const { doc, resumen } = construirLeccion(highlighter, rutaMd);
    if (docs.has(doc.slug)) {
      throw new Error(`Slug duplicado: "${doc.slug}". Los nombres de archivo deben ser unicos.`);
    }
    docs.set(doc.slug, doc);
    manifest.push(resumen);
  }

  const metas = leerTrackMetas();
  const porTrack = new Map<string, LeccionResumen[]>();
  for (const r of manifest) {
    if (!metas.has(r.tecnologia)) {
      throw new Error(`La leccion "${r.slug}" pertenece a "${r.tecnologia}" pero no hay content/${r.tecnologia}/_track.yaml.`);
    }
    porTrack.set(r.tecnologia, [...(porTrack.get(r.tecnologia) ?? []), r]);
  }

  const tracksResumen: TrackResumen[] = [];
  for (const [tecnologia, resumenes] of porTrack) {
    const meta = metas.get(tecnologia)!;
    const { trackDoc, ordenadas } = agruparTrack(meta, resumenes);
    writeFileSync(join(DIR_SALIDA, `track-${tecnologia}.json`), JSON.stringify(trackDoc), 'utf-8');
    tracksResumen.push({
      tecnologia,
      titulo: meta.titulo,
      descripcion: meta.descripcion,
      lecciones: ordenadas.length,
    });

    ordenadas.forEach((r, i) => {
      const doc = docs.get(r.slug)!;
      const prev = ordenadas[i - 1];
      const next = ordenadas[i + 1];
      if (prev) doc.anterior = { slug: prev.slug, titulo: prev.titulo, tecnologia: prev.tecnologia };
      if (next) doc.siguiente = { slug: next.slug, titulo: next.titulo, tecnologia: next.tecnologia };
    });
  }

  for (const doc of docs.values()) {
    writeFileSync(join(DIR_SALIDA, `${doc.slug}.json`), JSON.stringify(doc), 'utf-8');
  }

  const examenes = leerExamenes();
  const quizzesDeclarados = new Set(
    [...metas.values()].flatMap((m) => m.modulos.map((mod) => mod.quiz).filter((q): q is string => !!q)),
  );
  for (const examen of examenes) {
    writeFileSync(join(DIR_SALIDA, 'examenes', `${examen.slug}.json`), JSON.stringify(examen), 'utf-8');
  }
  for (const quiz of quizzesDeclarados) {
    if (!examenes.some((e) => e.slug === quiz)) {
      throw new Error(`Un _track.yaml declara el quiz "${quiz}" pero no existe content/examenes/${quiz}.yaml.`);
    }
  }

  manifest.sort((a, b) => (a.publicadoEn < b.publicadoEn ? 1 : -1));
  writeFileSync(join(DIR_SALIDA, 'conceptos.json'), JSON.stringify(manifest), 'utf-8');
  writeFileSync(join(DIR_SALIDA, 'tracks.json'), JSON.stringify(tracksResumen), 'utf-8');

  console.log(
    `content-build: ${manifest.length} leccion(es), ${porTrack.size} track(s), ${examenes.length} examen(es) en public/contenido.`,
  );
}

main().catch((err) => {
  console.error('\ncontent-build FALLO:\n' + (err instanceof Error ? err.message : String(err)) + '\n');
  process.exit(1);
});
