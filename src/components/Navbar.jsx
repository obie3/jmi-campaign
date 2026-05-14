import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { navLinks, candidate } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = navLinks.map((l) => l.href.replace(/^.*#/, ''))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive('/#' + ids[i])
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-apc-dark/95 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 sm:h-20">
        <Logo light />

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                active === l.href
                  ? 'bg-apc-green/20 text-apc-green ring-1 ring-apc-green/30'
                  : 'text-white/70 hover:text-white hover:bg-white/[0.07]'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={candidate.supportUrl} target="_blank" rel="noreferrer" className="btn-gold text-sm px-5 py-2.5">
            Support <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-xl ring-1 ring-white/20 bg-white/[0.07] text-white hover:bg-white/15 transition"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 bg-apc-dark border-t border-white/[0.08] ${
          open ? 'max-h-[80vh]' : 'max-h-0'
        }`}
      >
        <div className="container-x py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition ${
                active === l.href
                  ? 'bg-apc-green/15 text-apc-green'
                  : 'text-white/75 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={candidate.supportUrl} target="_blank" rel="noreferrer" className="btn-gold mt-3 w-full">
            Support the Campaign
          </a>
        </div>
      </div>
    </header>
  )
}
