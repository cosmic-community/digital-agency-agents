import { CaseStudy } from '@/types'
import Link from 'next/link'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const featuredImage = caseStudy.metadata?.featured_image

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
        {featuredImage && (
          <div className="relative h-64 overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={caseStudy.title}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}
        
        <div className="p-6">
          <div className="text-sm text-primary font-semibold mb-2">
            {caseStudy.metadata.client_name}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {caseStudy.title}
          </h3>
          <p className="text-secondary line-clamp-3">
            {caseStudy.metadata.project_overview}
          </p>
          
          {caseStudy.metadata.industry && (
            <div className="mt-4">
              <span className="inline-block bg-gray-100 text-sm px-3 py-1 rounded-full">
                {caseStudy.metadata.industry}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}