'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/instalaciones_gabinete_1.jpg')" }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/70" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Tu clínica dental y ginecológica en Madrid
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Cuidamos tu salud con técnicas mínimamente invasivas, en un ambiente cálido y sin esperas.
            Convenio con los principales seguros médicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Pedir cita
            </Link>
            <Link
              href="/odontologia"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 transition-colors text-lg"
            >
              Ver tratamientos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
