import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=2000&auto=format,compress&fit=crop)'
        }}
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creative Digital Solutions for Modern Businesses
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            We transform ideas into exceptional digital experiences that drive growth and engage audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-200">
              Start Your Project
            </Link>
            <Link href="/case-studies" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-200">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}