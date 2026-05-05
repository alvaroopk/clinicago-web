'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TEAM } from '@/lib/constants'

export default function TeamPreview() {
  const featured = TEAM.slice(0, 2)

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Conoce a tu equipo</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Especialistas con formación universitaria avanzada que llevan años cuidando de sus pacientes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-10">
          {featured.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm text-center p-6"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-secondary">
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.specialty} en Clínica GO`}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              <h3 className="font-bold text-dark text-lg mb-1">{member.name}</h3>
              <p className="text-accent font-medium text-sm mb-3">{member.specialty}</p>
              <p className="text-muted text-xs leading-relaxed">{member.credentials}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/equipo"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Ver todo el equipo
          </Link>
        </div>
      </div>
    </section>
  )
}
