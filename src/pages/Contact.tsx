import { useState } from 'react'
import { ArrowRight, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Loader as Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { services } from '../data/site'
import SectionHeading from '../components/SectionHeading'

const budgetOptions = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not sure yet',
]

type FormState = {
  name: string
  email: string
  company: string
  budget: string
  service: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  budget: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email, and a message.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address.')
      return
    }

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      budget: form.budget || null,
      service: form.service || null,
      message: form.message.trim(),
    })

    if (error) {
      setStatus('error')
      setErrorMsg('Something went wrong on our end. Please try again or email us directly.')
      return
    }

    setStatus('success')
    setForm(initialForm)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-x relative">
          <SectionHeading
            label="Contact"
            title="Let's build something"
            description="Tell us about your project. We will get back to you within two business days with next steps — no pressure, no sales pitch."
          />
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="card flex flex-col items-center justify-center p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/20">
                    <CheckCircle2 className="h-8 w-8 text-brand-400" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">Message sent!</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-ink-400">
                    Thanks for reaching out. We will review your message and get back to you within two business days.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-8"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5 p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-200">
                        Name <span className="text-brand-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-200">
                        Email <span className="text-brand-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-200">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-ink-200">
                        Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a range</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-200">
                      What do you need help with?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-200">
                      Tell us about your project <span className="text-brand-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are you building? What problem are you trying to solve? What does success look like?"
                      className="input-field resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h3 className="font-display text-lg font-semibold text-white">Reach us directly</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <span className="text-ink-500">Email</span>
                    <p className="mt-0.5 text-ink-200">hello@nexbuild.studio</p>
                  </div>
                  <div>
                    <span className="text-ink-500">Phone</span>
                    <p className="mt-0.5 text-ink-200">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <span className="text-ink-500">Hours</span>
                    <p className="mt-0.5 text-ink-200">Mon–Fri, 9am–6pm</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-display text-lg font-semibold text-white">What to expect</h3>
                <ul className="mt-4 space-y-3 text-sm text-ink-400">
                  <li className="flex gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-xs text-brand-400">1</span>
                    We review your message within two business days.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-xs text-brand-400">2</span>
                    We schedule a 30-minute intro call to learn more.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-xs text-brand-400">3</span>
                    We send a proposal with scope, timeline, and cost.
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-xs text-brand-400">4</span>
                    We kick off and start building together.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
