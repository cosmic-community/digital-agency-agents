import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Digital Agency
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="#contact" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}