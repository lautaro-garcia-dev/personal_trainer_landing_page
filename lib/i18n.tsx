'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react'

export type Lang = 'pt' | 'en' | 'de' | 'es' | 'it'

export const WHATSAPP_NUMBER = '491601766495'
export const INSTAGRAM_URL = 'https://www.instagram.com/lucasfranco.coaching'

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: 'pt', label: 'PT', flag: 'BR' },
  { code: 'en', label: 'EN', flag: 'GB' },
  { code: 'de', label: 'DE', flag: 'DE' },
  { code: 'es', label: 'ES', flag: 'ES' },
  { code: 'it', label: 'IT', flag: 'IT' },
]

type ServiceItem = { title: string; desc: string }
type StepItem = { title: string; desc: string }
type FaqItem = { q: string; a: string }
  type TestimonialItem = { name: string; quote: string }
type StatItem = { value: number; suffix: string; label: string }

export type Dict = {
  nav: {
    about: string
    results: string
    services: string
    pricing: string
    process: string
    testimonials: string
    faq: string
    cta: string
  }
  hero: {
    badge: string
    title1: string
    title2: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    proofClients: string
    proofYears: string
    proofRating: string
  }
  about: {
    label: string
    title: string
    lead: string
    p1: string
    p2: string
    pillars: { title: string; desc: string }[]
    signature: string
  }
  results: {
    label: string
    title: string
    subtitle: string
    stats: StatItem[]
    beforeLabel: string
    afterLabel: string
    transformations: { name: string; detail: string }[]
    disclaimer: string
  }
  services: {
    label: string
    title: string
    subtitle: string
    items: ServiceItem[]
    cta: string
  }
  process: {
    label: string
    title: string
    subtitle: string
    steps: StepItem[]
  }
  pricing: {
    label: string
    title: string
    subtitle: string
    perMonth: string
    popular: string
    bestValue: string
    cta: string
    durations: string[]
    note: string
  }
  testimonials: {
    label: string
    title: string
    subtitle: string
    items: TestimonialItem[]
  }
  faq: {
    label: string
    title: string
    subtitle: string
    items: FaqItem[]
  }
  finalCta: {
    label: string
    title: string
    subtitle: string
    button: string
    micro: string
  }
  footer: {
    tagline: string
    nav: string
    contact: string
    language: string
    rights: string
    instagram: string
    whatsapp: string
    credit: string
    creditMessage: string
  }
  floating: string
  whatsappMessages: {
    hero: string
    services: string
    finalCta: string
    floating: string
    nav: string
  }
}

