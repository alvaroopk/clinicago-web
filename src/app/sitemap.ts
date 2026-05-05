import { MetadataRoute } from 'next'

const BASE_URL = 'https://clinicago-web.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/odontologia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/ginecologia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/equipo`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/instalaciones`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
