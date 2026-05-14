import { useState } from 'react'
import Icon from './Icon.jsx'
import { pillars } from '../data/site.js'

export default function PolicyFocus() {
  const [active, setActive] = useState(pillars[0].id)
  const current = pillars.find((p) => p.id === active)

  return (
    <section id="policy" className="section bg-apc-cream">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Policy Focus</span>
          <h2 className="section-title-dark mt-3">A comprehensive roadmap.</h2>
          <p className="section-sub-dark">
            Four pillars designed to address the core needs of Ado, Okpokwu and Ogbadibo — with measurable commitments and a public scorecard.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Vertical tab list */}
          <div className="lg:col-span-4">
            <ul className="space-y-2 reveal">
              {pillars.map((p, i) => {
                const isActive = p.id === active
                return (
                  <li key={p.id}>
                    <button
                      onClick={() => setActive(p.id)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl flex items-center gap-4 transition-all duration-200 ${
                        isActive
                          ? 'bg-apc-green text-white shadow-soft'
                          : 'bg-white text-slate-800 hover:bg-apc-green/5 ring-1 ring-slate-200'
                      }`}
                    >
                      <span className={`w-10 h-10 grid place-items-center rounded-xl shrink-0 ${isActive ? 'bg-white/15 text-white' : 'bg-apc-cream text-apc-green'}`}>
                        <Icon name={p.icon} className="w-5 h-5" strokeWidth={2} />
                      </span>
                      <span className="flex-1">
                        <span className={`block text-[11px] uppercase tracking-[0.18em] font-bold ${isActive ? 'text-apc-gold' : 'text-apc-green'}`}>
                          Pillar {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="block font-display font-bold mt-0.5 italic">{p.title}</span>
                      </span>
                      <Icon name="arrowRight" className={`w-4 h-4 shrink-0 ${isActive ? 'text-apc-gold' : 'text-slate-300'}`} />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Detail panel */}
          <article className="lg:col-span-8 reveal">
            <div className="card p-8 sm:p-10 h-full">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight italic">{current.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed text-[17px]">{current.summary}</p>

              <ul className="mt-7 space-y-4">
                {current.promises.map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-apc-gold shrink-0" />
                    <span className="text-slate-700 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
