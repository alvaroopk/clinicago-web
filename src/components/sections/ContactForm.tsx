'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', especialidad: '', mensaje: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-dark mb-2">¡Mensaje enviado!</h3>
        <p className="text-muted">Nos pondremos en contacto contigo en menos de 24 horas.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-dark mb-1">Nombre *</label>
        <input
          id="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-dark mb-1">Teléfono *</label>
        <input
          id="telefono"
          type="tel"
          required
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="600 000 000"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="especialidad" className="block text-sm font-medium text-dark mb-1">Especialidad</label>
        <select
          id="especialidad"
          value={form.especialidad}
          onChange={(e) => setForm({ ...form, especialidad: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          <option value="">Selecciona una opción</option>
          <option value="odontologia">Odontología</option>
          <option value="ginecologia">Ginecología</option>
          <option value="no-se">No sé aún</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-dark mb-1">Mensaje (opcional)</label>
        <textarea
          id="mensaje"
          rows={4}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
          placeholder="Cuéntanos en qué podemos ayudarte..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3.5 rounded-xl transition-colors"
      >
        Solicitar cita
      </button>
    </form>
  )
}
