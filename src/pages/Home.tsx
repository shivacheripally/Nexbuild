import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Palette, LayoutGrid as Layout, Code, TrendingUp, LifeBuoy, Star } from 'lucide-react'
import { services, projects, stats, testimonials } from '../data/site'
import SectionHeading from '../components/SectionHeading'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  palette: Palette,
  layout: Layout,
  code: Code,
  'trending-up': TrendingUp,
  'life-buoy': LifeBuoy,
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-label justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Digital Product Studio
            </span>
            <h1 className="heading-1 mt-6 text-white text-balance">
              We design, build, and grow <span className="gradient-text">digital products</span> that move businesses forward.
            </h1>
            <p className="prose-muted mx-auto mt-6 max-w-2xl text-lg text-pretty">
              Nexbuild is a full-service studio combining strategy, design, and engineering under one roof. From first sketch to launch day and beyond, we partner with ambitious companies to build products people love.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/work" className="btn-secondary">
                View our work
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              label="What we do"
              title="Six disciplines, one team"
              description="We cover the full lifecycle of a digital product — from strategy and brand to design, engineering, and growth."
            />
            <Link to="/services" className="btn-ghost shrink-0">
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <Link
                  key={service.slug}
                  to="/services"
                  className="card group p-6 transition-all duration-300 hover:border-brand-500/50 hover:bg-ink-900"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{service.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-y border-ink-800 bg-ink-900/30 py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              label="Selected work"
              title="Products we are proud of"
              description="A glimpse of what we have built for clients across fintech, healthcare, e-commerce, and media."
            />
            <Link to="/work" className="btn-ghost shrink-0">
              All case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.slice(0, 4).map((project, i) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className={`card group overflow-hidden p-0 transition-all duration-300 hover:border-brand-500/50 ${
                  i === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative ${i === 0 ? 'h-64 lg:h-80' : 'h-56'} overflow-hidden bg-ink-800`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-600/30 via-ink-800 to-ink-900" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-white/10">{project.title.charAt(0)}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium text-ink-300 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{project.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition-transform group-hover:translate-x-1">
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            label="Client stories"
            title="Trusted by teams who ship"
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.author} className="card p-8">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-ink-200">"{t.quote}"</p>
                <div className="mt-6">
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-ink-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900 via-ink-900 to-brand-900/30 p-10 lg:p-16">
            <div className="absolute right-0 top-0 -z-0 h-[300px] w-[300px] rounded-full bg-brand-500/10 blur-[100px]" />
            <div className="relative max-w-2xl">
              <h2 className="heading-2 text-white text-balance">
                Have a project in mind? Let's talk.
              </h2>
              <p className="prose-muted mt-4 text-lg">
                Tell us what you are building. We will get back to you within two business days with next steps — no pressure, no sales pitch.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/process" className="btn-secondary">
                  See our process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
