import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { terminalLines } from '../data/content'

const typeColor = {
  ok: 'text-emerald-accent',
  muted: 'text-ink-500',
  status: 'text-cyan-accent font-semibold',
}

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    setVisibleCount(0)
    setCharCount(0)
  }, [cycle])

  useEffect(() => {
    if (visibleCount >= terminalLines.length) {
      const restart = setTimeout(() => setCycle((c) => c + 1), 4000)
      return () => clearTimeout(restart)
    }
    const currentLine = terminalLines[visibleCount]
    const fullText = currentLine.prompt
      ? `${currentLine.prompt} ${currentLine.text}`
      : currentLine.text

    if (charCount < fullText.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setVisibleCount((v) => v + 1)
        setCharCount(0)
      }, 260)
      return () => clearTimeout(t)
    }
  }, [charCount, visibleCount, cycle])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      className="w-full max-w-lg rounded-xl glass shadow-panel overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-signal-red/70" />
        <span className="w-3 h-3 rounded-full bg-signal-amber/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-accent/70" />
        <span className="ml-3 font-mono text-xs text-ink-500 tracking-wide">
          system-diagnostics.sh
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[220px]">
        {terminalLines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={line.prompt ? 'text-ink-100' : typeColor[line.type] || 'text-ink-300'}>
            {line.prompt && <span className="text-emerald-accent mr-2">{line.prompt}</span>}
            {line.text}
            {line.type === 'ok' && <span className="ml-2 text-ink-700">[OK]</span>}
          </div>
        ))}
        {visibleCount < terminalLines.length && (() => {
          const current = terminalLines[visibleCount]
          const full = current.prompt ? `${current.prompt} ${current.text}` : current.text
          const shown = full.slice(0, charCount)
          return (
            <div className={current.prompt ? 'text-ink-100' : typeColor[current.type] || 'text-ink-300'}>
              {shown}
              <span className="inline-block w-2 h-3.5 bg-cyan-accent ml-0.5 align-middle animate-blink" />
            </div>
          )
        })()}
        {visibleCount >= terminalLines.length && (
          <div className="mt-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulseGlow" />
            <span className="text-ink-500 text-xs">Monitoring session active</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
