'use client'

import { useEffect, useState } from 'react'

type UseActiveSectionProps = {
  readonly ids: readonly string[]
}

export function useActiveSection({ ids }: UseActiveSectionProps) {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      const sections = ['hero', ...ids]
      let current = 'hero'
      let bestTop = -1
      for (const id of sections) {
        const element = document.getElementById(id)
        if (!element) continue
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= scrollPosition && top >= bestTop) {
          bestTop = top
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids])

  return activeSection
}
