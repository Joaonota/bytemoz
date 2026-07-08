// ─── ByteMoz — Centralized Data ─────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "ByteMoz",
  tagline: "Transformamos ideias em soluções tecnológicas.",
  description:
    "Desenvolvimento de sistemas, websites, aplicações móveis, suporte informático, cibersegurança e soluções digitais para empresas e organizações em Moçambique.",
  url: "https://bytemoz.co.mz",
  email: "info@bytemoz.co.mz",
  phone: "+258 84 000 0000",
  whatsapp: "+258840000000",
  address: "Maputo, Moçambique",
  social: {
    facebook:  "https://facebook.com/bytemoz",
    instagram: "https://instagram.com/bytemoz",
    linkedin:  "https://linkedin.com/company/bytemoz",
    twitter:   "https://twitter.com/bytemoz",
    youtube:   "https://youtube.com/@bytemoz",
  },
};

export const NAV_LINKS = [
  { label: "Início",      href: "#hero" },
  { label: "Sobre",       href: "#sobre" },
  { label: "Serviços",    href: "#servicos" },
  { label: "Portfólio",   href: "#portfolio" },
  { label: "Processo",    href: "#processo" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "FAQ",         href: "#faq" },
  { label: "Contacto",    href: "#contacto" },
];

export const SERVICES = [
  {
    icon: "Code2",
    title: "Desenvolvimento de Sistemas",
    description: "Sistemas empresariais personalizados, ERPs, CRMs e plataformas web escaláveis construídas com as melhores tecnologias.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: "Globe",
    title: "Desenvolvimento Web",
    description: "Websites institucionais, portais corporativos e aplicações web modernas com design premium e alta performance.",
    color: "from-primary to-blue-dark",
  },
  {
    icon: "Smartphone",
    title: "Aplicações Mobile",
    description: "Apps nativas e híbridas para Android e iOS com experiência de utilizador premium usando Flutter e React Native.",
    color: "from-secondary to-emerald-600",
  },
  {
    icon: "HeadphonesIcon",
    title: "Suporte Informático",
    description: "Suporte técnico remoto e presencial para empresas, com resolução rápida de problemas e manutenção preventiva.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: "Cpu",
    title: "Manutenção de Computadores",
    description: "Diagnóstico, reparação e upgrades de hardware para computadores portáteis e desktops de todas as marcas.",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: "Network",
    title: "Redes Informáticas",
    description: "Instalação, configuração e manutenção de redes LAN, WAN, Wi-Fi e infraestruturas de telecomunicações.",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: "Shield",
    title: "Cibersegurança",
    description: "Proteção dos seus sistemas contra ameaças digitais, auditorias de segurança, firewalls e encriptação de dados.",
    color: "from-red-500 to-red-700",
  },
  {
    icon: "Server",
    title: "Hospedagem de Websites",
    description: "Hosting de alta performance, servidores dedicados, SSL gratuito e suporte 24/7 para o seu website.",
    color: "from-primary to-cyan-500",
  },
  {
    icon: "Layers",
    title: "Landing Pages",
    description: "Páginas de conversão optimizadas para campanhas de marketing digital, com design persuasivo e alta taxa de conversão.",
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: "ShoppingCart",
    title: "Lojas Online",
    description: "E-commerce completo com gestão de produtos, pagamentos integrados, painel de administração e experiência de compra premium.",
    color: "from-secondary to-teal-600",
  },
  {
    icon: "Zap",
    title: "Automação Empresarial",
    description: "Automatização de processos repetitivos, fluxos de trabalho inteligentes e integrações para aumentar a produtividade.",
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: "Lightbulb",
    title: "Consultoria em TI",
    description: "Assessoria estratégica em tecnologia, transformação digital e planeamento de infraestrutura para o crescimento da sua empresa.",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: "Database",
    title: "Bases de Dados",
    description: "Design, optimização e administração de bases de dados relacionais e NoSQL para máxima performance e segurança.",
    color: "from-blue-dark to-indigo-800",
  },
  {
    icon: "HardDrive",
    title: "Backup e Recuperação",
    description: "Soluções de backup automatizado e planos de recuperação de desastres para proteger os seus dados críticos.",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: "GitMerge",
    title: "Integração de Sistemas",
    description: "Conexão e sincronização entre plataformas distintas via APIs, webhooks e middleware para fluxo contínuo de dados.",
    color: "from-violet-500 to-violet-700",
  },
  {
    icon: "Cloud",
    title: "Cloud Computing",
    description: "Migração, gestão e optimização de infraestruturas na nuvem com AWS, Google Cloud e Microsoft Azure.",
    color: "from-sky-500 to-sky-700",
  },
  {
    icon: "ServerCog",
    title: "Instalação de Servidores",
    description: "Instalação e configuração de servidores físicos e virtuais, com sistemas operativos Linux e Windows Server.",
    color: "from-slate-500 to-slate-700",
  },
  {
    icon: "Wrench",
    title: "Assistência Técnica",
    description: "Assistência técnica rápida e especializada para qualquer problema informático, presencial ou remotamente.",
    color: "from-rose-500 to-rose-700",
  },
];

