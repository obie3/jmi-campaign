import { gallery } from '../data/site.js'

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-apc-dark">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="eyebrow-light">Campaign Gallery</span>
            <h2 className="section-title-light mt-3">Moments from the movement.</h2>
            <p className="section-sub">
              Town halls, ward walks, outreaches, cultural moments — the campaign on the ground.
            </p>
          </div>
          <a href="#join" className="btn-outline-light self-start sm:self-end shrink-0">View all photos</a>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-2xl group reveal cursor-pointer tile-${g.tone} ${g.big ? 'col-span-2 row-span-2' : ''}`}
            >
              {/* Subtle dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '16px 16px' }}
                aria-hidden="true"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-apc-green/0 group-hover:bg-apc-green/10 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Scale on hover */}
              <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-500 ease-out" aria-hidden="true" />

              <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className={`text-xs uppercase tracking-[0.2em] font-bold ${g.tone === 'cream' ? 'text-apc-green-dark/80' : 'text-apc-gold'}`}>
                  Campaign
                </p>
                <p className={`mt-1 font-display font-bold italic text-base sm:text-lg leading-tight ${g.tone === 'cream' ? 'text-slate-900' : 'text-white'}`}>
                  {g.caption}
                </p>
              </figcaption>

              {/* Placeholder badge */}
              <div className={`absolute top-3 right-3 text-[10px] uppercase tracking-widest font-semibold px-2 py-1 rounded-full ring-1 ${g.tone === 'cream' ? 'text-slate-700 ring-slate-300 bg-white/60' : 'text-white/70 ring-white/20 bg-black/30'}`}>
                Photo
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
