import { Link } from 'react-router-dom'

const footerLinks = {
  Services: [
    { label: 'Strategy & Consulting', to: '/services' },
    { label: 'Brand & Visual Design', to: '/services' },
    { label: 'Web & Product Design', to: '/services' },
    { label: 'Engineering & Development', to: '/services' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Our Process', to: '/process' },
    { label: 'Our Work', to: '/work' },
    { label: 'Contact', to: '/contact' },
  ],
  Connect: [
    { label: 'hello@nexbuild.studio', to: '/contact' },
    { label: 'LinkedIn', to: '/contact' },
    { label: 'Dribbble', to: '/contact' },
    { label: 'X / Twitter', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold font-display text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 22V10l12 12V10" />
                </svg>
              </span>
              Nexbuild
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              A digital product studio crafting websites, brands, and software that move businesses forward.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-ink-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">© {new Date().getFullYear()} Nexbuild Studio. All rights reserved.</p>
          <p className="text-xs text-ink-500">Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  )
}