const pt: Dict = {
  nav: {
    about: 'Sobre',
    results: 'Resultados',
    services: 'Serviços',
    pricing: 'Preços',
    process: 'Processo',
    testimonials: 'Depoimentos',
    faq: 'Dúvidas',
    cta: 'Começar Agora',
  },
  hero: {
    badge: 'Coach de Transformação Física Premium',
    title1: 'Transforme seu físico.',
    title2: 'Transforme sua vida.',
    subtitle:
      'Acompanhamento personalizado para quem busca resultados reais, consistentes e duradouros.',
    ctaPrimary: 'Começar Minha Transformação',
    ctaSecondary: 'Ver Resultados',
    proofClients: '+100 clientes transformados',
    proofYears: '+8 anos de experiência',
    proofRating: 'Avaliação 5.0 dos alunos',
  },
  about: {
    label: 'Sobre Lucas',
    title: 'Disciplina, método e atenção que geram resultados reais',
    lead:
      'Mais do que treinos. Uma metodologia construída sobre experiência de palco, ciência aplicada e dedicação individual.',
    p1: 'Lucas Franco é atleta e coach de transformação física dedicado a levar cada aluno ao seu melhor físico de forma inteligente e sustentável. Competidor de palco, ele entende na prática o que separa um resultado mediano de um resultado excepcional.',
    p2: 'Cada plano é construído sob medida: treino, estratégia de evolução e acompanhamento próximo de verdade. Nada de fórmulas genéricas — apenas um processo claro, monitorado e ajustado para o seu corpo e a sua rotina.',
    pillars: [
      { title: 'Experiência de Palco', desc: 'Vivência real de competição aplicada ao seu físico.' },
      { title: 'Método Personalizado', desc: 'Protocolos exclusivos para o seu corpo e objetivo.' },
      { title: 'Atenção Individual', desc: 'Acompanhamento próximo, ajustes constantes e suporte direto.' },
      { title: 'Foco em Resultados', desc: 'Evolução mensurável, consistente e duradoura.' },
    ],
    signature: 'Lucas Franco — Coach de Transformação Física',
  },
  results: {
    label: 'Resultados',
    title: 'Transformações que falam por si',
    subtitle:
      'Cada transformação representa disciplina, método e um acompanhamento que não abre mão de excelência.',
    stats: [
      { value: 100, suffix: '+', label: 'Clientes transformados' },
      { value: 8, suffix: '+', label: 'Anos de experiência' },
      { value: 100, suffix: '+', label: 'Consultorias realizadas' },
      { value: 98, suffix: '%', label: 'Satisfação dos alunos' },
    ],
    beforeLabel: 'Antes',
    afterLabel: 'Depois',
    transformations: [
      { name: 'Recomposição Corporal', detail: '16 semanas de acompanhamento' },
      { name: 'Definição Avançada', detail: '12 semanas pré-competição' },
      { name: 'Ganho de Massa Magra', detail: '24 semanas de hipertrofia' },
      { name: 'Perda de Gordura', detail: '20 semanas de emagrecimento' },
      { name: 'Definição Muscular', detail: '14 semanas de corte' },
      { name: 'Transformação Física', detail: '18 semanas de acompanhamento' },
    ],
    disclaimer: 'Imagens ilustrativas. Resultados variam de acordo com cada indivíduo.',
  },
  services: {
    label: 'Serviços',
    title: 'Coaching de alto nível para cada objetivo',
    subtitle: 'Escolha o formato ideal para a sua transformação.',
    items: [
      { title: 'Prime Coaching', desc: 'Tudo do training coaching + orientação alimentar e chamada mensal para organização do processo.' },
      { title: 'Personal Trainer Presencial', desc: 'Treino e avaliação completo + pacotes de aulas de 1:30 semanais, com no mínimo 3 meses de duração.' },
      { title: 'Training Coaching', desc: 'Treino individualizado e acompanhando semanal, respondendo dúvidas todos os dias.' },
    ],
    cta: 'Falar com o Coach',
  },
  process: {
    label: 'Como funciona',
    title: 'Um processo claro para um resultado excepcional',
    subtitle: 'Cinco etapas pensadas para tirar você do ponto atual ao seu melhor físico.',
    steps: [
      { title: 'Avaliação', desc: 'Entendemos seu histórico, rotina, objetivos e ponto de partida em detalhe.' },
      { title: 'Planejamento', desc: 'Montamos uma estratégia personalizada de treino e evolução física.' },
      { title: 'Explicação', desc: 'Uma chamada de uns 20 minutos te explicando como seguir passo a passo do planejamento.' },
      { title: 'Execução', desc: 'Você executa com suporte próximo, técnica correta e intensidade ideal.' },
      { title: 'Resultados', desc: 'Monitoramos, ajustamos e potencializamos sua evolução continuamente.' },
    ],
  },
  pricing: {
    label: 'Planos e Preços',
    title: 'Escolha o plano da sua transformação',
    subtitle: 'Quanto maior o compromisso, menor o investimento mensal. Resultados que valem cada centavo.',
    perMonth: 'mês',
    popular: 'Mais popular',
    bestValue: 'Melhor custo-benefício',
    cta: 'Quero este plano',
    durations: ['3 Meses', '6 Meses', '12 Meses'],
    note: 'Valores em Euro, Dólar e Libra. Escolha a moeda que preferir ao falar comigo.',
  },
  testimonials: {
    label: 'Depoimentos',
    title: 'Quem treina com método, evolui',
    subtitle: 'A experiência de quem confiou no processo e alcançou resultados reais.',
    items: [
      { name: 'Raphael', quote: 'Trabalhar com o Lucas tem sido uma experiência muito boa. O que mais gosto é que ele realmente se importa com o processo e entende os meus objetivos. Desde que comecei a seguir o plano dele, perdi 19kg, meus treinos melhoraram muito, minha dor no joelho diminuiu bastante e me sinto mais confiante e consistente. Ele está sempre disponível para ajudar e ajustar o que for preciso. Estou realmente gostando do processo e animado para continuar evoluindo.' },
      { name: 'Valentina', quote: 'Treinar com o Lucas me mostrou por que ele faz tanta diferença na vida dos alunos. Além de acompanhar de perto o trabalho dele, também vivi essa experiência como aluna. Desde o início, ele fez questão de entender minha rotina, meus hábitos e meus objetivos para montar um planejamento realmente personalizado e que funcionasse para mim. Ele não é o tipo de profissional que apenas entrega um treino e uma dieta. Está sempre acompanhando, orientando e se preocupando de verdade com a evolução de cada aluno. Como aluna, posso dizer que já tive ótimos resultados e, como alguém que acompanha o trabalho dele de perto, tenho ainda mais certeza da dedicação, do cuidado e do carinho que ele coloca em tudo o que faz.' },
      { name: 'Lautaro', quote: 'Método sério, profissional e com resultados que aparecem no espelho antes do esperado.' },
    ],
  },
  faq: {
    label: 'Dúvidas Frequentes',
    title: 'Tudo o que você precisa saber',
    subtitle: 'Respostas claras para você começar com segurança.',
    items: [
      { q: 'Como funciona a consultoria?', a: 'Após ingressar, irá baixar o aplicativo "Prime Coaching", receberá seu login e senha pelo e-mail, tudo acontecerá por lá. Após uma avaliação detalhada, monto um plano personalizado de treino e estratégia de evolução. Uma chamada será marcada para eu te explicar como seguir o planejamento. Você recebe acompanhamento contínuo.' },
      { q: 'Quanto tempo para ver resultados?', a: 'Os primeiros resultados costumam aparecer nas primeiras semanas. Mas os resultados duradouros e consistentes surgem com 2-3 meses. Transformações consistentes.' },
      { q: 'É para iniciantes?', a: 'Sim. O acompanhamento é totalmente personalizado e adaptado ao seu nível — do iniciante absoluto ao avançado que busca o próximo patamar.' },
      { q: 'O atendimento é online?', a: 'Sim. Atendo de forma online para qualquer lugar, e também presencialmente. Ambos os formatos têm o mesmo padrão de excelência e proximidade.' },
      { q: 'Como começar?', a: 'Basta clicar no botão de WhatsApp. Vamos conversar sobre seus objetivos, se possível marcar uma chamada para eu te explicar como funciona o aplicativo e o processo de maneira mais detalhada. Caso não tenha tempo para uma chamada, lhe envio uma sequência de slides que mostra de maneira visual o funcionamento do aplicativo e dos planos de treino' },
    ],
  },
  finalCta: {
    label: 'Sua transformação começa agora',
    title: 'Seu próximo resultado começa hoje.',
    subtitle: 'Entre em contato agora e descubra como acelerar sua transformação.',
    button: 'Começar Minha Transformação',
    micro: 'Resposta rápida • Atendimento personalizado • Sem compromisso',
  },
  footer: {
    tagline: 'Coach de transformação física premium. Resultados reais, consistentes e duradouros.',
    nav: 'Navegação',
    contact: 'Contato',
    language: 'Idioma',
    rights: 'Todos os direitos reservados.',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    credit: 'Design web por',
    creditMessage: 'Olá, vi a página que você fez para "Lucas Franco Coaching", tenho interesse em contratar seus serviços.',
  },
  floating: 'Fale comigo',
  whatsappMessages: {
    hero: 'Olá Lucas! Vi seu site e quero começar minha transformação física. Pode me ajudar?',
    services: 'Olá Lucas! Tenho interesse nos seus serviços de coaching. Pode me explicar como funciona?',
    finalCta: 'Olá Lucas! Quero acelerar minha transformação. Como começamos?',
    floating: 'Olá Lucas! Gostaria de saber mais sobre o seu acompanhamento.',
    nav: 'Olá Lucas! Quero começar agora minha transformação física.',
  },
}

