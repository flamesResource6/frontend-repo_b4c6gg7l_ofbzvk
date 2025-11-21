import React from 'react'
import { motion } from 'framer-motion'
import { Code, CreditCard, Database, Workflow } from 'lucide-react'

const categories = [
  {
    title: 'Payments & Fintech',
    icon: CreditCard,
    items: ['Payment gateways', 'POS integrations', 'Compliance & PCI', 'Transaction optimization']
  },
  {
    title: 'Backend & Data',
    icon: Database,
    items: ['C# / .NET', 'Node / Java', 'SQL & NoSQL', 'XUnit / Testing']
  },
  {
    title: 'Frontend & Apps',
    icon: Code,
    items: ['Angular', 'TypeScript', 'MAUI', 'Responsive UX']
  },
  {
    title: 'Leadership',
    icon: Workflow,
    items: ['Project management', 'Agile / Scrum', 'Cross‑functional alignment', 'Stakeholder communication']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Core strengths
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ title, icon: Icon, items }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-cyan-400" />
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80"></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
