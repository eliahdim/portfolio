export const profile = {
  name: 'Eliah Dimmed',
  fullName: 'Eliah Bäckström Dimmed',
  location: 'Hässleholm, Sweden',
  email: 'eliah.dimmed@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eliah-dimmed/',
  github: 'https://github.com/eliahdim',
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
  { value: '5', label: 'Public Projects' },
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
    summary: 'A locally driven AI transcription tool built for Skolverkets Innovationslabb.',
    role: 'Developer / contributor',
    description:
      'Built around the need to transcribe sensitive material locally instead of sending recordings through public cloud tools. The project combines a simple web interface with Python-based transcription workflow concepts.',
    outcome:
      'Strongest portfolio project because it connects software, automation, privacy, and a real organization context.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'AI integration'],
    githubUrl: 'https://github.com/CarlAxelson/Skolverket-transkribering',
    demoUrl: '',
    imageUrl: 'images/trustscribe-image.jpg',
    featured: true,
  },
  {
    id: 5,
    title: '1Percent',
    summary:
      'A goal-planning web app that breaks large life goals into an interactive hierarchy of smaller actions.',
    role: 'Creator',
    description:
      'Designed to help users turn broad ambitions into smaller, visible steps. The project is a good place to show React state, structured UI thinking, and product-oriented problem solving.',
    outcome:
      'Worth expanding with authentication, persistence, and a polished demo because the concept is strong and easy for recruiters to understand.',
    technologies: ['Vite', 'React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/eliahdim/1Percent',
    demoUrl: '',
    imageUrl: 'images/1percent.png',
    featured: true,
  },
  {
    id: 4,
    title: 'Ragazzi dei Profumi',
    summary: 'A product-focused website built for a perfume decant business.',
    role: 'Frontend developer',
    description:
      'Created a clean React/Vite site for a small real-world use case. This project is useful for showing layout, product presentation, responsive design, and deployment skills.',
    outcome:
      'A practical client-style project with a live deployment and a clear audience.',
    technologies: ['Vite', 'React', 'CSS'],
    githubUrl: 'https://github.com/eliahdim/ragazzi-dei-profumi-website',
    demoUrl: 'https://ragazzi-dei-profumi.vercel.app/',
    imageUrl: 'images/ragazzi.png',
  },
  {
    id: 3,
    title: 'Hypixel Skyblock Tracker',
    summary: 'A school project for tracking items in Hypixel Skyblock.',
    role: 'Frontend developer',
    description:
      'A React/API project built around game data. It shows experience with external data, rendering dynamic UI, and deploying a web app.',
    outcome:
      'Good evidence of API-driven frontend work, but the README and project writeup should explain the API, data flow, and your individual contribution.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/IsakPetersson/React-API',
    demoUrl: 'https://hypixeltracker.azurewebsites.net/',
    imageUrl: 'images/skyblocktracker.png',
  },
  {
    id: 2,
    title: 'Exam Work Platformer',
    summary: 'A 2D Unity platformer focused on game performance optimization.',
    role: 'Game developer',
    description:
      'Built as high school exam work in Unity. The strongest hiring angle is the performance focus: frame rate, asset usage, and optimization decisions.',
    outcome:
      'Useful as a technical learning project, especially if the repository explains the performance bottlenecks and optimizations.',
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
