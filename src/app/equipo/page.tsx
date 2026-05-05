import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TEAM, SITE_INDEXED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Equipo Médico',
  description: 'Conoce al equipo de especialistas de Clínica GO Madrid — cirujanos orales, ortodoncistas, endodoncistas y ginecólogos con formación universitaria avanzada.',
  robots: { index: SITE_INDEXED, follow: SITE_INDEXED },
}

export default function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Especialistas en odontología y ginecología en Madrid
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Más de 5 dentistas y ginecólogos con formación universitaria avanzada que llevan
            años cuidando a familias en Madrid. Los conoces, ellos te conocen.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-56">
                  <Image
                    src={member.photo}
                    alt={`${member.name} — ${member.specialty} en Clínica GO Madrid`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-dark text-lg mb-1">{member.name}</h2>
                  <p className="text-accent font-semibold text-sm mb-3">{member.specialty}</p>
                  <p className="text-muted text-sm leading-relaxed">{member.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-4">¿Quieres conocernos en persona?</h2>
          <p className="text-muted mb-8">
            Pide una primera visita sin compromiso. Estamos en C/ Gaztambide 52, Madrid.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Solicitar cita
          </Link>
        </div>
      </section>
    </>
  )
}
