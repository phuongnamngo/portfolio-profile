'use client'

import { GraduationCap } from 'lucide-react'
import { useLanguage } from '../providers/language-provider'

type EducationSectionProps = {
  readonly className?: string
}

export function EducationSection({ className = '' }: EducationSectionProps) {
  const { t } = useLanguage()

  return (
    <section className={`mx-auto max-w-7xl px-6 py-16 ${className}`}>
      <div className="mb-8">
        <span className="mb-1 block font-mono text-xs tracking-[0.2em] text-primary uppercase">
          {t('edu.kicker')}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">{t('edu.title')}</h2>
      </div>
      <div className="glass-card flex flex-col justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="flex items-center gap-4">
          <div className="rounded-xl border border-outline/40 bg-surface-high p-3 text-primary">
            <GraduationCap className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-on-surface">{t('edu.school')}</h3>
            <p className="text-[15px] text-on-surface-variant">{t('edu.major')}</p>
          </div>
        </div>
        <span className="self-start rounded-full border border-outline/40 bg-surface-high px-4 py-1.5 font-mono text-xs font-medium text-secondary sm:self-auto">
          {t('edu.period')}
        </span>
      </div>
    </section>
  )
}
