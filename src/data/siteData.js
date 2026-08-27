export const profile = {
  name: 'Eliah Dimmed',
  fullName: 'Eliah Bäckström Dimmed',
  location: 'Tyringe, Skåne, Sweden',
  email: 'eliah.dimmed@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eliah-dimmed/',
  github: 'https://github.com/eliahdim',
  cvUrl: 'files/eliah-dimmed-cv.pdf',
  badge: 'IT support & technical operations with a software engineering background',
  role: 'Junior IT Support / IT Technician',
  tagline:
    'I solve technical problems where users, devices, and networks meet—combining hands-on infrastructure experience with the ability to understand and build software.',
  summary:
    'Solution-oriented TE4 graduate with hands-on experience in fiber infrastructure, customer-facing technical support, hardware, networks, and software development. I enjoy troubleshooting methodically, explaining solutions clearly, and taking responsibility until the user can work again. My development background in JavaScript, React, Python, and SQL also helps me understand systems beyond the surface and automate repetitive work.',
};

export const stats = [
  { value: '1+', label: 'Year Hands-on IT Experience' },
  { value: '2', label: 'Professional Work Placements' },
  { value: '7', label: 'Selected Projects' },
];

export const journey = [
  {
    title: 'Technology Programme',
    description:
      'Built a broad technical foundation through programming, web development, networking, and a Unity-based graduation project.',
    icon: 'fas fa-laptop-code',
    imageUrl: 'images/eliah-teen.jpg',
    meta: 'Hässleholms Tekniska Skola, 2021 - 2024',
  },
  {
    title: 'Fiber Technician',
    description:
      'Installed and troubleshot fiber infrastructure in two 23-storey residential buildings in Malmö. The work included fiber blowing and splicing, CAT6, media cabinets, routers, TV equipment, fault finding, and direct customer contact.',
    icon: 'fas fa-network-wired',
    imageUrl: 'images/eliah-fiber.jpg',
    meta: 'Baramontage, July 2024 - July 2025',
  },
  {
    title: 'Graduate Engineer in Software Design (TE4)',
    description:
      'Completed a one-year engineering programme focused on software design, agile development, databases, APIs, architecture, teamwork, and delivering technical projects for real-world use cases.',
    icon: 'fas fa-user-graduate',
    imageUrl: 'images/eliahdimmed.jpg',
    meta: 'NTI Gymnasiet Helsingborg, Aug 2025 - June 2026',
  },
  {
    title: 'AI & E-commerce Development',
    description:
      'Created practical AI-assisted tools for e-commerce workflows, including CopyForge, ConversionLens, and CampaignForge. Worked independently in a remote environment with fast feedback and product-focused delivery.',
    icon: 'fas fa-wand-magic-sparkles',
    meta: 'ZYNQ Media Group, TE4 work placement, 2026',
  },
  {
    title: 'International IT Work Placement',
    description:
      'Worked with website development, visual design, and planning for an internal school system covering attendance and scheduling. The placement strengthened my adaptability, communication, and ability to work in English in an international environment.',
    icon: 'fas fa-globe-europe',
    meta: 'Ascencia Malta, Erasmus+ work placement, 2026',
  },
];

export const skills = [
  { name: 'IT Support', detail: 'User-focused troubleshooting', icon: 'fas fa-headset' },
  { name: 'Windows', detail: 'Client environments', icon: 'fab fa-windows' },
  { name: 'Linux', detail: 'Desktop & command line', icon: 'fab fa-linux' },
  { name: 'Networking', detail: 'TCP/IP, DNS & DHCP fundamentals', icon: 'fas fa-network-wired' },
  { name: 'Fiber Optics', detail: 'Blowing, splicing & fault finding', icon: 'fas fa-ethernet' },
  { name: 'Hardware', detail: 'Workstations & peripherals', icon: 'fas fa-desktop' },
  { name: 'Customer Support', detail: 'Service & clear communication', icon: 'fas fa-users' },
  { name: 'Microsoft 365', detail: 'Everyday user support', icon: 'fab fa-microsoft' },
  { name: 'Technical Documentation', detail: 'Structured handovers & guides', icon: 'fas fa-file-lines' },
  { name: 'JavaScript & React', detail: 'Frontend development', icon: 'fab fa-react' },
  { name: 'Python', detail: 'Automation & AI workflows', icon: 'fab fa-python' },
  { name: 'SQL', detail: 'Database fundamentals', icon: 'fas fa-database' },
];

export const infoCards = [
  { title: 'Location', value: 'Tyringe / Hässleholm, Skåne', icon: 'fas fa-map-marker-alt' },
  { title: 'Languages', value: 'Swedish, English', icon: 'fas fa-language' },
  { title: 'Strengths', value: 'Troubleshooting, service, communication', icon: 'fas fa-bolt' },
  { title: 'Career Focus', value: 'IT support, onsite IT, field service', icon: 'fas fa-briefcase' },
];