export const WHY_US = [
  { icon: "Zap",          label: "Atendimento Rápido",       desc: "Resposta em menos de 2 horas para qualquer solicitação." },
  { icon: "Settings2",    label: "Soluções Personalizadas",  desc: "Cada projecto é desenvolvido sob medida para as suas necessidades." },
  { icon: "Users",        label: "Equipa Qualificada",       desc: "Profissionais certificados e com anos de experiência no mercado." },
  { icon: "Cpu",          label: "Tecnologia Moderna",       desc: "Utilizamos as mais recentes tecnologias e frameworks do mercado." },
  { icon: "Shield",       label: "Segurança Garantida",      desc: "Todos os nossos projectos seguem as melhores práticas de segurança." },
  { icon: "HeadphonesIcon", label: "Suporte Contínuo",       desc: "Acompanhamento pós-entrega e suporte técnico permanente." },
  { icon: "TrendingUp",   label: "Projectos Escaláveis",     desc: "Arquitecturas pensadas para crescer com o seu negócio." },
  { icon: "BadgeCheck",   label: "Qualidade Garantida",      desc: "Testes rigorosos e controlo de qualidade em cada entrega." },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "VipMoza Platform",
    category: "Sistemas",
    description: "Plataforma de gestão de membros VIP com dashboard analítico, pagamentos e relatórios em tempo real.",
    image: "/images/portfolio/vipmoza.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
    url: "#",
  },
  {
    id: 2,
    title: "InviteHub",
    category: "Websites",
    description: "Website premium para criação e gestão de convites digitais com RSVP e partilha em redes sociais.",
    image: "/images/portfolio/invitehub.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "#",
  },
  {
    id: 3,
    title: "MobConcert App",
    category: "Mobile",
    description: "Aplicação móvel para descoberta e compra de bilhetes para eventos musicais em Moçambique.",
    image: "/images/portfolio/mobconcert.jpg",
    tags: ["Flutter", "Firebase", "Dart"],
    url: "#",
  },
  {
    id: 4,
    title: "TrackSecure",
    category: "Sistemas",
    description: "Sistema de rastreamento e gestão de activos empresariais com alertas em tempo real via GPS.",
    image: "/images/portfolio/tracksecure.jpg",
    tags: ["React", "Python", "MongoDB"],
    url: "#",
  },
  {
    id: 5,
    title: "SioraEdu",
    category: "Websites",
    description: "Plataforma educacional com cursos online, quizzes interactivos e certificados digitais.",
    image: "/images/portfolio/sioraedu.jpg",
    tags: ["Next.js", "Laravel", "MySQL"],
    url: "#",
  },
  {
    id: 6,
    title: "NexaWeb Agency",
    category: "Landing Pages",
    description: "Landing page premium para agência digital com animações 3D e formulário de contacto integrado.",
    image: "/images/portfolio/nexaweb.jpg",
    tags: ["HTML5", "CSS3", "GSAP"],
    url: "#",
  },
];

export const PORTFOLIO_FILTERS = ["Todos", "Websites", "Sistemas", "Mobile", "Landing Pages", "Design"];

export const PROCESS_STEPS = [
  { icon: "MessageCircle", title: "Contacto",                desc: "Recebemos a sua mensagem e marcamos uma reunião inicial gratuita." },
  { icon: "ClipboardList",  title: "Levantamento",           desc: "Analisamos os seus requisitos e objectivos de negócio em detalhe." },
  { icon: "Map",            title: "Planeamento",            desc: "Elaboramos um plano detalhado, cronograma e proposta financeira." },
  { icon: "Figma",          title: "Design",                 desc: "Criamos protótipos e wireframes para validação antes do desenvolvimento." },
  { icon: "Code2",          title: "Desenvolvimento",        desc: "A nossa equipa constrói a solução com as melhores tecnologias disponíveis." },
  { icon: "TestTube",       title: "Testes",                 desc: "Realizamos testes rigorosos de qualidade, segurança e performance." },
  { icon: "Rocket",         title: "Entrega",                desc: "Lançamos o produto e garantimos uma transição suave para o cliente." },
  { icon: "HeadphonesIcon", title: "Suporte",                desc: "Prestamos suporte técnico contínuo e actualizações regulares." },
];

export const TECHNOLOGIES = [
  { name: "HTML5",          color: "#E34F26" },
  { name: "CSS3",           color: "#1572B6" },
  { name: "JavaScript",     color: "#F7DF1E" },
  { name: "TypeScript",     color: "#3178C6" },
  { name: "React",          color: "#61DAFB" },
  { name: "Next.js",        color: "#000000" },
  { name: "Node.js",        color: "#339933" },
  { name: "PHP",            color: "#777BB4" },
  { name: "Laravel",        color: "#FF2D20" },
  { name: "Python",         color: "#3776AB" },
  { name: "Flutter",        color: "#02569B" },
  { name: "Dart",           color: "#0175C2" },
  { name: "Java",           color: "#007396" },
  { name: "MySQL",          color: "#4479A1" },
  { name: "PostgreSQL",     color: "#336791" },
  { name: "Firebase",       color: "#FFCA28" },
  { name: "Docker",         color: "#2496ED" },
  { name: "Git",            color: "#F05032" },
  { name: "Linux",          color: "#FCC624" },
  { name: "Windows Server", color: "#0078D6" },
];

