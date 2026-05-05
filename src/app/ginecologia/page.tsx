import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GYN_SERVICES, INSURANCE, SITE_INDEXED } from '@/lib/constants'
import { Heart, Search, FileText, Microscope, Calendar, Scissors, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ginecología y Obstetricia en Madrid',
  description: 'Consultas ginecológicas, ecografías, citologías, colposcopias y planificación familiar en Madrid. Clínica GO, Gaztambide. Convenio con principales seguros.',
  robots: { index: SITE_INDEXED, follow: SITE_INDEXED },
}

const ICONS: React.ElementType[] = [Heart, Search, FileText, Microscope, Calendar, Scissors, Sun]

export default function GinecologiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
          alt="Consulta de ginecología — Clínica GO Madrid"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/75" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ginecología y obstetricia en Madrid
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Seguimiento completo de tu salud femenina. Consultas, ecografías, citologías
            y mucho más en un ambiente cálido y confidencial.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Pedir cita de ginecología
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">Nuestros servicios</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GYN_SERVICES.map((service, i) => {
              const Icon = ICONS[i % ICONS.length]
              return (
                <div key={service.title} className="bg-secondary rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-dark text-lg mb-2">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-secondary border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">Tu seguro tiene cobertura aquí</h2>
          <p className="text-muted mb-8">
            Trabajamos con los principales seguros médicos privados. Consulta si el tuyo tiene convenio con nosotros.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {INSURANCE.map((ins) => (
              <span key={ins} className="bg-white text-primary font-semibold text-sm px-4 py-2 rounded-full border border-primary/10">
                {ins}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">¿Lista para tu revisión anual?</h2>
          <p className="text-blue-100 mb-8">
            Pide cita hoy. Estamos aquí para acompañarte en cada etapa de tu vida.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Solicitar cita
          </Link>
        </div>
      </section>
    </>
  )
}
