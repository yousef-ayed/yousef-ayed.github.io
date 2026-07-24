import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BadgeCheck, Award } from 'lucide-react'
import { timeline } from '../data/content'
import { SectionHeading } from './Skills'

const typeIcon = {
  Degree: GraduationCap,
  Certification: BadgeCheck,
  Scholarship: Award,
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Academic & Certifications"
          title="A credential chain, in the order it was earned."
          description="Chronological — degree in progress, tracks and certifications layered on top as the infrastructure and defense skillset deepened."
        />

        <div className="mt-16 relative max-w-3xl">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-accent/50 via-white/10 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const Icon = typeIcon[item.type] || BadgeCheck
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
                  className="relative pl-14"
                >
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full glass border border-cyan-accent/30 flex items-center justify-center text-cyan-accent">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="rounded-xl glass border border-white/5 p-5 hover:border-cyan-accent/20 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 justify-between">
                      <span className="font-mono text-xs uppercase tracking-widest text-emerald-accent">
                        {item.type}
                      </span>
                      <span className="font-mono text-xs text-ink-500">{item.date}</span>
                    </div>
                    <h3 className="mt-2 font-display text-base md:text-lg font-semibold text-ink-100">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
