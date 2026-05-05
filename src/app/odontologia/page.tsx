import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { DENTAL_SERVICES, SITE_INDEXED } from '@/lib/constants'
import { Smile, Scissors, Zap, Shield, Activity, Star, Heart, Wrench, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tratamientos Dentales en Madrid',
  description: 'Odontología general, ortodoncia, implantes, periodoncia y tratamientos con láser en Madrid. Técnicas mínimamente invasivas en Clínica GO, Gaztambide.',
  robots: { index: SITE_INDEXED, follow: SITE_INDEXED },
}

const ICON_MAP: Record<string, React.ElementType> = {
  tooth: CheckCircle,
  smile: Smile,
  scissors: Scissors,
  zap: Zap,
  shield: Shield,
  activity: Activity,
  star: Star,
  heart: Heart,
  tool: Wrench,
}

export default function OdontologiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/instalaciones_gabinete_1.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark/75" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Tratamientos dentales en Madrid
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Desde la revisión anual hasta implantes o alineadores. Técnicas mínimamente invasivas
            para que tu experiencia sea lo más cómoda posible.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Solicitar primera visita
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Nuestros tratamientos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DENTAL_SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? CheckCircle
              return (
                <div
                  key={service.title}
                  className="bg-secondary rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
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

      {/* Gallery */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-dark text-center mb-8">Nuestras instalaciones</h2>
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/assets/instalaciones_gabinete_1.jpg"
                alt="Gabinete dental equipado en Clínica GO Madrid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 350px"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden">
              <Image
                src="/assets/instalaciones_gabinete_2.jpg"
                alt="Segundo gabinete de tratamiento en Clínica GO"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 350px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Tienes dudas sobre qué tratamiento necesitas?
          </h2>
          <p className="text-blue-100 mb-8">
            Pídenos cita para una primera revisión sin compromiso. Te orientamos sin presiones.
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
