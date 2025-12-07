import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  detailed?: boolean
}

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const icon = service.metadata?.icon
  const keyFeatures = service.metadata?.key_features

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      {icon && (
        <div className="mb-4">
          <img
            src={`${icon.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
            alt={service.metadata.service_name}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded"
          />
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{service.metadata.service_name}</h3>
      <p className="text-secondary mb-4">{service.metadata.short_description}</p>
      
      {service.metadata.starting_price && (
        <div className="text-primary font-semibold mb-4">
          Starting at {service.metadata.starting_price}
        </div>
      )}

      {detailed && keyFeatures && keyFeatures.length > 0 && (
        <ul className="space-y-2 mt-4">
          {keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}