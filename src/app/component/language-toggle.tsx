'use client'

import { useLanguage } from '../providers/language-provider'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="inline-flex items-center gap-1 text-sm" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-1.5 py-0.5 transition-colors ${language === 'en' ? 'text-ink font-semibold' : 'text-muted hover:text-ink'}`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span className="text-line" aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLanguage('vi')}
        className={`px-1.5 py-0.5 transition-colors ${language === 'vi' ? 'text-ink font-semibold' : 'text-muted hover:text-ink'}`}
        aria-pressed={language === 'vi'}
      >
        VI
      </button>
    </div>
  )
}
