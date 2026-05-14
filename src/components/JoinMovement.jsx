import { useState } from 'react'
import Icon from './Icon.jsx'
import { candidate } from '../data/site.js'

export default function JoinMovement() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    const form = e.currentTarget
    try {
      const res = await fetch(candidate.volunteerEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError('We could not submit your message. Please email us instead.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="join" className="section nass-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-apc-green/[0.07] rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-apc-gold/[0.05] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left info */}
        <div className="lg:col-span-5 reveal">
          <span className="eyebrow-light">Join Us</span>
          <h2 className="section-title-light mt-3">Join the movement.</h2>
          <p className="mt-5 text-white/65 text-lg leading-relaxed max-w-md">
            Be part of the restoration. Volunteer, support the campaign, or simply share your ideas for a better Benue South.
          </p>

          <div className="mt-10 space-y-5">
            <InfoLine icon="mapPin" title="Campaign Office" body={candidate.hq} />
            <InfoLine icon="mail"   title="Email Us"       body={<a href={`mailto:${candidate.campaignEmail}`} className="hover:text-apc-gold transition-colors">{candidate.campaignEmail}</a>} />
            <InfoLine icon="phone"  title="Call Us"        body={<a href={`tel:${candidate.campaignPhone.replace(/\s/g,'')}`} className="hover:text-apc-gold transition-colors">{candidate.campaignPhone}</a>} />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={candidate.supportUrl} target="_blank" rel="noreferrer" className="btn-gold">
              Support the Campaign <Icon name="arrowRight" className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/40 font-semibold">Follow Us</p>
            <div className="mt-3 flex items-center gap-3">
              {[
                { name: 'facebook',  href: candidate.socials.facebook },
                { name: 'twitter',   href: candidate.socials.twitter },
                { name: 'instagram', href: candidate.socials.instagram },
                { name: 'youtube',   href: candidate.socials.youtube }
              ].map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noreferrer"
                   className="w-11 h-11 grid place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/[0.12] hover:bg-apc-gold hover:text-slate-900 hover:ring-apc-gold transition-all duration-200">
                  <Icon name={s.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 reveal">
          {submitted ? (
            <div className="bg-apc-dark rounded-3xl p-10 text-center ring-1 ring-white/[0.08]">
              <div className="w-16 h-16 mx-auto rounded-full bg-apc-green text-white grid place-items-center">
                <Icon name="check" className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="mt-5 font-display italic text-2xl font-extrabold text-white">You're on the team.</h3>
              <p className="mt-3 text-white/60 max-w-md mx-auto">A campaign coordinator will reach you within 48 hours. In the meantime, follow the campaign on social media and tell a friend.</p>
              <button onClick={() => setSubmitted(false)} className="btn-outline mt-7">Send another message</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-apc-dark rounded-3xl p-7 sm:p-10 ring-1 ring-white/[0.08] space-y-5">
              <h3 className="font-display italic text-2xl font-extrabold text-white">Send us a message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="firstName" placeholder="First Name *" required />
                <Input name="lastName"  placeholder="Last Name *"  required />
              </div>
              <Input type="email" name="email" placeholder="Email Address *" required />
              <Input name="phone" placeholder="Phone (optional)" />
              <select name="interest" defaultValue="" required className="w-full px-5 py-3.5 rounded-2xl ring-1 ring-white/[0.1] bg-white/[0.05] text-white focus:ring-apc-green focus:outline-none">
                <option value="" disabled className="text-slate-900">I am interested in… *</option>
                <option className="text-slate-900">Volunteering</option>
                <option className="text-slate-900">Supporting the campaign</option>
                <option className="text-slate-900">Hosting a town hall in my ward</option>
                <option className="text-slate-900">Press / media enquiry</option>
                <option className="text-slate-900">Sharing an idea</option>
              </select>
              <textarea name="message" rows="4" placeholder="Your message" className="w-full px-5 py-3.5 rounded-2xl ring-1 ring-white/[0.1] bg-white/[0.05] text-white placeholder-white/40 focus:ring-apc-green focus:outline-none resize-none" />
              <label className="flex items-start gap-3 text-sm text-white/60">
                <input required type="checkbox" name="consent" className="accent-apc-green w-4 h-4 mt-1 shrink-0" />
                <span>I consent to being contacted by the {candidate.name} campaign.</span>
              </label>
              {error && <p className="text-sm text-apc-red">{error}</p>}
              <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
                {submitting ? 'Sending…' : (<>Send Message <Icon name="arrowRight" className="w-4 h-4" /></>)}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function InfoLine({ icon, title, body }) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-11 h-11 grid place-items-center rounded-xl bg-white/[0.06] ring-1 ring-white/[0.1] text-apc-gold shrink-0">
        <Icon name={icon} className="w-5 h-5" strokeWidth={2} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-white/45 font-bold">{title}</p>
        <p className="text-white/80 mt-1">{body}</p>
      </div>
    </div>
  )
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full px-5 py-3.5 rounded-2xl ring-1 ring-white/[0.1] bg-white/[0.05] text-white placeholder-white/40 focus:ring-apc-green focus:outline-none"
    />
  )
}
