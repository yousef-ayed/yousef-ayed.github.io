import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Globe, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/content'
import { SectionHeading } from './Skills'
import GridBackground from './GridBackground'

const links = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: 'GitHub', value: 'yousef-ayed', href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'View Profile', href: profile.linkedin },
  { icon: Globe, label: 'Portfolio Site', value: 'yousef-ayed.github.io', href: profile.site },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    setTimeout(() => {
      setStatus('sent')
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    }, 900)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/5">
      <GridBackground />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Open a channel."
          description="For freelance engagements, infrastructure audits, or a walkthrough of the projects above — reach out directly or send a message below."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-8">
          {/* Direct links + status */}
          <div className="space-y-4">
            <div className="rounded-xl glass border border-white/5 p-5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-accent" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-accent">
                Status: Open to new engagements
              </span>
            </div>

            {links.map((l) => {
              const Icon = l.icon
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl glass border border-white/5 p-5 transition-all hover:border-cyan-accent/30 hover:shadow-glow-cyan"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg border border-cyan-accent/20 bg-cyan-accent/10 flex items-center justify-center text-cyan-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-700">
                        {l.label}
                      </div>
                      <div className="text-sm text-ink-100 font-medium">{l.value}</div>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-ink-700 group-hover:text-cyan-accent transition-colors" />
                </a>
              )
            })}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="rounded-2xl glass border border-white/5 p-7 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Jordan Whitfield" />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jordan@company.com"
              />
            </div>
            <div className="mt-5">
              <label className="block font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the network, the incident, or the system you need built."
                className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 outline-none focus:border-cyan-accent/50 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-cyan-accent/10 border border-cyan-accent/40 px-6 py-3 text-sm font-mono uppercase tracking-widest text-cyan-accent transition-all hover:bg-cyan-accent/20 hover:shadow-glow-cyan disabled:opacity-60"
            >
              {status === 'idle' && (
                <>
                  <Send className="w-4 h-4" /> Transmit Message
                </>
              )}
              {status === 'sending' && 'Transmitting...'}
              {status === 'sent' && (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Message Ready — Check Your Mail Client
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block font-mono text-[11px] uppercase tracking-widest text-ink-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 outline-none focus:border-cyan-accent/50 transition-colors"
      />
    </div>
  )
}
