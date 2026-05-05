import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, SITE_INDEXED } from '@/lib/constants'
import { MapPin, Train, ParkingCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Instalaciones',
  description: 'Conoce las instalaciones de Clínica GO en Madrid — gabinetes modernos y sala de espera cómoda. C/ Gaztambide 52, metro Islas Filipinas.',
  robots: { index: SITE_INDEXED, follow: SITE_INDEXED },
}

const GALLERY = [
  { src: '/assets/instalaciones_gabinete_1.jpg', alt: 'Gabinete de tratamiento dental 1 — Clínica GO Madrid' },
  { src: '/assets/instalaciones_gabinete_2.jpg', alt: 'Gabinete de tratamiento dental 2 — Clínica GO Madrid' },
  { src: '/assets/instalaciones_sala_espera_1.jpg', alt: 'Sala de espera de Clínica GO Madrid' },
  { src: '/assets/instalaciones_sala_espera_2.jpg', alt: 'Segunda sala de espera de Clínica GO Madrid' },
]

export default function InstalacionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Clínica dental y ginecológica en Madrid — nuestras instalaciones
          </h1>
          <p className="text-xl text-blue-100 max-w-xl mx-auto">
            Gabinetes modernos y totalmente equipados. Un espacio pensado para que te sientas
            cómodo y seguro desde el primer momento.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GALLERY.map((img) => (
              <div key={img.src} className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to find us */}
      <section className="py-16 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">Cómo llegar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Dirección</p>
                  <p className="text-muted">{CONTACT.address}, {CONTACT.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <Train size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Metro</p>
                  <p className="text-muted">{CONTACT.metro}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <ParkingCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-dark">Parking</p>
                  <p className="text-muted">Gaztambide {CONTACT.parking.split(' ')[1]}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9189423!2d-3.7127!3d40.4388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228b3a0e8f1a1%3A0x1a1b2c3d4e5f!2sCalle%20Gaztambide%2C%2052%2C%20Madrid!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Clínica GO en Madrid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">¿Te gustaría visitarnos?</h2>
          <p className="text-blue-100 mb-8">Pide tu cita y ven a conocer la clínica.</p>
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
