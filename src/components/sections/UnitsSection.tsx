'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const units = [
  {
    title: 'Unidad Dental',
    description:
      'Desde revisiones y limpiezas hasta implantes, ortodoncia o tratamientos con láser. Cuidamos tu sonrisa en todas las etapas de tu vida.',
    href: '/odontologia',
    cta: 'Ver tratamientos',
    image: '/assets/instalaciones_gabinete_2.jpg',
    alt: 'Gabinete dental de Clínica GO Madrid',
  },
  {
    title: 'Unidad Ginecología',
    description:
      'Seguimiento ginecológico completo, ecografías, citologías y planificación familiar. Tu salud femenina en manos expertas.',
    href: '/ginecologia',
    cta: 'Ver servicios',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    alt: 'Consulta de ginecología en Clínica GO Madrid',
  },
]

export default function UnitsSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Dos especialidades médicas bajo el mismo techo, con el mismo equipo de confianza.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-56">
                <Image
                  src={unit.image}
                  alt={unit.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3">{unit.title}</h3>
                <p className="text-muted mb-5 leading-relaxed">{unit.description}</p>
                <Link
                  href={unit.href}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  {unit.cta} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
