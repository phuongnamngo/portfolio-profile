'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Copy,
  Check,
  Menu,
  X,
} from 'lucide-react'
import { useLanguage } from './providers/language-provider'
import { LanguageToggle } from './component/language-toggle'
import { ThemeToggle } from './component/theme-toggle'

type ProjectLink = {
  href: string
  labelKey: string
}

type Project = {
  id: string
  period: string
  teamKey?: string
  metricKey?: string
  descKey: string
  highlightKeys: string[]
  tech: string[]
  links: ProjectLink[]
}

const featuredProjects: Project[] = [
  {
    id: 'bitgert',
    period: '12/2022 – 02/2023, 2025',
    teamKey: 'projects.bitgert.team',
    metricKey: 'projects.bitgert.metric',
    descKey: 'projects.bitgert.desc',
    highlightKeys: ['projects.bitgert.h1', 'projects.bitgert.h2'],
    tech: ['React Native', 'WebSocket', 'Redux', 'REST API'],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=exchange.bitgert.app', labelKey: 'projects.playStore' },
    ],
  },
  {
    id: 'fliam',
    period: '03/2022 – 03/2024',
    teamKey: 'projects.fliam.team',
    descKey: 'projects.fliam.desc',
    highlightKeys: ['projects.fliam.h1', 'projects.fliam.h2'],
    tech: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS/JavaScript'],
    links: [{ href: 'https://fliam.com', labelKey: 'projects.visit' }],
  },
  {
    id: 'carefor',
    period: '04/2022 – 09/2022',
    teamKey: 'projects.carefor.team',
    descKey: 'projects.carefor.desc',
    highlightKeys: ['projects.carefor.h1', 'projects.carefor.h2'],
    tech: ['OpenCart', 'PHP (MVC)', 'REST API', 'React Native', 'Redux', 'FCM'],
    links: [
      { href: 'https://www.careforvietnam.vn/', labelKey: 'projects.visit' },
      { href: 'https://play.google.com/store/apps/details?id=vn.careforvietnam.appcrm', labelKey: 'projects.playStore' },
    ],
  },
  {
    id: 'kunux',
    period: '06/2026 – 08/2026',
    teamKey: 'projects.kunux.team',
    descKey: 'projects.kunux.desc',
    highlightKeys: ['projects.kunux.h1', 'projects.kunux.h2'],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Traefik'],
    links: [{ href: 'https://app.kunux.com', labelKey: 'projects.visit' }],
  },
  {
    id: 'pouchpay',
    period: '03/2025 – 08/2026',
    teamKey: 'projects.pouchpay.team',
    descKey: 'projects.pouchpay.desc',
    highlightKeys: ['projects.pouchpay.h1', 'projects.pouchpay.h2'],
    tech: ['Android (Java/Kotlin)', 'iOS (Swift)', 'Web3 dApp Browser', 'Realm', 'SQLite'],
    links: [
      { href: 'https://play.google.com/store/apps/details?id=global.alltra.app', labelKey: 'projects.playStore' },
      { href: 'https://apps.apple.com/us/app/pouchpay-alltra-wallet/id6748115292', labelKey: 'projects.appStore' },
    ],
  },
  {
    id: 'zogux',
    period: '04/2026 – 06/2026',
    teamKey: 'projects.zogux.team',
    descKey: 'projects.zogux.desc',
    highlightKeys: ['projects.zogux.h1', 'projects.zogux.h2', 'projects.zogux.h3'],
    tech: ['React', 'TypeScript', 'Jira', 'GitLab', 'Figma'],
    links: [{ href: 'https://app.zogux.com', labelKey: 'projects.visit' }],
  },
]

const otherProjects: Project[] = [
  {
    id: 'booking',
    period: '05/2026 – 07/2026',
    descKey: 'projects.booking.desc',
    highlightKeys: [],
    tech: ['Next.js', 'Go', 'PostgreSQL'],
    links: [{ href: 'https://booking.lntpartners.com', labelKey: 'projects.visit' }],
  },
  {
    id: 'shop',
    period: '2026 – 08/2026',
    teamKey: 'projects.shop.team',
    descKey: 'projects.shop.desc',
    highlightKeys: [],
    tech: ['Next.js', 'Laravel', 'PostgreSQL'],
    links: [{ href: 'https://github.com/phuongnamngo/shop-ecommerce', labelKey: 'projects.github' }],
  },
  {
    id: 'nexdax',
    period: '09/2023 – 08/2026',
    descKey: 'projects.nexdax.desc',
    highlightKeys: [],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Redux'],
    links: [{ href: 'https://play.google.com/store/apps/details?id=com.nexdax', labelKey: 'projects.playStore' }],
  },
  {
    id: 'taptap',
    period: '03/2026 – 04/2026',
    descKey: 'projects.taptap.desc',
    highlightKeys: [],
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    links: [
      { href: 'https://t.me/fivedax_tap_bot', labelKey: 'projects.telegram' },
      { href: 'https://claim-admin.5dax.com', labelKey: 'projects.admin' },
    ],
  },
]

