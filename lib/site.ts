// Conteúdo e configuração centralizados do website ByteMoz.
// Edite este ficheiro para atualizar contactos, redes sociais, soluções e projetos.

export const SITE = {
  name: "ByteMoz",
  slogan: "Conectamos tecnologia.",
  url: "https://bytemoz.co.mz",
  title: "ByteMoz — Soluções digitais e sistemas web em Moçambique",
  description:
    "A ByteMoz é uma empresa moçambicana de tecnologia que desenvolve sistemas web, plataformas, aplicações e soluções digitais personalizadas para empresas e empreendedores.",
  email: "bytemoz23@gmail.com",
  phoneDisplay: "+258 84 598 2017",
  phoneHref: "tel:+258845982017",
  whatsapp: "258845982017",
  location: "Beira, Moçambique",
};

// Preencha com os URLs oficiais. Redes sem URL não são apresentadas no site.
export const SOCIAL: { name: "LinkedIn" | "Facebook" | "Instagram"; href: string }[] = [
  { name: "LinkedIn", href: "" },
  { name: "Facebook", href: "" },
  { name: "Instagram", href: "" },
].filter((s) => s.href) as { name: "LinkedIn" | "Facebook" | "Instagram"; href: string }[];

export const NAV = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICES = [
  {
    icon: "web",
    title: "Desenvolvimento de sistemas web",
    desc: "Sistemas de gestão e plataformas internas acessíveis a partir do navegador, seguros e preparados para crescer com a sua organização.",
    items: ["Sistemas de gestão", "Portais e áreas reservadas", "Painéis administrativos"],
  },
  {
    icon: "apps",
    title: "Aplicações e plataformas digitais",
    desc: "Aplicações web e móveis que aproximam a sua empresa dos clientes e tornam os seus serviços acessíveis em qualquer lugar.",
    items: ["Aplicações móveis", "Plataformas de serviços", "Reservas e pedidos online"],
  },
  {
    icon: "automation",
    title: "Automação de processos",
    desc: "Eliminamos tarefas manuais e repetitivas, ligando sistemas e fluxos de trabalho para que a equipa se concentre no que importa.",
    items: ["Fluxos de aprovação", "Integração entre sistemas", "Relatórios automáticos"],
  },
  {
    icon: "enterprise",
    title: "Soluções empresariais personalizadas",
    desc: "Ferramentas desenhadas à medida da forma como a sua organização trabalha — da faturação ao controlo de stock e recursos humanos.",
    items: ["Gestão financeira", "Controlo de stock", "Recursos humanos"],
  },
  {
    icon: "product",
    title: "Desenvolvimento de produtos digitais",
    desc: "Da ideia ao lançamento: ajudamos a validar, desenhar e construir produtos digitais com foco no utilizador e no modelo de negócio.",
    items: ["Protótipos e MVP", "Design de interface", "Evolução contínua"],
  },
  {
    icon: "consulting",
    title: "Consultoria e soluções tecnológicas",
    desc: "Orientação técnica para decisões informadas: escolha de tecnologias, transformação digital e modernização de sistemas existentes.",
    items: ["Diagnóstico tecnológico", "Planeamento digital", "Modernização de sistemas"],
  },
] as const;

export const PROCESS = [
  {
    title: "Entendemos o problema",
    desc: "Ouvimos, observamos e fazemos as perguntas certas para perceber o desafio, os utilizadores e os objetivos do negócio.",
  },
  {
    title: "Planeamos a solução",
    desc: "Definimos o âmbito, as funcionalidades prioritárias, a arquitetura técnica e um calendário realista.",
  },
  {
    title: "Desenvolvemos",
    desc: "Construímos em ciclos curtos, com entregas frequentes que lhe permitem acompanhar e validar o progresso.",
  },
  {
    title: "Testamos e melhoramos",
    desc: "Testamos com utilizadores reais, corrigimos e afinamos até a solução funcionar como deve.",
  },
  {
    title: "Entregamos e acompanhamos",
    desc: "Colocamos a solução em funcionamento, apoiamos a equipa na adoção e continuamos presentes para suporte e evolução.",
  },
];

export const WHY = [
  {
    title: "Soluções personalizadas",
    desc: "Não vendemos pacotes genéricos. Cada solução é desenhada a partir dos processos e dos objetivos de quem a vai usar.",
  },
  {
    title: "Tecnologia moderna",
    desc: "Utilizamos tecnologias atuais, seguras e escaláveis, escolhidas pela adequação ao projeto e não pela moda.",
  },
  {
    title: "Foco nas necessidades do cliente",
    desc: "Comunicamos com clareza, envolvemos o cliente nas decisões e falamos a linguagem do negócio, não apenas a técnica.",
  },
  {
    title: "Desenvolvimento orientado a resultados",
    desc: "Medimos o sucesso pelo impacto real no dia a dia: menos tempo perdido, mais controlo e melhores decisões.",
  },
  {
    title: "Suporte e acompanhamento",
    desc: "A entrega é o início da relação. Mantemos, melhoramos e apoiamos a solução ao longo do tempo.",
  },
];

export type Product = {
  name: string;
  category: string;
  desc: string;
  features: string[];
  href: string;
};

// Produtos e plataformas da ByteMoz.
export const PRODUCTS: Product[] = [
  {
    name: "ByteMoz ERP",
    category: "Gestão empresarial",
    desc: "Plataforma de gestão que reúne numa só ferramenta as áreas essenciais de uma empresa, com informação centralizada e acessível a partir de qualquer lugar.",
    features: ["Financeiro", "Stock", "Recursos humanos", "Vendas", "Relatórios", "Documentos"],
    href: "#contacto",
  },
];

export type Project = {
  title: string;
  category: string;
  summary: string;
  image?: string; // caminho em /public, ex.: "/images/projetos/nome.jpg"
  href?: string;
  tags?: string[];
};

// Adicione aqui os projetos reais quando puderem ser publicados.
// Enquanto a lista estiver vazia, o site mostra uma estrutura de apresentação neutra.
export const PROJECTS: Project[] = [];

export const PROJECT_TYPES = [
  "Sistema web",
  "Aplicação ou plataforma digital",
  "Automação de processos",
  "Solução empresarial personalizada",
  "Produto digital",
  "Consultoria tecnológica",
  "ByteMoz ERP",
  "Outro",
];
