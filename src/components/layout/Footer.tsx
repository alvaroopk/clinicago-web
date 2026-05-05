import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CONTACT, INSURANCE, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-1 mb-3">
            <span className="text-xl font-bold text-white">Clínica</span>
            <span className="text-xl font-bold text-accent">GO</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Clínica dental y ginecológica en Madrid. Cuidamos tu salud con técnicas mínimamente invasivas.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contacto</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="shrink-0 mt-0.5 text-accent" />
              <span>{CONTACT.address}, {CONTACT.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <a href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                {CONTACT.phone1}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                {CONTACT.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-accent" />
              <span>{CONTACT.hours}</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-white mb-4">Especialidades</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <Link href="/odontologia" className="block hover:text-white transition-colors">Odontología</Link>
            <Link href="/ginecologia" className="block hover:text-white transition-colors">Ginecología</Link>
            <Link href="/equipo" className="block hover:text-white transition-colors">Equipo médico</Link>
            <Link href="/instalaciones" className="block hover:text-white transition-colors">Instalaciones</Link>
            <Link href="/contacto" className="block hover:text-white transition-colors">Pedir cita</Link>
          </div>
        </div>

        {/* Insurance */}
        <div>
          <h3 className="font-semibold text-white mb-4">Seguros aceptados</h3>
          <div className="flex flex-wrap gap-1.5">
            {INSURANCE.map((ins) => (
              <span key={ins} className="text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                {ins}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
      </div>
    </footer>
  )
}
