import { z } from 'zod';

export const TECNOLOGIAS = ['html', 'css', 'javascript', 'typescript', 'git', 'angular', 'rxjs'] as const;
export const NIVELES = ['introductorio', 'intermedio', 'avanzado'] as const;
export const VARIANTES_COLUMNA = ['promesa', 'observable', 'neutro', 'acento'] as const;

const LineaSchema = z.object({
  id: z.string().min(1),
  codigo: z.string(),
  indent: z.number().int().min(0).max(4).default(0),
});

const ColumnaSchema = z.object({
  id: z.string().min(1),
  etiqueta: z.string().min(1),
  variante: z.enum(VARIANTES_COLUMNA).default('neutro'),
});

const FilaTablaSchema = z.object({
  aspecto: z.string().min(1),
  valores: z.record(z.string(), z.string()),
});

const TablaSchema = z.object({
  titulo: z.string().optional(),
  columnas: z.array(ColumnaSchema).min(2),
  filas: z.array(FilaTablaSchema).min(1),
});

const ExplicacionSchema = z.object({
  para: z.string().min(1),
  tecnica: z.string().min(1),
  analogia: z.string().min(1),
  nota: z.string().optional(),
  tabla: TablaSchema.optional(),
});

const BloqueCodigoSchema = z.object({
  lenguaje: z.string().min(1),
  lineas: z.array(LineaSchema).min(1),
  explicaciones: z.array(ExplicacionSchema).min(1),
});

const ArchivoSchema = BloqueCodigoSchema.extend({
  nombre: z.string().min(1),
});

export const LeccionFrontmatterSchema = z
  .object({
    titulo: z.string().min(1),
    tecnologia: z.enum(TECNOLOGIAS),
    categoria: z.string().min(1),
    descripcion: z.string().min(1),
    youtubeId: z.string().optional().default(''),
    publicadoEn: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    nivel: z.enum(NIVELES),
    leccionesRelacionadas: z.array(z.string()).default([]),
    modulo: z.string().min(1),
    orden: z.number().int().min(1),
    codigo: BloqueCodigoSchema.optional(),
    archivos: z.array(ArchivoSchema).min(1).optional(),
  })
  .superRefine((doc, ctx) => {
    const definiciones = [doc.codigo ? 1 : 0, doc.archivos ? 1 : 0].reduce((a, b) => a + b, 0);
    if (definiciones !== 1) {
      ctx.addIssue({ code: 'custom', message: 'Definir exactamente uno: "codigo" o "archivos".' });
      return;
    }
    const bloques = doc.archivos ?? [{ nombre: 'principal', ...doc.codigo! }];
    for (const bloque of bloques) {
      const ids = new Set(bloque.lineas.map((l) => l.id));
      if (ids.size !== bloque.lineas.length) {
        ctx.addIssue({ code: 'custom', message: `El bloque "${bloque.nombre}" tiene ids de linea duplicados.` });
      }
      for (const exp of bloque.explicaciones) {
        if (!ids.has(exp.para)) {
          ctx.addIssue({
            code: 'custom',
            message: `El bloque "${bloque.nombre}" tiene una explicacion para "${exp.para}" pero no existe esa linea.`,
          });
        }
      }
    }
  });

export const ExamenSchema = z.object({
  slug: z.string().min(1),
  titulo: z.string().min(1),
  track: z.enum(TECNOLOGIAS),
  modulo: z.string().min(1),
  aprobacion: z.number().min(0).max(100).default(70),
  preguntas: z
    .array(
      z.object({
        id: z.string().min(1),
        texto: z.string().min(1),
        opciones: z.array(z.string()).min(2),
        correcta: z.number().int().min(0),
        explicacion: z.string().default(''),
      }),
    )
    .min(1),
});

export const TrackMetaSchema = z.object({
  tecnologia: z.enum(TECNOLOGIAS),
  titulo: z.string().min(1),
  descripcion: z.string().min(1),
  modulos: z
    .array(
      z.object({
        slug: z.string().min(1),
        titulo: z.string().min(1),
        quiz: z.string().optional(),
      }),
    )
    .min(1),
});

export type LeccionFrontmatter = z.infer<typeof LeccionFrontmatterSchema>;
export type Tabla = z.infer<typeof TablaSchema>;
export type Examen = z.infer<typeof ExamenSchema>;
export type TrackMeta = z.infer<typeof TrackMetaSchema>;

export interface LineaResaltada {
  id: string;
  indent: number;
  textoPlano: string;
  html: string;
}

export interface ExplicacionRenderizada {
  para: string;
  tecnicaHtml: string;
  analogiaHtml: string;
  notaHtml?: string;
  tabla?: Tabla;
}

export interface ArchivoResaltado {
  nombre: string;
  lenguaje: string;
  lineas: LineaResaltada[];
  explicaciones: ExplicacionRenderizada[];
}

export interface VecinaLeccion {
  slug: string;
  titulo: string;
  tecnologia: string;
}

export interface LeccionDoc {
  slug: string;
  titulo: string;
  tecnologia: string;
  categoria: string;
  descripcion: string;
  youtubeId: string;
  publicadoEn: string;
  tags: string[];
  nivel: string;
  leccionesRelacionadas: string[];
  modulo: string;
  introHtml: string;
  archivos: ArchivoResaltado[];
  anterior?: VecinaLeccion;
  siguiente?: VecinaLeccion;
}

export interface LeccionResumen {
  slug: string;
  tecnologia: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  nivel: string;
  tags: string[];
  publicadoEn: string;
  modulo: string;
  orden: number;
}

export interface ModuloTrack {
  slug: string;
  titulo: string;
  quiz?: string;
  lecciones: LeccionResumen[];
}

export interface TrackDoc {
  tecnologia: string;
  titulo: string;
  descripcion: string;
  modulos: ModuloTrack[];
}

// Tarjeta de la portada: un track con su cantidad de lecciones.
export interface TrackResumen {
  tecnologia: string;
  titulo: string;
  descripcion: string;
  lecciones: number;
}
