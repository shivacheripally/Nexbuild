import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../data/site'
import SectionHeading from '../components/SectionHeading'

export default function Work() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-x relative">
          <SectionHeading
            label="Our Work"
            title="Case studies"
            description="A selection of projects we have shipped for clients across industries. Each one started with a conversation and ended with a product that made an impact."
          />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-x space-y-6">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="card group block overflow-hidden p-0 transition-all duration-300 hover:border-brand-500/50"
            >
              <div className="grid lg:grid-cols-5">
                <div className={`relative ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} h-56 lg:h-auto lg:col-span-2 overflow-hidden bg-gradient-to-br from-brand-600/20 via-ink-800 to-ink-900`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-7xl font-bold text-white/5">{project.title.charAt(0)}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium text-ink-300 backdrop-blur-sm">
                    {project.year}
                  </div>
                </div>
                <div className={`p-8 lg:p-10 lg:col-span-3 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">{project.category}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-400">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span key={s} className="rounded-full border border-ink-700 px-3 py-1 text-xs text-ink-400">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition-transform group-hover:translate-x-1">
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