export const TESTIMONIALS = [
  {
    name: "Carlos Machava",
    company: "Machava & Associados",
    role: "Director Geral",
    comment: "A ByteMoz desenvolveu o nosso sistema de gestão e transformou completamente a nossa operação. Profissionalismo e qualidade acima das expectativas!",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "Ana Sitoe",
    company: "TechMoz Solutions",
    role: "CEO",
    comment: "Serviço excelente! A equipa da ByteMoz entendeu perfeitamente as nossas necessidades e entregou um website premium que superou tudo o que esperávamos.",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "João Bila",
    company: "Bila Importações",
    role: "Sócio-Gerente",
    comment: "O suporte da ByteMoz é simplesmente extraordinário. Sempre disponíveis, respostas rápidas e soluções eficazes. Recomendo a qualquer empresa!",
    rating: 5,
    avatar: "JB",
  },
  {
    name: "Fátima Nhantumbo",
    company: "Escola Moderna Maputo",
    role: "Directora",
    comment: "A nossa plataforma educacional desenvolvida pela ByteMoz revolucionou o ensino na nossa escola. Alunos e professores adoram!",
    rating: 5,
    avatar: "FN",
  },
  {
    name: "Pedro Cossa",
    company: "Cossa Logística",
    role: "Director de TI",
    comment: "Eles entregaram um sistema de rastreamento complexo dentro do prazo e do orçamento. Equipa altamente competente e comprometida.",
    rating: 5,
    avatar: "PC",
  },
];

export const STATS = [
  { value: 150, label: "Projectos Concluídos",     suffix: "+" },
  { value: 80,  label: "Clientes Satisfeitos",     suffix: "+" },
  { value: 5,   label: "Anos de Experiência",      suffix: "+" },
  { value: 24,  label: "Suporte (Horas/dia)",      suffix: "/7" },
  { value: 50,  label: "Mil Linhas de Código",     suffix: "K+" },
];

export const FAQS = [
  {
    q: "Quanto tempo demora a desenvolver um website?",
    a: "O tempo depende da complexidade do projecto. Um website institucional simples leva entre 2 a 4 semanas, enquanto sistemas complexos ou e-commerce podem levar de 2 a 4 meses. Fornecemos sempre um cronograma detalhado no início do projecto.",
  },
  {
    q: "Como funciona o processo de pagamento?",
    a: "Trabalhamos com pagamentos faseados: 40% no início do projecto (assinatura do contrato), 30% na aprovação do design, e 30% na entrega final. Aceitamos transferência bancária, M-Pesa e pagamento por cartão.",
  },
  {
    q: "Oferecem suporte após a entrega do projecto?",
    a: "Sim! Oferecemos suporte técnico contínuo após a entrega. Todos os nossos projectos incluem um período de garantia de 3 meses. Também disponibilizamos planos de manutenção mensal com actualizações, backups e suporte prioritário.",
  },
  {
    q: "O meu website ficará em primeiro lugar no Google?",
    a: "Todos os nossos websites são desenvolvidos com SEO técnico optimizado: estrutura semântica, meta tags, velocidade de carregamento, sitemap e schema.org. O posicionamento nos motores de busca depende também de estratégia de conteúdo e link building, para o qual oferecemos consultoria adicional.",
  },
  {
    q: "Trabalham com clientes fora de Maputo?",
    a: "Absolutamente! Trabalhamos com clientes em todo o país e também internacionalmente. Todo o processo pode ser feito remotamente via videoconferência, email e plataformas de gestão de projectos.",
  },
  {
    q: "Posso actualizar o meu website sozinho após a entrega?",
    a: "Sim! Todos os nossos websites incluem um painel de administração intuitivo que lhe permite actualizar conteúdo, imagens e textos sem necessitar de conhecimentos técnicos. Fornecemos também formação para a sua equipa.",
  },
  {
    q: "Que tecnologias utilizam para o desenvolvimento?",
    a: "Utilizamos as tecnologias mais modernas do mercado: Next.js, React, TypeScript, Laravel, Flutter, Node.js, entre outras. A escolha depende sempre das necessidades específicas do projecto para garantir a melhor performance e escalabilidade.",
  },
  {
    q: "Como posso solicitar um orçamento?",
    a: "Pode solicitar um orçamento através do formulário de contacto neste site, por email (info@bytemoz.co.mz) ou via WhatsApp. A consulta inicial é completamente gratuita e sem compromisso.",
  },
];
