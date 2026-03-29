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
    'hero.title': 'Front-end developer',
    'hero.subtitle': 'Ik bouw moderne webapplicaties met schone code en innovatieve oplossingen',
    'hero.cta.primary': 'Bekijk mijn werk',
    'hero.cta.secondary': 'Neem contact op',
    'hero.picture.badge.text': 'Beschikbaar voor stage',
    
    // About Section
    'about.title': 'Over mij',
    'about.intro': 'Gepassioneerde software developer met expertise in het ontwikkelen van schaalbare applicaties',
    'about.description': "Ongeveer drie jaar geleden begon ik mezelf programmeren bij te brengen — elke dag gedreven door de wil om iets nieuws te leren en beter te worden in het vak. Twee jaar geleden zette ik de volgende stap met mijn studie Open-ICT, waar contact met docenten en medestudenten mijn passie voor de ICT-wereld verder aanwakkerde. \n  Ik specialiseer me in full-stack ontwikkeling, met de focus op het bouwen van gebruiksvriendelijke en efficiënte webapplicaties. Mijn expertise omvat moderne technologieën zoals Next.js, TailwindCSS of Python.\n\n Ik ben gepassioneerd over het oplossen van complexe problemen en het omzetten van ideeën naar werkende digitale producten. Ik geloof in schone code, best practices en continu blijven leren.",
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
    'about.interests': 'Interesses:',
    'about.interests.description': 'reizen, koken, fitness',
    
    // Projects Section
    'projects.title': 'Mijn projecten',
    'projects.subtitle': 'Een selectie van mijn recente werk',
    'projects.viewDetails': 'Details Bekijken',
    'projects.viewCode': 'Code Bekijken',
    'projects.viewLive': 'Live Demo',
    
    // Project 1
    'project1.title': 'Mijn nieuwste portfolio website',
    'project1.description': 'Om mijn portfolio-website up-to-date te houden, heb ik deze geüpdatete versie van mijn portfolio-website aangemaakt.\n\n Ik maakte gebruik van de technologieën Next.js, TailwindCSS en de Bun package manager. Het ontwerp maakte ik zelf met behulp van Figma en Figma Make. De one-page-websitestructuur is standaard opgesplitst in de secties navigation, hero, about, projects, skills, contact en footer. De codebase heb ik gedeployd op Vercel, aangezien Next.js en Vercel goed op elkaar aansluiten. Ik zal deze website gebruiken als basis en verzameling van mijn werk en toekomstige projecten.',
    
    // Project 2
    'project2.title': 'Zakelijke portfolio-website voor een klant',
    'project2.description': 'Voor een van mijn klanten heb ik een zakelijke portfolio-website ontworpen en ontwikkeld. Voor de technische realisatie heb ik voornamelijk gebruikgemaakt van React en Tailwind CSS. De routing op de website is opgezet met HashRouter. Hoewel BrowserRouter doorgaans de standaard is, heb ik voor HashRouter gekozen om volledige compatibiliteit met GitHub Pages te garanderen. De website is modulair opgebouwd en bevat secties zoals een Header, Hero, About en Certificates. Het project wordt gehost op GitHub Pages en is gekoppeld aan een eigen domeinnaam via een Slowaakse registrar. Daarnaast bevat de site een functioneel contactformulier dat gebruikmaakt van FormSubmit voor de backend-afhandeling. Bekijk het volledige project op mijn GitHub-profiel.',

    // Project 3
    'project3.title': 'Website voor reisbureau Bon Travel (frontend)',
    'project3.description': 'Voor reisbureau Bon Travel heb ik een website ontwikkeld. Voor de frontend maak ik gebruik van Tailwind CSS, HTML en JavaScript. Om herbruikbare componenten te creëren, heb ik herhalende HTML-elementen (zoals de header en footer) ondergebracht in aparte JS-bestanden; hierdoor kan ik ze eenvoudig aanroepen via korte verwijzingen. De website bevat diverse JavaScript-functionaliteiten, zoals een logoslider en een cookiebar. Tijdens dit project heb ik veel nieuwe vaardigheden geleerd — zowel technisch als over de reisbranche — en ik heb met veel plezier aan het ontwerp gewerkt. Bekijk het volledige project op mijn GitHub-profiel.',
  
    // Project 4
    'project4.title': 'Referentie: Mijn oude portfolio website',
    'project4.description': 'Als referentie voeg ik ook mijn oude portfolio-website toe. Deze is op een heel eenvoudige manier gebouwd met enkel HTML en CSS. Bekijk het volledige project op mijn GitHub-profiel.',


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
    'hero.title': 'Front-end Engineer',
    'hero.subtitle': 'I build modern web applications with clean code and innovative solutions',
    'hero.cta.primary': 'View My Work',
    'hero.cta.secondary': 'Get In Touch',
    'hero.picture.badge.text': 'Available for internship',
    
    // About Section
    'about.title': 'About Me',
    'about.intro': 'Passionate software engineer with expertise in building scalable applications',
    'about.description': "About three years ago, I started teaching myself how to program — driven every day by the desire to learn something new and improve my craft. Two years ago, I took the next step by enrolling in the Open-ICT program, where interactions with lecturers and fellow students further fueled my passion for the world of ICT. \n I specialize in full-stack development, focusing on building user-friendly and efficient web applications. My expertise includes modern technologies such as Next.js, TailwindCSS or Python.\n\n  I'm passionate about solving complex problems and turning ideas into working digital products. I believe in clean code, best practices, and never stopping learning.",
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
    'about.interests': 'Interests:',
    'about.interests.description': 'travelling, cooking, fitness',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'A selection of my recent work',
    'projects.viewDetails': 'View Details',
    'projects.viewCode': 'View Code',
    'projects.viewLive': 'Live Demo',
    
    // Project 1
    'project1.title': 'My latest portfolio website',
    'project1.description': 'To keep my portfolio website up to date, I created this updated version of my site. I used technologies such as Next.js, TailwindCSS, and the Bun package manager. I designed the layout myself using Figma and Figma Make. The one-page website structure is divided into the standard sections: navigation, hero, about, projects, skills, contact, and footer. I deployed the codebase on Vercel, as Next.js and Vercel integrate seamlessly. I will use this website as a foundation and a collection of my work and future projects.',

    // Project 2
    'project2.title': 'Business portfolio website for a client',
    'project2.description': "I designed and developed a professional business portfolio website for one of my clients. For the technical implementation, I primarily used React and Tailwind CSS. The website's routing is built with HashRouter. While BrowserRouter is typically the standard, I opted for HashRouter to ensure full compatibility with GitHub Pages. The site follows a modular structure and includes sections such as Header, Hero, About, and Certificates. The project is hosted on GitHub Pages and is linked to a custom domain through a Slovak registrar. Additionally, the site features a functional contact form that utilizes FormSubmit for backend processing. You can view the full project on my GitHub profile.",

    // Project 3
    'project3.title': 'Website for travel agency Bon Travel (frontend)',
    'project3.description': 'I developed a website for the travel agency Bon Travel. For the frontend, I used Tailwind CSS, HTML, and JavaScript. To create reusable components, I moved repetitive HTML elements (such as the header and footer) into separate JS files; this allows me to easily call them using short references. The website features various JavaScript functionalities, such as a logo slider and a cookie bar. During this project, I gained many new skills—both technical and industry-specific regarding travel agencies—and I thoroughly enjoyed the design process. You can view the full project on my GitHub profile.',
    
   // Project 4
    'project4.title': 'Reference: My old portfolio website',
    'project4.description': 'As a reference, I am also including my old portfolio website. It was built very simply using only HTML and CSS. You can view the full project on my GitHub profile.',

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
