import React from 'react'
import { Github, Linkedin, Mail, ShieldCheck } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-ink-500 font-mono text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-accent" />
          <span>
            &copy; {year} {profile.name}. Built for resilient infrastructure.
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-500 hover:text-cyan-accent transition-colors">
            <Github className="w-4.5 h-4.5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-500 hover:text-cyan-accent transition-colors">
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-500 hover:text-cyan-accent transition-colors">
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