const skillGroups = [
  { key: 'skills.cat.languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Java'] },
  { key: 'skills.cat.frameworks', items: ['React', 'Next.js', 'React Native', 'Laravel', 'Node.js'] },
  { key: 'skills.cat.data', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'REST API', 'WebSocket'] },
  { key: 'skills.cat.tools', items: ['Linux', 'Docker', 'Git', 'Redux', 'React Query'] },
  { key: 'skills.cat.ai', items: ['Cursor', 'OpenAI Codex', 'Antigravity', 'MCP'] },
]

const NAV = [
  { id: 'work', labelKey: 'nav.work' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'contact', labelKey: 'nav.contact' },
] as const

function ProjectLinks({
  links,
  t,
}: {
  links: ProjectLink[]
  t: (key: string) => string
}) {
  return (
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:text-ink"
        >
          {t(link.labelKey)}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, language } = useLanguage()
  const cvHref = language === 'vi' ? '/cv/CV-NamNgo_VI.pdf' : '/cv/CV-NamNgo_EN.pdf'
  const lead = featuredProjects[0]
  const restFeatured = featuredProjects.slice(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      const sections = ['home', ...NAV.map((item) => item.id)]
      let current = 'home'
      for (const id of sections) {
        const element = document.getElementById(id)
        if (!element) continue
        if (scrollPosition >= element.offsetTop) current = id
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <header className="fixed top-0 z-50 w-full border-b border-line bg-paper">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-5 sm:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="shrink-0 text-[0.95rem] font-semibold tracking-tight"
          >
            Ngô Phương Nam
          </button>

          <nav className="ml-auto hidden items-center gap-7 md:flex" aria-label="Page">
            {NAV.map(({ id, labelKey }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`text-sm transition-colors ${
                  activeSection === id ? 'font-semibold text-ink' : 'text-muted hover:text-ink'
                }`}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                {t(labelKey)}
              </button>
            ))}
          </nav>

          <div className="ml-4 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center text-ink md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-line px-5 py-4 md:hidden" aria-label="Mobile">
            <div className="flex flex-col gap-3">
              {NAV.map(({ id, labelKey }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`text-left text-base ${
                    activeSection === id ? 'font-semibold text-ink' : 'text-muted'
                  }`}
                >
                  {t(labelKey)}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <p className="text-signal">{t('identity.role')}</p>
              <h1 className="mt-3 text-[2.4rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
                Ngô Phương Nam
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">
                {t('hero.pitch')}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('work')}
                  className="inline-flex items-center bg-signal px-5 py-2.5 text-sm font-semibold text-paper hover:opacity-90"
                >
                  {t('hero.viewWork')}
                </button>
                <a
                  href={cvHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-line px-5 py-2.5 text-sm font-medium hover:border-ink"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t('identity.downloadCV')}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {t('identity.location')}
                </span>
                <a href="https://github.com/phuongnamngo" target="_blank" rel="noreferrer" className="hover:text-ink">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ngo-phuong-nam-660a29268" target="_blank" rel="noreferrer" className="hover:text-ink">
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <Image
                  src="/images/avatar.png"
                  alt="Ngô Phương Nam"
                  width={726}
                  height={695}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t('projects.title')}
              </h2>
            </div>

            <article className="mt-12 grid gap-10 border-b border-line pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="text-5xl font-semibold tracking-tight text-award sm:text-6xl">
                  {t('projects.bitgert.metricShort')}
                </p>
                <p className="mt-2 text-sm text-muted">{t('projects.bitgert.metricLabel')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t(`projects.${lead.id}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {lead.period} ({t(lead.teamKey!)})
                </p>
                <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink/90">
                  {t(lead.descKey)}
                </p>
                <ul className="mt-5 max-w-2xl space-y-2 text-[0.95rem] leading-relaxed text-ink/80">
                  {lead.highlightKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted">{lead.tech.join(', ')}</p>
                <ProjectLinks links={lead.links} t={t} />
              </div>
            </article>

            <div className="mt-4 divide-y divide-line">
              {restFeatured.map((project) => (
                <article key={project.id} className="grid gap-6 py-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-12">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {t(`projects.${project.id}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {project.teamKey ? `${project.period} (${t(project.teamKey)})` : project.period}
                    </p>
                    <p className="mt-4 hidden text-sm text-muted md:block">{project.tech.join(', ')}</p>
                  </div>
                  <div>
                    <p className="text-[1.02rem] leading-relaxed text-ink/90">{t(project.descKey)}</p>
                    {project.highlightKeys.length > 0 && (
                      <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-ink/80">
                        {project.highlightKeys.map((key) => (
                          <li key={key}>{t(key)}</li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-4 text-sm text-muted md:hidden">{project.tech.join(', ')}</p>
                    <ProjectLinks links={project.links} t={t} />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t border-line pt-12">
              <h3 className="text-lg font-semibold tracking-tight">{t('projects.otherTitle')}</h3>
              <ul className="mt-6">
                {otherProjects.map((project) => (
                  <li
                    key={project.id}
                    className="grid gap-2 border-b border-line py-5 sm:grid-cols-[minmax(0,12rem)_1fr_auto] sm:items-baseline sm:gap-8"
                  >
                    <p className="font-semibold tracking-tight">{t(`projects.${project.id}.title`)}</p>
                    <p className="text-sm leading-relaxed text-ink/80">
                      {t(project.descKey)}{' '}
                      <span className="text-muted">{project.tech.join(', ')}</span>
                    </p>
                    <div className="flex flex-wrap gap-x-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-signal hover:text-ink"
                        >
                          {t(link.labelKey)}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('about.title')}</h2>
            <div>
              <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink/90">
                {t('summary.body')}
              </p>

              <div className="mt-10 space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.key}>
                    <p className="text-sm font-semibold">{t(group.key)}</p>
                    <p className="mt-1 text-[0.95rem] text-ink/80">{group.items.join(', ')}</p>
                  </div>
                ))}
                <div>
                  <p className="text-sm font-semibold">{t('skills.cat.spoken')}</p>
                  <p className="mt-1 text-[0.95rem] text-ink/80">{t('skills.spoken')}</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-sm font-semibold">{t('edu.title')}</p>
                <p className="mt-2 text-[1.02rem] font-medium">{t('edu.school')}</p>
                <p className="text-sm text-muted">
                  {t('edu.major')}, {t('edu.period')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('exp.title')}</h2>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <article>
                <p className="text-sm text-muted">{t('exp.job1.period')}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{t('exp.job1.role')}</h3>
                <p className="mt-1 text-signal">{t('exp.job1.company')}</p>
                <ul className="mt-5 space-y-2.5 text-[0.95rem] leading-relaxed text-ink/85">
                  {['exp.job1.bullet1', 'exp.job1.bullet2', 'exp.job1.bullet3'].map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-award">{t('exp.job1.achievementTitle')}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/85">
                  {t('exp.job1.achievement')}
                </p>
              </article>

              <article>
                <p className="text-sm text-muted">{t('exp.job2.period')}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{t('exp.job2.role')}</h3>
                <p className="mt-1 text-signal">{t('exp.job2.company')}</p>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/85">
                  {t('exp.job2.bullet1')}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-line px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('contact.title')}</h2>
            <p className="mt-4 max-w-xl text-lg text-ink/85">{t('contact.lead')}</p>

            <a
              href="mailto:ngophuongnam5622@gmail.com"
              className="mt-8 inline-block text-2xl font-semibold tracking-tight hover:text-signal sm:text-3xl"
            >
              ngophuongnam5622@gmail.com
            </a>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              <div>
                <p className="text-sm text-muted">{t('contact.phone')}</p>
                <div className="mt-1 flex items-center gap-3">
                  <a href="tel:0339805622" className="text-lg font-medium hover:text-signal">
                    033 980 5622
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('0339805622', 'phone')}
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink"
                  >
                    {copiedField === 'phone' ? <Check className="h-3.5 w-3.5 text-signal" /> : <Copy className="h-3.5 w-3.5" />}
                    {copiedField === 'phone' ? t('contact.copied') : t('contact.copy')}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted">{t('contact.email')}</p>
                <div className="mt-1 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleCopy('ngophuongnam5622@gmail.com', 'email')}
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink"
                  >
                    {copiedField === 'email' ? <Check className="h-3.5 w-3.5 text-signal" /> : <Copy className="h-3.5 w-3.5" />}
                    {copiedField === 'email' ? t('contact.copied') : t('contact.copy')}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted">{t('contact.location')}</p>
                <p className="mt-1 text-lg font-medium">{t('identity.location')}</p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-5 text-sm">
              <a
                href="https://github.com/phuongnamngo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-ink"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ngo-phuong-nam-660a29268"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted hover:text-ink"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a href="mailto:ngophuongnam5622@gmail.com" className="inline-flex items-center gap-2 text-muted hover:text-ink">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a href="tel:0339805622" className="inline-flex items-center gap-2 text-muted hover:text-ink">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t('contact.phone')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ngô Phương Nam. {t('footer.rights')}</p>
          <a href={cvHref} target="_blank" rel="noreferrer" className="hover:text-ink">
            {t('identity.downloadCV')}
          </a>
        </div>
      </footer>
    </div>
  )
}
