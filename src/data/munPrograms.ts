export interface MunPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface MunProgram {
  title: string;
  route: string;
  logo: string;
  officialUrl: string;
  summary: string;
  whatIsIt: string;
  communityImportance: string;
  editionInfo: string;
  objectives: string[];
  activities: string[];
  photos: MunPhoto[];
}

export const munPrograms: { escjmun: MunProgram; miniEscjmun: MunProgram } = {
  escjmun: {
    title: 'ESCJMUN',
    route: 'escjmun',
    logo: 'images/escjmun-logo-oficial.png',
    officialUrl: 'https://mun.ue-escjcba.edu.bo/',
    summary: 'Modelo de Naciones Unidas de la comunidad ESCJ que se celebra cada año.',
    whatIsIt: 'ESCJMUN es el Modelo de Naciones Unidas de la comunidad ESCJ.',
    communityImportance: 'La información disponible lo vincula con la comunidad educativa ESCJ y confirma su celebración anual. No se encontró una descripción institucional más detallada de su aporte educativo.',
    editionInfo: 'El contenido disponible en el proyecto no incluye fechas ni reseñas de ediciones específicas.',
    objectives: [],
    activities: [],
    photos: [],
  },
  miniEscjmun: {
    title: 'Mini ESCJMUN',
    route: 'mini-escjmun',
    logo: 'images/mini-escjmun-logo-oficial.png',
    officialUrl: 'https://www.ue-escjcba.edu.bo/minimun/',
    summary: 'Una experiencia para aprender a dialogar, investigar y construir soluciones en comunidad.',
    whatIsIt: 'Un espacio creado para que niños, niñas y jóvenes desarrollen su liderazgo, fortalezcan sus habilidades de comunicación y descubran el diálogo como herramienta para transformar el mundo.',
    communityImportance: 'El sitio oficial presenta el debate, la investigación y el trabajo en equipo como medios para representar distintas perspectivas, proponer soluciones y participar en la comunidad.',
    editionInfo: 'El sitio oficial identifica 2026 como la primera versión del Mini ESCJMUN y señala el 6 de octubre de 2026 como fecha del evento.',
    objectives: [
      'Fomentar el pensamiento crítico, la investigación, la oratoria y la cooperación.',
      'Fortalecer el liderazgo y las habilidades de comunicación de niñas, niños y jóvenes.',
      'Promover el diálogo, el respeto, la diplomacia y el trabajo en equipo.',
    ],
    activities: [
      'Investigar los tópicos asignados y las perspectivas de cada representación.',
      'Participar en foros de debate y representar distintas delegaciones.',
      'Colaborar en propuestas y soluciones fundamentadas.',
    ],
    photos: [
      {
        src: 'https://www.ue-escjcba.edu.bo/minimun/assets/img/galeria/simulacion-de-foro-03.webp',
        alt: 'Delegados participando en una simulación de foro del Mini ESCJMUN.',
        caption: 'Simulación de foro · Galería oficial Mini ESCJMUN',
      },
      {
        src: 'https://www.ue-escjcba.edu.bo/minimun/assets/img/galeria/simulacion-de-foro-04.webp',
        alt: 'Estudiantes participando en una actividad de debate del Mini ESCJMUN.',
        caption: 'Actividad de debate · Galería oficial Mini ESCJMUN',
      },
    ],
  },
};
