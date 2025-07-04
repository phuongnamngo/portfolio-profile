'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from '../providers/language-provider'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all transform hover:scale-110"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5" />
      <span className="ml-1 text-xs font-semibold">
        {language.toUpperCase()}
      </span>
    </button>
  )
}