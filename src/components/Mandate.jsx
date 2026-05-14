import { mandate, candidate } from '../data/site.js'

export default function Mandate() {
  return (
    <section id="mandate" className="section relative overflow-hidden nass-bg">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-apc-green/[0.06] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-apc-gold/[0.05] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

      <div className="container-x relative">
        <div className="max-w-3xl reveal">
          <span className="eyebrow-light">The Project</span>
          <h2 className="section-title-light mt-4">
            The People's Mandate.
          </h2>
          <p className="mt-5 text-white/65 text-lg leading-relaxed">
            In our Idoma tradition,{' '}
            <span className="text-apc-gold font-semibold italic">{candidate.slogan}</span>{' '}
            — {candidate.sloganMeaning.toLowerCase()} — is a covenant between a representative and the people. This is our covenant with Ado, Okpokwu and Ogbadibo.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 lg:gap-8">
          {mandate.map((m, i) => (
            <article key={m.title} className="relative reveal">
              <div
                className="absolute -top-5 left-0 font-display font-black text-7xl text-apc-gold/20 leading-none select-none italic"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="relative bg-white/[0.04] ring-1 ring-white/[0.08] rounded-3xl p-7 lg:p-8 h-full hover:ring-apc-green/30 transition-all duration-300">
                <h3 className="font-display font-bold text-2xl text-white italic">{m.title}</h3>
                <div className="mt-4 w-10 h-px bg-apc-gold" />
                <p className="mt-5 text-white/65 leading-relaxed">{m.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 reveal flex flex-wrap items-center gap-4 text-sm text-white/50">
          <span className="font-display italic text-apc-gold text-xl">"{candidate.slogan}"</span>
          <span className="hidden sm:inline-block w-8 h-px bg-white/20" />
          <span>{candidate.sloganLanguage} for{' '}<span className="text-white/80">"{candidate.sloganMeaning.toLowerCase()}."</span></span>
        </div>
      </div>
    </section>
  )
}
