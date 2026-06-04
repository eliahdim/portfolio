export const profile = {
  name: 'Eliah Dimmed',
  fullName: 'Eliah Bäckström Dimmed',
  location: 'Hässleholm, Sweden',
  email: 'eliah.dimmed@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eliah-dimmed/',
  github: 'https://github.com/eliahdim',
  cvUrl: 'files/eliah-dimmed-cv.pdf',
  badge: 'TE4 engineering student focused on software design',
  role: 'Junior Web Developer / IT Technician',
  tagline:
    'I build practical web projects and bring hands-on infrastructure experience from fiber networks, customer support, and technical troubleshooting.',
  summary:
    'Solution-oriented engineering student who bridges software development and physical IT infrastructure. I combine JavaScript, React, Python, and SQL fundamentals with practical field experience from fiber optics, customer support, and network stability work.',
};

export const stats = [
  { value: '1+', label: 'Year IT Field Experience' },
  { value: '8', label: 'Core Technologies' },
  { value: '7', label: 'Public Projects' },
];

export const journey = [
  {
    title: 'Technology Curiosity',
    description:
      'Started exploring computers and games early, which grew into an interest in creating digital experiences instead of only using them.',
    icon: 'fas fa-child',
    imageUrl: 'images/eliah-kid.png',
  },
  {
    title: 'Programming Foundations',
    description:
      'Began learning programming through school projects, game development, web experiments, and JavaScript certification work.',
    icon: 'fas fa-laptop-code',
    imageUrl: 'images/eliah-teen.jpg',
  },
  {
    title: 'Fiber Technician',
    description:
      'Worked with fiber network stability and customer-facing technical support, building a practical understanding of infrastructure, reliability, and troubleshooting.',
    icon: 'fas fa-network-wired',
    imageUrl: 'images/eliah-fiber.jpg',
    meta: 'Baramontage, July 2024 - July 2025',
  },
  {
    title: 'Graduate Engineer (TE4)',
    description:
      'Currently studying software design, agile methods, and scalable architecture while building a stronger project portfolio for professional IT roles.',
    icon: 'fas fa-user-graduate',
    imageUrl: 'images/eliahdimmed.jpg',
    meta: 'NTI Gymnasiet Helsingborg, Aug 2025 - Present',
  },
];

export const skills = [
  { name: 'HTML5', icon: 'fab fa-html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', detail: 'Certified', icon: 'fab fa-js-square' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'C#', icon: 'fa-solid fa-code' },
  { name: 'SQL', icon: 'fas fa-database' },
  { name: 'GitHub', icon: 'fab fa-github' },
];

export const infoCards = [
  { title: 'Location', value: 'Hässleholm, Sweden', icon: 'fas fa-map-marker-alt' },
  { title: 'Languages', value: 'Swedish, English', icon: 'fas fa-language' },
  { title: 'Strengths', value: 'Structured, curious, fast learner', icon: 'fas fa-bolt' },
  { title: 'Interests', value: 'Football, games, IT systems', icon: 'fas fa-heart' },
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
    id: 5,
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
    id: 6,
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
    id: 3,
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
    title: 'Aiming for Disaster',
    summary: 'A TE4 Unity game project built as part of a school team.',
    role: 'TE4 team project / Unity developer',
    description:
      'A Unity game project from TE4. I am including it separately from my older exam work because it represents later game-development practice in a team environment, with a larger school-owned repository and Unity project structure.',
    outcome:
      'Useful for showing range beyond web development: C#, Unity workflows, teamwork, gameplay iteration, and working inside a larger project repository.',
    technologies: ['Unity', 'C#', 'Game development', 'Team project'],
    githubUrl: 'https://github.com/NTIG-Helsingborg/TE4_25-26_Aiming-for-Disaster',
    demoUrl: '',
    imageUrl: '',
    icon: 'fas fa-crosshairs',
  },
  {
    id: 2,
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
