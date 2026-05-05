'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para conocernos?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Estamos en {CONTACT.address}, {CONTACT.city}. Llámanos o escríbenos y te damos cita hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Solicitar cita
            </Link>
            <a
              href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              {CONTACT.phone1}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
