import React from 'react'
import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

const cards = [
  { brand: 'VISA', color: 'from-sky-500 to-cyan-400', number: '•••• 4219', name: 'J. Alguersuari' },
  { brand: 'MASTERCARD', color: 'from-fuchsia-500 to-violet-500', number: '•••• 9921', name: 'J. Alguersuari' },
  { brand: 'AMEX', color: 'from-emerald-500 to-teal-400', number: '•••• 3012', name: 'J. Alguersuari' }
]

export default function CardStack() {
  return (
    <div className="relative grid gap-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.brand}
          initial={{ opacity: 0, y: 30, rotate: -2 + i }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 + i }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 * i }}
          className="group"
        >
          <TiltCard className="rounded-3xl p-px bg-gradient-to-br from-white/10 to-white/0">
            <div className="rounded-3xl p-5 md:p-6 bg-slate-900/70 backdrop-blur border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-white/70">{c.brand}</span>
                <span className="h-6 w-10 rounded bg-gradient-to-r from-white/60 to-white/20" />
              </div>
              <div className="mt-6">
                <div className={`inline-flex rounded-lg px-2.5 py-1 text-[10px] tracking-wide font-semibold bg-gradient-to-r ${c.color} text-slate-900`}>ACTIVE</div>
              </div>
              <div className="mt-6 text-2xl font-semibold tracking-widest">{c.number}</div>
              <div className="mt-4 text-sm text-white/70">{c.name}</div>
            </div>
          </TiltCard>
        </motion.div>
      ))}

      {/* Floating glow */}
      <div className="pointer-events-none absolute -inset-8 blur-2xl opacity-60 bg-[radial-gradient(40%_20%_at_50%_0%,rgba(56,189,248,0.18),transparent)]" />
    </div>
  )
}
