export interface NavItem {
  id: string;
  href: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SiteContent {
  url: string;
  title: string;
  description: string;
  ogImage: string;
  transitions: boolean;
  identity: {
    handle: string;
    avatar: string;
    avatarAlt: string;
    subtitle: string;
    githubUser: string;
  };
  sidebar: {
    statusLabel: string;
    status: string;
    nextLabel: string;
  };
  nav: NavItem[];
  footer: {
    name: string;
    credit: string;
    socials: SocialLink[];
  };
}

export interface Quote {
  text: string;
  attribution: string;
}

export interface HomeContent {
  prompt: string;
  name: string;
  role: string;
  bio: string;
  researchFocus: string;
  quotePrompt: string;
  quotes: Quote[];
  projectsHeading: string;
  projectsLinkLabel: string;
  projectsHref: string;
  featured: string[];
  certsHeading: string;
  certsLinkLabel: string;
  certsHref: string;
  certNextPrefix: string;
  certVerified: string;
  certProfileLabel: string;
  stackHeading: string;
  stack: string[];
}

export interface Project {
  id: string;
  repo: string | null;
  url?: string | null;
  title: string;
  tag: string;
  status: string;
  summary: string;
  notes: string[];
  next: string;
  stack: string[];
  placeholder?: boolean;
}

export interface ProjectsPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  lede: string;
  diagramsNote: string;
}

export interface TrackedLink {
  label: string;
  href: string;
}

export interface CertsPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  roadmapHeading: string;
  nextPrefix: string;
  laterPrefix: string;
  later: string;
  trackedPrefix: string;
  trackedJoiner: string;
  tracked: TrackedLink[];
}

export interface Cert {
  id: string;
  name: string;
  short: string;
  issuer: string;
  status: string;
  issued: string;
  expires: string | null;
  img: string;
  credly: string;
  tracker: string;
}

export interface CertFile {
  _source?: string;
  profile: string;
  next: string[];
  certs: Cert[];
}

export interface RichLink {
  label: string;
  href: string;
}

export interface SocialHandle {
  label: string;
  handle: string;
  href: string;
}

export interface LiEvsPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  lede: string;
  missionHeading: string;
  mission: string[];
  socialsHeading: string;
  socials: SocialHandle[];
  newsHeading: string;
  news: string[];
  sourceLabel: string;
  sourceHref: string;
  sourceText: string;
}

export interface ResearchHandle {
  name: string;
  value: string;
  href?: string;
}

export interface Finding {
  title: string;
  href?: string;
  note?: string;
}

export interface ResearchPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  lede: string;
  handlesHeading: string;
  handles: ResearchHandle[];
  findingsHeading: string;
  findingsPlaceholder: string;
  findings: Finding[];
  repoLabel: string;
  repoHref: string;
  repoText: string;
}

export interface OssLink {
  href: string;
  label: string;
}

export interface OssItem {
  title: string;
  blurb: string;
  links: OssLink[];
}

export interface OssPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  lede: string;
  items: OssItem[];
}

export interface CvPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  blocks: string[];
}

export interface ContactPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  methodsHeading: string;
  methods: string[];
  hihelloHeading: string;
  hihello: string;
  note: string;
}