const en: Dict = {
  nav: {
    about: 'About',
    results: 'Results',
    services: 'Services',
    pricing: 'Pricing',
    process: 'Process',
    testimonials: 'Testimonials',
    faq: 'FAQ',
    cta: 'Start Now',
  },
  hero: {
    badge: 'Premium Physique Transformation Coach',
    title1: 'Transform your physique.',
    title2: 'Transform your life.',
    subtitle:
      'Personalized coaching for those who seek real, consistent and lasting results.',
    ctaPrimary: 'Start My Transformation',
    ctaSecondary: 'See Results',
    proofClients: '100+ clients transformed',
    proofYears: '8+ years of experience',
    proofRating: '5.0 rating from clients',
  },
  about: {
    label: 'About Lucas',
    title: 'Discipline, method and attention that drive real results',
    lead:
      'More than workouts. A methodology built on stage experience, applied science and individual dedication.',
    p1: 'Lucas Franco is a physique transformation coach dedicated to taking every client to their best shape in a smart and sustainable way. As a stage competitor, he understands first-hand what separates an average result from an exceptional one.',
    p2: 'Every plan is fully tailored: training, evolution strategy and genuinely close coaching. No generic formulas — just a clear process, monitored and adjusted for your body and your routine.',
    pillars: [
      { title: 'Stage Experience', desc: 'Real competition experience applied to your physique.' },
      { title: 'Personalized Method', desc: 'Exclusive protocols for your body and your goal.' },
      { title: 'Individual Attention', desc: 'Close coaching, constant adjustments and direct support.' },
      { title: 'Results Focused', desc: 'Measurable, consistent and lasting progress.' },
    ],
    signature: 'Lucas Franco — Physique Transformation Coach',
  },
  results: {
    label: 'Results',
    title: 'Transformations that speak for themselves',
    subtitle:
      'Every transformation represents discipline, method and coaching that never compromises on excellence.',
    stats: [
      { value: 100, suffix: '+', label: 'Clients transformed' },
      { value: 8, suffix: '+', label: 'Years of experience' },
      { value: 100, suffix: '+', label: 'Coaching programs delivered' },
      { value: 98, suffix: '%', label: 'Client satisfaction' },
    ],
    beforeLabel: 'Before',
    afterLabel: 'After',
    transformations: [
      { name: 'Body Recomposition', detail: '16 weeks of coaching' },
      { name: 'Advanced Definition', detail: '12 weeks pre-competition' },
      { name: 'Lean Mass Gain', detail: '24 weeks of hypertrophy' },
      { name: 'Fat Loss', detail: '20 weeks of weight loss' },
      { name: 'Muscle Definition', detail: '14 weeks of cutting' },
      { name: 'Physical Transformation', detail: '18 weeks of coaching' },
    ],
    disclaimer: 'Illustrative images. Results vary from person to person.',
  },
  services: {
    label: 'Services',
    title: 'High-level coaching for every goal',
    subtitle: 'Choose the ideal format for your transformation.',
    items: [
      { title: 'Prime Coaching', desc: 'Everything in Training Coaching + nutrition guidance and a monthly call to organize your process.' },
      { title: 'In-Person Personal Trainer', desc: 'Complete training and assessment + weekly 1h30 session packages, with a minimum duration of 3 months.' },
      { title: 'Training Coaching', desc: 'Individualized training and weekly follow-up, answering your questions every day.' },
    ],
    cta: 'Talk to the Coach',
  },
  process: {
    label: 'How it works',
    title: 'A clear process for an exceptional result',
    subtitle: 'Five steps designed to take you from where you are to your best physique.',
    steps: [
      { title: 'Assessment', desc: 'We understand your history, routine, goals and starting point in detail.' },
      { title: 'Planning', desc: 'We build a personalized training and physical evolution strategy.' },
      { title: 'Explanation', desc: 'A 20-minute call explaining how to follow your plan step by step.' },
      { title: 'Execution', desc: 'You execute with close support, correct technique and ideal intensity.' },
      { title: 'Results', desc: 'We monitor, adjust and continuously maximize your progress.' },
    ],
  },
  pricing: {
    label: 'Plans & Pricing',
    title: 'Choose your transformation plan',
    subtitle: 'The bigger the commitment, the lower the monthly investment. Results worth every cent.',
    perMonth: 'month',
    popular: 'Most popular',
    bestValue: 'Best value',
    cta: 'I want this plan',
    durations: ['3 Months', '6 Months', '12 Months'],
    note: 'Prices in Euro, Dollar and Pound. Choose your preferred currency when you message me.',
  },
  testimonials: {
    label: 'Testimonials',
    title: 'Those who train with method, evolve',
    subtitle: 'The experience of those who trusted the process and achieved real results.',
    items: [
      { name: 'Raphael', quote: 'Working with Lucas has been a really good experience. What I like the most is that he actually cares about the process and understands my goals. Since I started following his plan I have lost 19kg, my workouts have improved a lot, my knee pain got much better, and I feel more confident and consistent. He is always there to help and adjust things when needed. I´m really enjoying the process and I´m excited to keep improving' },
      { name: 'Valentina', quote: 'Training with Lucas showed me why he makes such a difference in his clients\' lives. Besides following his work closely, I also lived this experience as a client. From the start, he made a point of understanding my routine, my habits and my goals to build a truly personalized plan that actually worked for me. He is not the kind of professional who just hands over a workout and a diet. He is always following up, guiding and genuinely caring about each client\'s progress. As a client, I can say I have already had great results and, as someone who follows his work closely, I am even more certain of the dedication, the care and the affection he puts into everything he does.' },
      { name: 'Lautaro', quote: 'A serious, professional method with results that show in the mirror sooner than expected.' },
    ],
  },
  faq: {
    label: 'Frequently Asked Questions',
    title: 'Everything you need to know',
    subtitle: 'Clear answers so you can start with confidence.',
    items: [
      { q: 'How does the coaching work?', a: 'After joining, you will download the "Prime Coaching" app and receive your login and password by email — everything happens there. After a detailed assessment, I build a personalized training plan and evolution strategy. A call is scheduled so I can explain how to follow the plan. You receive continuous coaching.' },
      { q: 'How long until I see results?', a: 'The first results usually appear within the first weeks. But lasting and consistent results emerge after 2-3 months — consistent transformations.' },
      { q: 'Is it for beginners?', a: 'Yes. The coaching is fully personalized and adapted to your level — from absolute beginners to advanced athletes seeking the next level.' },
      { q: 'Is the coaching online?', a: 'Yes. I coach online anywhere in the world, and also in person. Both formats share the same standard of excellence and closeness.' },
      { q: 'How do I get started?', a: 'Just click the WhatsApp button. We will talk about your goals and, if possible, schedule a call so I can explain how the app and the process work in more detail. If you don\'t have time for a call, I will send you a sequence of slides that visually shows how the app and the training plans work.' },
    ],
  },
  finalCta: {
    label: 'Your transformation starts now',
    title: 'Your next result starts today.',
    subtitle: 'Get in touch now and discover how to accelerate your transformation.',
    button: 'Start My Transformation',
    micro: 'Fast reply • Personalized service • No commitment',
  },
  footer: {
    tagline: 'Premium physique transformation coach. Real, consistent and lasting results.',
    nav: 'Navigation',
    contact: 'Contact',
    language: 'Language',
    rights: 'All rights reserved.',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    credit: 'Web design by',
    creditMessage: 'Hi, I saw the page you made for "Lucas Franco Coaching", I would be interested in hiring your services.',
  },
  floating: 'Message me',
  whatsappMessages: {
    hero: 'Hi Lucas! I saw your website and I want to start my physique transformation. Can you help me?',
    services: 'Hi Lucas! I am interested in your coaching services. Can you explain how it works?',
    finalCta: 'Hi Lucas! I want to accelerate my transformation. How do we start?',
    floating: 'Hi Lucas! I would like to know more about your coaching.',
    nav: 'Hi Lucas! I want to start my physique transformation now.',
  },
}

