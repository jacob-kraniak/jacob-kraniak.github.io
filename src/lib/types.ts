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
  rss: string;
}

export interface Quote {
  text: string;
  attribution: string;
}

export interface FeaturedRef {
  kind: "initiative" | "repo";
  id: string;
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
  featured: FeaturedRef[];
  certsHeading: string;
  certsLinkLabel: string;
  certsHref: string;
  certNextPrefix: string;
  certVerified: string;
  certProfileLabel: string;
  stackHeading: string;
  stack: string[];
}

export type RepoStatus = "active" | "quiet" | "idea";

export interface RepoItem {
  id: string;
  title: string;
  repo: string;
  status: RepoStatus;
  summary: string;
  note?: string;
  stack?: string[];
  tag?: string;
  siteHref?: string;
  siteLabel?: string;
}

export interface ReposPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  lede: string;
  initiativeLabel: string;
  initiativeHref: string;
  initiativeNote: string;
  items: RepoItem[];
}

export interface InitiativeLink {
  title: string;
  href: string;
  note: string;
}

export interface InitiativePhase {
  name: string;
  state: string;
  window: string;
  summary: string;
}

export interface InitiativePage {
  id: string;
  documentTitle: string;
  prompt: string;
  heading: string;
  lede: string;
  tag: string;
  status: string;
  summary: string;
  stack: string[];
  scope: string;
  tracksHeading: string;
  tracks: InitiativeLink[];
  phasesHeading: string;
  phases: InitiativePhase[];
  postsHeading: string;
  postsProject: string;
  postsLimit: number;
  postsLinkLabel: string;
  sourcesHeading: string;
  sources: { label: string; href: string }[];
}

export interface Referral {
  name: string;
  url: string | null;
  category: string;
  note: string;
  active: boolean;
}

export interface ReferralsPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  disclosure: string;
  empty: string;
  items: Referral[];
}

export interface PostsPage {
  documentTitle: string;
  prompt: string;
  heading: string;
  lede: string;
  empty: string;
  rssLabel: string;
  projectLabels: Record<string, string>;
  projectLinks: Record<string, string>;
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
