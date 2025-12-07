import { CaseStudy } from '@/types'
import CaseStudyCard from './CaseStudyCard'
import Link from 'next/link'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Case Studies</h2>
          <p className="section-subtitle">
            See how we've helped businesses achieve their digital goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}