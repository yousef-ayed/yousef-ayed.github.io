import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react'
import GridBackground from './GridBackground'
import Terminal from './Terminal'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden">
      <GridBackground scanline />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-accent/25 bg-emerald-accent/5 px-3 py-1 text-xs font-mono uppercase tracking-widest text-emerald-accent mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Available for freelance engagements
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold tracking-tight text-ink-100"
          >
            <span className="text-gradient-cyan">Security Operations</span> &amp; Network
            Infrastructure Engineer
            
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-ink-300 text-base md:text-lg leading-relaxed"
          >
            Architecting, fortifying, and optimizing resilient enterprise network
            infrastructures and automated threat detection systems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-cyan-accent/10 border border-cyan-accent/40 px-6 py-3 text-sm font-mono uppercase tracking-widest text-cyan-accent transition-all hover:bg-cyan-accent/20 hover:shadow-glow-cyan"
            >
              Explore Architecture
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-6 py-3 text-sm font-mono uppercase tracking-widest text-ink-100 transition-all hover:border-emerald-accent/40 hover:text-emerald-accent hover:shadow-glow-emerald"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs text-ink-500 uppercase tracking-widest"
          >
            <span>Palo Alto · Fortinet</span>
            <span>Active Directory</span>
            <span>SIEM &amp; Threat Hunting</span>
            <span>ML Anomaly Detection</span>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
