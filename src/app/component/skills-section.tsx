'use client'

import { Brain, Database, Monitor, Server, Smartphone, Terminal } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillGroups, type Accent } from '@/data/portfolio'
import { useLanguage } from '../providers/language-provider'

type SkillsSectionProps = {
  readonly className?: string
}

const icons: Record<string, LucideIcon> = {
  'skills.frontend': Monitor,
  'skills.mobile': Smartphone,
  'skills.backend': Server,
  'skills.database': Database,
  'skills.devops': Terminal,
  'skills.cat.ai': Brain,
}

const accentText: Record<Accent, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
}

const accentBg: Record<Accent, string> = {
  primary: 'bg-primary-container/15',
  secondary: 'bg-secondary-container/20',
  tertiary: 'bg-tertiary-container/20',
}

export function SkillsSection({ className = '' }: SkillsSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="skills" className={`scroll-mt-24 mx-auto max-w-7xl border-t border-outline/20 px-6 py-20 ${className}`}>
      <div className="mb-12">
        <span className="mb-1 block font-mono text-xs tracking-[0.2em] text-primary uppercase">
          {t('skills.kicker')}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">{t('skills.title')}</h2>
        <p className="mt-1 text-[15px] text-on-surface-variant">{t('skills.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.key]
          return (
            <article key={group.key} className="glass-card space-y-4 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2.5 ${accentBg[group.accent]} ${accentText[group.accent]}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-on-surface">{t(group.key)}</h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {group.items.map((item) => {
                  const emphasized = group.emphasis.includes(item)
                  return (
                    <span
                      key={item}
                      className={`rounded-lg border bg-surface-high/60 px-3 py-1.5 font-mono text-[11px] ${
                        emphasized
                          ? `border-current/40 font-semibold ${accentText[group.accent]}`
                          : 'border-outline/40 text-on-surface'
                      }`}
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
