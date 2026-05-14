import Icon from './Icon.jsx'
import { candidate, aboutBadges } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="section bg-apc-dark-card">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Portrait column */}
        <div className="lg:col-span-5 reveal">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-apc-green/10 blur-3xl" aria-hidden="true" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/[0.08] bg-gradient-to-br from-apc-green to-apc-green-dark">
              {/* Replace with real portrait at /portrait.jpg */}
              <div className="absolute inset-0 grid place-items-center text-white/90">
                <div className="text-center">
                  <span className="font-display font-black text-[9rem] leading-none tracking-tight drop-shadow-lg italic">{candidate.initials}</span>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">[ replace /portrait.jpg ]</p>
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div className="absolute -bottom-6 left-6 right-6 sm:left-10 sm:right-10 bg-apc-dark/90 backdrop-blur rounded-2xl p-5 ring-1 ring-white/10">
              <p className="font-display italic text-white/90 text-lg leading-snug">
                "Between tradition and innovation."
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-apc-gold font-bold">— {candidate.shortName}</p>
            </div>
          </div>
        </div>

        {/* Bio column */}
        <div className="lg:col-span-7 reveal">
          <div className="flex items-center gap-3 mb-5">
            <img src="/apc-logo.jpeg" alt="APC Logo" className="hidden sm:block w-12 h-12 rounded-lg object-cover ring-1 ring-white/10" />
            <span className="eyebrow-light">About the Candidate</span>
          </div>
          <h2 className="section-title-light mt-3">Banker.<br className="hidden sm:block" /> Scholar.<br className="hidden sm:block" /> Servant of Benue South.</h2>

          <div className="mt-7 space-y-5 text-white/70 leading-relaxed text-[17px]">
            <p>
              <span className="font-semibold text-white">{candidate.name}</span> is not just a candidate; he is a movement. A PhD holder and seasoned finance professional, he rose through the ranks of United Bank for Africa (UBA) to become a Regional Manager — a career defined by discipline, integrity and results.
            </p>
            <p>
              Born and raised in Okpoga, Okpokwu LGA, he is a true son of Benue South. His journey from the grassroots to the boardroom gives him a rare combination of financial acumen and deep community roots — exactly what{' '}
              <span className="text-white/90 whitespace-nowrap">Ado, Okpokwu and Ogbadibo</span> deserves in a federal representative.
            </p>
          </div>

          {/* Badges */}
          <div className="mt-9 grid sm:grid-cols-2 gap-4">
            {aboutBadges.map((b) => (
              <div key={b.title} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.07] hover:ring-apc-green/30 transition">
                <span className="w-1.5 h-10 rounded-full bg-apc-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-white text-lg">{b.title}</h4>
                  <p className="mt-1 text-sm text-white/60 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/manifesto.pdf" className="btn-primary">
              Download Full Profile <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <a href="#mandate" className="btn-outline">The Mandate</a>
          </div>
        </div>
      </div>
    </section>
  )
}
