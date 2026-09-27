import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react'
import { projects } from '../data/site'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center pt-20 text-center">
        <h1 className="heading-2 text-white">Case study not found</h1>
        <p className="prose-muted mt-4">The project you are looking for does not exist or has been moved.</p>
        <Link to="/work" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to all work
        </Link>
      </div>
    )
  }

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-x relative">
          <Link to="/work" className="btn-ghost mb-8">
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>
          <span className="section-label">{project.category}</span>
          <h1 className="heading-1 mt-4 text-white text-balance">{project.title}</h1>
          <p className="prose-muted mt-6 max-w-3xl text-lg text-pretty">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-ink-400">
              <Clock className="h-4 w-4 text-brand-400" />
              {project.duration}
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-400">
              <Calendar className="h-4 w-4 text-brand-400" />
              {project.year}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span key={s} className="rounded-full border border-ink-700 px-3 py-1 text-xs text-ink-400">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-16">
        <div className="container-x">
          <div className="relative h-64 overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-brand-600/20 via-ink-800 to-ink-900 lg:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-9xl font-bold text-white/5">{project.title.charAt(0)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-400">The Challenge</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-200">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-400">Our Approach</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-200">{project.approach}</p>
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-400">The Result</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-200">{project.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next projects */}
      <section className="border-t border-ink-800 py-20 lg:py-28">
        <div className="container-x">
          <div className="flex items-center justify-between">
            <h2 className="heading-3 text-white">More work</h2>
            <Link to="/work" className="btn-ghost">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className="card group overflow-hidden p-0 transition-all duration-300 hover:border-brand-500/50"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-600/20 via-ink-800 to-ink-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-white/5">{p.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">{p.category}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
