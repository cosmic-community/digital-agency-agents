import { getTeamMembers, getServices, getPageBySlug } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import ServiceCard from '@/components/ServiceCard'
import { TeamMember, Service, Page } from '@/types'

export const metadata = {
  title: 'About Us - Digital Agency',
  description: 'Learn about our digital agency, our team of talented professionals, and our comprehensive range of services.',
}

export default async function AboutPage() {
  const [aboutPage, teamMembers, services] = await Promise.all([
    getPageBySlug('about'),
    getTeamMembers(),
    getServices()
  ])

  // Cast to Page type or use fallback values
  const page = aboutPage as Page | null

  // Fallback values if page not found
  const heroHeading = page?.metadata?.hero_heading || 'About Our Agency'
  const heroDescription = page?.metadata?.hero_description || "We're a team of passionate professionals dedicated to creating exceptional digital experiences that drive business growth and delight users."
  const storyTitle = page?.metadata?.story_title || 'Our Story'
  const storyContent = page?.metadata?.story_content || '<p>Our story content goes here.</p>'
  const stats = page?.metadata?.stats || []
  const valuesTitle = page?.metadata?.values_title || 'Our Values'
  const valuesSubtitle = page?.metadata?.values_subtitle || 'The principles that guide everything we do'
  const values = page?.metadata?.values || []

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {heroHeading}
            </h1>
            <p className="text-xl text-white/90">
              {heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{storyTitle}</h2>
                <div 
                  className="text-gray-600 space-y-4"
                  dangerouslySetInnerHTML={{ __html: storyContent }}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-primary/5 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">{valuesTitle}</h2>
            <p className="section-subtitle">
              {valuesSubtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The talented people behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member: TeamMember) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: Service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help bring your digital vision to life and achieve your business goals.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}