import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TerminalSquare, Menu, X } from 'lucide-react'

const links = [
  { href: '#competencies', label: 'Competencies' },
  { href: '#projects', label: 'Architecture' },
  { href: '#timeline', label: 'Credentials' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass shadow-panel' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <TerminalSquare className="w-5 h-5 text-cyan-accent" />
          <span className="font-display font-semibold tracking-tight text-ink-100 text-sm md:text-base">
            YOUSEF AYED
            <span className="text-ink-500 font-mono font-normal ml-2 text-xs hidden sm:inline">
              // sec-ops
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-ink-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cyan-accent transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-cyan-accent/30 bg-cyan-accent/5 px-4 py-2 text-xs font-mono uppercase tracking-widest text-cyan-accent hover:bg-cyan-accent/10 hover:shadow-glow-cyan transition-all"
        >
          Get in Touch
        </a>

        <button
          className="md:hidden text-ink-100"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-6 flex flex-col gap-5 font-mono text-sm uppercase tracking-widest text-ink-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-cyan-accent">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  )
}
