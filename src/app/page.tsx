'use client'

import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Download,
  ChevronDown,
  Sparkles,
  Bot,
  Server,
  Database,
  Globe,
  Languages,
  GraduationCap,
  Briefcase,
  Copy,
  Check,
  ArrowUpRight,
  Zap,
  Terminal
} from 'lucide-react'
import { useLanguage } from './providers/language-provider'
import { LanguageToggle } from './component/language-toggle'
import { ThemeToggle } from './component/theme-toggle'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [activeProjectCategory, setActiveProjectCategory] = useState('all')
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2000)
  }

  // Skills dataset based on CV
  const skillsData = [
    {
      category: t('skills.cat.ai'),
      icon: <Bot className="w-5 h-5 text-amber-400" />,
      items: [
        { name: 'Cursor, Antigravity, OpenAI Codex', tag: 'Agents' },
        { name: 'Hermes Agent', tag: 'Agents' },
        { name: 'MCP & agentic workflows', tag: 'Review & query' }
      ]
    },
    {
      category: t('skills.cat.languages'),
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      items: [
        { name: 'JavaScript & TypeScript', tag: 'Primary' },
        { name: 'PHP', tag: 'Backend' }
      ]
    },
    {
      category: t('skills.cat.frontend'),
      icon: <Layers className="w-5 h-5 text-pink-400" />,
      items: [
        { name: 'ReactJS', tag: 'Web' },
        { name: 'Next.js', tag: 'Web' },
        { name: 'React Native', tag: 'Mobile' },
        { name: 'Flutter', tag: 'Working-level' }
      ]
    },
    {
      category: t('skills.cat.backend'),
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      items: [
        { name: 'Laravel', tag: 'PHP' },
        { name: 'Node.js', tag: 'API' }
      ]
    },
    {
      category: t('skills.cat.databases'),
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      items: [
        { name: 'PostgreSQL', tag: 'Relational' },
        { name: 'MySQL', tag: 'Relational' },
        { name: 'MongoDB', tag: 'NoSQL' }
      ]
    },
    {
      category: t('skills.cat.devops'),
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      items: [
        { name: 'Docker', tag: 'DevOps' },
        { name: 'Git / GitHub', tag: 'VCS' },
        { name: 'Linux', tag: 'OS' },
        { name: 'Google Cloud Platform', tag: 'Cloud' }
      ]
    },
    {
      category: t('skills.cat.spoken'),
      icon: <Languages className="w-5 h-5 text-sky-400" />,
      items: [
        { name: 'English — Reading / Writing', tag: 'Intermediate' }
      ]
    }
  ]

  // Projects dataset based on CV
  const allProjects = [
    {
      id: 'kunux',
      title: t('projects.kunux.title'),
      role: t('projects.kunux.role'),
      category: 'paas',
      desc: t('projects.kunux.desc'),
      period: '06/2026 – Present',
      tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Traefik'],
      highlights: [t('projects.kunux.h1'), t('projects.kunux.h2')],
      link: 'https://app.kunux.com',
      badge: 'PaaS'
    },
    {
      id: 'booking',
      title: t('projects.booking.title'),
      role: t('projects.booking.role'),
      category: 'paas',
      desc: t('projects.booking.desc'),
      period: '05/2026 – 07/2026',
      tech: ['Next.js', 'React', 'TypeScript', 'Go', 'PostgreSQL', 'Docker'],
      highlights: [t('projects.booking.h1'), t('projects.booking.h2')],
      link: 'https://booking.lntpartners.com',
      badge: 'Enterprise'
    },
    {
      id: 'zogux',
      title: t('projects.zogux.title'),
      role: t('projects.zogux.role'),
      category: 'web',
      desc: t('projects.zogux.desc'),
      period: '04/2026 – 06/2026',
      tech: ['React', 'TypeScript', 'Jira', 'GitLab'],
      highlights: [t('projects.zogux.h1'), t('projects.zogux.h2')],
      link: 'https://app.zogux.com',
      badge: 'DEX'
    },
    {
      id: 'pouchpay',
      title: t('projects.pouchpay.title'),
      role: t('projects.pouchpay.role'),
      category: 'blockchain',
      desc: t('projects.pouchpay.desc'),
      period: '03/2025 – Present',
      tech: ['Android (Java/Kotlin)', 'iOS (Swift)', 'Web3 dApp Browser', 'Realm', 'SQLite'],
      highlights: [t('projects.pouchpay.h1'), t('projects.pouchpay.h2')],
      playStoreLink: 'https://play.google.com/store/apps/details?id=global.alltra.app',
      appStoreLink: 'https://apps.apple.com/us/app/pouchpay-alltra-wallet/id6748115292',
      badge: 'Wallet'
    },
    {
      id: 'nexdax',
      title: t('projects.nexdax.title'),
      role: t('projects.nexdax.role'),
      category: 'mobile',
      desc: t('projects.nexdax.desc'),
      period: '09/2023 – Present',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      highlights: [t('projects.nexdax.h1'), t('projects.nexdax.h2')],
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.nexdax',
      badge: 'Mobile'
    },
    {
      id: 'taptap',
      title: t('projects.taptap.title'),
      role: t('projects.taptap.role'),
      category: 'blockchain',
      desc: t('projects.taptap.desc'),
      period: '03/2026 – 04/2026',
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      highlights: [t('projects.taptap.h1'), t('projects.taptap.h2')],
      telegramLink: 'https://t.me/fivedax_tap_bot',
      adminLink: 'https://claim-admin.5dax.com',
      badge: 'Telegram Mini App'
    },
    {
      id: 'balance',
      title: t('projects.balance.title'),
      role: t('projects.balance.role'),
      category: 'mobile',
      desc: t('projects.balance.desc'),
      period: '09/2024 – 01/2025',
      tech: ['React Native', 'Odoo (Python)', 'Firebase'],
      highlights: [t('projects.balance.h1'), t('projects.balance.h2')],
      badge: 'Mobile'
    },
    {
      id: 'fliam',
      title: t('projects.fliam.title'),
      role: t('projects.fliam.role'),
      category: 'web',
      desc: t('projects.fliam.desc'),
      period: '03/2022 – 03/2024',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'HTML/CSS', 'Tailwind CSS'],
      highlights: [t('projects.fliam.h1'), t('projects.fliam.h2')],
      badge: 'Web',
      link: 'https://fliam.com'
    }
  ]

  const filteredProjects = activeProjectCategory === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeProjectCategory)

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[140px] animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[160px] animate-pulse-slow delay-2000"></div>
      </div>

      {/* Header Navigation */}
      <header className="fixed top-0 w-full glass-effect z-50 transition-all duration-300 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Brand Logo */}
            <div
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-bold text-lg gradient-text">N</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  Ngô Phương Nam
                </span>
                <span className="text-xs text-indigo-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Fullstack Developer
                </span>
              </div>
            </div>

            {/* Nav Menu */}
            <nav className="hidden md:flex items-center space-x-1 glass-card px-4 py-1.5 rounded-full">
              {[
                { id: 'home', label: t('nav.home') },
                { id: 'about', label: t('nav.about') },
                { id: 'skills', label: t('nav.skills') },
                { id: 'experience', label: t('nav.experience') },
                { id: 'projects', label: t('nav.projects') },
                { id: 'education', label: t('nav.education') },
                { id: 'contact', label: t('nav.contact') }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeSection === id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[90vh] flex items-center justify-center py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Top AI Badge Pill */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>{t('hero.aiBadge')}</span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-mono">Cursor • Antigravity • MCP</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {t('hero.greeting')}{' '}
              <span className="gradient-text">
                {t('hero.name')}
              </span>
            </h1>

            <div className={`text-xl sm:text-2xl font-semibold text-indigo-400 mb-6 font-mono tracking-wide transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {t('hero.title')}
            </div>

            <p className={`max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {t('hero.subtitle')}
            </p>

            {/* Action Buttons */}
            <div className={`flex flex-wrap gap-4 justify-center mb-14 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-base shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{t('hero.viewWork')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/cv/PN-FullstackDeveloper.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass-card text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-indigo-500/50 hover:bg-slate-800/60 active:scale-[0.98] transition-all"
              >
                <Download className="w-5 h-5 text-indigo-400" />
                <span>{t('hero.downloadCV')}</span>
              </a>
            </div>

            {/* Quick Contact & Info Pills */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-400" />
                {t('hero.location')}
              </span>
              <a href="mailto:ngophuongnam5622@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4 text-indigo-400" />
                ngophuongnam5622@gmail.com
              </a>
              <a href="tel:0339805622" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400" />
                033 980 5622
              </a>
              <a href="https://github.com/phuongnamngo" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Github className="w-4 h-4 text-purple-400" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ngo-phuong-nam-660a29268" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 text-left">
              {[
                { number: '4', label: t('stats.years'), icon: <Briefcase className="w-6 h-6 text-indigo-400" /> },
                { number: '8+', label: t('stats.projects'), icon: <Code2 className="w-6 h-6 text-pink-400" /> },
                { number: '~30%', label: t('stats.efficiency'), icon: <Zap className="w-6 h-6 text-amber-400" /> },
                { number: '12+', label: t('stats.techs'), icon: <Layers className="w-6 h-6 text-cyan-400" /> }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-slate-700 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-extrabold text-white font-mono">{stat.number}</span>
                    {stat.icon}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <ChevronDown className="w-6 h-6 text-slate-500" />
          </div>
        </section>

        {/* AI WORKFLOW SPOTLIGHT BANNER */}
        <section className="py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden glass-card p-8 sm:p-12 border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900/60">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Bot className="w-64 h-64 text-indigo-400" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono mb-4 border border-indigo-500/30">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>AI-Augmented Development Workflow</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {t('about.aiTitle')}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {t('about.aiDesc')}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Cursor', 'Antigravity', 'OpenAI Codex', 'Hermes Agent', 'MCP (Model Context Protocol)'].map((tool) => (
                    <span key={tool} className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 text-indigo-300 text-xs font-mono font-medium border border-indigo-500/20 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-pink-400" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                {t('about.title')}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
                {t('about.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="p-8 rounded-2xl glass-card flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t('about.fullstackTitle')}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {t('about.fullstackDesc')}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-mono">React / Next.js</span>
                  <span className="px-3 py-1 rounded-md bg-pink-500/10 text-pink-300 text-xs font-mono">React Native</span>
                  <span className="px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-mono">Laravel PHP</span>
                  <span className="px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono">Node.js</span>
                  <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 text-xs font-mono">Flutter</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl glass-card flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t('about.paasTitle')}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {t('about.paasDesc')}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-mono">Docker & Traefik</span>
                  <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-300 text-xs font-mono">Web3 & TokenScript</span>
                  <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs font-mono">Telegram DApps</span>
                  <span className="px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-mono">PostgreSQL & Go</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                {t('skills.title')}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
                {t('skills.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((cat, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-card border border-slate-800/80 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                      <div className="p-2.5 rounded-xl bg-slate-800/80">
                        {cat.icon}
                      </div>
                      <h3 className="font-bold text-lg text-white">{cat.category}</h3>
                    </div>

                    <div className="space-y-2.5">
                      {cat.items.map((item, itemIdx) => (
                        <div 
                          key={itemIdx} 
                          className="group px-3.5 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-indigo-500/40 flex items-center justify-between gap-3 transition-all"
                        >
                          <span className="font-medium text-sm text-slate-200 group-hover:text-indigo-300 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shrink-0">
                            {item.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE TIMELINE */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                {t('exp.title')}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
                {t('exp.subtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-transparent">
              {/* Job 1 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="flex md:contents">
                  <div className="w-full md:w-1/2 md:pr-12 md:text-right pl-12 md:pl-0">
                    <div className="p-8 rounded-2xl glass-card border border-indigo-500/20 hover:border-indigo-500/40">
                      <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold mb-3">
                        {t('exp.job1.period')}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{t('exp.job1.role')}</h3>
                      <h4 className="text-sm font-semibold text-indigo-400 mb-4">{t('exp.job1.company')}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4 text-left">{t('exp.job1.intro')}</p>
                      <ul className="text-sm text-slate-300 space-y-2 text-left list-disc list-inside">
                        <li>{t('exp.job1.bullet1')}</li>
                        <li>{t('exp.job1.bullet2')}</li>
                        <li>{t('exp.job1.bullet3')}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-slate-950 flex items-center justify-center text-white shadow-lg shadow-indigo-500/50 group-hover:scale-125 transition-transform z-10">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative flex flex-col md:flex-row items-center group">
                <div className="flex md:contents">
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-600 border-4 border-slate-950 flex items-center justify-center text-white shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform z-10">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-12 pl-12 md:ml-auto">
                    <div className="p-8 rounded-2xl glass-card border border-purple-500/20 hover:border-purple-500/40">
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold mb-3">
                        {t('exp.job2.period')}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{t('exp.job2.role')}</h3>
                      <h4 className="text-sm font-semibold text-purple-400 mb-4">{t('exp.job2.company')}</h4>
                      <ul className="text-sm text-slate-300 space-y-2 text-left list-disc list-inside">
                        <li>{t('exp.job2.bullet1')}</li>
                        <li>{t('exp.job2.bullet2')}</li>
                        <li>{t('exp.job2.bullet3')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                {t('projects.title')}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
                {t('projects.subtitle')}
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { id: 'all', label: t('projects.filter.all') },
                { id: 'paas', label: t('projects.filter.paas') },
                { id: 'mobile', label: t('projects.filter.mobile') },
                { id: 'web', label: t('projects.filter.web') },
                { id: 'blockchain', label: t('projects.filter.blockchain') }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveProjectCategory(cat.id)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${activeProjectCategory === cat.id
                      ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                      : 'glass-card text-slate-400 hover:text-white hover:bg-slate-800/80'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl glass-card overflow-hidden border border-slate-800 hover:border-indigo-500/40 flex flex-col justify-between transition-all"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono font-semibold border border-indigo-500/20">
                        {project.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-pink-400 mb-3">{project.role}</p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    <ul className="text-xs text-slate-400 space-y-1.5 mb-6 list-disc list-inside">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tItem) => (
                        <span key={tItem} className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 text-xs font-mono">
                          {tItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links / Buttons */}
                  <div className="p-6 pt-0 border-t border-slate-800/60 mt-auto flex flex-wrap items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-semibold transition-all"
                      >
                        <span>{t('projects.visitSite')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.telegramLink && (
                      <a
                        href={project.telegramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600/80 hover:bg-sky-600 text-white text-xs font-semibold transition-all"
                      >
                        <span>{t('projects.telegram')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.adminLink && (
                      <a
                        href={project.adminLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg glass-card hover:bg-slate-700/80 text-slate-300 text-xs font-semibold transition-all"
                      >
                        <span>{t('projects.admin')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-all"
                      >
                        <span>{t('projects.playStore')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.appStoreLink && (
                      <a
                        href={project.appStoreLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-purple-600/80 hover:bg-purple-600 text-white text-xs font-semibold transition-all"
                      >
                        <span>{t('projects.appStore')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                {t('edu.title')}
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-2xl mx-auto p-8 rounded-2xl glass-card border border-slate-800 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300">
                  {t('edu.period')}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{t('edu.school')}</h3>
                <p className="text-slate-300 text-sm">{t('edu.major')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mb-12">
              {t('contact.subtitle')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
              {/* Phone Card */}
              <div className="p-6 rounded-2xl glass-card border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{t('contact.phone')}</span>
                  <p className="text-base font-bold text-white font-mono mt-1">033 980 5622</p>
                </div>
                <button
                  onClick={() => handleCopy('0339805622', 'phone')}
                  className="mt-4 flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'phone' ? t('contact.copied') : t('contact.copy')}</span>
                </button>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-2xl glass-card border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{t('contact.email')}</span>
                  <p className="text-sm font-bold text-white font-mono mt-1 truncate">ngophuongnam5622@gmail.com</p>
                </div>
                <button
                  onClick={() => handleCopy('ngophuongnam5622@gmail.com', 'email')}
                  className="mt-4 flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'email' ? t('contact.copied') : t('contact.copy')}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl glass-card border border-slate-800 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{t('contact.location')}</span>
                  <p className="text-xs font-medium text-slate-200 mt-1 leading-relaxed">
                    76 DD7, Quarter 61, Dong Hung Thuan Ward, Ho Chi Minh City
                  </p>
                </div>
                <div className="mt-4 text-xs text-slate-500 font-mono">
                  Ho Chi Minh City, Vietnam
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex justify-center items-center gap-4">
              <a
                href="https://github.com/phuongnamngo"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl glass-card border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ngo-phuong-nam-660a29268"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl glass-card border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://portfolio-namngo.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl glass-card border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:scale-110 transition-all"
                aria-label="Portfolio Vercel"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 glass-effect border-t border-slate-800/80 relative z-10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © 2026 Ngô Phương Nam. {t('footer.rights')}
          </div>
          <div>
            {t('footer.crafted')}
          </div>
        </div>
      </footer>
    </div>
  )
}