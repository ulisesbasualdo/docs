import { ExamenSchema, LeccionFrontmatterSchema, TrackMetaSchema } from './esquema';

function frontmatterBase(): Record<string, unknown> {
  return {
    titulo: 'Que es una etiqueta HTML',
    tecnologia: 'html',
    categoria: 'Fundamentos',
    descripcion: 'La pieza basica de la web.',
    publicadoEn: '2026-06-12',
    nivel: 'introductorio',
    modulo: 'fundamentos',
    orden: 1,
    codigo: {
      lenguaje: 'html',
      lineas: [
        { id: '1', indent: 0, codigo: '<h1>Hola</h1>' },
        { id: '2', indent: 0, codigo: '<p>Texto</p>' },
      ],
      explicaciones: [{ para: '1', tecnica: 'Un titulo.', analogia: 'El cartel grande.' }],
    },
  };
}

describe('LeccionFrontmatterSchema', () => {
  it('acepta un frontmatter valido con codigo', () => {
    const resultado = LeccionFrontmatterSchema.safeParse(frontmatterBase());

    expect(resultado.success).toBe(true);
  });

  it('acepta la forma multi-archivo con archivos', () => {
    const base = frontmatterBase();
    delete base['codigo'];
    base['archivos'] = [
      {
        nombre: 'index.html',
        lenguaje: 'html',
        lineas: [{ id: '1', indent: 0, codigo: '<h1>Hola</h1>' }],
        explicaciones: [{ para: '1', tecnica: 'Un titulo.', analogia: 'El cartel grande.' }],
      },
    ];

    const resultado = LeccionFrontmatterSchema.safeParse(base);

    expect(resultado.success).toBe(true);
  });

  it('rechaza definir codigo y archivos a la vez', () => {
    const ambos = frontmatterBase();
    ambos['archivos'] = [
      {
        nombre: 'index.html',
        lenguaje: 'html',
        lineas: [{ id: '1', indent: 0, codigo: '<h1>Hola</h1>' }],
        explicaciones: [{ para: '1', tecnica: 'Un titulo.', analogia: 'El cartel grande.' }],
      },
    ];

    const resultado = LeccionFrontmatterSchema.safeParse(ambos);

    expect(resultado.success).toBe(false);
  });

  it('rechaza no definir ni codigo ni archivos', () => {
    const ninguno = frontmatterBase();
    delete ninguno['codigo'];

    const resultado = LeccionFrontmatterSchema.safeParse(ninguno);

    expect(resultado.success).toBe(false);
  });

  it('rechaza ids de linea duplicados', () => {
    const conDuplicados = frontmatterBase();
    const codigo = conDuplicados['codigo'] as { lineas: { id: string }[] };
    codigo.lineas[1].id = '1';

    const resultado = LeccionFrontmatterSchema.safeParse(conDuplicados);

    expect(resultado.success).toBe(false);
  });

  it('rechaza explicaciones que apuntan a lineas inexistentes', () => {
    const roto = frontmatterBase();
    const codigo = roto['codigo'] as { explicaciones: { para: string }[] };
    codigo.explicaciones[0].para = '99';

    const resultado = LeccionFrontmatterSchema.safeParse(roto);

    expect(resultado.success).toBe(false);
  });
});

describe('ExamenSchema', () => {
  function examenBase(): Record<string, unknown> {
    return {
      slug: 'html-fundamentos',
      titulo: 'Examen de fundamentos',
      track: 'html',
      modulo: 'fundamentos',
      preguntas: [
        { id: 'q1', texto: 'Que es una etiqueta?', opciones: ['a', 'b'], correcta: 0, explicacion: 'Porque si.' },
      ],
    };
  }

  it('acepta un examen valido y aplica el default de aprobacion', () => {
    const resultado = ExamenSchema.parse(examenBase());

    expect(resultado.aprobacion).toBe(70);
  });

  it('rechaza un examen sin preguntas', () => {
    const vacio = { ...examenBase(), preguntas: [] };

    const resultado = ExamenSchema.safeParse(vacio);

    expect(resultado.success).toBe(false);
  });
});

describe('TrackMetaSchema', () => {
  it('acepta metadata valida con quiz opcional', () => {
    const resultado = TrackMetaSchema.parse({
      tecnologia: 'html',
      titulo: 'HTML de cero a experto',
      descripcion: 'Curso completo.',
      modulos: [{ slug: 'fundamentos', titulo: 'Fundamentos', quiz: 'html-fundamentos' }],
    });

    expect(resultado.modulos[0].quiz).toBe('html-fundamentos');
  });

  it('rechaza una tecnologia desconocida', () => {
    const resultado = TrackMetaSchema.safeParse({
      tecnologia: 'cobol',
      titulo: 'x',
      descripcion: 'x',
      modulos: [{ slug: 'a', titulo: 'A' }],
    });

    expect(resultado.success).toBe(false);
  });
});
