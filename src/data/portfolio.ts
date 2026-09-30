export type ProjectLink = {
  href: string
  labelKey: string
}

export type Accent = 'primary' | 'secondary' | 'tertiary'

export type FeaturedProject = {
  id: string
  index: string
  accent: Accent
  roleKey: string
  period: string
  teamKey: string
  metricKey?: string
  highlightKeys: string[]
  tech: string[]
  links: ProjectLink[]
}

export type AdditionalProject = {
  id: string
  period: string
  teamKey?: string
  tech: string[]
  links: ProjectLink[]
}

export type SkillGroup = {
  key: string
  accent: Accent
  items: string[]
  emphasis: string[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'kunux',
    index: '01',
    accent: 'primary',
    roleKey: 'projects.role.fullstack',
    period: '06/2026 – 08/2026',
    teamKey: 'projects.kunux.team',
    highlightKeys: ['projects.kunux.h1', 'projects.kunux.h2'],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Traefik'],
    links: [{ href: 'https://app.kunux.com', labelKey: 'projects.visit' }],
  },
  {
    id: 'zogux',
    index: '02',
    accent: 'secondary',
    roleKey: 'projects.role.frontend',
    period: '04/2026 – 06/2026',
    teamKey: 'projects.zogux.team',
    highlightKeys: ['projects.zogux.h1', 'projects.zogux.h2', 'projects.zogux.h3'],
    tech: ['React', 'TypeScript', 'REST API', 'GitLab', 'Jira', 'Figma'],
    links: [{ href: 'https://app.zogux.com', labelKey: 'projects.visit' }],
  },
  {
    id: 'pouchpay',
    index: '03',
    accent: 'tertiary',
    roleKey: 'projects.role.mobile',
    period: '03/2025 – 08/2026',
    teamKey: 'projects.pouchpay.team',
    highlightKeys: ['projects.pouchpay.h1', 'projects.pouchpay.h2'],
    tech: ['Android', 'Java', 'Kotlin', 'Swift', 'Realm', 'SQLite', 'Web3'],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=global.alltra.app', labelKey: 'projects.playStore' },
      { href: 'https://apps.apple.com/us/app/pouchpay-alltra-wallet/id6748115292', labelKey: 'projects.appStore' },
    ],
  },
  {
    id: 'bitgert',
    index: '04',
    accent: 'primary',
    roleKey: 'projects.role.rn',
    period: '12/2022 – 02/2023, 2025',
    teamKey: 'projects.bitgert.team',
    metricKey: 'projects.bitgert.metricShort',
    highlightKeys: ['projects.bitgert.h1', 'projects.bitgert.h2'],
    tech: ['React Native', 'Redux', 'REST API', 'WebSocket'],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=exchange.bitgert.app', labelKey: 'projects.playStore' },
    ],
  },
]

export const additionalProjects: AdditionalProject[] = [
  {
    id: 'booking',
    period: '05/2026 – 07/2026',
    tech: ['Next.js', 'Go', 'PostgreSQL'],
    links: [{ href: 'https://booking.lntpartners.com', labelKey: 'projects.visit' }],
  },
  {
    id: 'shop',
    period: '2026 – 08/2026',
    teamKey: 'projects.shop.team',
    tech: ['Next.js', 'Laravel', 'PostgreSQL'],
    links: [{ href: 'https://github.com/phuongnamngo/shop-ecommerce', labelKey: 'projects.github' }],
  },
  {
    id: 'fliam',
    period: '03/2022 – 03/2024',
    teamKey: 'projects.fliam.team',
    tech: ['Laravel', 'PHP', 'MySQL'],
    links: [{ href: 'https://fliam.com', labelKey: 'projects.visit' }],
  },
  {
    id: 'carefor',
    period: '04/2022 – 09/2022',
    teamKey: 'projects.carefor.team',
    tech: ['OpenCart', 'PHP', 'React Native'],
    links: [
      { href: 'https://www.careforvietnam.vn/', labelKey: 'projects.visit' },
      { href: 'https://play.google.com/store/apps/details?id=vn.careforvietnam.appcrm', labelKey: 'projects.playStore' },
    ],
  },
  {
    id: 'nexdax',
    period: '09/2023 – 08/2026',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    links: [{ href: 'https://play.google.com/store/apps/details?id=com.nexdax', labelKey: 'projects.playStore' }],
  },
  {
    id: 'taptap',
    period: '03/2026 – 04/2026',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    links: [
      { href: 'https://t.me/fivedax_tap_bot', labelKey: 'projects.telegram' },
      { href: 'https://claim-admin.5dax.com', labelKey: 'projects.admin' },
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    key: 'skills.frontend',
    accent: 'primary',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'React Query'],
    emphasis: ['TypeScript', 'Next.js'],
  },
  {
    key: 'skills.mobile',
    accent: 'secondary',
    items: ['React Native', 'Android', 'Java', 'Kotlin', 'Swift'],
    emphasis: ['React Native'],
  },
  {
    key: 'skills.backend',
    accent: 'tertiary',
    items: ['Node.js', 'Laravel', 'PHP', 'REST API', 'WebSocket'],
    emphasis: ['Node.js', 'Laravel'],
  },
  {
    key: 'skills.database',
    accent: 'primary',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'SQLite'],
    emphasis: ['PostgreSQL'],
  },
  {
    key: 'skills.devops',
    accent: 'secondary',
    items: ['Docker', 'Linux', 'Git', 'GitHub', 'GitLab', 'Jira', 'Traefik'],
    emphasis: ['Docker', 'Traefik'],
  },
  {
    key: 'skills.cat.ai',
    accent: 'tertiary',
    items: ['Cursor', 'OpenAI Codex', 'Hermes Agent', 'Antigravity', 'MCP'],
    emphasis: ['Cursor', 'MCP'],
  },
]

export const NAV = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.work' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'workflow', labelKey: 'nav.workflow' },
  { id: 'contact', labelKey: 'nav.contact' },
] as const

export const GITHUB = 'https://github.com/phuongnamngo'
export const LINKEDIN = 'https://www.linkedin.com/in/ngo-phuong-nam-660a29268'
export const EMAIL = 'ngophuongnam5622@gmail.com'
export const PHONE = '0339805622'
export const PHONE_DISPLAY = '033 980 5622'
