import { Link } from 'react-router-dom'
import { ArrowRight, Check, Compass, Palette, LayoutGrid as Layout, Code, TrendingUp, LifeBuoy } from 'lucide-react'
import { services, faqs } from '../data/site'
import SectionHeading from '../components/SectionHeading'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  palette: Palette,
  layout: Layout,
  code: Code,
  'trending-up': TrendingUp,
  'life-buoy': LifeBuoy,
}

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-x relative">
          <SectionHeading
            label="Services"
            title="Everything you need, under one roof"
            description="We offer six interconnected disciplines that cover the full arc of a digital product. Engage us for one, or partner across them all."
          />
        </div>
      </section>

      {/* Services list */}
      <section className="pb-20 lg:pb-28">
        <div className="container-x space-y-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="card scroll-mt-24 p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm font-medium text-brand-400">{service.tagline}</p>
                    <div className="mt-4 text-3xl font-bold font-display text-ink-800">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-base leading-relaxed text-ink-300">{service.description}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-sm text-ink-300">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                            <Check className="h-3 w-3 text-brand-400" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink-800 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="FAQ"
                title="Questions we hear often"
                description="If you do not find your answer here, reach out — we are happy to chat."
              />
              <Link to="/contact" className="btn-primary mt-8">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="card group p-5">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
                    {faq.question}
                    <span className="text-ink-500 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
