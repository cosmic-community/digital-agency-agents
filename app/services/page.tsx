import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Our Services - Digital Agency',
  description: 'Explore our comprehensive range of digital services including web development, brand design, and digital marketing.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} detailed />
          ))}
        </div>
      </div>
    </div>
  )
}