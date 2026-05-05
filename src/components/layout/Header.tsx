'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { CONTACT, SITE_NAME } from '@/lib/constants'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/odontologia', label: 'Odontología' },
  { href: '/ginecologia', label: 'Ginecología' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/instalaciones', label: 'Instalaciones' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Clínica</span>
          <span className="text-xl font-bold text-accent">GO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === link.href ? 'text-primary' : 'text-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`}
          className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Phone size={16} />
          Pedir cita
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded text-dark hover:text-primary"
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium ${pathname === link.href ? 'text-primary' : 'text-dark'}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-accent text-white text-sm font-semibold px-4 py-2.5 rounded-lg w-fit"
          >
            <Phone size={16} />
            Pedir cita — {CONTACT.phone1}
          </a>
        </div>
      )}
      <noscript>
        <div style={{ display: 'none' }}>{SITE_NAME}</div>
      </noscript>
    </header>
  )
}
