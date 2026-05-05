'use client'
import { motion } from 'framer-motion'
import { INSURANCE } from '@/lib/constants'

export default function Insurance() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-3">Trabajamos con tu seguro</h2>
          <p className="text-muted">
            Clínica GO tiene convenio con los principales seguros médicos privados de España.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {INSURANCE.map((ins) => (
            <span
              key={ins}
              className="bg-secondary text-primary font-semibold text-sm px-4 py-2 rounded-full border border-primary/10"
            >
              {ins}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
