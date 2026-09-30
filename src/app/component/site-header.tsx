'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV } from '@/data/portfolio'
import { useLanguage } from '../providers/language-provider'
import { useActiveSection } from '../hooks/use-active-section'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-toggle'

type SiteHeaderProps = {
  readonly onViewProjects: () => void
}

const sectionIds = NAV.map((item) => item.id)

export function SiteHeader({ onViewProjects }: SiteHeaderProps) {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection({ ids: sectionIds })

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-outline/40 bg-surface/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2"
        >
          <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
          <span className="text-xl font-bold tracking-tight text-primary">NAM.DEV</span>
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Page">
          {NAV.map(({ id, labelKey }) => {
            const active = activeSection === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className={`font-mono text-xs tracking-wide transition-colors ${
                  active
                    ? 'border-b-2 border-primary pb-1 font-medium text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                aria-current={active ? 'true' : undefined}
              >
                {t(labelKey)}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={onViewProjects}
            className="hidden rounded-lg bg-gradient-to-r from-primary-container to-secondary-container px-4 py-2 font-mono text-xs font-semibold text-on-primary shadow-[0_0_15px_color-mix(in_srgb,var(--primary-container)_35%,transparent)] transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t('nav.viewProjects')}
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-high/40 hover:text-primary lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-outline/40 px-6 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {NAV.map(({ id, labelKey }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className={`text-left font-mono text-sm ${
                  activeSection === id ? 'font-semibold text-primary' : 'text-on-surface-variant'
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
