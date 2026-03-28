'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Over mij',
    'nav.projects': 'Projecten',
    'nav.skills': 'Vaardigheden',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hallo, ik ben',
    'hero.name': 'Patricia Podhradska',
    'hero.title': 'Full stack software developer',
    'hero.subtitle': 'Ik bouw moderne webapplicaties met schone code en innovatieve oplossingen',
    'hero.cta.primary': 'Bekijk mijn werk',
    'hero.cta.secondary': 'Neem contact op',
    'hero.picture.badge.text': 'Beschikbaar voor stage',
    
    // About Section
    'about.title': 'Over mij',
    'about.intro': 'Gepassioneerde software developer met expertise in het ontwikkelen van schaalbare applicaties',
    'about.description': "Ongeveer drie jaar geleden begon ik mezelf programmeren bij te brengen — elke dag gedreven door de wil om iets nieuws te leren en beter te worden in het vak. Twee jaar geleden zette ik de volgende stap met mijn studie Open-ICT, waar contact met docenten en medestudenten mijn passie voor de ICT-wereld verder aanwakkerde. \n\n Ik specialiseer me in full-stack ontwikkeling, met de focus op het bouwen van gebruiksvriendelijke en efficiënte webapplicaties. Mijn expertise omvat moderne technologieën zoals Next.js, TailwindCSS of Python.\n\n Ik ben gepassioneerd over het oplossen van complexe problemen en het omzetten van ideeën naar werkende digitale producten. Ik geloof in schone code, best practices en continu blijven leren.",
    'about.description2': 'Ik ben gepassioneerd over het oplossen van complexe problemen en het transformeren van ideeën naar werkelijke digitale producten. Ik geloof in schone code, best practices en continue leren.',
    'about.yearsExperience': 'jaar programmeerervaring',
    'about.projectsCompleted': 'projecten gerealiseerd (GitHub)',
    // 'about.clientsSatisfied': 'Tevreden Klanten',
    'about.stack.title': 'Core Stack',
    'about.badge.title': 'Clean Code',
    'about.badge.description': 'Schrijven van onderhoudbare en schaalbare code.',
    'about.badge.title1': 'Snelle oplevering',
    'about.badge.description1': 'Efficiënte afronding van projecten.',
    'about.badge.title2': 'Kwaliteit eerst',
    'about.badge.description2': 'Oog voor detail en gedetailleerde uitvoering.',
    'about.badge.title3': 'Samenwerking',
    'about.badge.description3': 'Sterke communicatie binnen het team.',
    'about.education.title': 'Opleidingen',
    
    // Projects Section
    'projects.title': 'Mijn projecten',
    'projects.subtitle': 'Een selectie van mijn recente werk',
    'projects.viewDetails': 'Details Bekijken',
    'projects.viewCode': 'Code Bekijken',
    'projects.viewLive': 'Live Demo',
    
    // Project 1
    'project1.title': 'Website voor het reisbureau Bon Travel (frontend).',
    'project1.description': 'Voor het reisbureau Bon travel heb ik een website gemaakt. \n\nBij de front-end maak ik gebruik van TailwindCSS, HTML en Javascript. Herhalende HTML block elements zoals header of footer heb ik gesplitst in meerdere JS bestanden om ervan componenten te kunnen maken, zodat ik elke keer alleen gebruik maak van afkorting. Op de website zijn er kleine Javascript onderdelen zoals logo slider of cookie bar. \n\nDe back end wordt gemaakt met Node.js en MySQL database. Dit is nu steeds work in progress. \n\nHierbij heb ik veel nieuws geleerd (net als over reisbureaus en reizen) en het was plezier voor mij om deze website te kunnen ontwerpen. \n\nZie het hele project op mijn Github profiel.',
    
    // Project 2
    'project2.title': 'Business portfolio website voor klant',
    'project2.description': 'Eén van mijn klanten vroeg me of ik een website voor haar zou kunnen aanmaken voor haar business portfolio. Dus ik heb eentje voor haar ontworpen. \n\nQua programmeertalen maakte ik vooral gebruik van React en TailwindCSS. \n\nRouting op de website werd gemaakt met HashRouter (normaal gesproken gaat de routing met BrowserRouter maar dat kan niet op Github Pages). \n\nEr zijn verschillende onderdelen aanwezig zoals Header, Hero, About of Certificates. \nWebsite is geïmplementeerd op de hosting Github Pages en heeft zijn eigen domeinnaam geregeld via de slowaakse domeinwebsite. Er is ook een formulier dat werkt door gebruik maken van de form backend FormSubmit.\n\nZie het hele project op mijn Github profiel.',
    
    // Project 3
    'project3.title': 'Referentie: Mijn oude portfolio website',
    'project3.description': 'Als referentie voeg ik er bij ook mijn oude portfolio website. \n\nDie werd gemaakt heel simpel met HTML en CSS.\n\nZie het hele project op mijn Github profiel.',
    
    // Skills Section
    'skills.title': 'Vaardigheden & services',
    'skills.subtitle': 'Technologieën waarmee ik werk',
    
    'skill.frontend.title': 'Frontend development',
    'skill.frontend.description': 'Moderne, responsieve gebruikersinterfaces met React, Next.js TypeScript, en Tailwind CSS',
    
    'skill.backend.title': 'Backend development',
    'skill.backend.description': 'Schaalbare server-side applicaties met Python, Java en PostgreSQL.',
    
    // 'skill.cloud.title': 'Cloud & DevOps',
    // 'skill.cloud.description': 'Deployment en beheer op AWS, Docker, CI/CD pipelines en infrastructuur automatisering',
    
    // 'skill.mobile.title': 'Mobile Development',
    // 'skill.mobile.description': 'Cross-platform mobiele apps met React Native en progressive web apps',
    
    // 'skill.database.title': 'Database Design',
    // 'skill.database.description': 'Database architectuur, optimalisatie, en beheer voor PostgreSQL, MongoDB, en Redis',
    
    // 'skill.api.title': 'API Development',
    // 'skill.api.description': 'RESTful en GraphQL APIs met uitgebreide documentatie en beveiligingsprotocollen',
    
    // Contact Section
    'contact.title': 'Neem contact op',
    'contact.subtitle': 'Klaar om jullie team te versterken als stagiair. Laten we kennismaken!',
    'contact.email': 'Email',
    'contact.phone': 'Telefoon',
    'contact.location': 'Locatie',
    'contact.country': 'Gouda, Nederland',
    'contact.socials.title': 'Laten we kennismaken',
    'contact.availabilitybadge.title': 'Beschikbaar voor stage',
    'contact.availabilitybadge.description': 'Ik reageer doorgaans binnen 24 uur.',
    'contact.form.name': 'Naam',
    'contact.form.email': 'Email',
    'contact.form.message': 'Bericht',
    'contact.form.send': 'Verstuur bericht',
    
    // Footer
    'footer.rights': 'Alle rechten voorbehouden',
    'footer.builtWith': 'Gebouwd met Next.js & Tailwind CSS',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Patricia Podhradska',
    'hero.title': 'Full Stack Software Engineer',
    'hero.subtitle': 'I build modern web applications with clean code and innovative solutions',
    'hero.cta.primary': 'View My Work',
    'hero.cta.secondary': 'Get In Touch',
    'hero.picture.badge.text': 'Available for internship',
    
    // About Section
    'about.title': 'About Me',
    'about.intro': 'Passionate software engineer with expertise in building scalable applications',
    'about.description': "About three years ago, I started teaching myself how to program — driven every day by the desire to learn something new and improve my craft. Two years ago, I took the next step by enrolling in the Open-ICT program, where interactions with lecturers and fellow students further fueled my passion for the world of ICT. \n\nI specialize in full-stack development, focusing on building user-friendly and efficient web applications. My expertise includes modern technologies such as Next.js, TailwindCSS or Python.\n\n I'm passionate about solving complex problems and turning ideas into working digital products. I believe in clean code, best practices, and never stopping learning.",
    'about.description2': 'I\'m passionate about solving complex problems and transforming ideas into real digital products. I believe in clean code, best practices, and continuous learning.',
    'about.yearsExperience': 'Years of Coding',
    'about.projectsCompleted': 'Repositories Built (GitHub)',
    // 'about.clientsSatisfied': 'Second Year Student',
    'about.stack.title': 'Core Stack',
    'about.badge.title': 'Clean Code',
    'about.badge.description': 'Writing maintainable, scalable code.',
    'about.badge.title1': 'Fast Delivery',
    'about.badge.description1': 'Efficient project completion.',
    'about.badge.title2': 'Quality First',
    'about.badge.description2': 'Attention to detail and precise execution.',
    'about.badge.title3': 'Collaboration',
    'about.badge.description3': 'Strong team communication.',
    'about.education.title': 'Education',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'A selection of my recent work',
    'projects.viewDetails': 'View Details',
    'projects.viewCode': 'View Code',
    'projects.viewLive': 'Live Demo',
    
    // Project 1
    'project1.title': 'Website for travel agency Bon Travel (frontend)',
    'project1.description': 'I developed a website for the travel agency Bon Travel. \n\nFor the front-end, I utilized TailwindCSS, HTML, and JavaScript. To improve maintainability, I modularized repetitive HTML elements like the header and footer into separate JS components. The site features various JavaScript integrations such as a logo slider and a cookie consent bar. \n\nThe back-end is currently under development using Node.js and a MySQL database. \n\nThis project provided a great learning experience regarding both technical implementation and the travel industry. \n\nView the full project on my GitHub profile.',
    
    // Project 2
    'project2.title': 'Business portfolio website for client',
    'project2.description': 'A client requested a professional website for her business portfolio, which I designed and developed from scratch. \n\nI primarily used React and TailwindCSS for the build. \n\nNavigation was implemented using HashRouter to ensure compatibility with GitHub Pages. \n\nThe site includes several custom sections such as a Hero, About, and Certificates. It is hosted on GitHub Pages with a custom domain registered via a Slovak provider. I also integrated a functional contact form using FormSubmit. \n\nView the full project on my GitHub profile.',
    
    // Project 3
    'project3.title': 'Reference: My previous portfolio website',
    'project3.description': 'I have included my previous portfolio website as a reference. \n\nThis version was built using a clean and simple approach with standard HTML and CSS. \n\nView the full project on my GitHub profile.',
    
    // Skills Section
    'skills.title': 'Skills & Services',
    'skills.subtitle': 'Technologies I work with',
    
    'skill.frontend.title': 'Frontend Development',
    'skill.frontend.description': 'Modern, responsive user interfaces with React, Next.js, TypeScript, and Tailwind CSS',
    
    'skill.backend.title': 'Backend Development',
    'skill.backend.description': 'Scalable server-side applications with Python, Java and PostgreSQL',
    
    // 'skill.cloud.title': 'Cloud & DevOps',
    // 'skill.cloud.description': 'Deployment and management on AWS, Docker, CI/CD pipelines, and infrastructure automation',
    
    // 'skill.mobile.title': 'Mobile Development',
    // 'skill.mobile.description': 'Cross-platform mobile apps with React Native and progressive web apps',
    
    // 'skill.database.title': 'Database Design',
    // 'skill.database.description': 'Database architecture, optimization, and management for PostgreSQL, MongoDB, and Redis',
    
    // 'skill.api.title': 'API Development',
    // 'skill.api.description': 'RESTful and GraphQL APIs with comprehensive documentation and security protocols',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Excited to join your team as an intern. Let’s connect!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.country': 'Gouda, Netherlands',
    'contact.socials.title': 'Connect with me',
        'contact.availabilitybadge.title': 'Available for internship',
    'contact.availabilitybadge.description': 'I typically respond within 24 hours.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.builtWith': 'Built with Next.js & Tailwind CSS',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl'); // Dutch first

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['nl']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
