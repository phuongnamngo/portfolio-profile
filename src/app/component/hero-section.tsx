'use client'

import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { EMAIL, GITHUB, LINKEDIN } from '@/data/portfolio'
import { useLanguage } from '../providers/language-provider'

type HeroSectionProps = {
  readonly cvHref: string
  readonly onViewWork: () => void
}

export function HeroSection({ cvHref, onViewWork }: HeroSectionProps) {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative mx-auto mt-4 max-w-7xl overflow-hidden rounded-3xl border border-outline/20 px-6 pt-12 pb-16 grid-bg sm:pb-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-outline/50 bg-surface-high/70 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary" />
            </span>
            <span className="font-mono text-[11px] font-medium tracking-wide text-tertiary">
              {t('hero.available')}
            </span>
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-on-surface sm:text-5xl lg:text-[56px] lg:leading-[64px]">
              {t('hero.greeting')}
            </h1>
            <p className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-[56px] lg:leading-[64px]">
              {t('identity.role')}
            </p>
          </div>

          <p className="max-w-2xl text-lg font-medium leading-relaxed text-primary">
            {t('hero.pitch')}
          </p>
          <p className="max-w-2xl text-[15px] leading-relaxed text-on-surface-variant">
            {t('summary.body')}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onViewWork}
              className="cyan-glow inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container px-6 py-3 font-mono text-sm font-bold text-on-primary transition-transform hover:-translate-y-px"
            >
              {t('hero.viewWork')}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={cvHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-outline bg-surface-high/60 px-5 py-3 font-mono text-sm text-on-surface transition-colors hover:border-primary hover:bg-primary-container/10"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t('identity.downloadCV')}
            </a>
            <div className="flex items-center gap-2">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex rounded-lg border border-outline/50 bg-surface-high/40 p-3 text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex rounded-lg border border-outline/50 bg-surface-high/40 p-3 text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="inline-flex rounded-lg border border-outline/50 bg-surface-high/40 p-3 text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -top-4 -left-2 z-20 hidden items-center gap-1.5 rounded-full border border-primary/40 bg-surface-lowest/90 px-3 py-1 font-mono text-[11px] text-primary shadow-lg backdrop-blur-md sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Next.js
          </div>
          <div className="absolute -right-2 -bottom-3 z-20 hidden items-center gap-1.5 rounded-full border border-tertiary/40 bg-surface-lowest/90 px-3 py-1 font-mono text-[11px] text-tertiary shadow-lg backdrop-blur-md sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
            Docker & Traefik
          </div>
          <div className="absolute top-1/2 -right-4 z-20 hidden -translate-y-1/2 items-center gap-1.5 rounded-full border border-secondary/40 bg-surface-lowest/90 px-3 py-1 font-mono text-[11px] text-secondary shadow-lg backdrop-blur-md md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            React Native
          </div>

          <div className="overflow-hidden rounded-xl border border-outline/60 bg-surface-lowest/95 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-outline/30 bg-surface-low px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-error-container" />
                <span className="h-3 w-3 rounded-full bg-primary-container/70" />
                <span className="h-3 w-3 rounded-full bg-tertiary-container/80" />
                <span className="ml-2 font-mono text-[11px] text-on-surface-variant">architecture.service.ts</span>
              </div>
              <span className="font-mono text-[11px] text-outline-strong">Ready</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[11px] leading-relaxed text-on-surface-variant">
              <code>
                <span className="font-semibold text-secondary">import</span>
                {' { '}<span className="text-primary">SystemArchitect</span>{' } '}
                <span className="font-semibold text-secondary">from</span>
                {' '}<span className="text-tertiary">&quot;@nam/core&quot;</span>;{'\n'}
                <span className="font-semibold text-secondary">interface</span>
                {' '}<span className="text-primary">Profile</span>{' {'}{'\n'}
                {'  '}name: <span className="text-tertiary">&quot;Ngo Phuong Nam&quot;</span>;{'\n'}
                {'  '}location: <span className="text-tertiary">&quot;Ho Chi Minh City, VN&quot;</span>;{'\n'}
                {'  '}experience: <span className="text-primary">&quot;4+ Years Full-Stack&quot;</span>;{'\n'}
                {'  '}stack: [<span className="text-tertiary">&quot;React&quot;</span>, <span className="text-tertiary">&quot;Next.js&quot;</span>, <span className="text-tertiary">&quot;Laravel&quot;</span>];{'\n'}
                {'}'}{'\n\n'}
                <span className="text-outline-strong">{'// Engineering mission'}</span>{'\n'}
                <span className="font-semibold text-secondary">export async function</span>
                {' '}<span className="text-primary">deployProduct</span>() {'{'}{'\n'}
                {'  '}<span className="text-primary">await</span> dispatchScalableEngine({'{'}{'\n'}
                {'    '}cleanCode: <span className="text-tertiary">true</span>,{'\n'}
                {'    '}aiAssisted: <span className="text-tertiary">&quot;Cursor + MCP&quot;</span>,{'\n'}
                {'    '}productionReady: <span className="text-primary">true</span>{'\n'}
                {'  }'});{'\n'}
                {'}'}
              </code>
            </pre>
            <div className="flex items-center justify-between border-t border-outline/20 bg-surface-high/30 px-4 py-2 font-mono text-[11px] text-outline-strong">
              <span>UTF-8 · TypeScript</span>
              <span className="inline-flex items-center gap-1 text-tertiary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-tertiary" />
                0 errors
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
