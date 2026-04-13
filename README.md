# Guia TIC - UNL

**Guía interactiva para la elaboración del Trabajo de Integración Curricular (TIC)**  
Ingeniería en Sistemas y Computación — Universidad Nacional de Loja

Docente: Valeria Herrera Salazar

## Descripción

Aplicación web interactiva que guía a los estudiantes universitarios paso a paso en la redacción de su Trabajo de Integración Curricular (TIC). Incluye 13 secciones con explicaciones detalladas, ejemplos enfocados en Ingeniería de Sistemas y Computación, y un asistente de IA para resolver dudas.

## Secciones incluidas

1. Resumen / Abstract
2. Introducción
3. Antecedentes
4. Trabajos Relacionados
5. Marco Teórico
6. Metodología
7. Limitaciones
8. Resultados
9. Discusión
10. Conclusiones
11. Recomendaciones
12. Anexos
13. Bibliografía (Formato IEEE)

## Características

- Navegación por secciones (anterior/siguiente)
- Barra de progreso con persistencia (localStorage)
- Ejemplos expandibles de Ingeniería de Sistemas
- Callouts de consejos, advertencias e información
- Cheat Sheets con copiar al portapapeles
- Errores comunes a evitar por sección
- Asistente de IA para dudas sobre la tesis (siempre sugiere consultar normativa UNL)
- Diseño responsive (móvil y escritorio)
- Animaciones fluidas

## Tecnologías

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui**
- **Framer Motion**
- **Lucide React** (iconos)
- **z-ai-web-dev-sdk** (API de IA para el chat)

## Instalación y ejecución

### Prerrequisitos

- Node.js 18+ o Bun
- npm o bun

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/guia-tic-unl.git
cd guia-tic-unl

# 2. Instalar dependencias
npm install
# o con bun:
bun install

# 3. Ejecutar en modo desarrollo
npm run dev
# o con bun:
bun run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Variables de entorno

Para que funcione el chat con IA, es necesario configurar las variables de entorno del SDK de IA según la documentación de `z-ai-web-dev-sdk`.

## Estructura del proyecto

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint del chat con IA
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página de entrada
├── components/
│   ├── thesis/
│   │   ├── ChatPanel.tsx         # Panel de chat con IA
│   │   └── ThesisGuide.tsx       # Componente principal de la guía
│   └── ui/                       # Componentes shadcn/ui
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── scroll-area.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── tooltip.tsx
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
└── lib/
    ├── sections-data.ts          # Datos de las 13 secciones
    └── utils.ts                  # Utilidades generales
```

## Licencia

Derechos reservados — Docente Valeria Herrera Salazar - TIC
