'use client'

import { Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { EMAIL, GITHUB, LINKEDIN, PHONE, PHONE_DISPLAY } from '@/data/portfolio'
import { useLanguage } from '../providers/language-provider'

type ContactSectionProps = {
  readonly className?: string
}

export function ContactSection({ className = '' }: ContactSectionProps) {
  const { t } = useLanguage()
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    window.setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section id="contact" className={`scroll-mt-24 mx-auto max-w-7xl border-t border-outline/20 px-6 py-20 ${className}`}>
      <div className="cyan-glow glass-card relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/30 p-8 text-center sm:p-14">
        <div className="mb-8 space-y-4">
          <span className="font-mono text-[11px] tracking-[0.2em] text-tertiary uppercase">
            {t('contact.kicker')}
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
            {t('contact.headline')}
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-on-surface-variant">
            {t('contact.lead')}
          </p>
          <div className="inline-flex items-center gap-2 pt-2 font-mono text-[11px] text-primary">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>{t('identity.location')}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container px-6 py-3 font-mono text-sm font-bold text-on-primary transition-opacity hover:opacity-90"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            {t('contact.emailMe')}
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-outline bg-surface-high/80 px-6 py-3 font-mono text-sm text-on-surface transition-colors hover:border-primary"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-outline bg-surface-high/80 px-6 py-3 font-mono text-sm text-on-surface transition-colors hover:border-primary"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            LinkedIn
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-on-surface-variant">
          <div className="inline-flex items-center gap-2">
            <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
            <button
              type="button"
              onClick={() => handleCopy(EMAIL, 'email')}
              className="inline-flex items-center gap-1 font-mono text-[11px] hover:text-on-surface"
            >
              {copiedField === 'email' ? <Check className="h-3.5 w-3.5 text-tertiary" /> : <Copy className="h-3.5 w-3.5" />}
              {copiedField === 'email' ? t('contact.copied') : t('contact.copy')}
            </button>
          </div>
          <div className="inline-flex items-center gap-2">
            <a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a>
            <button
              type="button"
              onClick={() => handleCopy(PHONE, 'phone')}
              className="inline-flex items-center gap-1 font-mono text-[11px] hover:text-on-surface"
            >
              {copiedField === 'phone' ? <Check className="h-3.5 w-3.5 text-tertiary" /> : <Copy className="h-3.5 w-3.5" />}
              {copiedField === 'phone' ? t('contact.copied') : t('contact.copy')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
