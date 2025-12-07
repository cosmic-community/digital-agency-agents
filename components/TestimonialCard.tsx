import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const photo = testimonial.metadata?.client_photo
  const rating = testimonial.metadata?.rating

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {rating && (
        <div className="flex text-accent mb-4">
          {Array.from({ length: 5 }, (_, index) => {
            const starNumber = parseInt(rating.key)
            const filled = index < starNumber
            return (
              <svg
                key={index}
                className={`w-5 h-5 ${filled ? 'text-accent' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )
          })}
        </div>
      )}

      <p className="text-gray-700 mb-6 italic">"{testimonial.metadata.testimonial_text}"</p>

      <div className="flex items-center gap-4">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.client_name}
            width={64}
            height={64}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-semibold">{testimonial.metadata.client_name}</div>
          <div className="text-sm text-secondary">
            {testimonial.metadata.job_title && `${testimonial.metadata.job_title}, `}
            {testimonial.metadata.company_name}
          </div>
        </div>
      </div>
    </div>
  )
}