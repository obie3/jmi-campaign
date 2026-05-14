import { candidate } from '../data/site.js'

export default function Logo({ light = false, size = 'md' }) {
  const imgSize = size === 'lg' ? 'w-16 h-16' : 'w-10 h-10'

  return (
    <a href="/#home" className="flex items-center gap-3 shrink-0">
      <img
        src="/apc-logo.jpeg"
        alt="APC Logo"
        className={`${imgSize} rounded-lg object-cover shadow-sm`}
      />
      <div>
        <p className={`font-display font-bold text-lg leading-none tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
          {candidate.slogan}
        </p>
        <p className={`text-[10px] font-medium leading-none mt-1 ${light ? 'text-white/55' : 'text-slate-500'}`}>
          {candidate.sloganYear} · {candidate.party.split(' (')[0]}
        </p>
      </div>
    </a>
  )
}
