'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, Users, Clock } from 'lucide-react'

const points = [
  {
    icon: CheckCircle,
    title: 'Técnicas mínimamente invasivas',
    description: 'Tratamientos más cómodos y con recuperación más rápida. Tu bienestar es nuestra prioridad.',
  },
  {
    icon: Shield,
    title: 'Convenio con los principales seguros',
    description: 'Adeslas, Sanitas, Mapfre, Asisa, Axa, Allianz y muchos más. Consulta si tienes cobertura.',
  },
  {
    icon: Users,
    title: 'Equipo especializado',
    description: 'Más de 5 especialistas con formación universitaria avanzada y años de experiencia clínica.',
  },
  {
    icon: Clock,
    title: 'Horario amplio y sin esperas',
    description: 'De lunes a viernes de 9:00 a 13:00 y de 15:00 a 19:30. Cita previa rápida.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">¿Por qué Clínica GO?</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Más de una década cuidando la salud de familias en Madrid.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <point.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">{point.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
