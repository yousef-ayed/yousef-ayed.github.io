import React from 'react'

export default function GridBackground({ scanline = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      {scanline && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-accent/70 to-transparent animate-scanline motion-reduce:hidden" />
      )}
    </div>
  )
}
