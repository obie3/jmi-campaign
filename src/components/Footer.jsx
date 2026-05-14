import Icon from './Icon.jsx'
import { candidate, navLinks } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#050c08] text-white">
      <div className="container-x py-16 grid gap-10 lg:grid-cols-12 border-t border-white/[0.06]">
        <div className="lg:col-span-5">
          <p className="text-apc-gold font-display font-extrabold text-3xl tracking-tight italic">
            {candidate.slogan} {candidate.sloganYear}
          </p>
          <p className="mt-1 text-white/45 text-sm">{candidate.sloganMeaning} — {candidate.sloganLanguage}.</p>
          <p className="mt-6 text-white/65 leading-relaxed max-w-md text-sm">
            The People's Mandate. {candidate.name} for {candidate.constituencyShort}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { name: 'facebook',  href: candidate.socials.facebook },
              { name: 'twitter',   href: candidate.socials.twitter },
              { name: 'instagram', href: candidate.socials.instagram },
              { name: 'youtube',   href: candidate.socials.youtube }
            ].map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}
                 className="w-10 h-10 grid place-items-center rounded-full bg-white/[0.05] ring-1 ring-white/[0.08] hover:bg-apc-gold hover:text-slate-900 hover:ring-apc-gold transition-all duration-200">
                <Icon name={s.name} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-semibold text-xs uppercase tracking-[0.22em] text-white/40">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/65 hover:text-apc-gold transition-colors text-sm">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-semibold text-xs uppercase tracking-[0.22em] text-white/40">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-white/65 text-sm">
            <li className="flex items-start gap-3">
              <Icon name="mapPin" className="w-4 h-4 mt-0.5 text-apc-gold shrink-0" />
              {candidate.hq}
            </li>
            <li className="flex items-start gap-3">
              <Icon name="mail" className="w-4 h-4 mt-0.5 text-apc-gold shrink-0" />
              <a href={`mailto:${candidate.campaignEmail}`} className="hover:text-apc-gold transition-colors">{candidate.campaignEmail}</a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="phone" className="w-4 h-4 mt-0.5 text-apc-gold shrink-0" />
              <a href={`tel:${candidate.campaignPhone.replace(/\s/g,'')}`} className="hover:text-apc-gold transition-colors">{candidate.campaignPhone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/35">
          <p>© {year} {candidate.name} Campaign. All rights reserved.</p>
          <p>Designed for Progress.</p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${candidate.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:scale-110 transition-transform duration-200"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.15 1.6 5.97L0 24l6.27-1.64a11.93 11.93 0 005.77 1.47h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.18-3.47-8.41zM12.04 21.3h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.72.97.99-3.62-.23-.37a9.93 9.93 0 1118.36-5.27c0 5.48-4.47 9.94-9.98 9.88zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </footer>
  )
}
