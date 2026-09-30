'use client'

import { ExternalLink } from 'lucide-react'
import { additionalProjects, featuredProjects, type Accent, type ProjectLink } from '@/data/portfolio'
import { useLanguage } from '../providers/language-provider'

type ProjectsSectionProps = {
  readonly className?: string
}

const badge: Record<Accent, string> = {
  primary: 'border-primary/30 bg-primary-container/20 text-primary',
  secondary: 'border-secondary/30 bg-secondary-container/20 text-secondary',
  tertiary: 'border-tertiary/30 bg-tertiary-container/20 text-tertiary',
}

const titleHover: Record<Accent, string> = {
  primary: 'group-hover:text-primary',
  secondary: 'group-hover:text-secondary',
  tertiary: 'group-hover:text-tertiary',
}

function Links({ links, t }: { links: ProjectLink[]; t: (key: string) => string }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-primary hover:underline"
        >
          {t(link.labelKey)}
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export function ProjectsSection({ className = '' }: ProjectsSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="projects" className={`scroll-mt-24 mx-auto max-w-7xl border-t border-outline/20 px-6 py-20 ${className}`}>
      <div className="mb-12">
        <span className="mb-1 block font-mono text-xs tracking-[0.2em] text-primary uppercase">
          {t('projects.kicker')}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">{t('projects.title')}</h2>
        <p className="mt-1 max-w-2xl text-[15px] text-on-surface-variant">{t('projects.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <article key={project.id} className="glass-card group flex flex-col justify-between space-y-5 rounded-2xl p-7">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className={`rounded border px-2.5 py-1 font-mono text-[11px] font-bold ${badge[project.accent]}`}>
                  PROJECT // {project.index}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">{t(project.roleKey)}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className={`text-2xl font-bold text-on-surface transition-colors ${titleHover[project.accent]}`}>
                  {t(`projects.${project.id}.title`)}
                </h3>
                {project.metricKey && (
                  <span className="rounded-full border border-tertiary/40 bg-tertiary-container/20 px-2.5 py-1 font-mono text-[11px] font-bold text-tertiary">
                    {t(project.metricKey)}
                  </span>
                )}
              </div>
              <p className="text-[15px] leading-relaxed text-on-surface-variant">
                {t(`projects.${project.id}.desc`)}
              </p>
              <p className="font-mono text-[11px] text-outline-strong">
                {project.period} · {t(project.teamKey)}
              </p>
              <div className="space-y-2 pt-1">
                <span className="block font-mono text-[11px] tracking-wider text-outline-strong uppercase">
                  {t('projects.modules')}
                </span>
                <ul className="list-disc space-y-1 pl-4 text-[13px] text-on-surface">
                  {project.highlightKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4 border-t border-outline/30 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((item) => (
                  <span key={item} className="rounded bg-surface-high px-2.5 py-1 font-mono text-[11px] text-on-surface">
                    {item}
                  </span>
                ))}
              </div>
              <Links links={project.links} t={t} />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-on-surface">{t('projects.otherTitle')}</h3>
        <p className="mt-1 text-[15px] text-on-surface-variant">{t('projects.otherSubtitle')}</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((project) => (
            <article key={project.id} className="glass-card flex flex-col justify-between space-y-3 rounded-xl p-5">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-on-surface">{t(`projects.${project.id}.title`)}</h4>
                <p className="text-[13px] leading-relaxed text-on-surface-variant">
                  {t(`projects.${project.id}.desc`)}
                </p>
                <p className="font-mono text-[11px] text-outline-strong">
                  {project.teamKey ? `${project.period} · ${t(project.teamKey)}` : project.period}
                </p>
              </div>
              <div className="space-y-3 border-t border-outline/20 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded bg-surface px-2 py-0.5 font-mono text-[11px] text-primary">
                      {item}
                    </span>
                  ))}
                </div>
                <Links links={project.links} t={t} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
