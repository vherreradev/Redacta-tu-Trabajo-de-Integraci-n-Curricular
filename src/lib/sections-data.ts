import {
  FileText,
  BookOpen,
  History,
  Search,
  Brain,
  FlaskConical,
  AlertTriangle,
  BarChart3,
  MessageSquare,
  CheckCircle,
  Lightbulb,
  Paperclip,
  BookMarked,
  type LucideIcon,
} from "lucide-react";

export interface Example {
  title: string;
  content: string;
  keywords?: string;
}

export interface SubSection {
  title: string;
  content: string | React.ReactNode;
  type?: "default" | "table" | "list";
}

export interface Callout {
  type: "tip" | "warning" | "success" | "info" | "purple";
  title: string;
  content: string;
}

export interface SectionData {
  id: number;
  icon: LucideIcon;
  shortTitle: string;
  title: string;
  description: string;
  explanation: string;
  whatToInclude: SubSection[];
  recommendations: string[];
  examples: Example[];
  commonMistakes: string[];
  cheatSheet: string[];
  callouts: Callout[];
  extraContent?: React.ReactNode;
}

export const sections: SectionData[] = [
  {
    id: 1,
    icon: FileText,
    shortTitle: "Resumen",
    title: "Resumen / Abstract",
    description:
      "Breve descripción completa de la tesis que permite al lector comprender el propósito y aportes sin leer el trabajo completo.",
    explanation:
      "El resumen debe ser breve (150-300 palabras), claro y completo, permitiendo al lector entender el propósito y las contribuciones sin leer la tesis completa. Debe ser un texto autónomo, sin citas ni abreviaturas sin explicar.",
    whatToInclude: [
      { title: "Contexto y problema", content: "Descripción breve del contexto y la problemática abordada." },
      { title: "Objetivo del trabajo", content: "Qué se propuso hacer y por qué." },
      { title: "Metodología utilizada", content: "Cómo se abordó el problema (herramientas, métodos, enfoques)." },
      { title: "Resultados principales", content: "Los hallazgos más relevantes con datos cuantitativos." },
      { title: "Conclusiones y aportes", content: "Contribución del trabajo al campo de conocimiento." },
      { title: "Palabras clave (4-6)", content: "Términos representativos para indexación y búsqueda." },
    ],
    recommendations: [
      "Usa estilo impersonal («se diseñó» no «diseñamos»)",
      "Sin citas, tablas, figuras ni explicaciones extendidas",
      "Presenta en español e inglés",
      "Debe ser comprensible para lectores no especializados",
      "Incluye datos cuantitativos concretos (porcentajes, métricas)",
    ],
    examples: [
      {
        title: "Desarrollo de Aplicación Web",
        content:
          "«La gestión de citas médicas en centros de salud públicos del Ecuador enfrenta problemas de congestión y tiempos de espera excesivos, afectando la calidad del servicio. Esta investigación tuvo como objetivo desarrollar una aplicación web de gestión de citas médicas utilizando el framework React.js y Node.js, con arquitectura RESTful. Se diseñó un prototipo funcional empleando metodología Scrum, bases de datos PostgreSQL y autenticación JWT. Los resultados muestran que el sistema reduce los tiempos de espera en un 45% y disminuye errores de agendamiento en un 78% respecto al proceso manual. Este trabajo aporta una solución tecnológica escalable y de bajo costo para la digitalización de servicios de salud en el contexto ecuatoriano.»",
        keywords:
          "gestión de citas médicas, aplicación web, React.js, Node.js, salud digital",
      },
      {
        title: "Machine Learning - Detección de Fraude",
        content:
          "«La detección temprana de fraudes en transacciones bancarias electrónicas constituye un desafío crítico para la seguridad financiera. Esta investigación tuvo como objetivo implementar un modelo de machine learning basado en Random Forest para la detección de fraudes en tiempo real. Se utilizó un dataset de 284,807 transacciones del European Credit Card Dataset, aplicando técnicas de balanceo SMOTE y validación cruzada. El modelo alcanzó una precisión del 99.2% y un recall del 87.3%, superando los modelos de regresión logística y SVM utilizados como línea base. Este trabajo contribuye a la seguridad de transacciones electrónicas proporcionando un modelo eficiente y replicable para instituciones financieras ecuatorianas.»",
        keywords:
          "detección de fraude, machine learning, Random Forest, seguridad financiera, transacciones electrónicas",
      },
      {
        title: "Sistema IoT - Monitoreo Agrícola",
        content:
          "«El monitoreo de variables ambientales en invernaderos agrícolas es fundamental para optimizar la producción de cultivos, pero muchos productores locales carecen de sistemas automatizados. Esta investigación tuvo como objetivo diseñar e implementar un sistema IoT para el monitoreo y control automatizado de temperatura, humedad y luminosidad en invernaderos. Se desarrolló un prototipo utilizando sensores DHT22 y LDR conectados a microcontroladores ESP32, con transmisión de datos vía MQTT a una plataforma cloud en AWS. Los resultados demuestran que el sistema permite mantener condiciones óptimas de cultivo con una precisión del 95%, incrementando la producción en un 20% respecto al control manual. Este trabajo aporta una solución accesible y escalable para la automatización agrícola en el contexto ecuatoriano.»",
        keywords:
          "IoT, monitoreo ambiental, ESP32, agricultura inteligente, automatización",
      },
      {
        title: "Aplicación Móvil - Transporte Público",
        content:
          "«La falta de acceso a información actualizada sobre rutas y horarios del transporte público en la ciudad de Loja dificulta la movilidad urbana eficiente de los ciudadanos. Esta investigación tuvo como objetivo desarrollar una aplicación móvil multiplataforma con Flutter para la consulta en tiempo real de rutas y horarios del transporte público. Se empleó una arquitectura cliente-servidor con API RESTful, base de datos Firebase y geolocalización GPS. La aplicación fue evaluada con un grupo de 50 usuarios, obteniendo una satisfacción del 92% según la escala SUS. Este trabajo contribuye a mejorar la movilidad urbana mediante una herramienta tecnológica accesible y de fácil uso.»",
        keywords:
          "aplicación móvil, Flutter, transporte público, geolocalización, movilidad urbana",
      },
    ],
    commonMistakes: [
      "❌ Incluir citas o referencias bibliográficas",
      "❌ Usar primera persona («yo», «nosotros»)",
      "❌ Exceder el límite de palabras (máximo 300)",
      "❌ Incluir detalles técnicos pertenecientes a otros capítulos",
      "❌ Usar palabras clave genéricas como «tecnología» o «investigación»",
    ],
    cheatSheet: [
      "📝 150-300 palabras máximo",
      "🎯 Estructura: Contexto → Objetivo → Metodología → Resultados → Conclusiones",
      "✍️ Estilo impersonal («se diseñó», «se implementó»)",
      "🔢 Incluir datos cuantitativos concretos",
      "🔤 Presentar en español e inglés",
      "🏷️ 4-6 palabras clave específicas y representativas",
      "🚫 Sin citas, figuras, tablas ni abreviaturas sin explicar",
    ],
    callouts: [
      {
        type: "info",
        title: "📘 Regla de oro del Resumen",
        content:
          "El resumen debe poder entenderse de forma autónoma. Un lector debería comprender toda la esencia de tu tesis leyendo solo el resumen.",
      },
      {
        type: "tip",
        title: "💡 Consejo práctico",
        content:
          "Escribe el resumen AL FINAL, cuando ya tengas claros los resultados y conclusiones. Así será más preciso y completo.",
      },
      {
        type: "warning",
        title: "⚠️ Error frecuente",
        content:
          "No copies el resumen como conclusión. El resumen describe TODO el trabajo; las conclusiones solo responden a los objetivos.",
      },
    ],
  },
  {
    id: 2,
    icon: BookOpen,
    shortTitle: "Introducción",
    title: "Introducción",
    description:
      "Establece el marco de la investigación con contexto, problema, objetivos, justificación y alcance.",
    explanation:
      'La introducción debe ser clara, precisa y motivadora. Establece el marco de la investigación. Extensión: aproximadamente 1-2 páginas.\n\nREGLA IMPORTANTE DE TIEMPOS VERBALES: "En la Introducción todo va en presente (el problema existe hoy) y los objetivos en infinitivo. El pasado y el futuro NO entran aquí."',
    whatToInclude: [
      { title: "1. Contexto técnico", content: "Descripción amplia del área de estudio con datos y hechos (estadísticas, reportes de IEEE, ONUG, etc.). Enfoque técnico y aplicado." },
      { title: "2. Problema específico", content: "Problema claro, medible y relevante conectado con la especialidad de ingeniería." },
      { title: "3. Pregunta de investigación", content: "Pregunta que guía la investigación, formulada en presente o infinitivo." },
      { title: "4. Objetivos (general + específicos)", content: "Objetivo general + objetivos específicos con verbos de acción (diseñar, analizar, implementar, evaluar). Deben ser alcanzables." },
      { title: "5. Justificación", content: "¿Por qué es importante? ¿Qué beneficios aporta? ¿Quiénes se benefician? ¿Alineación con avances tecnológicos?" },
      { title: "6. Alcance y delimitaciones", content: "Define alcance y limitaciones (tiempo, recursos, tecnología, contexto geográfico)." },
      { title: "7. Estructura del documento", content: "Breve descripción de cómo se organiza el documento." },
    ],
    recommendations: [
      "Todo en PRESENTE: el problema existe hoy",
      "Objetivos en INFINITIVO: «Diseñar...», «Analizar...»",
      "Usa datos estadísticos para dar peso al contexto",
      "Cada objetivo específico debe ser medible y verificable",
      "La justificación debe conectar el problema con beneficios reales",
      "No incluyas metodología ni resultados aquí",
    ],
    examples: [
      {
        title: "Herramienta de Auditoría de Seguridad",
        content:
          "Contexto: «En la última década, los ciberataques a empresas ecuatorianas han aumentado un 340% (CISA, 2023), exponiendo vulnerabilidades en los sistemas informáticos de pequeñas y medianas empresas (PYMES). El sector de la salud registra el mayor número de brechas de datos, con un costo promedio de USD 4.45 millones por incidente (IBM, 2023).»\n\nProblema: «Las PYMES del sector salud en la provincia de Loja carecen de herramientas automatizadas para realizar auditorías de seguridad informática, dependiendo de evaluaciones manuales que son costosas, lentas y propensas a errores humanos.»\n\nObjetivo general: «Desarrollar una herramienta software de auditoría de seguridad informática basada en estándares ISO 27001 para PYMES del sector salud en la provincia de Loja.»",
      },
      {
        title: "Plataforma E-Learning con IA",
        content:
          "Contexto: «El mercado global de educación en línea ha experimentado un crecimiento del 16.3% anual desde 2020 (Statista, 2024), acelerado por la pandemia de COVID-19. En Ecuador, el 32% de las instituciones de educación superior ofrece programas virtuales (SENESCYT, 2023), pero muchas plataformas carecen de personalización adaptativa.»\n\nProblema: «Las plataformas de e-learning utilizadas en universidades ecuatorianas no integran técnicas de inteligencia artificial para adaptar el contenido al ritmo de aprendizaje individual de cada estudiante, lo que resulta en tasas de deserción de hasta el 45% en cursos virtuales.»\n\nObjetivo general: «Diseñar e implementar una plataforma de e-learning que integre algoritmos de machine learning para la personalización adaptativa del contenido educativo.»",
      },
      {
        title: "Sistema de Migración a la Nube",
        content:
          "Contexto: «El mercado global de computación en la nube alcanza USD 590 mil millones en 2024 (Gartner, 2024), con una tasa de adopción del 94% en empresas. En Ecuador, el 67% de las PYMES aún opera con infraestructura on-premise, enfrentando costos de mantenimiento elevados y limitaciones de escalabilidad.»\n\nProblema: «Las PYMES ecuatorianas del sector comercial carecen de herramientas que faciliten la migración de sus sistemas de información a la nube, debido a la complejidad técnica y al temor de interrupciones en sus operaciones durante el proceso de transición.»\n\nObjetivo general: «Desarrollar una herramienta de asistencia para la migración de sistemas de información a la nube que minimice el tiempo de inactividad y garantice la integridad de los datos.»",
      },
    ],
    commonMistakes: [
      "❌ Usar pasado o futuro en la introducción",
      "❌ Incluir detalles de metodología o resultados",
      "❌ Ser demasiado genérico o filosófico",
      "❌ Olvidar la pregunta de investigación",
      "❌ Objetivos demasiado amplios o vagos",
    ],
    cheatSheet: [
      "📝 Extensión: 1-2 páginas",
      "🕐 TODO en presente (el problema existe HOY)",
      "🎯 Objetivos en infinitivo: «Diseñar...», «Implementar...»",
      "📊 Contexto con datos estadísticos concretos",
      "❓ Incluir pregunta de investigación clara",
      "📏 Delimitar alcance geográfico, temporal y tecnológico",
      "🚫 SIN metodología, SIN resultados, SIN futuro",
    ],
    callouts: [
      {
        type: "warning",
        title: "⚠️ Regla crítica de tiempos verbales",
        content:
          "En la Introducción: PRESENTE para contexto/problema/justificación e INFINITIVO para objetivos. NADA en pasado ni futuro.",
      },
      {
        type: "tip",
        title: "💡 Verificación de objetivos",
        content:
          'Un buen objetivo específico es: medible («evaluar mediante métricas»), verificable («mediante pruebas SUS»), y alcanzable en el tiempo disponible.',
      },
      {
        type: "info",
        title: "📘 Tabla de referencia: Tiempos verbales",
        content:
          "Contexto general → Presente | Datos estadísticos → Presente | Problema actual → Presente | Justificación → Presente | Pregunta → Presente/Infinitivo | Objetivo general → Infinitivo | Objetivos específicos → Infinitivo | Alcance → Presente",
      },
    ],
  },
  {
    id: 3,
    icon: History,
    shortTitle: "Antecedentes",
    title: "Antecedentes",
    description:
      "Contexto histórico, social o técnico del problema y su evolución hasta la situación actual.",
    explanation:
      "Los antecedentes proporcionan el contexto histórico, social o técnico del problema. Se trata de CÓMO ha evolucionado el problema, NO de soluciones de otros autores.\n\nLa diferencia clave con «Trabajos Relacionados» es que los antecedentes se centran en el PROBLEMA y su evolución, mientras que los trabajos relacionados analizan SOLUCIONES previas.",
    whatToInclude: [
      { title: "1. Contexto general del problema", content: "Origen y evolución del problema, con datos históricos y estadísticos." },
      { title: "2. Evolución del problema", content: "Cómo se ha abordado antes, limitaciones de enfoques previos al problema." },
      { title: "3. Relevancia actual", content: "Conectar el contexto histórico con el problema específico de la tesis." },
    ],
    recommendations: [
      "Enfócate en la EVOLUCIÓN del problema, no en soluciones",
      "Usa datos históricos y estadísticos verificables",
      "Conecta el pasado con la situación actual",
      "Cita fuentes oficiales (IEEE, ONUG, SENESCYT, ministerios)",
      "Muestra una línea temporal de cómo ha cambiado el problema",
    ],
    examples: [
      {
        title: "Sistemas de Gestión Académica",
        content:
          "«Desde 2015, las instituciones educativas ecuatorianas han implementado sistemas de gestión académica (SGA) de manera progresiva, alcanzando una cobertura del 78% en universidades públicas (SENESCYT, 2023). Sin embargo, la fragmentación de datos entre módulos (matrícula, calificaciones, finanzas) ha generado inconsistencias que afectan la toma de decisiones institucionales y el seguimiento estudiantil.»",
      },
      {
        title: "Machine Learning Agrícola",
        content:
          "«La aplicación de técnicas de aprendizaje automático en el sector agrícola ecuatoriano comenzó en 2018 con proyectos piloto de clasificación de enfermedades en cultivos de banano y cacao (INIAP, 2020). A pesar de los resultados prometedores (precisión del 89%), la adopción por parte de pequeños productores es inferior al 5% debido a la falta de accesibilidad y conectividad en zonas rurales.»",
      },
      {
        title: "Transformación Digital Bancaria",
        content:
          "«En los últimos cinco años, la transformación digital del sector bancario ecuatoriano ha impulsado la adopción de arquitecturas de microservicios, reemplazando los sistemas monolíticos heredados que databan de la década de 1990 (Superintendencia de Bancos, 2023). No obstante, el 40% de las cooperativas de ahorro y crédito aún opera con sistemas legados, limitando su competitividad y capacidad de innovación tecnológica.»",
      },
      {
        title: "Ciberseguridad en el Ecuador",
        content:
          "«Los incidentes de ciberseguridad reportados en Ecuador han pasado de 1,200 casos anuales en 2018 a más de 5,800 en 2023 (CISA Ecuador, 2023). La pandemia de COVID-19 aceleró la digitalización de servicios gubernamentales, pero sin una inversión proporcional en seguridad informática, dejando expuestos sistemas críticos de salud, educación y finanzas públicas.»",
      },
    ],
    commonMistakes: [
      "❌ Confundir antecedentes con trabajos relacionados",
      "❌ Describir soluciones de otros autores en vez del contexto del problema",
      "❌ Repetir información de la introducción",
      "❌ Usar fuentes no confiables (blogs, sitios no indexados)",
      "❌ No incluir datos históricos o estadísticos",
    ],
    cheatSheet: [
      "🔍 Enfócate en el PROBLEMA y su evolución",
      "📊 Usa datos históricos y estadísticos",
      "📅 Muestra línea temporal de cambios",
      "🔗 Conecta pasado → presente → tu problema",
      "🚫 NO describas soluciones de otros autores",
      "📚 Cita fuentes oficiales y verificables",
    ],
    callouts: [
      {
        type: "purple",
        title: "🟣 Definición clave",
        content:
          "ANTECEDENTES = Historia del PROBLEMA. TRABAJOS RELACIONADOS = Análisis de SOLUCIONES previas.",
      },
      {
        type: "tip",
        title: "💡 Pregunta guía",
        content:
          'Al escribir antecedentes, pregúntate: "¿Cómo ha evolucionado este problema a lo largo del tiempo?" no "¿Qué han hecho otros autores?"',
      },
      {
        type: "warning",
        title: "⚠️ No mezcles secciones",
        content:
          "Si encuentras que estás describiendo lo que hizo otro autor (herramientas, métodos, resultados), probablemente estás en Trabajos Relacionados, no en Antecedentes.",
      },
    ],
  },
  {
    id: 4,
    icon: Search,
    shortTitle: "Trabajos Relacionados",
    title: "Trabajos Relacionados",
    description:
      "Análisis crítico de investigaciones, proyectos o desarrollos tecnológicos previos relevantes para la tesis.",
    explanation:
      "Análisis de investigaciones previas, proyectos o desarrollos tecnológicos relevantes para la tesis. Debe ser CRÍTICO: evalúa fortalezas y limitaciones de cada trabajo y muestra los vacíos que tu tesis cubre.",
    whatToInclude: [
      { title: "1. Revisión de trabajos previos", content: "Resume investigaciones relevantes (artículos, patentes, tesis, proyectos). Describe qué hicieron, métodos y resultados." },
      { title: "2. Análisis crítico", content: "Identifica fortalezas y limitaciones de cada trabajo revisado." },
      { title: "3. Vacíos de investigación", content: "Explica qué no ha sido abordado y cómo tu tesis llena esos vacíos." },
    ],
    recommendations: [
      "Usa fuentes indexadas (IEEE, ACM, Springer, Scopus)",
      "Para cada trabajo: qué hizo → qué limitaciones tiene → cómo tu tesis mejora",
      "Organiza por temáticas o enfoques similares",
      "Incluye al menos 8-12 trabajos relacionados",
      "Conecta cada vacío con tu contribución específica",
    ],
    examples: [
      {
        title: "API REST para Inventario",
        content:
          "«Ramírez y Torres (2021) desarrollaron una API REST para la gestión de inventarios utilizando Spring Boot, logrando tiempos de respuesta inferiores a 200ms. Sin embargo, su arquitectura no contempla mecanismos de rate limiting ni autenticación OAuth 2.0, lo que limita su aplicabilidad en entornos de producción con alta concurrencia.»\n\n«Chen et al. (2022) propusieron un microservicio de gestión de inventarios con Node.js y Redis como caché, alcanzando 1,500 peticiones por segundo. Aunque el rendimiento es notable, la solución carece de documentación técnica adecuada y no fue validada con datos reales del contexto ecuatoriano.»\n\n«El presente trabajo propone una arquitectura de microservicios que integra las fortalezas de ambos enfoques: la robustez de Spring Boot para la lógica de negocio y la eficiencia de Redis para el manejo de caché, además de incorporar autenticación JWT y rate limiting, aspectos no abordados en los trabajos previos.»",
      },
      {
        title: "Apps de Salud Móvil",
        content:
          "«Mendoza (2020) implementó una aplicación móvil para el seguimiento de pacientes diabéticos con React Native, obteniendo una valoración de usabilidad de 78/100 (SUS). Sin embargo, la aplicación no integra APIs de dispositivos wearables y no cuenta con funcionalidades de alertas tempranas.»\n\n«López et al. (2023) desarrollaron una solución similar con Flutter que integra sensores de glucosa vía Bluetooth LE. Aunque la integración de hardware es un avance, el estudio se limitó a 10 pacientes y no evaluó la escalabilidad del sistema.»",
      },
      {
        title: "Blockchain para Votación",
        content:
          "«Kim y Park (2022) propusieron un sistema de votación electrónica basado en blockchain Ethereum para elecciones universitarias, demostrando la inmutabilidad y transparencia del proceso. No obstante, el costo de gas por transacción (USD 2.50) lo hace inviable para elecciones a gran escala.»\n\n«Existen carencias de soluciones blockchain adaptadas al contexto institucional ecuatoriano que cumplan con la Ley Orgánica de Comunicación y consideren las limitaciones de infraestructura tecnológica existentes.»",
      },
    ],
    commonMistakes: [
      "❌ Simplemente listar trabajos sin análisis crítico",
      "❌ Usar fuentes no indexadas (blogs, Wikipedia)",
      "❌ No conectar los vacíos con la contribución de la tesis",
      "❌ Ser demasiado positivo sin notar limitaciones",
      "❌ No incluir trabajos recientes (últimos 5 años)",
    ],
    cheatSheet: [
      "📝 Para cada trabajo: Qué hizo → Limitación → Tu mejora",
      "📚 Mínimo 8-12 trabajos de fuentes indexadas",
      "🔍 Análisis CRÍTICO: siempre menciona limitaciones",
      "🎯 Conecta vacíos con tu contribución",
      "📊 Compara métricas cuando sea posible",
      "📅 Prioriza trabajos de los últimos 5 años",
    ],
    callouts: [
      {
        type: "success",
        title: "✅ Estructura recomendada por trabajo",
        content:
          "1. Autor (año) hizo X usando Y. 2. Logró resultados Z. 3. Sin embargo, tiene limitación W. 4. Tu tesis aborda W mediante Q.",
      },
      {
        type: "warning",
        title: "⚠️ No seas un «catálogo»",
        content:
          'Evita escribir "Autor A hizo esto. Autor B hizo aquello. Autor C hizo lo otro." Sin análisis crítico, es solo una lista, no una revisión.',
      },
    ],
  },
  {
    id: 5,
    icon: Brain,
    shortTitle: "Marco Teórico",
    title: "Marco Teórico",
    description:
      "Conceptos, teorías, principios y fundamentos científico-técnicos que soportan la tesis.",
    explanation:
      "Presenta los conceptos, teorías, principios y fundamentos científico/técnicos que soportan la tesis. En Ingeniería de Sistemas, se enfoca en explicar las bases técnicas (arquitectura de software, algoritmos, protocolos, estándares).",
    whatToInclude: [
      { title: "1. Conceptos clave", content: "Define los términos fundamentales que se usarán en la tesis." },
      { title: "2. Teorías o modelos relevantes", content: "Describe modelos teóricos, algoritmos, estándares (REST, MVC, SOLID, ISO)." },
      { title: "3. Aplicación al problema", content: "Conecta los conceptos con el contexto específico de la tesis." },
    ],
    recommendations: [
      "Extensión: 3-5 páginas con diagramas, ecuaciones o tablas",
      "Usa libros, artículos científicos, estándares técnicos",
      "Incluye fórmulas, diagramas de arquitectura, flujos",
      "Sintetiza la información, no la copies",
      "Cada concepto debe estar conectado con tu problema",
      "Incluye diagramas UML, esquemas de arquitectura",
    ],
    examples: [
      {
        title: "Conceptos de Arquitectura de Software",
        content:
          "Define y explica:\n• Arquitectura de microservicios vs. monolítica\n• Principios SOLID de diseño de software\n• Patrones de diseño (Factory, Observer, Singleton)\n• API REST y sus principios (RESTful constraints)\n• Autenticación y autorización (JWT, OAuth 2.0)",
      },
      {
        title: "Conceptos de Bases de Datos",
        content:
          "Define y explica:\n• Modelo relacional y normalización (1NF, 2NF, 3NF)\n• Bases de datos NoSQL (documentales, clave-valor, grafos)\n• Propiedades ACID vs. BASE\n• Índices y optimización de consultas SQL\n• Migración de esquemas y versionado de bases de datos",
      },
      {
        title: "Conceptos de IA / Machine Learning",
        content:
          "Define y explica:\n• Aprendizaje supervisado vs. no supervisado vs. por refuerzo\n• Métricas de evaluación (precision, recall, F1-score, accuracy)\n• Overfitting y underfitting\n• Redes neuronales artificiales: arquitectura básica y funciones de activación\n• Validación cruzada y técnicas de balanceo (SMOTE)",
      },
      {
        title: "Conceptos de IoT",
        content:
          "Define y explica:\n• Arquitectura IoT (percepción, red, aplicación)\n• Protocolos de comunicación (MQTT, CoAP, HTTP)\n• Microcontroladores (ESP32, Arduino, Raspberry Pi)\n• Edge computing vs. cloud computing en IoT\n• Seguridad en dispositivos IoT",
      },
    ],
    commonMistakes: [
      "❌ Copiar definiciones de fuentes sin sintetizar",
      "❌ Ser demasiado abstracto sin conectar con el problema",
      "❌ Olvidar citas para los conceptos",
      "❌ Incluir solo teoría sin aplicación práctica",
      "❌ No incluir diagramas ni representaciones visuales",
    ],
    cheatSheet: [
      "📝 Extensión: 3-5 páginas",
      "📐 Incluye diagramas y esquemas visuales",
      "🔗 Conecta cada concepto con tu problema",
      "📚 Cita libros, artículos y estándares",
      "🧮 Incluye fórmulas si aplica",
      "🔄 Sintetiza, no copies de fuentes",
    ],
    callouts: [
      {
        type: "tip",
        title: "💡 Consejo práctico",
        content:
          'Organiza el marco teórico como un «mapa conceptual» que el lector pueda seguir. Empieza con lo general y ve a lo específico, siempre conectado con tu problema.',
      },
      {
        type: "warning",
        title: "⚠️ No hagas un diccionario",
        content:
          "El marco teórico no es una colección de definiciones. Cada concepto debe estar justificado: ¿por qué es relevante para tu tesis?",
      },
      {
        type: "purple",
        title: "🟣 Recuerda",
        content:
          "En Ingeniería de Sistemas, el marco teórico es MUY técnico. Incluye diagramas de arquitectura, tablas comparativas de tecnologías, y ecuaciones cuando aplique.",
      },
    ],
  },
  {
    id: 6,
    icon: FlaskConical,
    shortTitle: "Metodología",
    title: "Metodología",
    description:
      "Procedimiento seguido para desarrollar la investigación o proyecto con detalle técnico.",
    explanation:
      "Describe el procedimiento seguido para desarrollar la investigación o proyecto. En Ingeniería de Sistemas, detalla los pasos técnicos, herramientas y métodos para diseñar, implementar y evaluar la solución.",
    whatToInclude: [
      { title: "1. Diseño de la investigación", content: "Tipo de estudio (experimental, basado en diseño, etc.)." },
      { title: "2. Materiales y herramientas", content: "Equipos, software, materiales utilizados con especificaciones técnicas." },
      { title: "3. Procedimiento paso a paso", content: "Etapas del desarrollo con diagramas de flujo y descripción detallada." },
      { title: "4. Métodos de análisis", content: "Técnicas para evaluación de datos y resultados." },
    ],
    recommendations: [
      "Extensión: 2-4 páginas con diagramas y tablas",
      "Usa lenguaje imperativo o descriptivo («Se diseñó...»)",
      "Asegura reproducibilidad detallando variables, condiciones y criterios",
      "Incluye especificaciones técnicas de hardware y software",
      "Incluye diagramas de flujo del proceso",
      "Menciona versiones específicas de herramientas",
    ],
    examples: [
      {
        title: "Metodología - Aplicación Web (Scrum)",
        content:
          "«El desarrollo de la aplicación web se estructuró en cuatro fases siguiendo la metodología ágil Scrum con sprints de dos semanas:\n\nFase 1 - Análisis y diseño (Sprints 1-2): Se elaboraron los requisitos funcionales y no funcionales mediante historias de usuario. Se diseñó la arquitectura del sistema utilizando el patrón MVC, definiendo tres capas: presentación (React.js), lógica de negocio (Node.js/Express) y datos (PostgreSQL).\n\nFase 2 - Implementación (Sprints 3-6): Se desarrollaron los módulos de autenticación (JWT), gestión de usuarios (CRUD), dashboard administrativo y reportes. Se utilizó Git para control de versiones y Jest para pruebas unitarias.\n\nFase 3 - Pruebas (Sprint 7): Se ejecutaron pruebas funcionales, de integración y de rendimiento con Jest y Artillery, simulando 500 usuarios concurrentes.\n\nFase 4 - Despliegue y evaluación (Sprint 8): Se desplegó la aplicación en AWS EC2 con contenedores Docker. Se evaluó la usabilidad con el cuestionario SUS aplicado a 30 usuarios.»",
      },
      {
        title: "Metodología - Machine Learning (CRISP-DM)",
        content:
          "«La metodología sigue el proceso CRISP-DM (Cross-Industry Standard Process for Data Mining):\n\n1. Comprensión del negocio: Se identificaron los requisitos del sistema de detección de anomalías en red.\n2. Comprensión de los datos: Se analizó el dataset NSL-KDD con 125,973 registros y 41 características.\n3. Preparación de datos: Se aplicó normalización Min-Max, eliminación de outliers con IQR y selección de características con Random Forest Importance.\n4. Modelado: Se entrenaron y compararon cuatro algoritmos: Random Forest, SVM, XGBoost y Red Neuronal MLP.\n5. Evaluación: Se utilizó validación cruzada k-fold (k=10) y métricas de accuracy, precision, recall y F1-score.\n6. Despliegue: Se exportó el mejor modelo con Joblib y se creó una API REST con FastAPI para predicciones en tiempo real.»",
      },
      {
        title: "Metodología - Sistema IoT",
        content:
          "«El desarrollo del sistema IoT se dividió en tres etapas:\n\nEtapa 1 - Diseño del hardware: Se seleccionaron sensores DHT22 (temperatura/humedad), sensor de suelo capacitivo FC-28 y microcontrolador ESP32 con módulo WiFi integrado. Se diseñó el circuito en Fritzing y se fabricó un prototipo en PCB.\n\nEtapa 2 - Desarrollo del firmware y backend: Se programó el ESP32 en C++ (Arduino IDE) para la lectura de sensores cada 5 minutos y transmisión MQTT. Se implementó un broker Mosquitto en un servidor Raspberry Pi y una API REST en Flask para almacenamiento en PostgreSQL.\n\nEtapa 3 - Desarrollo del frontend y pruebas: Se creó un dashboard en React.js con gráficas en tiempo real utilizando Chart.js y WebSocket. Se realizaron pruebas funcionales durante 30 días consecutivos en un invernadero piloto.»",
      },
    ],
    commonMistakes: [
      "❌ Ser vago sobre herramientas y técnicas",
      "❌ No asegurar reproducibilidad del proceso",
      "❌ Faltar especificaciones técnicas",
      "❌ No incluir diagramas de flujo",
      "❌ No mencionar versiones de herramientas",
    ],
    cheatSheet: [
      "📝 Extensión: 2-4 páginas",
      "🔧 Detalla TODAS las herramientas con versiones",
      "📐 Incluye diagramas de flujo del proceso",
      "🔁 Asegura REPRODUCIBILIDAD completa",
      "📋 Usa lenguaje: «Se diseñó...», «Se implementó...»",
      "📊 Incluye tablas de fases y entregables",
    ],
    callouts: [
      {
        type: "tip",
        title: "💡 Consejo de reproducibilidad",
        content:
          "Un buen capítulo de metodología permite que otro ingeniero replique tu trabajo. Incluye versiones exactas, configuraciones y pasos detallados.",
      },
      {
        type: "success",
        title: "✅ Metodologías comunes en Sistemas",
        content:
          "Desarrollo de software: Scrum, Kanban, DevOps. Machine Learning: CRISP-DM, MLOps. Investigación: Experimental, Cuasi-experimental, Design Science Research.",
      },
    ],
  },
  {
    id: 7,
    icon: AlertTriangle,
    shortTitle: "Limitaciones",
    title: "Limitaciones",
    description:
      "Reconocimiento honesto de lo que no se pudo hacer y por qué, mostrando rigor académico.",
    explanation:
      "Reconocimiento honesto de lo que no se pudo hacer y por qué. Muestra rigor académico y autocrítica. Se ubica en dos lugares:\n\n1. En la Metodología (opcional): Hechos objetivos sobre lo que no se hizo y por qué.\n2. En la Discusión (obligatorio): Cómo las limitaciones afectan los resultados y la validez.",
    whatToInclude: [
      { title: "En la Metodología (opcional)", content: "Hechos objetivos: tamaño de muestra, entorno controlado, herramientas disponibles." },
      { title: "En la Discusión (obligatorio)", content: "Cómo las limitaciones impactan en los resultados, la validez y la generalización." },
    ],
    recommendations: [
      "Sé honesto pero no exageres las limitaciones",
      "Conecta cada limitación con su impacto real en los resultados",
      "Menciona qué se hizo para mitigar cada limitación",
      "Sé específico: no digas «limitaciones de tiempo», di qué exactamente no alcanzaste",
      "Muestra que las limitaciones no invalidan el trabajo",
    ],
    examples: [
      {
        title: "Limitación en Metodología - Web App",
        content:
          "«El estudio se limitó al desarrollo y prueba del prototipo en un entorno de laboratorio controlado con 50 usuarios simulados. No se realizaron pruebas en producción ni con usuarios reales, lo que podría generar resultados diferentes en escenarios de alta concurrencia y condiciones de red variables.»",
      },
      {
        title: "Limitación en Discusión - Machine Learning",
        content:
          "«Aunque el modelo de machine learning alcanzó una precisión del 94.5%, esta se midió con un dataset balanceado mediante SMOTE, por lo que su rendimiento con datos desbalanceados del mundo real podría ser menor. Además, el tamaño de la muestra (n=500 transacciones) restringe la generalización de los resultados a volúmenes de datos empresariales que superan los millones de registros diarios. Estas limitaciones sugieren que los hallazgos son preliminares y requieren validación con datos de producción de instituciones financieras ecuatorianas.»",
      },
      {
        title: "Limitación - Sistema IoT",
        content:
          "«El sistema IoT fue evaluado únicamente en condiciones de laboratorio con temperatura controlada entre 20-25°C. Las pruebas en campo con variaciones climáticas extremas (temperaturas superiores a 35°C o humedad superior al 90%) podrían afectar la precisión de los sensores y la vida útil de las baterías del ESP32.»",
      },
    ],
    commonMistakes: [
      "❌ Ocultar limitaciones (muestra falta de rigor)",
      "❌ Exagerar limitaciones (minimiza la confianza en resultados)",
      "❌ No conectar limitaciones con impacto real en resultados",
      "❌ Incluir limitaciones que debieron ser abordadas",
    ],
    cheatSheet: [
      "🔍 Dos ubicaciones: Metodología (opcional) y Discusión (obligatorio)",
      "⚖️ Equilibrio: honesto pero sin minar tu trabajo",
      "🔗 Conecta cada limitación → impacto en resultados",
      "🛡️ Muestra mitigaciones implementadas",
      "✅ Limitaciones no invalidan tu trabajo, lo hacen más creíble",
    ],
    callouts: [
      {
        type: "purple",
        title: "🟣 Perspectiva académica",
        content:
          "Reconocer limitaciones no debilita tu tesis; al contrario, demuestra madurez académica y rigor científico. Un revisor confía más en un trabajo que reconoce sus limitaciones.",
      },
      {
        type: "warning",
        title: "⚠️ No uses excusas vagas",
        content:
          'Evita «por falta de tiempo» o «por limitaciones presupuestarias». Sé específico: «se evaluó con 50 usuarios debido a restricciones de acceso a la población objetivo durante el período de recolección de datos (enero-marzo 2024)».',
      },
    ],
  },
  {
    id: 8,
    icon: BarChart3,
    shortTitle: "Resultados",
    title: "Resultados",
    description:
      "Presentación objetiva de hallazgos con datos cuantitativos o cualitativos, sin interpretaciones.",
    explanation:
      'Presenta los hallazgos de manera objetiva, sin interpretaciones. En Ingeniería de Sistemas, se enfoca en datos cuantitativos o cualitativos de experimentos, simulaciones o análisis.\n\nIMPORTANTE: "SOLO DATOS → NO limitaciones, NO interpretación"',
    whatToInclude: [
      { title: "1. Presentación de datos", content: "Tablas, gráficas, figuras, diagramas con datos completos." },
      { title: "2. Descripción factual", content: "Resume los datos sin análisis ni opiniones." },
      { title: "3. Orden lógico", content: "Organizado por objetivos específicos o etapas de la metodología." },
    ],
    recommendations: [
      "Extensión: 2-3 páginas con énfasis visual",
      "Etiqueta todas las figuras y tablas correctamente",
      "Incluye unidades de medida y precisión",
      "Evita opiniones, solo presenta hechos",
      "Usa tablas y gráficas profesionales",
      "Presenta datos en orden lógico (por objetivos o fases)",
    ],
    examples: [
      {
        title: "Resultados de Rendimiento Web",
        content:
          "«El análisis de rendimiento del sistema web mostró los siguientes resultados bajo carga progresiva:\n\n| Usuarios concurrentes | Tiempo de respuesta (ms) | Throughput (req/s) | Tasa de error (%) |\n|-----------------------|--------------------------|-------------------|-------------------|\n| 50                    | 145                      | 320               | 0.0               |\n| 100                   | 189                      | 585               | 0.0               |\n| 200                   | 312                      | 892               | 0.2               |\n| 500                   | 578                      | 1,150             | 0.8               |\n| 1,000                 | 1,245                    | 1,280             | 3.5               |\n\nTabla 1: Resultados de pruebas de rendimiento con Apache JMeter.\n\nEl sistema mantiene un tiempo de respuesta inferior a 300ms con hasta 200 usuarios concurrentes, superando el umbral aceptable de 500ms definido en los requisitos.»",
      },
      {
        title: "Resultados de Modelos ML",
        content:
          "«Los cuatro modelos evaluados presentaron el siguiente desempeño:\n\n| Modelo           | Accuracy (%) | Precision (%) | Recall (%) | F1-Score (%) | Tiempo entrenamiento |\n|-----------------|--------------|---------------|------------|--------------|---------------------|\n| Random Forest   | 96.2         | 95.8          | 94.1       | 94.9         | 12.3 s             |\n| XGBoost         | 97.1         | 96.5          | 95.3       | 95.9         | 8.7 s              |\n| SVM             | 93.4         | 92.1          | 89.7       | 90.9         | 45.2 s             |\n| Red Neuronal    | 97.5         | 97.0          | 96.1       | 96.5         | 120.5 s            |\n\nTabla 2: Comparación de modelos de clasificación.\n\nEl modelo de Red Neuronal MLP obtuvo el mayor F1-Score (96.5%), seguido de XGBoost (95.9%).»",
      },
      {
        title: "Resultados de Usabilidad (SUS)",
        content:
          "«La evaluación de usabilidad con el cuestionario SUS (System Usability Scale) aplicado a 35 usuarios arrojó los siguientes resultados:\n\n• Puntuación promedio: 82.5/100 (calificación «Buena» según escala de Bangor et al.)\n• Desviación estándar: 8.3\n• Puntuación mínima: 65, Puntuación máxima: 98\n• Percentil 25: 77, Percentil 75: 88»",
      },
    ],
    commonMistakes: [
      "❌ Incluir interpretaciones u opiniones",
      "❌ Mezclar resultados con discusión",
      "❌ Tablas o figuras sin etiquetar o mal formatadas",
      "❌ Faltar unidades de medida",
      "❌ No mencionar herramientas de medición usadas",
    ],
    cheatSheet: [
      "📊 SOLO DATOS, sin interpretación",
      "📐 Tablas y figuras bien etiquetadas",
      "🔢 Incluye unidades de medida y precisión",
      "📋 Organiza por objetivos específicos",
      "✅ Describe, no interpretes",
      "📉 Usa gráficas profesionales (barra, línea, pastel)",
    ],
    callouts: [
      {
        type: "warning",
        title: "⚠️ Regla de oro",
        content:
          "RESULTADOS = DATOS. Si estás escribiendo «esto sugiere que...» o «esto se debe a...», estás en DISCUSIÓN, no en RESULTADOS.",
      },
      {
        type: "success",
        title: "✅ Formato recomendado para tablas",
        content:
          "Cada tabla debe tener: número (Tabla 1), título descriptivo, unidades de medida en encabezados, fuente de los datos si aplica.",
      },
    ],
  },
  {
    id: 9,
    icon: MessageSquare,
    shortTitle: "Discusión",
    title: "Discusión",
    description:
      "Interpretación de resultados, comparación con literatura y análisis de implicaciones prácticas.",
    explanation:
      "Interpreta los resultados, los compara con el marco teórico y los trabajos relacionados, y analiza las implicaciones. Evalúa la viabilidad técnica, las limitaciones y las contribuciones prácticas.",
    whatToInclude: [
      { title: "1. Interpretación de resultados", content: "¿Qué significan los datos? ¿Cumplen los objetivos?" },
      { title: "2. Comparación con literatura", content: "¿Cómo se comparan con trabajos previos? ¿Mejores, peores, similares?" },
      { title: "3. Limitaciones interpretativas", content: "¿Cómo las limitaciones afectan la validez de las conclusiones?" },
      { title: "4. Implicaciones prácticas", content: "¿Qué impacto tienen los resultados en el mundo real?" },
    ],
    recommendations: [
      "Extensión: 2-3 páginas",
      "Usa evidencia para respaldar interpretaciones",
      "Conecta con los objetivos planteados",
      "Equilibrio: resalta fortalezas y debilidades honestamente",
      "Compara con trabajos relacionados (Sección 4)",
      "Conecta hallazgos con el marco teórico (Sección 5)",
    ],
    examples: [
      {
        title: "Discusión - Aplicación Web",
        content:
          "«Los resultados indican que el sistema web mantiene un tiempo de respuesta aceptable (< 300ms) con hasta 200 usuarios concurrentes, superando los estándares de la industria para aplicaciones educativas (Nielsen, 2023). Comparado con el sistema previo de la universidad, que presentaba tiempos de respuesta promedio de 1,800ms con 100 usuarios, la mejora representa una reducción del 83.4%. Esto se atribuye a la implementación de caché con Redis y la optimización de consultas SQL mediante índices compuestos.\n\nSin embargo, la tasa de error del 3.5% con 1,000 usuarios concurrentes sugiere que la infraestructura actual del servidor (2 vCPU, 4GB RAM) requiere escalado horizontal para escenarios de uso masivo, como los períodos de matrícula.»",
      },
      {
        title: "Discusión - Machine Learning",
        content:
          "«La Red Neuronal MLP superó a Random Forest en F1-Score (96.5% vs 94.9%), lo que se atribuye a su capacidad para capturar relaciones no lineales en las características del dataset, alineado con los hallazgos de Zhang et al. (2023) sobre la superioridad de redes profundas en clasificación de tráfico de red. Sin embargo, el tiempo de entrenamiento de la MLP (120.5s) es significativamente mayor que el de XGBoost (8.7s), lo cual es una limitación relevante cuando se requiere reentrenamiento frecuente del modelo.\n\nComparado con el trabajo de García (2021), quien reportó un accuracy del 91% con SVM para un problema similar, nuestros resultados muestran una mejora del 6.5 puntos porcentuales, atribuible al preprocesamiento con SMOTE y la selección de características mediante Random Forest Importance.»",
      },
    ],
    commonMistakes: [
      "❌ Simplemente repetir resultados sin interpretar",
      "❌ No comparar con trabajos relacionados",
      "❌ Ignorar limitaciones",
      "❌ Hacer afirmaciones no respaldadas por datos",
      "❌ No conectar con los objetivos planteados",
    ],
    cheatSheet: [
      "🧠 Interpreta: ¿Qué significan los datos?",
      "📚 Compara con literatura previa",
      "⚖️ Equilibra fortalezas y debilidades",
      "🔗 Conecta con objetivos y marco teórico",
      "🎯 Responde: ¿Se cumplieron los objetivos?",
      "🔄 Relaciona con Trabajos Relacionados (Sección 4)",
    ],
    callouts: [
      {
        type: "info",
        title: "📘 Estructura recomendada",
        content:
          "1. Para cada resultado: interpretación → comparación con literatura → implicación. 2. Al final: limitaciones interpretativas → conclusiones preliminares.",
      },
      {
        type: "warning",
        title: "⚠️ No repitas resultados",
        content:
          'La discusión no es «los resultados muestran X». Es «estos resultados sugieren que X porque Y, y esto es consistente/inconsistente con Z».',
      },
    ],
  },
  {
    id: 10,
    icon: CheckCircle,
    shortTitle: "Conclusiones",
    title: "Conclusiones",
    description:
      "Síntesis de hallazgos principales, respuesta a objetivos y cierre de la tesis.",
    explanation:
      "Sintetiza los hallazgos clave, responde a los objetivos y cierra la tesis. Enfatiza las contribuciones técnicas y el cumplimiento de metas.",
    whatToInclude: [
      { title: "1. Resumen de objetivos cumplidos", content: "Confirma el logro del objetivo general y los específicos." },
      { title: "2. Hallazgos principales", content: "Resume los resultados más relevantes con datos cuantitativos." },
      { title: "3. Aportes", content: "Destaca contribuciones técnicas y prácticas al campo." },
    ],
    recommendations: [
      "Extensión: 1 página, conciso",
      "No introduzcas información nueva",
      "Usa lenguaje afirmativo y preciso",
      "Responde CADA objetivo específico",
      "Incluye datos cuantitativos concretos",
      "Cierra con la contribución principal",
    ],
    examples: [
      {
        title: "Conclusiones - Aplicación Web",
        content:
          "«Se cumplió el objetivo general de desarrollar una aplicación web de gestión de citas médicas, alcanzando tiempos de respuesta inferiores a 300ms y reduciendo los tiempos de espera en un 45%. Los objetivos específicos se lograron mediante la implementación de una arquitectura RESTful con autenticación JWT, base de datos PostgreSQL y dashboard administrativo en React.js. La evaluación de usabilidad con 50 usuarios arrojó una puntuación SUS de 82.5/100. Este trabajo demuestra la viabilidad de soluciones tecnológicas de bajo costo para la digitalización de servicios de salud en el contexto ecuatoriano.»",
      },
      {
        title: "Conclusiones - Machine Learning",
        content:
          "«El objetivo general de implementar un modelo de machine learning para detección de fraudes se cumplió satisfactoriamente, con el modelo de Red Neuronal MLP alcanzando un F1-Score del 96.5%, superando los modelos de línea base. Los objetivos específicos de preprocesamiento, comparación de algoritmos y despliegue mediante API REST se completaron exitosamente. Este trabajo aporta un modelo replicable y documentado para la detección de anomalías en transacciones financieras, contribuyendo a la seguridad informática en el contexto ecuatoriano.»",
      },
      {
        title: "Conclusiones - Sistema IoT",
        content:
          "«Se cumplió el objetivo general de diseñar un sistema IoT para monitoreo ambiental en invernaderos, logrando una precisión del 95% en la medición de variables climáticas. El prototipo basado en ESP32 y protocolo MQTT demostró ser confiable durante 30 días de prueba continua, con un costo total de USD 45 por nodo. Este trabajo aporta una solución accesible para la automatización agrícola que puede ser replicada por pequeños productores ecuatorianos.»",
      },
    ],
    commonMistakes: [
      "❌ Introducir información o datos nuevos",
      "❌ Simplemente copiar el resumen",
      "❌ Usar lenguaje tentativo inapropiadamente",
      "❌ No conectar con los objetivos planteados",
      "❌ No incluir datos cuantitativos de respaldo",
    ],
    cheatSheet: [
      "📝 Extensión: 1 página máxima",
      "🎯 Responde CADA objetivo planteado",
      "📊 Incluye datos cuantitativos concretos",
      "✅ Lenguaje afirmativo y preciso",
      "🏆 Destaca tu contribución principal",
      "🚫 NO introduces información nueva",
    ],
    callouts: [
      {
        type: "tip",
        title: "💡 Verificación final",
        content:
          'Antes de entregar, verifica: cada objetivo específico tiene su respuesta en las conclusiones. Si planteaste 4 objetivos, debes tener 4 respuestas.',
      },
      {
        type: "warning",
        title: "⚠️ Conclusiones ≠ Resumen",
        content:
          "Las conclusiones responden a los objetivos y sintetizan hallazgos. El resumen describe TODO el trabajo. No copies uno como el otro.",
      },
    ],
  },
  {
    id: 11,
    icon: Lightbulb,
    shortTitle: "Recomendaciones",
    title: "Recomendaciones",
    description:
      "Propuestas de acciones futuras basadas en los resultados: mejoras, aplicaciones o investigaciones adicionales.",
    explanation:
      "Propone acciones futuras basadas en los resultados: mejoras, aplicaciones o investigaciones adicionales. Deben ser realistas y estar justificadas.",
    whatToInclude: [
      { title: "Lista numerada de recomendaciones", content: "Cada recomendación con justificación vinculada a limitaciones o hallazgos." },
    ],
    recommendations: [
      "Extensión: 0.5-1 página, lista numerada",
      "Sé realista y accionable",
      "Incluye ideas para investigación futura",
      "Conecta cada recomendación con un hallazgo o limitación",
      "Prioriza las recomendaciones más importantes",
      "Incluye mejoras técnicas específicas",
    ],
    examples: [
      {
        title: "Recomendaciones - Aplicación Web",
        content:
          "1. Implementar un sistema de notificaciones push y SMS para recordatorios de citas, reduciendo la tasa de inasistencia.\n2. Integrar APIs de pago electrónico (Stripe, PayPal) para permitir el pago de consultas en línea.\n3. Desarrollar una aplicación móvil complementaria utilizando React Native para accesibilidad desde dispositivos móviles.\n4. Realizar pruebas de carga con más de 5,000 usuarios concurrentes para evaluar la escalabilidad en períodos pico.\n5. Investigar la integración de un chatbot con procesamiento de lenguaje natural para atención automatizada de consultas frecuentes.",
      },
      {
        title: "Recomendaciones - Machine Learning",
        content:
          "1. Realizar validación del modelo con datos de transacciones reales de una cooperativa de ahorro y crédito ecuatoriana.\n2. Investigar técnicas de explainable AI (XAI) para mejorar la interpretabilidad de las predicciones del modelo.\n3. Implementar un pipeline de reentrenamiento automático con nuevos datos cada 30 días.\n4. Evaluar modelos de deep learning (LSTM, Transformer) para capturar patrones temporales en secuencias de transacciones.\n5. Desarrollar una interfaz de usuario que permita a analistas financieros ajustar umbrales de detección sin conocimientos técnicos de ML.",
      },
      {
        title: "Recomendaciones - Sistema IoT",
        content:
          "1. Realizar pruebas en campo en al menos tres invernaderos con condiciones climáticas variadas.\n2. Integrar módulos de actuadores (relés, electroválvulas) para automatización del riego y ventilación.\n3. Implementar un panel solar para alimentación autónoma del sistema en zonas rurales sin acceso a la red eléctrica.\n4. Desarrollar una aplicación móvil con alertas Push para notificar a los agricultores sobre condiciones críticas.\n5. Investigar la integración de algoritmos de ML en el dispositivo edge (ESP32) para predicción local de condiciones.",
      },
    ],
    commonMistakes: [
      "❌ Ser vago o irrealista",
      "❌ No conectar recomendaciones con hallazgos",
      "❌ Listar demasiadas recomendaciones sin priorización",
      "❌ Recomendaciones que deberían ser parte del trabajo actual",
    ],
    cheatSheet: [
      "📝 Extensión: 0.5-1 página",
      "🔢 Lista numerada y priorizada",
      "🔗 Conecta con hallazgos y limitaciones",
      "🎯 Sé específico y realista",
      "🔮 Incluye investigación futura",
      "⚡ Prioriza las más importantes",
    ],
    callouts: [
      {
        type: "tip",
        title: "💡 Regla práctica",
        content:
          'Cada recomendación debe responder a: «¿Qué se podría hacer mejor?» o «¿Qué sigue?» basado en tus resultados y limitaciones.',
      },
      {
        type: "info",
        title: "📘 Formato sugerido",
        content:
          "1. [Recomendación específica] → [Justificación breve vinculada a un hallazgo/limitación]",
      },
    ],
  },
  {
    id: 12,
    icon: Paperclip,
    shortTitle: "Anexos",
    title: "Anexos",
    description:
      "Material complementario que respalda la tesis pero no es esencial en el cuerpo principal.",
    explanation:
      "Material complementario que respalda la tesis pero no es esencial en el cuerpo principal. Cada anexo debe estar numerado, titulado y referenciado en el texto principal.",
    whatToInclude: [
      { title: "Código fuente", content: "Repositorio GitHub o extractos de código relevantes." },
      { title: "Especificaciones técnicas", content: "Datasheets de hardware, configuraciones, diagramas completos." },
      { title: "Manuales y guías", content: "Manual de usuario, guía de instalación, capturas de pantalla." },
      { title: "Resultados completos", content: "Logs de pruebas, datasets, resultados extendidos." },
      { title: "Cuestionarios y formularios", content: "Instrumentos de recolección de datos utilizados." },
    ],
    recommendations: [
      "Cada anexo con número y título",
      "Breve explicación del contenido",
      "Referenciado en el texto principal",
      "No incluyas contenido esencial en anexos",
      "No sobrecargues con material innecesario",
    ],
    examples: [
      {
        title: "Anexos típicos - Sistemas",
        content:
          "• Anexo A: Código fuente del modelo de machine learning (repositorio GitHub)\n• Anexo B: Especificaciones técnicas de hardware (datasheets de sensores ESP32, DHT22)\n• Anexo C: Manual de usuario del sistema (guía paso a paso con capturas de pantalla)\n• Anexo D: Resultados completos de pruebas de rendimiento (logs de Apache JMeter)\n• Anexo E: Cuestionario SUS utilizado para evaluación de usabilidad\n• Anexo F: Diagrama de arquitectura completo del sistema (diagramas UML, ER)\n• Anexo G: Script SQL de creación de base de datos\n• Anexo H: Configuración de despliegue (Docker Compose, nginx.conf)",
      },
    ],
    commonMistakes: [
      "❌ Incluir contenido esencial en anexos (debe estar en el cuerpo principal)",
      "❌ No referenciar anexos en el texto",
      "❌ Sobrecargar con material innecesario",
      "❌ No numerar ni titular los anexos",
    ],
    cheatSheet: [
      "📝 Cada anexo: número + título + explicación breve",
      "🔗 Referenciado en el texto principal",
      "📦 Código, datasheets, manuales, logs, cuestionarios",
      "🚫 NO contenido esencial del cuerpo principal",
      "🏷️ Formato: Anexo A, Anexo B, etc.",
      "📊 Incluye índice de anexos al inicio",
    ],
    callouts: [
      {
        type: "tip",
        title: "💡 Consejo práctico",
        content:
          "Los anexos son como el «making of» de tu tesis. Incluye todo lo que un lector técnico necesitaría para replicar o extender tu trabajo.",
      },
      {
        type: "warning",
        title: "⚠️ Regla de oro",
        content:
          "Si el contenido es esencial para entender la tesis, va en el cuerpo principal. Si es complementario o de referencia, va en anexos.",
      },
    ],
  },
  {
    id: 13,
    icon: BookMarked,
    shortTitle: "Bibliografía",
    title: "Bibliografía (Formato IEEE)",
    description:
      "Lista completa y organizada de todas las fuentes citadas en la tesis, siguiendo el formato IEEE.",
    explanation:
      "La bibliografía es la sección final que recopila todas las fuentes consultadas y citadas a lo largo de la tesis. En el campo de la Ingeniería de Sistemas y Computación, el formato más utilizado es el estilo IEEE (Institute of Electrical and Electronics Engineers), que emplea un sistema de referencias numéricas entre corchetes [1], [2], etc., ordenadas por orden de aparición en el texto.\n\nUna bibliografía bien elaborada no solo cumple con los requisitos académicos, sino que también permite a los lectores localizar y verificar las fuentes utilizadas, otorgando credibilidad y rigor científico al trabajo.",
    whatToInclude: [
      { title: "1. Libros", content: "Autor(es), Título del libro en cursiva, edicion, ciudad: editorial, año." },
      { title: "2. Artículos de revistas científicas", content: "Autor(es), «Título del artículo», Nombre de la revista en cursiva, vol., no., pp. página inicial–página final, mes año." },
      { title: "3. Artículos de conferencias", content: "Autor(es), «Título del artículo», en Proc. Nombre de la Conferencia, ciudad, año, pp. página inicial–página final." },
      { title: "4. Fuentes en línea", content: "Autor(es), «Título del documento», Sitio web, mes día, año. [En línea]. Disponible en: URL" },
      { title: "5. Tesis y trabajos académicos", content: "Autor, «Título de la tesis», Grado académico, Departamento, Universidad, Ciudad, Año." },
      { title: "6. Documentación técnica y estándares", content: "Organización, Título del estándar,Número del estándar, Año." },
    ],
    recommendations: [
      "Usa SIEMPRE el formato IEEE en Ingeniería de Sistemas (a menos que tu universidad indique otro)",
      "Las referencias se numeran en orden de aparición en el texto: [1], [2], [3]...",
      "Prioriza fuentes indexadas: IEEE Xplore, ACM Digital Library, Springer, Scopus",
      "Incluye DOIs (Digital Object Identifiers) cuando estén disponibles",
      "Usa gestores bibliográficos como Zotero o Mendeley para mantener el orden",
      "Mínimo 15-25 referencias para una tesis de pregrado en Ingeniería",
      "Verifica que TODA referencia citada en el texto esté en la bibliografía y viceversa",
      "Ordena alfabéticamente por apellido del primer autor cuando haya múltiples trabajos del mismo autor",
    ],
    examples: [
      {
        title: "Artículo de revista científica (IEEE)",
        content:
          "[1] A. Krizhevsky, I. Sutskever, and G. E. Hinton, «Imagenet classification with deep convolutional neural networks», Commun. ACM, vol. 60, no. 6, pp. 84–90, May 2017, doi: 10.1145/3065386.\n\n[2] M. Chen, D. Tworek, H. Jun, Q. Yuan, H. Pinto, et al., «Evaluating large language models trained on code», arXiv preprint arXiv:2107.03374, 2021.\n\n[3] R. Ramírez and J. Torres, «RESTful API design patterns for microservices architectures», IEEE Softw., vol. 38, no. 3, pp. 72–80, Jun. 2021.",
      },
      {
        title: "Artículo de conferencia (IEEE)",
        content:
          "[4] J. López, M. Pérez, and S. Gómez, «Real-time glucose monitoring using Flutter and Bluetooth LE», in Proc. Int. Conf. Health Informatics (ICHI), Loja, Ecuador, 2023, pp. 145–152.\n\n[5] K. Kim and S. Park, «Blockchain-based electronic voting system for university governance», in Proc. IEEE Int. Conf. Blockchain Cryptocurrency (ICBC), Seoul, South Korea, 2022, pp. 88–95.",
      },
      {
        title: "Libro (IEEE)",
        content:
          "[6] I. Sommerville, Software Engineering, 10th ed. Harlow, U.K.: Pearson, 2015.\n\n[7] S. Russell and P. Norvig, Artificial Intelligence: A Modern Approach, 4th ed. Hoboken, NJ, USA: Pearson, 2020.\n\n[8] E. Gamma, R. Helm, R. Johnson, and J. Vlissides, Design Patterns: Elements of Reusable Object-Oriented Software. Boston, MA, USA: Addison-Wesley, 1994.",
      },
      {
        title: "Fuentes en línea (IEEE)",
        content:
          "[9] Statista, «Market size of online education worldwide from 2018 to 2028», Statista, 2024. [En línea]. Disponible en: https://www.statista.com/statistics/280000/online-education-market-worldwide/\n\n[10] Gartner, «Worldwide end-user spending on public cloud services forecast 2024», Gartner, 2024. [En línea]. Disponible en: https://www.gartner.com/en/newsroom/press-releases\n\n[11] SENESCYT, «Informe de educación superior del Ecuador 2023», Secretaría de Educación Superior, Ciencia, Tecnología e Innovación, Quito, Ecuador, 2023. [En línea]. Disponible en: https://www.senescyt.gob.ec",
      },
      {
        title: "Tesis y trabajo de integración curricular (IEEE)",
        content:
          "[12] C. Mendoza, «Aplicación móvil para el seguimiento de pacientes diabéticos utilizando React Native», Tesis de grado, Dept. Sistemas y Computación, Univ. Nacional de Loja, Loja, Ecuador, 2020.\n\n[13] R. García, «Diseño de un sistema de almacenamiento de energía basado en baterías de ion-litio», Trabajo de Integración Curricular, Dept. Ingeniería Eléctrica, Univ. Nacional de Loja, Loja, Ecuador, 2023.",
      },
      {
        title: "Estándares y documentación técnica (IEEE)",
        content:
          "[14] ISO/IEC, «Information security management systems — Requirements», ISO/IEC 27001:2022, International Organization for Standardization, Geneva, Switzerland, 2022.\n\n[15] IEEE, «IEEE Standard for Information Technology — Telecommunications and information exchange between systems», IEEE Std 802.11-2020, 2020.\n\n[16] OWASP Foundation, «OWASP Top 10 Web Application Security Risks», OWASP, 2021. [En línea]. Disponible en: https://owasp.org/www-project-top-ten/",
      },
    ],
    commonMistakes: [
      "❌ Usar formato APA en lugar de IEEE (son completamente diferentes)",
      "❌ No numerar las referencias por orden de aparición en el texto",
      "❌ Incluir fuentes en la bibliografía que no fueron citadas en el texto",
      "❌ Citar fuentes en el texto que no aparecen en la bibliografía",
      "❌ Olvidar incluir el DOI para artículos científicos",
      "❌ Usar fuentes no confiables (blogs personales, Wikipedia, foros)",
      "❌ No verificar la exactitud de URLs y fechas de consulta",
      "❌ Listar referencias sin un orden consistente",
    ],
    cheatSheet: [
      "📚 Formato IEEE: [N] Autor(es), «Título», Revista/Editorial, vol., pp., año",
      "🔢 Numerar por ORDEN DE APARICIÓN en el texto",
      "🔗 Incluir DOI cuando esté disponible",
      "📅 Mínimo 15-25 referencias para tesis de pregrado",
      "🔍 Prioriza fuentes indexadas (IEEE Xplore, ACM, Springer, Scopus)",
      "✅ Verifica: cada cita en el texto = entrada en bibliografía",
      "🛠️ Usa gestores: Zotero (recomendado), Mendeley, BibTeX",
      "🌐 URLs: verificar que funcionen y sean estables",
      "📖 Libros: Autor, Título en cursiva, edición, ciudad: editorial, año",
      "📄 Artículos: Autor, «Título», Revista, vol., no., pp., mes año",
    ],
    callouts: [
      {
        type: "info",
        title: "📘 ¿Por qué formato IEEE?",
        content:
          "El formato IEEE es el estándar en Ingeniería de Sistemas y Computación a nivel mundial. Usa numeración entre corchetes [1] en lugar de autor-fecha (como APA). Es más compacto y mantiene el flujo de lectura sin interrumpir con nombres largos.",
      },
      {
        type: "success",
        title: "✅ Gestores bibliográficos recomendados",
        content:
          "ZOTERO (recomendado): Gratuito, plugin para Chrome que captura referencias automáticamente, genera bibliografía en formato IEEE con un clic, integración con Word y Google Docs. MENDELEY: Gratuito, interfaz similar a iTunes, buena para PDFs. BIBTEX/LaTeX: Ideal si usas LaTeX para tu tesis. CITATION MACHINE: Generador en línea simple.",
      },
      {
        type: "tip",
        title: "💡 Flujo de trabajo con Zotero",
        content:
          "1. Instala Zotero + extensión del navegador. 2. Al encontrar un artículo en IEEE Xplore, haz clic en «Guardar en Zotero». 3. Zotero captura automáticamente autor, título, año, DOI. 4. Al escribir tu tesis, inserta citas con el plugin de Word. 5. Al final, genera la bibliografía completa en formato IEEE automáticamente.",
      },
      {
        type: "warning",
        title: "⚠️ Verificación final obligatoria",
        content:
          "Antes de entregar, verifica tres cosas: (1) Cada [N] en el texto tiene su entrada en la bibliografía. (2) Cada entrada en la bibliografía tiene al menos una cita [N] en el texto. (3) Las URLs funcionan y los DOIs son correctos. Una referencia rota o sin cita es un error común que los evaluadores siempre revisan.",
      },
      {
        type: "purple",
        title: "🟣 Dónde buscar fuentes de calidad",
        content:
          "IEEE Xplore Digital Library (ieee.org) — articles.iop.org — ACM Digital Library (dl.acm.org) — Springer Link (springer.com) — Scopus (scopus.com) — Google Scholar (scholar.google.com) — arXiv (arxiv.org). Evita: blogs, Wikipedia, sitios sin autoría reconocida.",
      },
    ],
  },
];