const de: Dict = {
  nav: {
    about: 'Über mich',
    results: 'Ergebnisse',
    services: 'Leistungen',
    pricing: 'Preise',
    process: 'Ablauf',
    testimonials: 'Stimmen',
    faq: 'FAQ',
    cta: 'Jetzt starten',
  },
  hero: {
    badge: 'Premium Coach für Körpertransformation',
    title1: 'Verändere deinen Körper.',
    title2: 'Verändere dein Leben.',
    subtitle:
      'Personalisiertes Coaching für alle, die echte, beständige und dauerhafte Ergebnisse suchen.',
    ctaPrimary: 'Meine Transformation starten',
    ctaSecondary: 'Ergebnisse ansehen',
    proofClients: '100+ transformierte Kunden',
    proofYears: '8+ Jahre Erfahrung',
    proofRating: '5,0 Bewertung von Kunden',
  },
  about: {
    label: 'Über Lucas',
    title: 'Disziplin, Methode und Aufmerksamkeit für echte Ergebnisse',
    lead:
      'Mehr als Training. Eine Methodik, aufgebaut auf Bühnenerfahrung, angewandter Wissenschaft und persönlicher Hingabe.',
    p1: 'Lucas Franco ist ein Coach für Körpertransformation, der jeden Kunden auf intelligente und nachhaltige Weise zu seiner besten Form bringt. Als Bühnenathlet weiß er aus erster Hand, was ein durchschnittliches von einem außergewöhnlichen Ergebnis unterscheidet.',
    p2: 'Jeder Plan ist maßgeschneidert: Training, Entwicklungsstrategie und wirklich enge Betreuung. Keine generischen Formeln — nur ein klarer Prozess, überwacht und angepasst an deinen Körper und deinen Alltag.',
    pillars: [
      { title: 'Bühnenerfahrung', desc: 'Echte Wettkampferfahrung, angewandt auf deinen Körper.' },
      { title: 'Personalisierte Methode', desc: 'Exklusive Protokolle für deinen Körper und dein Ziel.' },
      { title: 'Individuelle Betreuung', desc: 'Enge Begleitung, ständige Anpassungen und direkter Support.' },
      { title: 'Auf Ergebnisse fokussiert', desc: 'Messbarer, beständiger und dauerhafter Fortschritt.' },
    ],
    signature: 'Lucas Franco — Coach für Körpertransformation',
  },
  results: {
    label: 'Ergebnisse',
    title: 'Transformationen, die für sich sprechen',
    subtitle:
      'Jede Transformation steht für Disziplin, Methode und ein Coaching, das keine Kompromisse bei der Exzellenz eingeht.',
    stats: [
      { value: 100, suffix: '+', label: 'Transformierte Kunden' },
      { value: 8, suffix: '+', label: 'Jahre Erfahrung' },
      { value: 100, suffix: '+', label: 'Durchgeführte Coachings' },
      { value: 98, suffix: '%', label: 'Kundenzufriedenheit' },
    ],
    beforeLabel: 'Vorher',
    afterLabel: 'Nachher',
    transformations: [
      { name: 'Körperrekomposition', detail: '16 Wochen Coaching' },
      { name: 'Fortgeschrittene Definition', detail: '12 Wochen vor dem Wettkampf' },
      { name: 'Aufbau magerer Masse', detail: '24 Wochen Hypertrophie' },
      { name: 'Fettabbau', detail: '20 Wochen Diät' },
      { name: 'Muskeldefinition', detail: '14 Wochen Definitionsphase' },
      { name: 'Körperliche Transformation', detail: '18 Wochen Coaching' },
    ],
    disclaimer: 'Illustrative Bilder. Ergebnisse variieren von Person zu Person.',
  },
  services: {
    label: 'Leistungen',
    title: 'Coaching auf höchstem Niveau für jedes Ziel',
    subtitle: 'Wähle das ideale Format für deine Transformation.',
    items: [
      { title: 'Prime Coaching', desc: 'Alles aus dem Training Coaching + Ernährungsberatung und ein monatliches Gespräch zur Organisation des Prozesses.' },
      { title: 'Personal Trainer vor Ort', desc: 'Komplettes Training und Analyse + wöchentliche 1:30-Std-Einheitenpakete, mit mindestens 3 Monaten Laufzeit.' },
      { title: 'Training Coaching', desc: 'Individualisiertes Training und wöchentliche Begleitung, mit täglicher Beantwortung deiner Fragen.' },
    ],
    cta: 'Mit dem Coach sprechen',
  },
  process: {
    label: 'So funktioniert es',
    title: 'Ein klarer Prozess für ein außergewöhnliches Ergebnis',
    subtitle: 'Fünf Schritte, die dich vom aktuellen Punkt zu deiner besten Form bringen.',
    steps: [
      { title: 'Analyse', desc: 'Wir verstehen deine Vorgeschichte, deinen Alltag, deine Ziele und deinen Ausgangspunkt im Detail.' },
      { title: 'Planung', desc: 'Wir erstellen eine personalisierte Trainings- und Entwicklungsstrategie.' },
      { title: 'Erklärung', desc: 'Ein etwa 20-minütiges Gespräch, in dem ich dir Schritt für Schritt erkläre, wie du dem Plan folgst.' },
      { title: 'Umsetzung', desc: 'Du trainierst mit enger Betreuung, korrekter Technik und idealer Intensität.' },
      { title: 'Ergebnisse', desc: 'Wir überwachen, passen an und maximieren deinen Fortschritt kontinuierlich.' },
    ],
  },
  pricing: {
    label: 'Pläne & Preise',
    title: 'Wähle deinen Transformationsplan',
    subtitle: 'Je größer das Engagement, desto geringer die monatliche Investition. Ergebnisse, die jeden Cent wert sind.',
    perMonth: 'Monat',
    popular: 'Am beliebtesten',
    bestValue: 'Bestes Preis-Leistungs-Verhältnis',
    cta: 'Diesen Plan möchte ich',
    durations: ['3 Monate', '6 Monate', '12 Monate'],
    note: 'Preise in Euro, Dollar und Pfund. Wähle deine bevorzugte Währung, wenn du mir schreibst.',
  },
  testimonials: {
    label: 'Stimmen',
    title: 'Wer mit Methode trainiert, entwickelt sich',
    subtitle: 'Die Erfahrung derer, die dem Prozess vertraut und echte Ergebnisse erzielt haben.',
    items: [
      { name: 'Raphael', quote: 'Die Zusammenarbeit mit Lucas war eine wirklich gute Erfahrung. Was mir am besten gefällt, ist, dass ihm der Prozess wirklich am Herzen liegt und er meine Ziele versteht. Seit ich seinem Plan folge, habe ich 19 kg abgenommen, meine Trainings haben sich stark verbessert, meine Knieschmerzen sind viel besser geworden und ich fühle mich selbstbewusster und beständiger. Er ist immer da, um zu helfen und Dinge bei Bedarf anzupassen. Ich genieße den Prozess wirklich und freue mich darauf, mich weiter zu verbessern.' },
      { name: 'Valentina', quote: 'Das Training mit Lucas hat mir gezeigt, warum er im Leben seiner Kunden einen so großen Unterschied macht. Neben der engen Begleitung seiner Arbeit habe ich diese Erfahrung auch selbst als Kundin gemacht. Von Anfang an legte er großen Wert darauf, meinen Alltag, meine Gewohnheiten und meine Ziele zu verstehen, um einen wirklich individuellen Plan zu erstellen, der für mich funktioniert. Er ist nicht die Art von Trainer, die einfach nur einen Trainings- und Ernährungsplan übergibt. Er begleitet, berät und kümmert sich wirklich um die Entwicklung jedes einzelnen Kunden. Als Kundin kann ich sagen, dass ich bereits großartige Ergebnisse erzielt habe, und als jemand, der seine Arbeit aus der Nähe verfolgt, bin ich mir der Hingabe, der Sorgfalt und der Zuneigung, die er in alles steckt, was er tut, noch sicherer.' },
      { name: 'Lautaro', quote: 'Eine seriöse, professionelle Methode mit Ergebnissen, die früher als erwartet im Spiegel sichtbar werden.' },
    ],
  },
  faq: {
    label: 'Häufige Fragen',
    title: 'Alles, was du wissen musst',
    subtitle: 'Klare Antworten, damit du sicher starten kannst.',
    items: [
      { q: 'Wie funktioniert das Coaching?', a: 'Nach dem Beitritt lädst du die App „Prime Coaching" herunter und erhältst deine Login-Daten per E-Mail — alles läuft dort. Nach einer detaillierten Analyse erstelle ich einen personalisierten Trainingsplan und eine Entwicklungsstrategie. Ein Gespräch wird vereinbart, damit ich dir erkläre, wie du dem Plan folgst. Du erhältst durchgehende Betreuung.' },
      { q: 'Wie lange bis zu ersten Ergebnissen?', a: 'Erste Ergebnisse zeigen sich meist in den ersten Wochen. Dauerhafte und beständige Ergebnisse entstehen jedoch nach 2-3 Monaten — beständige Transformationen.' },
      { q: 'Ist es für Anfänger geeignet?', a: 'Ja. Das Coaching ist vollständig personalisiert und an dein Niveau angepasst — vom absoluten Anfänger bis zum Fortgeschrittenen, der die nächste Stufe sucht.' },
      { q: 'Ist das Coaching online?', a: 'Ja. Ich coache online weltweit und auch vor Ort. Beide Formate haben denselben Standard an Exzellenz und Nähe.' },
      { q: 'Wie fange ich an?', a: 'Klicke einfach auf den WhatsApp-Button. Wir sprechen über deine Ziele und vereinbaren wenn möglich ein Gespräch, damit ich dir die Funktionsweise der App und des Prozesses genauer erkläre. Falls du keine Zeit für ein Gespräch hast, sende ich dir eine Folge von Slides, die die Funktionsweise der App und der Trainingspläne visuell zeigt.' },
    ],
  },
  finalCta: {
    label: 'Deine Transformation beginnt jetzt',
    title: 'Dein nächstes Ergebnis beginnt heute.',
    subtitle: 'Melde dich jetzt und erfahre, wie du deine Transformation beschleunigst.',
    button: 'Meine Transformation starten',
    micro: 'Schnelle Antwort • Persönliche Betreuung • Unverbindlich',
  },
  footer: {
    tagline: 'Premium Coach für Körpertransformation. Echte, beständige und dauerhafte Ergebnisse.',
    nav: 'Navigation',
    contact: 'Kontakt',
    language: 'Sprache',
    rights: 'Alle Rechte vorbehalten.',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    credit: 'Webdesign von',
    creditMessage: 'Hallo, ich habe die Seite gesehen, die du für "Lucas Franco Coaching" erstellt hast, und würde gerne deine Dienste in Anspruch nehmen.',
  },
  floating: 'Schreib mir',
  whatsappMessages: {
    hero: 'Hallo Lucas! Ich habe deine Website gesehen und möchte meine Körpertransformation starten. Kannst du mir helfen?',
    services: 'Hallo Lucas! Ich interessiere mich für dein Coaching. Kannst du mir erklären, wie es funktioniert?',
    finalCta: 'Hallo Lucas! Ich möchte meine Transformation beschleunigen. Wie fangen wir an?',
    floating: 'Hallo Lucas! Ich würde gerne mehr über dein Coaching erfahren.',
    nav: 'Hallo Lucas! Ich möchte jetzt meine Körpertransformation starten.',
  },
}

