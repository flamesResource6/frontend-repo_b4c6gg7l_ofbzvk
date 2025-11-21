import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(34,211,238,0.12),transparent)]"></div>
      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Let’s collaborate</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Open to senior engineering roles, payment integrations, and technical leadership in hospitality and fintech.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-slate-300">
            <a href="mailto:juanalguersuari@outlook.es" className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] transition-colors">juanalguersuari@outlook.es</a>
            <a href="tel:+34609786280" className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] transition-colors">+34 609 78 62 80</a>
            <a href="https://linkedin.com/in/juanalguersuari" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-white/[0.06] transition-colors">LinkedIn Profile</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
