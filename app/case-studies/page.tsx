import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies - Digital Agency',
  description: 'Explore our portfolio of successful projects and see how we\'ve helped businesses achieve their digital goals.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="section-title">Case Studies</h1>
          <p className="section-subtitle">
            Real results from real projects. See how we've helped our clients succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </div>
  )
}