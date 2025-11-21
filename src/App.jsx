import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
            <a href="#home" className="font-semibold tracking-tight text-white">JA</a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2 text-sm shadow-lg shadow-cyan-500/20">Let’s talk</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 text-center text-xs text-slate-400 border-t border-white/5 bg-slate-950/60">
        © {new Date().getFullYear()} Juan Alguersuari • Built with love for smooth payments
      </footer>
    </div>
  )
}

export default App
