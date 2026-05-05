import Hero from '@/components/sections/Hero'
import UnitsSection from '@/components/sections/UnitsSection'
import WhyUs from '@/components/sections/WhyUs'
import TeamPreview from '@/components/sections/TeamPreview'
import Insurance from '@/components/sections/Insurance'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <UnitsSection />
      <WhyUs />
      <TeamPreview />
      <Insurance />
      <CTABanner />
    </>
  )
}
