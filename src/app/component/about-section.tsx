'use client'

import { BadgeCheck, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '../providers/language-provider'

type AboutSectionProps = {
  readonly className?: string
}

export function AboutSection({ className = '' }: AboutSectionProps) {
  const { t } = useLanguage()

  const rows = [
    ['about.roleLabel', 'identity.role'],
    ['about.availability', 'about.availabilityValue'],
    ['about.focus', 'about.focusValue'],
    ['skills.cat.spoken', 'skills.spoken'],
  ] as const

  return (
    <section id="about" className={`scroll-mt-24 mx-auto max-w-7xl px-6 py-20 ${className}`}>
      <div className="mb-12">
        <span className="mb-1 block font-mono text-xs tracking-[0.2em] text-primary uppercase">
          {t('about.kicker')}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">{t('about.title')}</h2>
        <p className="mt-1 text-[15px] text-on-surface-variant">{t('about.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="glass-card relative overflow-hidden rounded-2xl p-6 lg:col-span-4">
          <div className="relative mb-6 aspect-square overflow-hidden rounded-xl border border-outline/40 bg-surface-low">
            <Image
              src="/images/avatar.png"
              alt="Ngô Phương Nam"
              width={726}
              height={695}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-surface-lowest/40 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 z-10 space-y-1 p-5">
              <span className="block text-xl font-bold text-on-surface">Ngô Phương Nam</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-primary">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t('identity.location')}
              </span>
            </div>
          </div>

          <div>
            {rows.map(([labelKey, valueKey]) => (
              <div
                key={labelKey}
                className="flex items-center justify-between gap-4 border-b border-outline/20 py-2 text-[13px]"
              >
                <span className="text-on-surface-variant">{t(labelKey)}</span>
                <span className="text-right font-medium text-on-surface">{t(valueKey)}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary-container/30 bg-primary-container/10 p-3 font-mono text-[11px] text-primary">
            <BadgeCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{t('about.production')}</span>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-8">
          <div className="glass-card space-y-4 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-on-surface">{t('about.cardTitle')}</h3>
            <p className="text-lg leading-relaxed text-on-surface-variant">{t('summary.body')}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="glass-card space-y-2 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary">{t('about.statYears')}</div>
              <div className="text-[13px] text-on-surface-variant">{t('about.statYearsLabel')}</div>
            </div>
            <div className="glass-card space-y-2 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-tertiary">{t('about.statProjects')}</div>
              <div className="text-[13px] text-on-surface-variant">{t('about.statProjectsLabel')}</div>
            </div>
            <div className="glass-card space-y-2 rounded-xl p-6 text-center">
              <div className="pt-1 text-lg font-bold text-secondary">{t('about.statSpectrum')}</div>
              <div className="text-[13px] text-on-surface-variant">{t('about.statSpectrumLabel')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
