import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/content'

const accentMap = {
  cyan: {
    ring: 'group-hover:border-cyan-accent/40',
    glow: 'group-hover:shadow-glow-cyan',
    icon: 'text-cyan-accent bg-cyan-accent/10 border-cyan-accent/20',
    tag: 'group-hover:text-cyan-accent group-hover:border-cyan-accent/30',
  },
  emerald: {
    ring: 'group-hover:border-emerald-accent/40',
    glow: 'group-hover:shadow-glow-emerald',
    icon: 'text-emerald-accent bg-emerald-accent/10 border-emerald-accent/20',
    tag: 'group-hover:text-emerald-accent group-hover:border-emerald-accent/30',
  },
}

export default function Skills() {
  return (
    <section id="competencies" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Technical Core Competencies"
          title="Four disciplines, one defensive posture."
          description="Each competency is a layer in the same architecture — network, systems, operations, and the models that watch over all three."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const accent = accentMap[skill.accent]
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: 'easeOut' }}
                className={`group relative rounded-xl glass p-7 border border-white/5 transition-all duration-300 hover:-translate-y-1 ${accent.ring} ${accent.glow}`}
              >
                <div className={`w-11 h-11 rounded-lg border flex items-center justify-center ${accent.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-100">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{skill.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-ink-500 transition-colors ${accent.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink-100">
        {title}
      </h2>
      {description && <p className="mt-4 text-ink-500 leading-relaxed">{description}</p>}
    </motion.div>
  )
}
