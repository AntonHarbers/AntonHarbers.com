import { type LanguageMessages } from '../lib';

export const translations = {
  locale: 'de',
  aboutNav: 'Über mich',
  projectsNav: 'Projekte',
  contactNav: 'Contakt',
  emailMe: 'E-Mail mich',
  formEmail: 'Deine E-Mail',
  formMessage: 'Deine Nachricht',
  formSend: 'Absenden',
  formSending: 'Absenden...',
  contactMe: 'Kontaktiere mich',
  typewriter: 'Full Stack Web- & Indie-Spieleentwicklung',
  proficient: 'Kompetent in:',
  aboutHeader: 'Über mich',
  aboutLeftHeader: 'Autodidaktischer Entwickler',
  aboutext:
    'Leidenschaftlich dabei, digitale Erfahrungen zu schaffen, die reale Probleme lösen. Begann meinen Weg 2020 mit Online-Tutorials, später über das Odin Project in 2023. Habe seither alles gebaut – von Webanwendungen bis hin zu interaktiven Spielen. Momentan arbeite ich mich durch Datenstrukturen und Algorithmen.',
  aboutRightHeader: 'Lernweg',
  aboutRightFirst: 'Frontend-Entwicklung',
  aboutRightSecond: '4+ Jahre',
  aboutRightThird: 'Backend-Entwicklung',
  aboutRightFourth: '2+ Jahre',
  aboutRightFifth: 'Spieleentwicklung',
  aboutRightSixth: '4+ Jahre',
  aboutRightSeventh: 'Algorithmus-Studium',
  aboutRightEighth: 'Laufend',
  featuredHeader: 'Ausgewählte Projekte',
  astroballDesc:
    'Ein 2D-Physik-Plattformer, entwickelt mit Fokus auf Godot und GDScript. Kostenlos auf Steam spielbar.',
  lanaDesc:
    'Persönliche Website für Lana Harbers, gebaut mit NextJS, SanityCMS und TailwindCSS. Gehostet auf Vercel.',
  forkcastDesc:
    'Webbasierte App für Essensplanung und Einkauf. In Entwicklung.',
  hashmapDesc:
    'Demo einer eigenen Implementierung einer HashMap-Datenstruktur in JavaScript.',
  cvAppDesc: 'Interaktiver Lebenslauf-Builder mit PDF-Export',
  battleshipsDesc:
    'Browserspiel des Klassikers "Schiffe versenken" mit KI-Gegner',
  contactHeader: 'Kontakt',
  contactDesc:
    'Bereit, mit frischem Blick und technischen Skills dein Team zu verstärken. Lass uns besprechen, wie ich zum nächsten Projekt beitragen kann.',
  contactFormSubmitText:
    'Danke, dass du mich erreicht hast! Ich werde dich schnellstens kontaktieren.',

  footer: '© 2025 Anton Harbers. Gebaut mit React und Leidenschaft für Code.',
} as const satisfies LanguageMessages;
