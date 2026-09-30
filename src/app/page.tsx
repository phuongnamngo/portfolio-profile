'use client'

import { AboutSection } from './component/about-section'
import { ContactSection } from './component/contact-section'
import { EducationSection } from './component/education-section'
import { ExperienceSection } from './component/experience-section'
import { HeroSection } from './component/hero-section'
import { ProjectsSection } from './component/projects-section'
import { SiteFooter } from './component/site-footer'
import { SiteHeader } from './component/site-header'
import { SkillsSection } from './component/skills-section'
import { WorkflowSection } from './component/workflow-section'
import { useLanguage } from './providers/language-provider'

export default function Home() {
  const { language } = useLanguage()
  const cvHref = language === 'vi' ? '/cv/CV-NamNgo_VI.pdf' : '/cv/CV-NamNgo_EN.pdf'

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-on-surface">
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <div className="ambient" aria-hidden="true">
        <span className="top-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-primary-container/10" />
        <span className="top-[35%] -right-[10%] h-[500px] w-[500px] bg-secondary-container/10" />
        <span className="bottom-[20%] -left-[10%] h-[550px] w-[550px] bg-tertiary-container/10" />
      </div>

      <SiteHeader onViewProjects={scrollToProjects} />

      <main className="relative z-10 pt-24 pb-8">
        <HeroSection cvHref={cvHref} onViewWork={scrollToProjects} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <WorkflowSection />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter cvHref={cvHref} />
    </div>
  )
}