const es: Dict = {
  nav: {
    about: 'Sobre',
    results: 'Resultados',
    services: 'Servicios',
    pricing: 'Precios',
    process: 'Proceso',
    testimonials: 'Testimonios',
    faq: 'Preguntas',
    cta: 'Empezar Ahora',
  },
  hero: {
    badge: 'Coach de Transformación Física Premium',
    title1: 'Transforma tu físico.',
    title2: 'Transforma tu vida.',
    subtitle:
      'Acompañamiento personalizado para quienes buscan resultados reales, consistentes y duraderos.',
    ctaPrimary: 'Empezar Mi Transformación',
    ctaSecondary: 'Ver Resultados',
    proofClients: '+100 clientes transformados',
    proofYears: '+8 años de experiencia',
    proofRating: 'Valoración 5.0 de los alumnos',
  },
  about: {
    label: 'Sobre Lucas',
    title: 'Disciplina, método y atención que generan resultados reales',
    lead:
      'Más que entrenamientos. Una metodología construida sobre experiencia de escenario, ciencia aplicada y dedicación individual.',
    p1: 'Lucas Franco es atleta y coach de transformación física dedicado a llevar a cada alumno a su mejor físico de forma inteligente y sostenible. Como competidor de escenario, entiende en la práctica lo que separa un resultado mediocre de uno excepcional.',
    p2: 'Cada plan se construye a medida: entrenamiento, estrategia de evolución y un acompañamiento realmente cercano. Nada de fórmulas genéricas — solo un proceso claro, monitoreado y ajustado a tu cuerpo y a tu rutina.',
    pillars: [
      { title: 'Experiencia de Escenario', desc: 'Vivencia real de competición aplicada a tu físico.' },
      { title: 'Método Personalizado', desc: 'Protocolos exclusivos para tu cuerpo y tu objetivo.' },
      { title: 'Atención Individual', desc: 'Acompañamiento cercano, ajustes constantes y soporte directo.' },
      { title: 'Enfoque en Resultados', desc: 'Evolución medible, consistente y duradera.' },
    ],
    signature: 'Lucas Franco — Coach de Transformación Física',
  },
  results: {
    label: 'Resultados',
    title: 'Transformaciones que hablan por sí solas',
    subtitle:
      'Cada transformación representa disciplina, método y un acompañamiento que no renuncia a la excelencia.',
    stats: [
      { value: 100, suffix: '+', label: 'Clientes transformados' },
      { value: 8, suffix: '+', label: 'Años de experiencia' },
      { value: 100, suffix: '+', label: 'Consultorías realizadas' },
      { value: 98, suffix: '%', label: 'Satisfacción de los alumnos' },
    ],
    beforeLabel: 'Antes',
    afterLabel: 'Después',
    transformations: [
      { name: 'Recomposición Corporal', detail: '16 semanas de acompañamiento' },
      { name: 'Definición Avanzada', detail: '12 semanas precompetición' },
      { name: 'Ganancia de Masa Magra', detail: '24 semanas de hipertrofia' },
      { name: 'Pérdida de Grasa', detail: '20 semanas de adelgazamiento' },
      { name: 'Definición Muscular', detail: '14 semanas de definición' },
      { name: 'Transformación Física', detail: '18 semanas de acompañamiento' },
    ],
    disclaimer: 'Imágenes ilustrativas. Los resultados varían según cada persona.',
  },
  services: {
    label: 'Servicios',
    title: 'Coaching de alto nivel para cada objetivo',
    subtitle: 'Elige el formato ideal para tu transformación.',
    items: [
      { title: 'Prime Coaching', desc: 'Todo lo del training coaching + orientación nutricional y llamada mensual para organizar el proceso.' },
      { title: 'Personal Trainer Presencial', desc: 'Entrenamiento y evaluación completos + paquetes de clases de 1:30 semanales, con un mínimo de 3 meses de duración.' },
      { title: 'Training Coaching', desc: 'Entrenamiento individualizado y seguimiento semanal, respondiendo tus dudas todos los días.' },
    ],
    cta: 'Hablar con el Coach',
  },
  process: {
    label: 'Cómo funciona',
    title: 'Un proceso claro para un resultado excepcional',
    subtitle: 'Cinco etapas pensadas para llevarte de tu punto actual a tu mejor físico.',
    steps: [
      { title: 'Evaluación', desc: 'Entendemos tu historial, rutina, objetivos y punto de partida en detalle.' },
      { title: 'Planificación', desc: 'Diseñamos una estrategia personalizada de entrenamiento y evolución física.' },
      { title: 'Explicación', desc: 'Una llamada de unos 20 minutos para explicarte cómo seguir paso a paso la planificación.' },
      { title: 'Ejecución', desc: 'Ejecutas con soporte cercano, técnica correcta e intensidad ideal.' },
      { title: 'Resultados', desc: 'Monitoreamos, ajustamos y potenciamos tu evolución continuamente.' },
    ],
  },
  pricing: {
    label: 'Planes y Precios',
    title: 'Elige el plan de tu transformación',
    subtitle: 'Cuanto mayor el compromiso, menor la inversión mensual. Resultados que valen cada centavo.',
    perMonth: 'mes',
    popular: 'Más popular',
    bestValue: 'Mejor relación calidad-precio',
    cta: 'Quiero este plan',
    durations: ['3 Meses', '6 Meses', '12 Meses'],
    note: 'Precios en Euro, Dólar y Libra. Elige la moneda que prefieras al hablar conmigo.',
  },
  testimonials: {
    label: 'Testimonios',
    title: 'Quien entrena con método, evoluciona',
    subtitle: 'La experiencia de quienes confiaron en el proceso y lograron resultados reales.',
    items: [
      { name: 'Raphael', quote: 'Trabajar con Lucas ha sido una experiencia muy buena. Lo que más me gusta es que realmente se preocupa por el proceso y entiende mis objetivos. Desde que empecé a seguir su plan, perdí 19kg, mis entrenamientos mejoraron mucho, mi dolor de rodilla disminuyó bastante y me siento más seguro y constante. Siempre está disponible para ayudar y ajustar lo que sea necesario. Realmente estoy disfrutando el proceso y con ganas de seguir evolucionando.' },
      { name: 'Valentina', quote: 'Entrenar con Lucas me mostró por qué marca tanta diferencia en la vida de los alumnos. Además de seguir de cerca su trabajo, también viví esta experiencia como alumna. Desde el principio, se preocupó por entender mi rutina, mis hábitos y mis objetivos para armar una planificación realmente personalizada y que funcionara para mí. No es el tipo de profesional que solo entrega un entrenamiento y una dieta. Está siempre acompañando, orientando y preocupándose de verdad por la evolución de cada alumno. Como alumna, puedo decir que ya tuve excelentes resultados y, como alguien que sigue su trabajo de cerca, tengo aún más certeza de la dedicación, el cuidado y el cariño que pone en todo lo que hace.' },
      { name: 'Lautaro', quote: 'Método serio, profesional y con resultados que aparecen en el espejo antes de lo esperado.' },
    ],
  },
  faq: {
    label: 'Preguntas Frecuentes',
    title: 'Todo lo que necesitas saber',
    subtitle: 'Respuestas claras para que empieces con seguridad.',
    items: [
      { q: '¿Cómo funciona la consultoría?', a: 'Tras ingresar, descargarás la aplicación "Prime Coaching", recibirás tu usuario y contraseña por correo, todo ocurrirá allí. Después de una evaluación detallada, armo un plan personalizado de entrenamiento y estrategia de evolución. Se agendará una llamada para explicarte cómo seguir la planificación. Recibes acompañamiento continuo.' },
      { q: '¿Cuánto tiempo para ver resultados?', a: 'Los primeros resultados suelen aparecer en las primeras semanas. Pero los resultados duraderos y consistentes surgen a los 2-3 meses. Transformaciones consistentes.' },
      { q: '¿Es para principiantes?', a: 'Sí. El acompañamiento es totalmente personalizado y adaptado a tu nivel — desde el principiante absoluto hasta el avanzado que busca el siguiente nivel.' },
      { q: '¿La atención es online?', a: 'Sí. Atiendo de forma online a cualquier lugar, y también presencialmente. Ambos formatos tienen el mismo estándar de excelencia y cercanía.' },
      { q: '¿Cómo empezar?', a: 'Solo tienes que hacer clic en el botón de WhatsApp. Hablaremos sobre tus objetivos y, si es posible, agendamos una llamada para explicarte cómo funciona la aplicación y el proceso de manera más detallada. Si no tienes tiempo para una llamada, te envío una secuencia de diapositivas que muestra de forma visual el funcionamiento de la aplicación y de los planes de entrenamiento.' },
    ],
  },
  finalCta: {
    label: 'Tu transformación empieza ahora',
    title: 'Tu próximo resultado empieza hoy.',
    subtitle: 'Ponte en contacto ahora y descubre cómo acelerar tu transformación.',
    button: 'Empezar Mi Transformación',
    micro: 'Respuesta rápida • Atención personalizada • Sin compromiso',
  },
  footer: {
    tagline: 'Coach de transformación física premium. Resultados reales, consistentes y duraderos.',
    nav: 'Navegación',
    contact: 'Contacto',
    language: 'Idioma',
    rights: 'Todos los derechos reservados.',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    credit: 'Diseño web por',
    creditMessage: 'Hola, vi la página que hiciste para "Lucas Franco Coaching", me interesaría contratar tus servicios.',
  },
  floating: 'Escríbeme',
  whatsappMessages: {
    hero: '¡Hola Lucas! Vi tu sitio y quiero empezar mi transformación física. ¿Puedes ayudarme?',
    services: '¡Hola Lucas! Tengo interés en tus servicios de coaching. ¿Puedes explicarme cómo funciona?',
    finalCta: '¡Hola Lucas! Quiero acelerar mi transformación. ¿Cómo empezamos?',
    floating: '¡Hola Lucas! Me gustaría saber más sobre tu acompañamiento.',
    nav: '¡Hola Lucas! Quiero empezar ahora mi transformación física.',
  },
}

