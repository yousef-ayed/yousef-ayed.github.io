import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content'
import { SectionHeading } from './Skills'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Featured Architecture"
          title="Systems built to detect, defend, and hold the line."
          description="Two representative deployments — one watching the logs, one holding the perimeter."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                className="group relative rounded-2xl glass border border-white/5 p-8 overflow-hidden transition-all duration-300 hover:border-cyan-accent/30 hover:shadow-glow-cyan"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-cyan-accent/5 blur-2xl group-hover:bg-cyan-accent/10 transition-colors" />

                <div className="relative flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg border border-cyan-accent/20 bg-cyan-accent/10 flex items-center justify-center text-cyan-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-700 group-hover:text-cyan-accent transition-colors" />
                </div>

                <h3 className="relative mt-6 font-display text-xl font-semibold text-ink-100 leading-snug">
                  {project.title}
                </h3>
                <p className="relative mt-3 text-sm text-ink-500 leading-relaxed">
                  {project.overview}
                </p>

                <div className="relative mt-6 grid grid-cols-3 gap-3 border-y border-white/5 py-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-700">
                        {m.label}
                      </div>
                      <div className="mt-1 text-sm font-medium text-ink-100">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-ink-300"
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
