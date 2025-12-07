import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Let's work together to create something exceptional. Get in touch to discuss your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            View Services
          </Link>
          <a href="mailto:hello@agency.com" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}