import Icon from './Icon.jsx'
import { candidate } from '../data/site.js'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-photo text-white min-h-[92vh] flex flex-col">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        aria-hidden="true"
      />

      {/* Right-side portrait glow */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-apc-green/[0.07] to-transparent pointer-events-none" aria-hidden="true" />

      {/* Bottom wave */}
      <svg className="absolute inset-x-0 bottom-0 w-full opacity-40" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#0a1612" d="M0,160L80,149C160,139,320,117,480,122C640,128,800,160,960,165C1120,171,1280,149,1360,138L1440,128L1440,200L0,200Z" />
      </svg>

      <div className="container-x relative flex-1 grid lg:grid-cols-2 gap-12 items-center pt-10 pb-20 sm:pt-36 sm:pb-44">

        {/* ── LEFT: Campaign text ── */}
        <div>
          {/* Slogan */}
          <h1 className="mt-7 font-display font-black leading-[1.0] tracking-tight">
            <span className="block text-[clamp(3.2rem,8vw,6.5rem)] text-apc-gold drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] italic">
              {candidate.slogan}
            </span>
            <span className="block mt-2 text-[clamp(1.3rem,3.2vw,2.4rem)] text-white/85 font-normal not-italic">
              {candidate.sloganMeaning}.
            </span>
          </h1>

          {/* Sub */}
          <p className="mt-7 max-w-lg text-white/65 text-[17px] leading-relaxed">
            <span className="font-semibold text-white">{candidate.name}</span> — PhD scholar, former UBA Regional Manager, son of Okpoga — for{' '}
            {candidate.constituencyShort}.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={candidate.supportUrl} target="_blank" rel="noreferrer" className="btn-gold">
              Support the Campaign <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <a href="#about" className="btn-outline-light">Meet the Candidate</a>
          </div>

          {/* Metadata strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-2 text-[11px] text-white/40 uppercase tracking-[0.18em] font-medium">
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />All Progressives Congress</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />Broom Symbol</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />February {candidate.sloganYear}</span>
          </div>
        </div>

        {/* ── RIGHT: Portrait ── */}
        <div className="hidden lg:flex justify-center items-end relative">
          {/* Glow ring behind portrait */}
          <div className="absolute inset-0 rounded-3xl bg-apc-green/10 blur-3xl" aria-hidden="true" />

          <div className="relative w-full max-w-sm">
            {/* Portrait frame */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-white/[0.08] bg-gradient-to-br from-apc-green/80 via-apc-green-dark to-[#050f08]">
              {/* Replace src with /portrait.jpg once available */}
              <img
                src="/portrait.jpg"
                alt={candidate.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* Placeholder shown when no portrait */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 gap-2">
                <span className="font-display font-black text-[7rem] leading-none italic opacity-30">{candidate.initials}</span>
                <p className="text-xs uppercase tracking-[0.3em] text-white/30">[ add /portrait.jpg ]</p>
              </div>

              {/* Bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#050f08] to-transparent" />
            </div>

            {/* Name card pinned at bottom of portrait */}
            <div className="absolute bottom-5 left-5 right-5 bg-black/50 backdrop-blur-md rounded-2xl p-4 ring-1 ring-white/10">
              <p className="font-display font-bold text-white text-lg italic leading-tight">{candidate.name}</p>
              <p className="mt-1 text-xs text-apc-gold uppercase tracking-[0.2em] font-semibold">{candidate.identity} · {candidate.constituencyShort}</p>
            </div>

            {/* APC logo watermark top-right */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-apc-dark shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              <img src="/apc-logo.jpeg" alt="APC" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
