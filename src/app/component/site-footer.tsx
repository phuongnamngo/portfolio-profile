'use client'

import { EMAIL, GITHUB, LINKEDIN } from '@/data/portfolio'
import { useLanguage } from '../providers/language-provider'

type SiteFooterProps = {
  readonly cvHref: string
}

export function SiteFooter({ cvHref }: SiteFooterProps) {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t border-outline/20 bg-surface-lowest">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="text-xl font-bold text-primary">NAM.DEV</span>
            <span className="text-[13px] text-outline">|</span>
            <span className="text-[13px] text-on-surface-variant">{t('footer.tagline')}</span>
          </div>
          <p className="text-[13px] text-on-surface-variant">
            © 2026 Ngô Phương Nam. {t('footer.rights')}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-on-surface-variant">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-primary">Email</a>
          <a href={cvHref} target="_blank" rel="noreferrer" className="hover:text-primary">
            {t('identity.downloadCV')}
          </a>
          <span className="inline-flex items-center gap-1.5 text-tertiary">
            <span className="h-2 w-2 rounded-full bg-tertiary" />
            {t('footer.status')}
          </span>
        </div>
      </div>
    </footer>
  )
}
