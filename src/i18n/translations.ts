export type Lang = 'es' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Nav
    'nav.features': 'Funciones',
    'nav.howItWorks': 'Cómo funciona',
    'nav.faq': 'FAQ',
    'nav.download': 'Descargar',
    'nav.themeToggle': 'Cambiar tema',
    'nav.openMenu': 'Abrir menú',

    // Hero
    'hero.badge': 'App gratuita',
    'hero.title.line1': 'Aprendé idiomas.',
    'hero.title.line2': 'Inglés y español',
    'hero.title.line3': 'desde cero.',
    'hero.subtitle':
      'Lecciones interactivas, IA que te corrige, y todo pensado para Latinoamérica. Aprendé inglés si hablás español, o español si hablás inglés.',
    'hero.availableOn': 'Disponible en',
    'hero.appStore': 'App Store',
    'hero.googlePlay': 'Google Play',
    'hero.imgAlt': 'Loro App - Pantalla principal',

    // Features
    'features.label': 'Funciones',
    'features.title': 'Todo lo que necesitás para aprender',
    'features.titleHighlight': 'un nuevo idioma',
    'features.subtitle':
      'Diseñado para hispanohablantes que aprenden inglés y angloparlantes que aprenden español.',
    'features.0.title': 'Lecciones interactivas',
    'features.0.description':
      '4 tipos de ejercicios: opción múltiple, completar, ordenar palabras y dictado. En inglés y español.',
    'features.1.title': 'Chat con IA',
    'features.1.description':
      'Practica conversaciones reales con Loro. Te corrige y te explica cada error en tu idioma.',
    'features.2.title': 'Pronunciación',
    'features.2.description':
      'Guías fonéticas diseñadas para cada idioma. Aprendé a pronunciar como un nativo.',
    'features.3.title': 'Inglés y español',
    'features.3.description':
      '¿Hablás español? Aprendé inglés. ¿Hablás inglés? Aprendé español. Dos idiomas, una app.',
    'features.4.title': 'Gamificación completa',
    'features.4.description':
      'XP, rachas, gemas, vidas, logros y ranking semanal. Aprender nunca fue tan divertido.',
    'features.5.title': 'Modo offline y oscuro',
    'features.5.description':
      'Estudiá sin internet y de noche sin cansar la vista.',

    // Screenshots
    'screenshots.label': 'Así se ve',
    'screenshots.title': 'Una app diseñada para que',
    'screenshots.titleHighlight': 'disfrutes aprender',
    'screenshots.subtitle':
      'Interfaz limpia, intuitiva y con todo lo que necesitás al alcance de un tap.',
    'screenshots.0.title': 'Chat con IA',
    'screenshots.0.description': 'Conversaciones reales con correcciones',
    'screenshots.1.title': 'Lecciones interactivas',
    'screenshots.1.description': 'Ejercicios que se adaptan a tu nivel',
    'screenshots.2.title': 'Tu progreso',
    'screenshots.2.description': 'Estadísticas, rachas y logros',

    // How it works
    'howItWorks.label': 'Cómo funciona',
    'howItWorks.title': 'Empezá en 3 simples pasos',
    'howItWorks.subtitle': 'En menos de un minuto ya estás aprendiendo.',
    'howItWorks.0.title': 'Descargá Loro',
    'howItWorks.0.description':
      'Disponible en App Store y Google Play. Sin tarjeta de crédito.',
    'howItWorks.1.title': 'Elegí tu idioma',
    'howItWorks.1.description':
      '¿Querés aprender inglés o español? Elegí tu camino y tu nivel.',
    'howItWorks.2.title': '5 minutos al día',
    'howItWorks.2.description':
      'Completá lecciones, chateá con Loro y mirá cómo progresás.',

    // Testimonials
    'testimonials.label': 'Testimonios',
    'testimonials.title': 'Lo que dicen nuestros usuarios',
    'testimonials.subtitle':
      'Personas reales aprendiendo idiomas reales con Loro.',

    // Stats
    'stats.rating': '4.9 de 5 estrellas',
    'stats.title': 'Aprendé inglés o español con la app que te entiende',
    'stats.subtitle':
      'Unite a la comunidad de estudiantes que están aprendiendo un nuevo idioma, un día a la vez.',
    'stats.languages': 'Idiomas disponibles',
    'stats.lessons': 'Lecciones por idioma',
    'stats.words': 'Palabras en cada diccionario',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'Preguntas frecuentes',
    'faq.subtitle': 'Todo lo que necesitás saber antes de empezar.',
    'faq.0.question': '¿Loro es realmente gratis?',
    'faq.0.answer':
      'Sí. Loro es gratis para descargar y usar. Todas las lecciones, el chat con IA y las funciones principales están disponibles sin costo. En el futuro podríamos ofrecer contenido premium opcional, pero siempre habrá una versión gratuita completa.',
    'faq.1.question': '¿Puedo aprender español con Loro?',
    'faq.1.answer':
      'Sí. Loro funciona en dos direcciones: si hablás español podés aprender inglés, y si hablás inglés podés aprender español. La app detecta tu idioma y adapta las lecciones automáticamente.',
    'faq.2.question': '¿Qué nivel puedo alcanzar?',
    'faq.2.answer':
      'Loro cubre desde nivel A0 (cero absoluto, para quienes no saben nada del idioma) hasta B1 (intermedio). Incluimos lecciones desde el abecedario hasta conversaciones reales con IA.',
    'faq.3.question': '¿Necesito internet para usar Loro?',
    'faq.3.answer':
      'No siempre. Las lecciones se pueden descargar para usar sin conexión. El chat con IA sí necesita internet, pero el resto de la app funciona perfectamente offline.',
    'faq.4.question': '¿En qué se diferencia de Duolingo?',
    'faq.4.answer':
      'Loro está diseñado específicamente para hispanohablantes y angloparlantes. Las explicaciones son en tu idioma nativo, la IA entiende tus errores típicos, y las lecciones están adaptadas culturalmente para Latinoamérica y el mundo anglosajón.',
    'faq.5.question': '¿Cuánto tiempo necesito al día?',
    'faq.5.answer':
      'Con 5 minutos al día ya vas a notar progreso. Las lecciones están diseñadas para ser cortas y efectivas. Lo importante es la constancia, no la cantidad de horas.',

    // CTA
    'cta.badge': 'Empezá hoy',
    'cta.title': 'Tu próximo idioma te está esperando',
    'cta.subtitle':
      'Es gratis. Sin tarjeta de crédito. 5 minutos al día que pueden cambiar tu futuro.',
    'cta.availability': 'Disponible en iOS y Android. Inglés y español.',

    // Footer
    'footer.home': 'Inicio',
    'footer.features': 'Funciones',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.contact': 'Contacto',
    'footer.copyright': '2026 Loro. Todos los derechos reservados.',
  },
  en: {
    // Nav
    'nav.features': 'Features',
    'nav.howItWorks': 'How it works',
    'nav.faq': 'FAQ',
    'nav.download': 'Download',
    'nav.themeToggle': 'Toggle theme',
    'nav.openMenu': 'Open menu',

    // Hero
    'hero.badge': 'Free app',
    'hero.title.line1': 'Learn languages.',
    'hero.title.line2': 'English & Spanish',
    'hero.title.line3': 'from scratch.',
    'hero.subtitle':
      'Interactive lessons, AI that corrects you, and everything designed for Latin America. Learn English if you speak Spanish, or Spanish if you speak English.',
    'hero.availableOn': 'Available on',
    'hero.appStore': 'App Store',
    'hero.googlePlay': 'Google Play',
    'hero.imgAlt': 'Loro App - Main screen',

    // Features
    'features.label': 'Features',
    'features.title': 'Everything you need to learn',
    'features.titleHighlight': 'a new language',
    'features.subtitle':
      'Built for Spanish speakers learning English and English speakers learning Spanish.',
    'features.0.title': 'Interactive lessons',
    'features.0.description':
      '4 exercise types: multiple choice, fill-in, word ordering, and dictation. In English and Spanish.',
    'features.1.title': 'AI Chat',
    'features.1.description':
      'Practice real conversations with Loro. It corrects you and explains every mistake in your language.',
    'features.2.title': 'Pronunciation',
    'features.2.description':
      'Phonetic guides designed for each language. Learn to pronounce like a native.',
    'features.3.title': 'English & Spanish',
    'features.3.description':
      'Speak Spanish? Learn English. Speak English? Learn Spanish. Two languages, one app.',
    'features.4.title': 'Full gamification',
    'features.4.description':
      'XP, streaks, gems, lives, achievements, and weekly rankings. Learning has never been this fun.',
    'features.5.title': 'Offline & dark mode',
    'features.5.description':
      'Study without internet and at night without straining your eyes.',

    // Screenshots
    'screenshots.label': 'Preview',
    'screenshots.title': 'An app designed for you to',
    'screenshots.titleHighlight': 'enjoy learning',
    'screenshots.subtitle':
      'Clean, intuitive interface with everything you need just a tap away.',
    'screenshots.0.title': 'AI Chat',
    'screenshots.0.description': 'Real conversations with corrections',
    'screenshots.1.title': 'Interactive lessons',
    'screenshots.1.description': 'Exercises that adapt to your level',
    'screenshots.2.title': 'Your progress',
    'screenshots.2.description': 'Stats, streaks, and achievements',

    // How it works
    'howItWorks.label': 'How it works',
    'howItWorks.title': 'Get started in 3 simple steps',
    'howItWorks.subtitle': 'In less than a minute you\'ll be learning.',
    'howItWorks.0.title': 'Download Loro',
    'howItWorks.0.description':
      'Available on App Store and Google Play. No credit card required.',
    'howItWorks.1.title': 'Choose your language',
    'howItWorks.1.description':
      'Want to learn English or Spanish? Pick your path and your level.',
    'howItWorks.2.title': '5 minutes a day',
    'howItWorks.2.description':
      'Complete lessons, chat with Loro, and watch your progress grow.',

    // Testimonials
    'testimonials.label': 'Testimonials',
    'testimonials.title': 'What our users say',
    'testimonials.subtitle':
      'Real people learning real languages with Loro.',

    // Stats
    'stats.rating': '4.9 out of 5 stars',
    'stats.title': 'Learn English or Spanish with the app that gets you',
    'stats.subtitle':
      'Join the community of learners who are picking up a new language, one day at a time.',
    'stats.languages': 'Languages available',
    'stats.lessons': 'Lessons per language',
    'stats.words': 'Words in each dictionary',

    // FAQ
    'faq.label': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Everything you need to know before getting started.',
    'faq.0.question': 'Is Loro really free?',
    'faq.0.answer':
      'Yes. Loro is free to download and use. All lessons, AI chat, and core features are available at no cost. We may offer optional premium content in the future, but there will always be a full free version.',
    'faq.1.question': 'Can I learn Spanish with Loro?',
    'faq.1.answer':
      'Yes. Loro works both ways: if you speak Spanish you can learn English, and if you speak English you can learn Spanish. The app detects your language and adapts the lessons automatically.',
    'faq.2.question': 'What level can I reach?',
    'faq.2.answer':
      'Loro covers from level A0 (absolute zero, for complete beginners) up to B1 (intermediate). We include lessons from the alphabet all the way to real AI conversations.',
    'faq.3.question': 'Do I need internet to use Loro?',
    'faq.3.answer':
      'Not always. Lessons can be downloaded for offline use. The AI chat does require internet, but the rest of the app works perfectly offline.',
    'faq.4.question': 'How is it different from Duolingo?',
    'faq.4.answer':
      'Loro is specifically designed for Spanish and English speakers. Explanations are in your native language, the AI understands your typical mistakes, and lessons are culturally adapted for Latin America and the English-speaking world.',
    'faq.5.question': 'How much time do I need per day?',
    'faq.5.answer':
      'Just 5 minutes a day is enough to see real progress. Lessons are designed to be short and effective. What matters most is consistency, not the number of hours.',

    // CTA
    'cta.badge': 'Start today',
    'cta.title': 'Your next language is waiting for you',
    'cta.subtitle':
      'It\'s free. No credit card. 5 minutes a day that can change your future.',
    'cta.availability': 'Available on iOS and Android. English and Spanish.',

    // Footer
    'footer.home': 'Home',
    'footer.features': 'Features',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.copyright': '2026 Loro. All rights reserved.',
  },
};

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? key;
}

export default translations;
