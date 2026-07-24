import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/content'
import { SectionHeading } from './Skills'

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Freelance Services"
          title="Engagements, scoped like a service catalog."
          description="Each engagement below can run standalone or as part of a larger infrastructure buildout."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="group flex items-start gap-5 rounded-xl glass border border-white/5 p-6 transition-all hover:border-emerald-accent/30 hover:shadow-glow-emerald"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-11 h-11 rounded-lg border border-emerald-accent/20 bg-emerald-accent/10 flex items-center justify-center text-emerald-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="mt-2 font-mono text-[10px] tracking-widest text-ink-700">
                    {service.id}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-ink-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{service.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
