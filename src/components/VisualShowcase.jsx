import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Santiago Bernabéu',
    tag: 'Stadium • High‑volume payments',
    accent: 'from-cyan-400/30 to-sky-500/30',
  },
  {
    title: 'Roig Arena',
    tag: 'Arena • Omnichannel checkout',
    accent: 'from-fuchsia-400/30 to-violet-500/30',
  },
  {
    title: 'Movistar Arena',
    tag: 'Events • POS + Kiosks',
    accent: 'from-emerald-400/30 to-teal-500/30',
  }
]

export default function VisualShowcase() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(56,189,248,0.10),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Flagship projects
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              {/* Faux background visual */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.accent}`} />
              <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(60%_60%_at_70%_10%,white_0%,transparent_60%)]" />
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\'><path fill=\'white\' fill-opacity=\'0.05\' d=\'M0 16h32v1H0zM16 0v32h-1V0z\'/></svg>')]" />

              <div className="relative p-6 md:p-8 h-56 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full bg-black/30 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">{card.tag}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{card.title}</h3>
                  <p className="text-sm text-white/80 mt-1">Throughput, failover, and a world‑class fan experience.</p>
                </div>
              </div>

              {/* Hover motion */}
              <motion.div
                aria-hidden
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-t from-black/50 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
