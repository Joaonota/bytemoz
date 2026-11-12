// Conteúdo e configuração centralizados do website ByteMoz.
// Edite este ficheiro para atualizar contactos, redes sociais, soluções e projetos.

export const SITE = {
  name: "ByteMoz",
  slogan: "Conectamos tecnologia.",
  url: "https://bytemoz.co.mz",
  title: "ByteMoz — Soluções digitais e sistemas web em Moçambique",
  description:
    "A ByteMoz é uma empresa moçambicana de tecnologia: desenvolvimento de software e websites, redes e infraestrutura de TI, suporte técnico, segurança de dados e segurança eletrónica para empresas e organizações.",
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

export const SERVICE_GROUPS = [
  {
    id: "infra",
    title: "Infraestrutura, suporte e segurança",
    desc: "A base tecnológica que mantém a sua organização a funcionar com estabilidade e segurança.",
  },
  {
    id: "digital",
    title: "Software e soluções digitais",
    desc: "Sistemas, plataformas e websites desenvolvidos à medida das necessidades de cada organização.",
  },
] as const;

export const SERVICES = [
  {
    group: "infra",
    icon: "network",
    title: "Redes e infraestrutura de TI",
    desc: "Montagem, configuração, manutenção e gestão de redes informáticas, incluindo fornecimento e instalação de equipamentos de rede.",
  },
  {
    group: "infra",
    icon: "helpdesk",
    title: "Helpdesk e suporte técnico",
    desc: "Suporte técnico para computadores, sistemas e equipamentos informáticos, incluindo diagnóstico, manutenção, configuração e assistência aos utilizadores.",
  },
  {
    group: "infra",
    icon: "data",
    title: "Segurança de dados",
    desc: "Implementação de soluções para proteção, gestão e segurança de dados, contribuindo para reduzir riscos de perda, acesso não autorizado e outros incidentes.",
  },
  {
    group: "infra",
    icon: "cctv",
    title: "Segurança eletrónica",
    desc: "Montagem, configuração e assistência técnica de sistemas de segurança eletrónica, incluindo fornecimento dos equipamentos e materiais necessários para a instalação e manutenção.",
  },
  {
    group: "digital",
    icon: "software",
    title: "Desenvolvimento de software",
    desc: "Desenvolvimento de sistemas, aplicações, plataformas digitais e soluções personalizadas para empresas e organizações.",
  },
  {
    group: "digital",
    icon: "web",
    title: "Websites e soluções digitais",
    desc: "Criação de websites institucionais, plataformas e outras soluções digitais para fortalecer a presença e os processos digitais das empresas.",
  },
  {
    group: "digital",
    icon: "consulting",
    title: "Consultoria e soluções tecnológicas",
    desc: "Análise das necessidades tecnológicas de cada organização e implementação de soluções adequadas para melhorar processos, produtividade e segurança.",
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

// Projetos reais desenvolvidos pela ByteMoz. O primeiro aparece em destaque.
// Enquanto a lista estiver vazia, o site mostra uma estrutura de apresentação neutra.
export const PROJECTS: Project[] = [
  {
    title: "Click Creators Agency",
    category: "Website institucional",
    summary:
      "Website para uma agência criativa da Beira dedicada a redes sociais, conteúdo e produção audiovisual. Apresenta os serviços, o portfólio, a rede de criadores e os parceiros da agência, com versão em português e inglês e modo claro/escuro.",
    image: "/images/projetos/click-creators-agency.jpg",
    href: "https://www.clickcreatorsagency.com/",
    tags: ["Website", "Bilingue PT/EN", "Portfólio", "Modo claro/escuro"],
  },
];

export const PROJECT_TYPES = [
  "Redes e infraestrutura de TI",
  "Helpdesk e suporte técnico",
  "Segurança de dados",
  "Segurança eletrónica",
  "Desenvolvimento de software",
  "Website ou solução digital",
  "Consultoria tecnológica",
  "ByteMoz ERP",
  "Outro",
];
