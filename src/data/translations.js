import {
  contacts as enContacts,
  infoCards as enInfoCards,
  journey as enJourney,
  profile as enProfile,
  projects as enProjects,
  skills as enSkills,
  stats as enStats,
} from './siteData.js';

const enUi = {
  header: {
    navigationLabel: 'Primary navigation',
    logoLabel: 'Eliah Dimmed home',
    languageLabel: 'Choose language',
    swedishLabel: 'Switch to Swedish',
    englishLabel: 'Switch to English',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    navItems: [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  hero: {
    statsLabel: 'Portfolio highlights',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    downloadCv: 'Download CV',
    profiles: 'Profiles',
    profilesLabel: 'Professional profiles',
    githubLabel: "Open Eliah Dimmed's GitHub profile",
    linkedinLabel: "Open Eliah Dimmed's LinkedIn profile",
    portraitAlt: 'Portrait of Eliah Dimmed',
    explore: 'Explore',
    exploreLabel: 'Scroll to about section',
  },
  about: {
    title: 'About Me',
    subtitle: 'A practical mix of software, support, and infrastructure',
    journeyTitle: 'My Journey',
    timelineLabel: 'Timeline',
    skillsTitle: 'Skills & Technologies',
    skillsLabel: 'Skills and technologies',
    profileTitle: 'Professional Profile',
  },
  projects: {
    title: 'Selected Projects',
    subtitle:
      'Selected work showing how I approach systems, automation, teamwork, and practical technical problems',
    showMore: 'Show more projects',
    showFewer: 'Show fewer projects',
    featured: 'Featured',
    details: 'Details',
    demo: 'Demo',
    screenshotSuffix: 'screenshot',
    technologiesSuffix: 'technologies',
    githubLabel: (title) => `Open ${title} GitHub repository`,
    demoLabel: (title) => `Open ${title} live demo`,
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Open to junior IT support, onsite IT, and technical service opportunities',
    linksLabel: 'Contact links',
    downloadResume: 'Download my resume as PDF',
    nameLabel: 'Your name',
    emailLabel: 'Your email',
    messageLabel: 'Message',
    sending: 'Sending...',
    send: 'Send Message',
    loadingMessage: 'Sending your message...',
    successMessage: 'Message sent. I will get back to you soon.',
    errorMessage: 'Could not send the message. Please email me directly instead.',
  },
  modal: {
    closeLabel: 'Close project details',
    technologiesSuffix: 'technologies',
    viewGithub: 'View GitHub',
    liveDemo: 'Live Demo',
  },
  footer: {
    builtWith: 'Built with React and Vite.',
  },
};

const svProfile = {
  ...enProfile,
  badge: 'IT-support och teknisk drift med bakgrund inom mjukvaruutveckling',
  role: 'Junior IT-support / IT-tekniker',
  tagline:
    'Jag löser tekniska problem där användare, enheter och nätverk möts – med praktisk erfarenhet av infrastruktur och förmågan att förstå och utveckla mjukvara.',
  summary:
    'Lösningsorienterad gymnasieingenjör med praktisk erfarenhet av fiberinfrastruktur, kundnära teknisk support, hårdvara, nätverk och mjukvaruutveckling. Jag tycker om att felsöka metodiskt, förklara lösningar tydligt och ta ansvar tills användaren kan arbeta vidare. Min utvecklingsbakgrund inom JavaScript, React, Python och SQL hjälper mig dessutom att förstå system på djupet och automatisera återkommande arbete.',
};

const svStats = [
  { value: '1+', label: 'Års praktisk IT-erfarenhet' },
  { value: '2', label: 'Yrkesinriktade praktikperioder' },
  { value: '7', label: 'Utvalda projekt' },
];

const svJourney = [
  {
    title: 'Teknikprogrammet',
    description:
      'Byggde en bred teknisk grund genom programmering, webbutveckling, nätverk och ett gymnasiearbete utvecklat i Unity.',
    icon: 'fas fa-laptop-code',
    imageUrl: 'images/eliah-teen.jpg',
    meta: 'Hässleholms tekniska skola, 2021–2024',
  },
  {
    title: 'Fibertekniker',
    description:
      'Installerade och felsökte fiberinfrastruktur i två 23-våningshus i Malmö. Arbetet omfattade fiberblåsning och fibersvetsning, CAT6, mediaskåp, routrar, TV-utrustning, felavhjälpning och direkt kundkontakt.',
    icon: 'fas fa-network-wired',
    imageUrl: 'images/eliah-fiber.jpg',
    meta: 'Baramontage, juli 2024–juli 2025',
  },
  {
    title: 'Gymnasieingenjör inom mjukvarudesign (TE4)',
    description:
      'Slutförde en ettårig ingenjörsutbildning med fokus på mjukvarudesign, agila arbetssätt, databaser, API:er, arkitektur, samarbete och tekniska projekt för verkliga användningsområden.',
    icon: 'fas fa-user-graduate',
    imageUrl: 'images/eliahdimmed.jpg',
    meta: 'NTI Gymnasiet Helsingborg, augusti 2025–juni 2026',
  },
  {
    title: 'AI- och e-handelsutveckling',
    description:
      'Utvecklade praktiska AI-verktyg för arbetsflöden inom e-handel, däribland CopyForge, ConversionLens och CampaignForge. Arbetade självständigt på distans med snabb återkoppling och produktfokuserade leveranser.',
    icon: 'fas fa-wand-magic-sparkles',
    meta: 'ZYNQ Media Group, TE4-praktik, 2026',
  },
  {
    title: 'Internationell IT-praktik',
    description:
      'Arbetade med webbutveckling, visuell design och planering av ett internt skolsystem för närvaro och schemaläggning. Praktiken stärkte min anpassningsförmåga, kommunikation och förmåga att arbeta på engelska i en internationell miljö.',
    icon: 'fas fa-globe-europe',
    meta: 'Ascencia Malta, Erasmus+-praktik, 2026',
  },
];

const svSkills = [
  { name: 'IT-support', detail: 'Användarfokuserad felsökning', icon: 'fas fa-headset' },
  { name: 'Windows', detail: 'Klientmiljöer', icon: 'fab fa-windows' },
  { name: 'Linux', detail: 'Skrivbordsmiljö och terminal', icon: 'fab fa-linux' },
  { name: 'Nätverk', detail: 'Grunder i TCP/IP, DNS och DHCP', icon: 'fas fa-network-wired' },
  { name: 'Fiberteknik', detail: 'Blåsning, svetsning och felsökning', icon: 'fas fa-ethernet' },
  { name: 'Hårdvara', detail: 'Arbetsstationer och kringutrustning', icon: 'fas fa-desktop' },
  { name: 'Kundkontakt', detail: 'Service och tydlig kommunikation', icon: 'fas fa-users' },
  { name: 'Microsoft 365', detail: 'Daglig användarsupport', icon: 'fab fa-microsoft' },
  { name: 'Teknisk dokumentation', detail: 'Strukturerade överlämningar och guider', icon: 'fas fa-file-lines' },
  { name: 'JavaScript och React', detail: 'Frontendutveckling', icon: 'fab fa-react' },
  { name: 'Python', detail: 'Automatisering och AI-flöden', icon: 'fab fa-python' },
  { name: 'SQL', detail: 'Grundläggande databaskunskaper', icon: 'fas fa-database' },
];

const svInfoCards = [
  { title: 'Plats', value: 'Tyringe / Hässleholm, Skåne', icon: 'fas fa-map-marker-alt' },
  { title: 'Språk', value: 'Svenska, engelska', icon: 'fas fa-language' },
  { title: 'Styrkor', value: 'Felsökning, service, kommunikation', icon: 'fas fa-bolt' },
  { title: 'Yrkesinriktning', value: 'IT-support, onsite-IT, fältservice', icon: 'fas fa-briefcase' },
];

const svProjectText = {
  1: {
    summary: 'Ett lokalt transkriptionsverktyg för känsliga svenska och engelska inspelningar.',
    role: 'TE4-grupprojekt / utvecklare',
    description:
      'Utvecklades för ett verkligt innovationssammanhang i skolan där ljud- och videofiler behövde transkriberas lokalt i stället för att skickas till molntjänster. Applikationen använder Python, PyWebView, ffmpeg, Whisper/kb-whisper-modeller, lokal modellhantering, köbaserad bearbetning, förloppsvisning och sparad transkriptionshistorik.',
    outcome:
      'Ett av mina starkaste portfolio-projekt eftersom det kombinerar AI, integritet, skrivbordsgränssnitt, automatisering och praktiska krav från en extern uppdragsgivare.',
  },
  2: {
    summary:
      'AI-baserade e-handelsverktyg som omvandlar produktinformation till kampanjmaterial, produkttexter och innehåll anpassat för olika kanaler.',
    role: 'Utvecklare, praktik hos ZYNQ Media Group',
    description:
      'Utvecklade flera produktfokuserade verktyg under min distanspraktik. CopyForge omvandlar produktbilder och titlar till SEO-texter, innehåll för sociala medier, annonser, variationer och återanvändbara varumärkesanpassade resultat. CampaignForge skapar sammanhållna kampanjkoncept för e-post, sociala medier, annonser och banners, med stöd för språkval, historik och regenerering av enskilda sektioner.',
    outcome:
      'Visar självständigt arbete, snabb iteration, promptdesign, integration av AI-flöden och förmågan att omvandla verkliga e-handelsbehov till tydlig och användbar mjukvara.',
  },
  3: {
    summary: 'En fullstack-app som bryter ner stora mål i interaktiva träd av delmål.',
    role: 'Skapare',
    description:
      'Byggd med React/Vite i frontend, React Flow för den visuella arbetsytan, Express i backend och SQLite för lagring. Appen har stöd för att skapa mål, nästlade delmål, följa framsteg, dra noder, automatisk layout med dagre, inställningar, återkoppling och API-anrop för att spara målträden.',
    outcome:
      'Visar fullstack-tänkande, interaktiv gränssnittsarkitektur, beständig data och en produktidé som är enkel för arbetsgivare att förstå.',
  },
  4: {
    summary: 'En exklusiv webbplats för parfymprover med produktöversikt och separata detaljsidor.',
    role: 'Frontendutvecklare',
    description:
      'Utvecklad som en produktfokuserad React/Vite-webbplats för ett koncept inom parfymprover. React Router används för startsidan och individuella parfymdetaljsidor, med fokus på produktpresentation, visuell design och responsiv navigering.',
    outcome:
      'Ett praktiskt kundliknande projekt som visar frontendstruktur, routing, visuell finish och driftsättning.',
  },
  5: {
    summary: 'En familjehubb byggd under ett hackathon för uppgifter, måltider, inköp och aktiviteter.',
    role: 'Hackathonprojekt i grupp / utvecklare',
    description:
      'Byggd av ett tremannateam under HetchHacks som en familjeapp med Vue 3, Electron, Vite och LocalStorage. Projektet innehåller en anpassningsbar widgetpanel, inköpslista, nedräkning till måltider, uppgiftshantering, aktivitetsspårning, teman och en plan för mobilappar med Capacitor.',
    outcome:
      'Visar samarbete, snabb produktutveckling, plattformsöverskridande tänkande och förmågan att bygga en användbar prototyp under tidspress.',
  },
  6: {
    summary: 'Ett React-projekt för att söka, filtrera och utforska föremålsdata från Hypixel Skyblock.',
    role: 'TE4-skolprojekt / frontendutvecklare',
    description:
      'Byggd som ett React-projekt med externa API:er från Hypixel Skyblock och Minecraft. Appen innehåller sökning, filter för sällsynthet, kategori och typ, bildhantering, favoriter, inloggningsrelaterat gränssnitt och en driftsatt version i Azure.',
    outcome:
      'Visar API-integration, dynamisk filtrering, tillståndshantering i React, driftsättning och hantering av komplex speldata från verkliga datakällor.',
  },
  7: {
    summary: 'Ett 2D-plattformsspel med fyra spelbara banor, utvecklat som gymnasiearbete.',
    role: 'Spelutvecklare',
    description:
      'Utvecklat i Unity som mitt gymnasiearbete. Spelet är ett 2D-plattformsspel där spelaren tar sig genom fyra banor med enkla tangentbordskontroller. Grafik, ljudeffekter och musik hämtades från Unity Asset Store.',
    outcome:
      'Visar tidig teknisk erfarenhet av C#, Unity, bandesign, spellogik och min utveckling från skoluppgifter till större TE4-projekt.',
  },
};

const svProjects = enProjects.map((project) => ({
  ...project,
  ...svProjectText[project.id],
}));

const svContacts = [
  {
    label: 'E-post',
    value: svProfile.email,
    href: `mailto:${svProfile.email}`,
    icon: 'fas fa-envelope',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/eliah-dimmed',
    href: svProfile.linkedin,
    icon: 'fab fa-linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/eliahdim',
    href: svProfile.github,
    icon: 'fab fa-github',
  },
];

const svUi = {
  header: {
    navigationLabel: 'Huvudnavigering',
    logoLabel: 'Eliah Dimmed – startsida',
    languageLabel: 'Välj språk',
    swedishLabel: 'Byt till svenska',
    englishLabel: 'Byt till engelska',
    openMenu: 'Öppna navigeringsmenyn',
    closeMenu: 'Stäng navigeringsmenyn',
    navItems: [
      { id: 'home', label: 'Start' },
      { id: 'about', label: 'Om mig' },
      { id: 'projects', label: 'Projekt' },
      { id: 'contact', label: 'Kontakt' },
    ],
  },
  hero: {
    statsLabel: 'Höjdpunkter i portfolion',
    viewProjects: 'Visa projekt',
    contactMe: 'Kontakta mig',
    downloadCv: 'Ladda ner CV',
    profiles: 'Profiler',
    profilesLabel: 'Professionella profiler',
    githubLabel: 'Öppna Eliah Dimmeds GitHub-profil',
    linkedinLabel: 'Öppna Eliah Dimmeds LinkedIn-profil',
    portraitAlt: 'Porträtt av Eliah Dimmed',
    explore: 'Utforska',
    exploreLabel: 'Gå till sektionen Om mig',
  },
  about: {
    title: 'Om mig',
    subtitle: 'En praktisk kombination av support, infrastruktur och mjukvara',
    journeyTitle: 'Min resa',
    timelineLabel: 'Tidslinje',
    skillsTitle: 'Kompetenser och tekniker',
    skillsLabel: 'Kompetenser och tekniker',
    profileTitle: 'Professionell profil',
  },
  projects: {
    title: 'Utvalda projekt',
    subtitle:
      'Arbeten som visar hur jag angriper system, automatisering, samarbete och praktiska tekniska problem',
    showMore: 'Visa fler projekt',
    showFewer: 'Visa färre projekt',
    featured: 'Utvalt',
    details: 'Detaljer',
    demo: 'Demo',
    screenshotSuffix: 'skärmbild',
    technologiesSuffix: 'tekniker',
    githubLabel: (title) => `Öppna GitHub-repot för ${title}`,
    demoLabel: (title) => `Öppna liveversionen av ${title}`,
  },
  contact: {
    title: 'Kontakta mig',
    subtitle: 'Öppen för juniora roller inom IT-support, onsite-IT och teknisk service',
    linksLabel: 'Kontaktlänkar',
    downloadResume: 'Ladda ner mitt CV som PDF',
    nameLabel: 'Ditt namn',
    emailLabel: 'Din e-postadress',
    messageLabel: 'Meddelande',
    sending: 'Skickar...',
    send: 'Skicka meddelande',
    loadingMessage: 'Ditt meddelande skickas...',
    successMessage: 'Meddelandet har skickats. Jag återkommer så snart jag kan.',
    errorMessage: 'Meddelandet kunde inte skickas. Kontakta mig gärna direkt via e-post i stället.',
  },
  modal: {
    closeLabel: 'Stäng projektdetaljer',
    technologiesSuffix: 'tekniker',
    viewGithub: 'Visa på GitHub',
    liveDemo: 'Öppna demo',
  },
  footer: {
    builtWith: 'Byggd med React och Vite.',
  },
};

const translations = {
  en: {
    profile: enProfile,
    stats: enStats,
    journey: enJourney,
    skills: enSkills,
    infoCards: enInfoCards,
    projects: enProjects,
    contacts: enContacts,
    ui: enUi,
    meta: {
      title: 'Eliah Dimmed | Junior IT Support & IT Technician',
      description:
        'Portfolio of Eliah Dimmed, a TE4 graduate in Skåne focused on IT support, onsite technical service, networks, troubleshooting, and practical problem solving.',
      socialDescription:
        'Hands-on IT experience, support skills, selected projects, and contact details for Eliah Dimmed.',
    },
  },
  sv: {
    profile: svProfile,
    stats: svStats,
    journey: svJourney,
    skills: svSkills,
    infoCards: svInfoCards,
    projects: svProjects,
    contacts: svContacts,
    ui: svUi,
    meta: {
      title: 'Eliah Dimmed | Junior IT-support & IT-tekniker',
      description:
        'Portfolio för Eliah Dimmed, gymnasieingenjör i Skåne med inriktning mot IT-support, onsite-service, nätverk, felsökning och praktisk problemlösning.',
      socialDescription:
        'Praktisk IT-erfarenhet, supportkompetenser, utvalda projekt och kontaktuppgifter för Eliah Dimmed.',
    },
  },
};

export function getSiteData(language) {
  return translations[language] || translations.en;
}