const it: Dict = {
  nav: {
    about: 'Chi sono',
    results: 'Risultati',
    services: 'Servizi',
    pricing: 'Prezzi',
    process: 'Processo',
    testimonials: 'Testimonianze',
    faq: 'FAQ',
    cta: 'Inizia Ora',
  },
  hero: {
    badge: 'Coach di Trasformazione Fisica Premium',
    title1: 'Trasforma il tuo fisico.',
    title2: 'Trasforma la tua vita.',
    subtitle:
      'Coaching personalizzato per chi cerca risultati reali, costanti e duraturi.',
    ctaPrimary: 'Inizia la Mia Trasformazione',
    ctaSecondary: 'Vedi i Risultati',
    proofClients: '+100 clienti trasformati',
    proofYears: '+8 anni di esperienza',
    proofRating: 'Valutazione 5.0 dagli allievi',
  },
  about: {
    label: 'Chi è Lucas',
    title: 'Disciplina, metodo e attenzione che generano risultati reali',
    lead:
      'Più che allenamenti. Una metodologia costruita su esperienza da palco, scienza applicata e dedizione individuale.',
    p1: 'Lucas Franco è atleta e coach di trasformazione fisica dedicato a portare ogni allievo alla sua forma migliore in modo intelligente e sostenibile. Come atleta da palco, capisce in pratica ciò che separa un risultato mediocre da uno eccezionale.',
    p2: 'Ogni piano è costruito su misura: allenamento, strategia di evoluzione e un coaching davvero ravvicinato. Nessuna formula generica — solo un processo chiaro, monitorato e adattato al tuo corpo e alla tua routine.',
    pillars: [
      { title: 'Esperienza da Palco', desc: 'Vera esperienza di competizione applicata al tuo fisico.' },
      { title: 'Metodo Personalizzato', desc: 'Protocolli esclusivi per il tuo corpo e il tuo obiettivo.' },
      { title: 'Attenzione Individuale', desc: 'Coaching ravvicinato, aggiustamenti costanti e supporto diretto.' },
      { title: 'Focus sui Risultati', desc: 'Progresso misurabile, costante e duraturo.' },
    ],
    signature: 'Lucas Franco — Coach di Trasformazione Fisica',
  },
  results: {
    label: 'Risultati',
    title: 'Trasformazioni che parlano da sole',
    subtitle:
      'Ogni trasformazione rappresenta disciplina, metodo e un coaching che non rinuncia all\'eccellenza.',
    stats: [
      { value: 100, suffix: '+', label: 'Clienti trasformati' },
      { value: 8, suffix: '+', label: 'Anni di esperienza' },
      { value: 100, suffix: '+', label: 'Consulenze realizzate' },
      { value: 98, suffix: '%', label: 'Soddisfazione degli allievi' },
    ],
    beforeLabel: 'Prima',
    afterLabel: 'Dopo',
    transformations: [
      { name: 'Ricomposizione Corporea', detail: '16 settimane di coaching' },
      { name: 'Definizione Avanzata', detail: '12 settimane pre-gara' },
      { name: 'Aumento di Massa Magra', detail: '24 settimane di ipertrofia' },
      { name: 'Perdita di Grasso', detail: '20 settimane di dimagrimento' },
      { name: 'Definizione Muscolare', detail: '14 settimane di definizione' },
      { name: 'Trasformazione Fisica', detail: '18 settimane di coaching' },
    ],
    disclaimer: 'Immagini illustrative. I risultati variano da persona a persona.',
  },
  services: {
    label: 'Servizi',
    title: 'Coaching di alto livello per ogni obiettivo',
    subtitle: 'Scegli il formato ideale per la tua trasformazione.',
    items: [
      { title: 'Prime Coaching', desc: 'Tutto del training coaching + guida alimentare e chiamata mensile per organizzare il processo.' },
      { title: 'Personal Trainer in Presenza', desc: 'Allenamento e valutazione completi + pacchetti di lezioni da 1:30 settimanali, con una durata minima di 3 mesi.' },
      { title: 'Training Coaching', desc: 'Allenamento individualizzato e follow-up settimanale, rispondendo alle tue domande ogni giorno.' },
    ],
    cta: 'Parla con il Coach',
  },
  process: {
    label: 'Come funziona',
    title: 'Un processo chiaro per un risultato eccezionale',
    subtitle: 'Cinque fasi pensate per portarti dal tuo punto attuale al tuo fisico migliore.',
    steps: [
      { title: 'Valutazione', desc: 'Comprendiamo in dettaglio la tua storia, la tua routine, i tuoi obiettivi e il tuo punto di partenza.' },
      { title: 'Pianificazione', desc: 'Costruiamo una strategia personalizzata di allenamento ed evoluzione fisica.' },
      { title: 'Spiegazione', desc: 'Una chiamata di circa 20 minuti per spiegarti come seguire passo dopo passo la pianificazione.' },
      { title: 'Esecuzione', desc: 'Esegui con supporto ravvicinato, tecnica corretta e intensità ideale.' },
      { title: 'Risultati', desc: 'Monitoriamo, aggiustiamo e potenziamo la tua evoluzione continuamente.' },
    ],
  },
  pricing: {
    label: 'Piani e Prezzi',
    title: 'Scegli il piano della tua trasformazione',
    subtitle: 'Maggiore è l\'impegno, minore è l\'investimento mensile. Risultati che valgono ogni centesimo.',
    perMonth: 'mese',
    popular: 'Più popolare',
    bestValue: 'Miglior rapporto qualità-prezzo',
    cta: 'Voglio questo piano',
    durations: ['3 Mesi', '6 Mesi', '12 Mesi'],
    note: 'Prezzi in Euro, Dollaro e Sterlina. Scegli la valuta che preferisci quando mi scrivi.',
  },
  testimonials: {
    label: 'Testimonianze',
    title: 'Chi si allena con metodo, evolve',
    subtitle: 'L\'esperienza di chi ha creduto nel processo e ha ottenuto risultati reali.',
    items: [
      { name: 'Raphael', quote: 'Lavorare con Lucas è stata un\'esperienza davvero positiva. Ciò che mi piace di più è che gli sta davvero a cuore il processo e comprende i miei obiettivi. Da quando ho iniziato a seguire il suo piano, ho perso 19kg, i miei allenamenti sono migliorati molto, il dolore al ginocchio è diminuito notevolmente e mi sento più sicuro e costante. È sempre disponibile ad aiutare e ad adattare ciò che serve. Sto davvero apprezzando il processo e sono entusiasta di continuare a migliorare.' },
      { name: 'Valentina', quote: 'Allenarmi con Lucas mi ha mostrato perché fa una così grande differenza nella vita degli allievi. Oltre a seguire da vicino il suo lavoro, ho vissuto questa esperienza anche come allieva. Fin dall\'inizio, ha voluto capire la mia routine, le mie abitudini e i miei obiettivi per creare una pianificazione davvero personalizzata che funzionasse per me. Non è il tipo di professionista che consegna solo un allenamento e una dieta. È sempre presente, guida e si preoccupa davvero dell\'evoluzione di ogni allievo. Come allieva, posso dire di aver già avuto ottimi risultati e, come qualcuno che segue il suo lavoro da vicino, sono ancora più certa della dedizione, della cura e dell\'affetto che mette in tutto ciò che fa.' },
      { name: 'Lautaro', quote: 'Metodo serio, professionale e con risultati che appaiono allo specchio prima del previsto.' },
    ],
  },
  faq: {
    label: 'Domande Frequenti',
    title: 'Tutto ciò che devi sapere',
    subtitle: 'Risposte chiare per iniziare in sicurezza.',
    items: [
      { q: 'Come funziona la consulenza?', a: 'Dopo esserti iscritto, scaricherai l\'applicazione "Prime Coaching", riceverai il tuo login e la password via e-mail, tutto avverrà lì. Dopo una valutazione dettagliata, creo un piano di allenamento personalizzato e una strategia di evoluzione. Verrà fissata una chiamata per spiegarti come seguire la pianificazione. Ricevi un coaching continuo.' },
      { q: 'Quanto tempo per vedere i risultati?', a: 'I primi risultati di solito compaiono nelle prime settimane. Ma i risultati duraturi e costanti emergono dopo 2-3 mesi. Trasformazioni costanti.' },
      { q: 'È per principianti?', a: 'Sì. Il coaching è completamente personalizzato e adattato al tuo livello — dal principiante assoluto all\'avanzato che cerca il livello successivo.' },
      { q: 'Il servizio è online?', a: 'Sì. Offro coaching online ovunque nel mondo, e anche in presenza. Entrambi i formati hanno lo stesso standard di eccellenza e vicinanza.' },
      { q: 'Come iniziare?', a: 'Basta cliccare sul pulsante WhatsApp. Parleremo dei tuoi obiettivi e, se possibile, fissiamo una chiamata per spiegarti come funzionano l\'app e il processo in modo più dettagliato. Se non hai tempo per una chiamata, ti invio una sequenza di slide che mostra visivamente il funzionamento dell\'app e dei piani di allenamento.' },
    ],
  },
  finalCta: {
    label: 'La tua trasformazione inizia ora',
    title: 'Il tuo prossimo risultato inizia oggi.',
    subtitle: 'Contattami ora e scopri come accelerare la tua trasformazione.',
    button: 'Inizia la Mia Trasformazione',
    micro: 'Risposta rapida • Servizio personalizzato • Senza impegno',
  },
  footer: {
    tagline: 'Coach di trasformazione fisica premium. Risultati reali, costanti e duraturi.',
    nav: 'Navigazione',
    contact: 'Contatto',
    language: 'Lingua',
    rights: 'Tutti i diritti riservati.',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    credit: 'Web design di',
    creditMessage: 'Ciao, ho visto la pagina che hai realizzato per "Lucas Franco Coaching", sarei interessato ad assumere i tuoi servizi.',
  },
  floating: 'Scrivimi',
  whatsappMessages: {
    hero: 'Ciao Lucas! Ho visto il tuo sito e voglio iniziare la mia trasformazione fisica. Puoi aiutarmi?',
    services: 'Ciao Lucas! Sono interessato ai tuoi servizi di coaching. Puoi spiegarmi come funziona?',
    finalCta: 'Ciao Lucas! Voglio accelerare la mia trasformazione. Come iniziamo?',
    floating: 'Ciao Lucas! Vorrei sapere di più sul tuo coaching.',
    nav: 'Ciao Lucas! Voglio iniziare ora la mia trasformazione fisica.',
  },
}

export const dictionaries: Record<Lang, Dict> = { pt, en, de, es, it }

type LanguageContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
  waLink: (message: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('lf-lang') as Lang | null) : null
    if (stored && ['pt', 'en', 'de', 'es', 'it'].includes(stored)) {
      setLangState(stored)
    }
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lf-lang', l)
      document.documentElement.lang = l === 'pt' ? 'pt-BR' : l
    }
  }, [])

  const waLink = useCallback(
    (message: string) =>
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    [],
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang], waLink }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
