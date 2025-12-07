// app/case-studies/[slug]/page.tsx
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { CaseStudy } from '@/types'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.title} - Case Study`,
    description: caseStudy.metadata?.project_overview || '',
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug) as CaseStudy | null

  if (!caseStudy) {
    notFound()
  }

  const featuredImage = caseStudy.metadata?.featured_image
  const gallery = caseStudy.metadata?.project_gallery
  const servicesUsed = caseStudy.metadata?.services_used
  const testimonial = caseStudy.metadata?.testimonial

  return (
    <div className="py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
          <div className="flex flex-wrap gap-4 text-secondary">
            <span className="font-medium">{caseStudy.metadata.client_name}</span>
            {caseStudy.metadata.industry && (
              <>
                <span>•</span>
                <span>{caseStudy.metadata.industry}</span>
              </>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=1400&h=700&fit=crop&auto=format,compress`}
              alt={caseStudy.title}
              width={700}
              height={350}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Overview */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Project Overview</h2>
          <p>{caseStudy.metadata.project_overview}</p>
        </div>

        {/* Challenge, Solution, Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudy.metadata.challenge && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Challenge</h3>
              <div 
                className="prose prose-sm"
                dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
              />
            </div>
          )}
          
          {caseStudy.metadata.solution && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Solution</h3>
              <div 
                className="prose prose-sm"
                dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }}
              />
            </div>
          )}
          
          {caseStudy.metadata.results && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <div 
                className="prose prose-sm"
                dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
              />
            </div>
          )}
        </div>

        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={`${caseStudy.title} - Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Used */}
        {servicesUsed && servicesUsed.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Services Used</h2>
            <div className="flex flex-wrap gap-3">
              {servicesUsed.map((service) => (
                <span
                  key={service.id}
                  className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {service.title}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial */}
        {testimonial && (
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
            <div className="flex flex-col md:flex-row gap-6">
              {testimonial.metadata?.client_photo && (
                <img
                  src={`${testimonial.metadata.client_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                  alt={testimonial.metadata.client_name}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full object-cover"
                />
              )}
              <div className="flex-1">
                <p className="text-lg mb-4 italic">"{testimonial.metadata?.testimonial_text}"</p>
                <div className="font-semibold">{testimonial.metadata?.client_name}</div>
                <div className="text-secondary text-sm">
                  {testimonial.metadata?.job_title} at {testimonial.metadata?.company_name}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}