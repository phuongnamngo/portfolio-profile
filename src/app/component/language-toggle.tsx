'use client'

import { useLanguage } from '../providers/language-provider'

type LanguageToggleProps = {
  readonly className?: string
}

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`inline-flex items-center gap-1 font-mono text-xs ${className}`} role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded px-1.5 py-0.5 transition-colors ${language === 'en' ? 'font-semibold text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span className="text-outline" aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLanguage('vi')}
        className={`rounded px-1.5 py-0.5 transition-colors ${language === 'vi' ? 'font-semibold text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
        aria-pressed={language === 'vi'}
      >
        VI
      </button>
    </div>
  )
}
