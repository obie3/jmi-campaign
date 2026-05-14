import Icon from './Icon.jsx'
import { candidate } from '../data/site.js'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-photo text-white flex flex-col">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        aria-hidden="true"
      />

      {/* Bottom wave */}
      <svg className="absolute inset-x-0 bottom-0 w-full opacity-40 z-10" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#0a1612" d="M0,160L80,149C160,139,320,117,480,122C640,128,800,160,960,165C1120,171,1280,149,1360,138L1440,128L1440,200L0,200Z" />
      </svg>

      <div className="container-x relative z-10 flex-1 grid grid-cols-1 sm:grid-cols-[1fr_260px] lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center pt-5 pb-6 sm:pt-8 sm:pb-10 lg:pt-14 lg:pb-16">

        {/* ── LEFT: Slogan + text ── */}
        <div>
          <h1 className="font-display font-black leading-[1.0] tracking-tight">
            <span className="block text-[clamp(2rem,6.5vw,6.5rem)] text-apc-gold drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] italic">
              {candidate.slogan}
            </span>
            <span className="block mt-1.5 text-[clamp(0.95rem,2.5vw,2.4rem)] text-white/85 font-normal not-italic">
              {candidate.sloganMeaning}.
            </span>
          </h1>

          <p className="hidden sm:block mt-4 max-w-lg text-white/65 text-sm lg:text-[17px] leading-relaxed">
            <span className="font-semibold text-white">{candidate.name}</span> — PhD scholar, former UBA Regional Manager, son of Okpoga — for{' '}
            {candidate.constituencyShort}.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
            <a href={candidate.supportUrl} target="_blank" rel="noreferrer" className="btn-gold text-sm">
              Support the Campaign <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <a href="#about" className="btn-outline-light text-sm">Meet the Candidate</a>
          </div>

          <div className="mt-5 hidden sm:flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/40 uppercase tracking-[0.18em] font-medium">
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />All Progressives Congress</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />Broom Symbol</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />February {candidate.sloganYear}</span>
          </div>
        </div>

        {/* ── RIGHT: Portrait — sm and above only ── */}
        <div className="hidden sm:flex relative items-end justify-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-apc-green/[0.08] blur-2xl rounded-full pointer-events-none" aria-hidden="true" />

          <div className="relative w-full">
            {/* Frame */}
            <div className="relative w-full aspect-[3/4] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden bg-white ring-1 ring-white/10">
              <img
                src="/portrait.png"
                alt={candidate.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Left fade — blends into dark bg */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#060f09] to-transparent pointer-events-none" />
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#060f09] via-[#060f09]/50 to-transparent pointer-events-none" />
            </div>

            {/* Name card — hidden on very small screens to save space */}
            <div className="hidden sm:block absolute bottom-3 left-3 right-3 lg:bottom-5 lg:left-5 lg:right-5 bg-black/55 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 lg:p-4 ring-1 ring-white/10">
              <p className="font-display font-bold text-white text-sm lg:text-lg italic leading-tight">{candidate.name}</p>
              <p className="mt-0.5 text-[9px] lg:text-xs text-apc-gold uppercase tracking-[0.18em] font-semibold">{candidate.identity}</p>
            </div>

            {/* APC badge */}
            <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-10 h-10 lg:w-14 lg:h-14 rounded-xl overflow-hidden ring-2 ring-[#060f09] shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              <img src="/apc-logo.jpeg" alt="APC" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
