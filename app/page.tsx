import { getServices, getTestimonials, getCaseStudies } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const [services, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTestimonials(),
    getCaseStudies()
  ])

  return (
    <>
      <Hero />
      <ServicesSection services={services} />
      <CaseStudiesSection caseStudies={caseStudies.slice(0, 3)} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  )
}