import { CONTACT, SITE_NAME } from '@/lib/constants'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: SITE_NAME,
    description:
      'Clínica dental y ginecológica en Madrid. Técnicas mínimamente invasivas, equipo especializado y convenio con los principales seguros médicos.',
    url: 'https://clinicago-web.vercel.app',
    telephone: CONTACT.phone1,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C/ Gaztambide 52, bajo dcha.',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '15:00',
        closes: '19:30',
      },
    ],
    medicalSpecialty: ['Dentistry', 'Gynecology'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
