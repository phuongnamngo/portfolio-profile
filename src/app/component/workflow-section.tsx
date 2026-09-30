'use client'

import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../providers/language-provider'

type WorkflowSectionProps = {
  readonly className?: string
}

const steps = [
  { id: 'ai.s1', detail: 'ai.s1d', tone: 'text-on-surface' },
  { id: 'ai.s2', detail: 'ai.s2d', tone: 'text-secondary' },
  { id: 'ai.s3', detail: 'ai.s3d', tone: 'text-primary' },
  { id: 'ai.s4', detail: 'ai.s4d', tone: 'text-tertiary' },
  { id: 'ai.s5', detail: 'ai.s5d', tone: 'text-on-surface' },
  { id: 'ai.s6', detail: 'ai.s6d', tone: 'text-on-surface' },
] as const

const tools = ['Cursor Agent', 'OpenAI Codex', 'Hermes Agent', 'Antigravity', 'MCP']

export function WorkflowSection({ className = '' }: WorkflowSectionProps) {
  const { t } = useLanguage()
  const principles = ['ai.b1', 'ai.b2', 'ai.b3', 'ai.b4'] as const

  return (
    <section id="workflow" className={`scroll-mt-24 mx-auto max-w-7xl border-t border-outline/20 px-6 py-20 ${className}`}>
      <div className="mb-12">
        <span className="mb-1 block font-mono text-xs tracking-[0.2em] text-tertiary uppercase">
          {t('ai.kicker')}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">{t('ai.title')}</h2>
        <p className="mt-2 max-w-2xl text-lg text-primary">{t('ai.quote')}</p>
      </div>

      <div className="glass-card space-y-10 rounded-2xl p-6 sm:p-8">
        <div>
          <span className="mb-4 block font-mono text-[11px] tracking-wider text-outline-strong uppercase">
            {t('ai.pipeline')}
          </span>
          <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center gap-2 rounded-xl border border-outline/30 bg-surface p-4"
              >
                <span className="font-mono text-[11px] text-outline-strong">0{index + 1}</span>
                <span className={`font-mono text-xs font-bold ${step.tone}`}>{t(step.id)}</span>
                <span className="font-mono text-[11px] text-on-surface-variant">{t(step.detail)}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-3 block font-mono text-[11px] tracking-wider text-outline-strong uppercase">
            {t('ai.tools')}
          </span>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-outline/40 bg-surface-high px-3.5 py-1.5 font-mono text-xs text-on-surface"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-outline/20 pt-4 md:grid-cols-2">
          {principles.map((key) => (
            <div key={key} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-[13px] leading-relaxed text-on-surface-variant">{t(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
