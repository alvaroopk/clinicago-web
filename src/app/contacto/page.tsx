import type { Metadata } from 'next'
import { CONTACT, SITE_INDEXED } from '@/lib/constants'
import { MapPin, Phone, Mail, Clock, Train, ParkingCircle } from 'lucide-react'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto y Cita Previa',
  description: 'Contacta con Clínica GO Madrid. Pide cita para odontología o ginecología en C/ Gaztambide 52. Tel: 915 443 626. Horario L-V 9-13h y 15-19:30h.',
  robots: { index: SITE_INDEXED, follow: SITE_INDEXED },
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Contacta con nosotros</h1>
          <p className="text-xl text-blue-100 max-w-xl mx-auto">
            Pide cita por teléfono, email o a través del formulario. Te llamamos en menos de 24h.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-dark mb-6">Solicitar cita</h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Dónde encontrarnos</h2>

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
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-dark">Teléfono</p>
                <a href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`} className="text-accent hover:underline">
                  {CONTACT.phone1}
                </a>
                {' / '}
                <a href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`} className="text-accent hover:underline">
                  {CONTACT.phone2}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-dark">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Clock size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-dark">Horario</p>
                <p className="text-muted">{CONTACT.hours}</p>
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
                <p className="text-muted">{CONTACT.parking}</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-52 shadow-sm mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9189423!2d-3.7127!3d40.4388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228b3a0e8f1a1%3A0x1a1b2c3d4e5f!2sCalle%20Gaztambide%2C%2052%2C%20Madrid!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Clínica GO en Madrid — C/ Gaztambide 52"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
