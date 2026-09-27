import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-20 text-center">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative">
        <span className="font-display text-8xl font-bold text-white/10">404</span>
        <h1 className="heading-2 mt-4 text-white">Page not found</h1>
        <p className="prose-muted mt-4 max-w-md">
          The page you are looking for does not exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" />
          Back home
        </Link>
      </div>
    </div>
  )
}
