import React from 'react'
import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Lead Software Engineer',
    company: 'LOOMIS-PAY',
    location: 'Valencia, Spain (Onsite)',
    period: '2025 – Present',
    bullets: [
      'Led end-to-end integrations for acquired POS systems with Loomis Pay gateway ensuring seamless processing',
      'Primary liaison between teams; aligned specs with business goals and resolved technical queries',
      'Collaborated with Sweden gateway team to enhance card integrations and optimize flows for Spain',
      'Owned analysis and strategy for integrations, tracking progress and ensuring compliance with standards'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Hosteltáctil by LOOMIS-PAY',
    location: 'Valencia, Spain (Onsite)',
    period: '2023 – Present',
    bullets: [
      'Drove flagship client integrations: Santiago Bernabéu, Roig Arena, Movistar Arena',
      'Built and maintained apps for hospitality: POS, kiosks, cloud invoicing',
      'Integrated Loomis Pay and Global Payments into Hosteltáctil POS to improve reliability and UX',
      'Analyzed and integrated Cima cash dispensers; boosted cash management efficiency'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Capgemini',
    location: 'Valencia, Spain (Onsite)',
    period: '2021 – 2022',
    bullets: [
      'Developed web apps with Angular/Material and Spring Boot; Oracle for persistence',
      'Collaborated using Git and best practices for delivery'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(56,189,248,0.06))]"></div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Experience
        </motion.h2>

        <div className="mt-12 space-y-8">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{role.title}</h3>
                  <p className="text-sky-300 font-medium">{role.company}</p>
                </div>
                <div className="text-slate-300/80 text-sm">{role.location} • {role.period}</div>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-5">
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
