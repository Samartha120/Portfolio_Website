export const projects = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    category: 'Web',
    image: '/assets/images/project1.png',
    imageBg: 'from-slate-900 via-slate-800 to-slate-900',
    tags: ['React', 'Vite', 'Tailwind', 'Charting', 'A11y'],
    desc: 'A production-style dashboard focused on scannable hierarchy, fast interaction, and accessible data visuals.',
    client: 'Internal',
    year: '2025',
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    images: ['/assets/images/project1.png', '/assets/images/project2.png'],
    features: [
      'Responsive layouts for dense data tables and charts',
      'Accessible components and keyboard-first interactions',
      'Reusable cards and filters for consistent UX'
    ],
    challenges: [
      {
        challenge: 'Keeping charts readable on small screens.',
        solution: 'Introduced progressive disclosure and condensed labels with tooltips and responsive breakpoints.'
      },
      {
        challenge: 'Preventing layout shift while filtering.',
        solution: 'Used layout-aware transitions and stable container sizing to keep motion subtle and predictable.'
      }
    ]
  },
  {
    id: 2,
    title: 'SaaS Marketing Site',
    category: 'UI',
    image: '/assets/images/hero.png',
    imageBg: 'from-slate-900 via-slate-800 to-slate-900',
    tags: ['React', 'Tailwind', 'Content', 'Performance'],
    desc: 'A clean marketing website with consistent spacing, calm motion, and reusable sections for fast iteration.',
    client: 'Studio Project',
    year: '2024',
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    images: ['/assets/images/hero.png', '/assets/images/project2.png'],
    features: [
      'Reusable sections (hero, features, testimonials, CTA)',
      'Accessible navigation + focus states',
      'Image optimization-friendly layout'
    ],
    challenges: [
      {
        challenge: 'Balancing polish with load time.',
        solution: 'Kept motion as feedback-only and reduced heavy effects to preserve performance.'
      }
    ]
  },
  {
    id: 3,
    title: 'Component Library',
    category: 'UI',
    image: '/assets/images/project2.png',
    imageBg: 'from-slate-900 via-slate-800 to-slate-900',
    tags: ['Tailwind', 'A11y', 'Design System', 'Tokens'],
    desc: 'A small component set focused on accessibility, typography, and reliable interaction states.',
    client: 'Internal',
    year: '2023',
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    images: ['/assets/images/project2.png', '/assets/images/project1.png'],
    features: [
      'Button, card, modal, and section primitives',
      'Consistent spacing + typography rules',
      'Keyboard and screen-reader friendly patterns'
    ],
    challenges: [
      {
        challenge: 'Avoiding “custom for every page” drift.',
        solution: 'Defined component contracts and defaults that scale across pages without over-styling.'
      }
    ]
  },
  {
    id: 4,
    title: 'Portfolio Case Study',
    category: 'Web',
    image: '/assets/images/project4.png',
    imageBg: 'from-slate-900 via-slate-800 to-slate-900',
    tags: ['React Router', 'Content', 'SEO', 'UX Writing'],
    desc: 'A structured case study layout with clear sections, scannable writing, and practical navigation patterns.',
    client: 'Personal',
    year: '2023',
    repoUrl: 'https://github.com/alexreed/portfolio',
    demoUrl: 'https://portfolio-demo.com',
    images: ['/assets/images/project4.png', '/assets/images/hero.png'],
    features: [
      'Structured narrative: problem → approach → outcome',
      'Scannable typography and spacing',
      'Clear calls to action for demo and source'
    ],
    challenges: [
      {
        challenge: 'Making long content easy to skim.',
        solution: 'Used chunked sections, consistent headings, and short highlight lists.'
      }
    ]
  },
  {
    id: 5,
    title: 'Full‑Stack Task Tracker',
    category: 'Full Stack',
    image: '/assets/images/project1.png',
    imageBg: 'from-slate-900 via-slate-800 to-slate-900',
    tags: ['React', 'Node', 'API', 'Auth', 'Postgres'],
    desc: 'A full-stack CRUD app with authentication, clean forms, and a calm UI that focuses on the work.',
    client: 'Practice Project',
    year: '2024',
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    images: ['/assets/images/project1.png', '/assets/images/project2.png'],
    features: [
      'Auth + protected routes',
      'Optimistic UI for fast task updates',
      'Clear empty/loading states'
    ],
    challenges: [
      {
        challenge: 'Keeping forms predictable and accessible.',
        solution: 'Standardized input components, validation messages, and focus management across flows.'
      }
    ]
  },
  {
    id: 6,
    title: 'API‑Driven Directory',
    category: 'Full Stack',
    image: '/assets/images/project2.png',
    imageBg: 'from-slate-900 via-slate-800 to-slate-900',
    tags: ['React', 'API', 'Caching', 'Search', 'UX'],
    desc: 'A directory UI with search, filtering, and detail views designed for speed and clarity.',
    client: 'Practice Project',
    year: '2025',
    repoUrl: 'https://github.com/',
    demoUrl: 'https://example.com/',
    images: ['/assets/images/project2.png', '/assets/images/hero.png'],
    features: [
      'Fast search + filters with stable layouts',
      'Detail pages with consistent CTAs',
      'Reusable cards for list and grid views'
    ],
    challenges: [
      {
        challenge: 'Avoiding jitter during results updates.',
        solution: 'Applied stable grid sizing and subtle transitions that don’t shift content unexpectedly.'
      }
    ]
  }
];
