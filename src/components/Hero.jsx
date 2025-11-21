import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import CardStack from './CardStack'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#60a5fa_0%,transparent_40%),radial-gradient(circle_at_80%_30%,#22d3ee_0%,transparent_35%),radial-gradient(circle_at_50%_90%,#a78bfa_0%,transparent_35%)]"></div>
      </div>

      {/* 3D Spline Scene */}
      <div className="absolute inset-0 md:right-0 md:w-1/2 h-full hidden md:block">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="backdrop-blur-sm/0"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300 mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for senior roles • Payments + Hospitality
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Juan Alguersuari
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-xl">
              Payment specialist developer and project manager building seamless, compliant, and high‑performance experiences for hospitality and fintech.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity">
                Get in touch
              </a>
              <a href="#experience" className="inline-flex items-center rounded-xl border border-white/10 text-white px-5 py-3 hover:bg-white/5 transition-colors">
                View experience
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
              <span>linkedin.com/in/juanalguersuari</span>
              <span>•</span>
              <span>+34 609 78 62 80</span>
              <span>•</span>
              <span>juanalguersuari@outlook.es</span>
            </div>
          </motion.div>
        </div>
        <div className="md:col-span-6">
          <CardStack />
        </div>
      </div>

      {/* Glass gradient overlay to add depth without blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80"></div>
    </section>
  )
}