export const projects = [
  {
    id: 1,
    title: 'TrustScribe',
    summary: 'A local-first desktop transcription tool for sensitive Swedish and English recordings.',
    role: 'TE4 team project / developer',
    description:
      'Built for a real-world school innovation context where audio and video files should be transcribed locally instead of being sent to cloud services. The app uses Python, PyWebView, ffmpeg, Whisper/kb-whisper models, cached model management, queue-based processing, progress tracking, and saved transcript browsing.',
    outcome:
      'This is one of my strongest portfolio projects because it combines AI, privacy, desktop UI, automation, and practical requirements from an external context.',
    technologies: ['Python', 'PyWebView', 'Whisper', 'ffmpeg', 'AI transcription'],
    githubUrl: 'https://github.com/NTIG-Helsingborg/TE4_25-26_Skolverket-transkribering',
    demoUrl: '',
    imageUrl: 'images/trustscribe-image.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'CampaignForge & CopyForge',
    summary:
      'AI-assisted e-commerce tools for turning product information into campaign assets, product copy, and channel-ready marketing content.',
    role: 'Developer, ZYNQ Media Group work placement',
    description:
      'Developed several product-focused tools during my remote work placement. CopyForge transforms product images and titles into SEO copy, social content, advertisements, variations, and reusable brand-aware outputs. CampaignForge creates coordinated campaign concepts across email, social media, ads, and banners, with language, history, and section-level regeneration controls.',
    outcome:
      'Demonstrates independent delivery, fast iteration, prompt design, AI workflow integration, and the ability to translate real e-commerce needs into clear and usable software.',
    technologies: ['JavaScript', 'AI workflows', 'Prompt design', 'E-commerce', 'UX'],
    githubUrl: '',
    demoUrl: '',
    imageUrl: '',
    icon: 'fas fa-wand-magic-sparkles',
    featured: true,
  },
  {
    id: 3,
    title: '1Percent',
    summary:
      'A full-stack goal visualization app for breaking large ambitions into interactive subgoal trees.',
    role: 'Creator',
    description:
      'Built with a React/Vite frontend, React Flow canvas, Express backend, and SQLite persistence. The app supports goal creation, nested subgoals, progress tracking, drag behavior, auto-layout with dagre, settings, toast feedback, and backend API calls for storing goal trees.',
    outcome:
      'Shows full-stack thinking, interactive UI architecture, persistent data, and a product idea that is easy for recruiters to understand.',
    technologies: ['React', 'Vite', 'React Flow', 'Express', 'SQLite'],
    githubUrl: 'https://github.com/eliahdim/1Percent',
    demoUrl: '',
    imageUrl: 'images/1percent.png',
    featured: true,
  },
  {
    id: 4,
    title: 'Ragazzi dei Profumi',
    summary: 'A luxury fragrance sample website with product browsing and detail pages.',
    role: 'Frontend developer',
    description:
      'Built as a product-focused React/Vite website for a perfume decant concept. It uses React Router for a home page and individual fragrance detail pages, with emphasis on product presentation, visual design, and responsive browsing.',
    outcome:
      'A practical client-style project that demonstrates frontend structure, routing, visual polish, and deployment.',
    technologies: ['React', 'Vite', 'React Router', 'CSS'],
    githubUrl: 'https://github.com/eliahdim/ragazzi-dei-profumi-website',
    demoUrl: 'https://ragazzi-dei-profumi.vercel.app/',
    imageUrl: 'images/ragazzi.png',
  },
  {
    id: 5,
    title: 'Home-E',
    summary: 'A hackathon-built family hub app for organizing household tasks, meals, shopping, and activities.',
    role: 'Hackathon team project / developer',
    description:
      'Built by a three-person team during HetchHacks as a family management app using Vue 3, Electron, Vite, and LocalStorage. The project includes a customizable widget dashboard, shopping list, meal countdowns, todo tracking, activity tracking, themes, and a roadmap toward mobile apps with Capacitor.',
    outcome:
      'Shows teamwork, fast product development, cross-platform thinking, and ability to build a usable prototype under hackathon constraints.',
    technologies: ['Vue 3', 'Electron', 'Vite', 'Capacitor', 'LocalStorage'],
    githubUrl: 'https://github.com/Mykyta-G/Home-E',
    demoUrl: '',
    imageUrl: '',
    icon: 'fas fa-house-laptop',
  },
  {
    id: 6,
    title: 'Hypixel Skyblock Tracker',
    summary: 'A React API project for browsing and filtering Hypixel Skyblock item data.',
    role: 'TE4 school project / frontend developer',
    description:
      'Built as a React API project using external data from Hypixel Skyblock and Minecraft item APIs. The app includes item search, rarity/category/type filters, item image handling, favorites logic, login-related UI, and a live Azure deployment.',
    outcome:
      'Demonstrates API consumption, dynamic filtering, React state, deployed frontend work, and handling messy real-world game data.',
    technologies: ['React', 'JavaScript', 'API integration', 'Bootstrap', 'Azure'],
    githubUrl: 'https://github.com/NTIG-Helsingborg/TE4_25-26_React-API',
    demoUrl: 'https://hypixeltracker.azurewebsites.net/',
    imageUrl: 'images/skyblocktracker.png',
  },
  {
    id: 7,
    title: 'Pootis Adventures',
    summary: 'A high school exam-work 2D platformer with four playable levels.',
    role: 'Game developer',
    description:
      'Built as my high school exam work in Unity. The game is a 2D platformer where the player moves through four levels using simple keyboard controls, with graphics, sound effects, and music sourced from the Unity Asset Store.',
    outcome:
      'Useful as an early technical project showing C#, Unity basics, level design, game loops, and the progression from school assignments into larger TE4 projects.',
    technologies: ['C#', 'Unity'],
    githubUrl: 'https://github.com/eliahdim/GA_Game',
    demoUrl: '',
    imageUrl: 'images/ga.png',
  },
];

export const contacts = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'fas fa-envelope',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/eliah-dimmed',
    href: profile.linkedin,
    icon: 'fab fa-linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/eliahdim',
    href: profile.github,
    icon: 'fab fa-github',
  },
];
