import { useState } from 'react'
import Icon from './Icon.jsx'
import { candidate } from '../data/site.js'

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <section id="home" className="relative overflow-hidden hero-photo text-white min-h-screen flex flex-col">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        aria-hidden="true"
      />

      {/* Bottom wave */}
      <svg className="absolute inset-x-0 bottom-0 w-full opacity-40" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#0a1612" d="M0,160L80,149C160,139,320,117,480,122C640,128,800,160,960,165C1120,171,1280,149,1360,138L1440,128L1440,200L0,200Z" />
      </svg>

      <div className="container-x relative flex-1 flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-36 lg:pb-44">

        {/* ── Portrait — top on mobile, right column on desktop ── */}
        <div className="flex justify-center items-end relative order-first lg:order-last mb-6 lg:mb-0">
          <div className="absolute inset-0 bg-apc-green/[0.06] blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

          <div className="relative w-full max-w-[260px] sm:max-w-xs lg:max-w-sm">
            {/* Portrait frame */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white">
              <img
                src="/portrait.jpg"
                alt={candidate.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
                onLoad={() => setImgLoaded(true)}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* Placeholder */}
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-apc-green to-apc-green-dark">
                  <span className="font-display font-black text-[6rem] leading-none italic text-white/30">{candidate.initials}</span>
                </div>
              )}

              {/* Left fade */}
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#060f09] to-transparent pointer-events-none" aria-hidden="true" />
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#060f09] via-[#060f09]/60 to-transparent pointer-events-none" aria-hidden="true" />
            </div>

            {/* Name card */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/55 backdrop-blur-md rounded-2xl p-3 sm:p-4 ring-1 ring-white/10">
              <p className="font-display font-bold text-white text-base sm:text-lg italic leading-tight">{candidate.name}</p>
              <p className="mt-1 text-[10px] sm:text-xs text-apc-gold uppercase tracking-[0.18em] font-semibold">{candidate.identity} · {candidate.constituencyShort}</p>
            </div>

            {/* APC logo badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-apc-dark shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              <img src="/apc-logo.jpeg" alt="APC" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* ── Campaign text — bottom on mobile, left column on desktop ── */}
        <div className="order-last lg:order-first">
          <h1 className="font-display font-black leading-[1.0] tracking-tight">
            <span className="block text-[clamp(3rem,10vw,6.5rem)] text-apc-gold drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] italic">
              {candidate.slogan}
            </span>
            <span className="block mt-2 text-[clamp(1.2rem,3.5vw,2.4rem)] text-white/85 font-normal not-italic">
              {candidate.sloganMeaning}.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-white/65 text-base sm:text-[17px] leading-relaxed">
            <span className="font-semibold text-white">{candidate.name}</span> — PhD scholar, former UBA Regional Manager, son of Okpoga — for{' '}
            {candidate.constituencyShort}.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <a href={candidate.supportUrl} target="_blank" rel="noreferrer" className="btn-gold">
              Support the Campaign <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <a href="#about" className="btn-outline-light">Meet the Candidate</a>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-white/40 uppercase tracking-[0.18em] font-medium">
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />All Progressives Congress</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />Broom Symbol</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-apc-gold" />February {candidate.sloganYear}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
