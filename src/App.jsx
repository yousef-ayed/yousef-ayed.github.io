import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-void-950 selection:bg-cyan-accent/20">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
