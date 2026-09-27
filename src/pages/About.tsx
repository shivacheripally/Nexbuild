import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { team, stats } from '../data/site'
import SectionHeading from '../components/SectionHeading'

const values = [
  {
    title: 'Craft over speed',
    description: 'We move quickly, but never at the expense of quality. Every detail matters — from the code we write to the pixels we push.',
  },
  {
    title: 'Partners, not vendors',
    description: 'We invest in your success. Your goals are our goals, and we act like part of your team, not an outside contractor.',
  },
  {
    title: 'Evidence over opinion',
    description: 'We test, measure, and iterate. Decisions are based on data and user feedback, not gut feelings or trends.',
  },
  {
    title: 'Transparency always',
    description: 'No black boxes. We share our process, our reasoning, and our progress. You always know what we are doing and why.',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-x relative">
          <SectionHeading
            label="About Nexbuild"
            title="A small studio with a big ambition"
            description="We believe great digital products come from teams that care deeply — about the craft, the user, and the outcome. That is why we stay small, stay hands-on, and stay close to the work."
          />
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-ink-300">
            <p>
              Nexbuild was founded in 2018 by a group of designers and engineers who were tired of the agency model. Too many studios were good at one thing — design or development — but not both. Projects fell through the cracks between handoffs. Great designs were ruined in implementation. Great code was wasted on poor interfaces.
            </p>
            <p>
              We set out to build something different: a studio where strategy, design, and engineering lived under the same roof, in the same room, on the same team. No silos. No finger-pointing. Just a group of people who care about making great things together.
            </p>
            <p>
              Eight years later, we have shipped over 120 projects for 40+ clients across fintech, healthcare, e-commerce, media, and SaaS. We are still small by choice — under 15 people — because we believe the best work happens in tight, senior teams where everyone owns the outcome.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-ink-800 bg-ink-900/30 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading label="What we believe" title="Our values" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card p-6">
                <h3 className="font-display text-lg font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            label="The team"
            title="People who do the work"
            description="Every project is led by a senior team. No juniors learning on your dime."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500/20 to-ink-800 font-display text-xl font-bold text-brand-300">
                  {member.initials}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-brand-400">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900 via-ink-900 to-brand-900/30 p-10 text-center lg:p-16">
            <div className="absolute left-1/2 top-0 -z-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[100px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="heading-2 text-white text-balance">Want to work with us?</h2>
              <p className="prose-muted mt-4 text-lg">
                We take on a limited number of projects each quarter. If you are thinking about a digital project, let's start a conversation.
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
