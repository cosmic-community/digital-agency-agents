import { getTeamMembers, getServices } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import ServiceCard from '@/components/ServiceCard'
import { TeamMember, Service } from '@/types'

export const metadata = {
  title: 'About Us - Digital Agency',
  description: 'Learn about our digital agency, our team of talented professionals, and our comprehensive range of services.',
}

export default async function AboutPage() {
  const [teamMembers, services] = await Promise.all([
    getTeamMembers(),
    getServices()
  ])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Agency
            </h1>
            <p className="text-xl text-white/90">
              We're a team of passionate professionals dedicated to creating exceptional digital experiences that drive business growth and delight users.
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
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to bridge the gap between creative design and cutting-edge technology, our agency has grown from a small team of dreamers into a full-service digital powerhouse.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that great digital experiences are built on a foundation of strategy, creativity, and technical excellence. Every project we undertake is an opportunity to push boundaries and deliver results that exceed expectations.
                </p>
                <p className="text-gray-600">
                  Today, we work with clients ranging from ambitious startups to established enterprises, helping them navigate the digital landscape and achieve their business goals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering work that exceeds expectations and sets new standards in digital excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, combining our expertise with their vision to achieve great results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of the curve, embracing new technologies and creative approaches to solve complex challenges.
              </p>
            </div>
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