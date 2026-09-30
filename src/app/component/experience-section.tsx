'use client'

import { Award } from 'lucide-react'
import { useLanguage } from '../providers/language-provider'

type ExperienceSectionProps = {
  readonly className?: string
}

export function ExperienceSection({ className = '' }: ExperienceSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="experience" className={`scroll-mt-24 mx-auto max-w-7xl border-t border-outline/20 px-6 py-20 ${className}`}>
      <div className="mb-12">
        <span className="mb-1 block font-mono text-xs tracking-[0.2em] text-primary uppercase">
          {t('exp.kicker')}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">{t('exp.title')}</h2>
        <p className="mt-1 text-[15px] text-on-surface-variant">{t('exp.subtitle')}</p>
      </div>

      <div className="relative space-y-12 border-l-2 border-outline/50 pl-6 sm:pl-8">
        <article className="group relative">
          <div className="absolute top-1.5 -left-[31px] h-4 w-4 rounded-full border-4 border-background bg-primary shadow-[0_0_10px_var(--primary)] transition-transform group-hover:scale-125 sm:-left-[39px]" />
          <div className="glass-card space-y-4 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-bold text-on-surface">{t('exp.job1.role')}</h3>
                <p className="text-[15px] font-medium text-primary">{t('exp.job1.company')}</p>
              </div>
              <span className="self-start rounded-full border border-outline/40 bg-surface-high px-3 py-1 font-mono text-[11px] text-on-surface-variant sm:self-auto">
                {t('exp.job1.period')}
              </span>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-on-surface-variant">
              {['exp.job1.bullet1', 'exp.job1.bullet2', 'exp.job1.bullet3'].map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
            <div className="flex items-start gap-3 rounded-xl border border-tertiary/30 bg-tertiary-container/10 p-4 text-[13px] text-tertiary">
              <Award className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>
                <span className="font-semibold">{t('exp.job1.achievementTitle')}. </span>
                {t('exp.job1.achievement')}
              </span>
            </div>
          </div>
        </article>

        <article className="group relative">
          <div className="absolute top-1.5 -left-[31px] h-4 w-4 rounded-full border-4 border-background bg-outline transition-transform group-hover:scale-125 sm:-left-[39px]" />
          <div className="glass-card space-y-4 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-bold text-on-surface">{t('exp.job2.role')}</h3>
                <p className="text-[15px] font-medium text-secondary">{t('exp.job2.company')}</p>
              </div>
              <span className="self-start rounded-full border border-outline/40 bg-surface-high px-3 py-1 font-mono text-[11px] text-on-surface-variant sm:self-auto">
                {t('exp.job2.period')}
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-on-surface-variant">{t('exp.job2.bullet1')}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
