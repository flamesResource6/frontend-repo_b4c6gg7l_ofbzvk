import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

export default function TiltCard({ className = '', children, glare = true }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8])

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    x.set(px - 0.5)
    y.set(py - 0.5)
  }

  const handleLeave = () => {
    animate(x, 0, { duration: 0.4 })
    animate(y, 0, { duration: 0.4 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative will-change-transform ${className}`}
    >
      {glare && (
        <motion.div
          aria-hidden
          style={{ x, y }}
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
        >
          <div
            className="absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                'radial-gradient(600px 200px at calc(50% + 20px) -20px, rgba(255,255,255,0.25), transparent 60%)',
              transform: 'translateZ(40px)'
            }}
          />
        </motion.div>
      )}
      <div style={{ transform: 'translateZ(25px)' }} className="relative rounded-[inherit]">
        {children}
      </div>
    </motion.div>
  )
}
