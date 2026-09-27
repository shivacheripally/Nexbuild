import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { processSteps } from '../data/site'
import SectionHeading from '../components/SectionHeading'

export default function Process() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-x relative">
          <SectionHeading
            label="Our Process"
            title="How we work"
            description="A clear, collaborative process that keeps you in the loop from day one. No surprises, no black boxes — just steady progress toward a product you are proud of."
          />
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="relative space-y-6">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-px bg-ink-800 sm:left-[31px]" />

            {processSteps.map((step) => (
              <div key={step.number} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink-700 bg-ink-950 font-display text-sm font-bold text-brand-400 sm:h-16 sm:w-16">
                  {step.number}
                </div>
                <div className="card flex-1 p-6 lg:p-8">
                  <h3 className="font-display text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-300">{step.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {step.activities.map((activity) => (
                      <span key={activity} className="rounded-full border border-ink-700 bg-ink-900 px-3 py-1 text-xs text-ink-400">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-ink-800 bg-ink-900/30 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading label="Principles" title="How we work day-to-day" align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="card p-8">
              <h3 className="font-display text-lg font-semibold text-white">Weekly check-ins</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                You hear from us every week. We share progress, raise blockers, and adjust course together. No going dark for months.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="font-display text-lg font-semibold text-white">Work in the open</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                You have access to our project tools, design files, and code repository. You see the work as it happens, not just at the end.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="font-display text-lg font-semibold text-white">Ship in increments</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">
                We deliver in small, working increments — not one big reveal. You get something usable every few weeks, and we improve from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900 via-ink-900 to-brand-900/30 p-10 text-center lg:p-16">
            <div className="absolute left-1/2 top-0 -z-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="heading-2 text-white text-balance">Ready to start?</h2>
              <p className="prose-muted mt-4 text-lg">
                The first step is a conversation. Tell us what you are building and we will help you figure out the rest.
              </p>
              <Link to="/contact" className="btn-primary mt-8">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
