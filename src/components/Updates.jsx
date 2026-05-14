import { useState, useEffect, useRef, useCallback } from 'react'
import Icon from './Icon.jsx'
import { news } from '../data/site.js'

function fmt(iso) {
  return new Date(iso).toLocaleDateString('en-NG', { day: '2-digit', month: 'short', year: 'numeric' })
}

// ── Article modal ─────────────────────────────────────────────
function ArticleModal({ item, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // ESC to close
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm animate-[fadeIn_0.25s_ease]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-apc-dark-card rounded-3xl ring-1 ring-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.6)] animate-[slideUp_0.35s_cubic-bezier(0.22,1,0.36,1)]">
        {/* Colour bar */}
        <div className={`h-1.5 w-full rounded-t-3xl ${item.tone === 'gold' ? 'bg-apc-gold' : 'bg-apc-green'}`} />

        <div className="p-7 sm:p-10">
          {/* Meta */}
          <div className="flex items-center justify-between gap-4">
            <span className={`chip text-xs font-bold px-3 py-1 rounded-full ${item.tone === 'gold' ? 'bg-apc-gold/15 text-apc-gold' : 'bg-apc-green/15 text-apc-green'}`}>
              {item.category}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 grid place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10 text-white/60 hover:text-white hover:bg-white/10 transition shrink-0"
            >
              <Icon name="close" className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-4 text-xs text-white/40 uppercase tracking-[0.18em] font-medium">{fmt(item.date)}</p>
          <h2 className="mt-2 font-display font-bold italic text-2xl sm:text-3xl text-white leading-snug">
            {item.title}
          </h2>

          {/* Body */}
          <div className="mt-6 space-y-4 text-white/70 leading-relaxed text-[16px]">
            {item.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="mt-8 btn-outline w-full sm:w-auto"
          >
            Close article
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Single news card ──────────────────────────────────────────
function NewsCard({ item, onReadMore }) {
  return (
    <article className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group">
      {/* Thumbnail */}
      <div className={`aspect-[16/10] rounded-2xl overflow-hidden relative ${item.tone === 'gold' ? 'tile-gold' : 'tile-green'}`}>
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '14px 14px' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute top-4 left-4 chip font-semibold ${item.tone === 'gold' ? 'bg-slate-900/80 text-apc-gold' : 'bg-white/90 text-apc-green-dark'}`}>
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{fmt(item.date)}</p>
        <h3 className="mt-2 font-display font-bold italic text-xl text-slate-900 leading-snug group-hover:text-apc-green transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed text-[15px] line-clamp-3">{item.excerpt}</p>
        <button
          onClick={onReadMore}
          className="mt-4 inline-flex items-center gap-2 text-apc-green font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn"
        >
          Read more
          <Icon name="arrowRight" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </article>
  )
}

// ── Main carousel section ─────────────────────────────────────
export default function Updates() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)
  const [modal,   setModal]   = useState(null)
  const trackRef = useRef(null)

  // Items visible per breakpoint (read from DOM width)
  const [perView, setPerView] = useState(1)
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  const maxIndex = Math.max(0, news.length - perView)

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), [])
  const next = useCallback(() => setCurrent((c) => Math.min(maxIndex, c + 1)), [maxIndex])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1))
    }, 4500)
    return () => clearInterval(t)
  }, [paused, maxIndex])

  // Touch / swipe
  const touchStart = useRef(null)
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStart.current = null
  }

  // Gap between cards (px) — must match CSS gap
  const gap = perView > 1 ? 24 : 0
  const slideAmount = perView === 3 ? `calc(-${current} * (100% / 3 + ${gap / 3}px))`
                    : perView === 2 ? `calc(-${current} * (100% / 2 + ${gap / 2}px))`
                    : `calc(-${current} * 100%)`

  return (
    <>
      <section
        id="updates"
        className="section bg-apc-cream overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="container-x">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
            <div className="max-w-2xl">
              <span className="eyebrow">From the Trail</span>
              <h2 className="section-title-dark mt-3">Latest updates.</h2>
              <p className="section-sub-dark">
                Press releases, community stories and milestones from the road.
              </p>
            </div>

            {/* Prev / Next arrows */}
            <div className="flex items-center gap-2 self-start sm:self-end">
              <button
                onClick={prev}
                disabled={current === 0}
                aria-label="Previous"
                className="w-11 h-11 grid place-items-center rounded-full ring-1 ring-slate-300 text-slate-600 hover:bg-apc-green hover:text-white hover:ring-apc-green disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M19 12H5"/><path d="m12 5-7 7 7 7"/>
                </svg>
              </button>
              <button
                onClick={next}
                disabled={current === maxIndex}
                aria-label="Next"
                className="w-11 h-11 grid place-items-center rounded-full ring-1 ring-slate-300 text-slate-600 hover:bg-apc-green hover:text-white hover:ring-apc-green disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Icon name="arrowRight" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel track */}
          <div
            className="mt-12 overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform"
              style={{ transform: `translateX(${slideAmount})` }}
            >
              {news.map((n) => (
                <NewsCard key={n.title} item={n} onReadMore={() => setModal(n)} />
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-7 h-2.5 bg-apc-green'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-apc-green/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Article modal */}
      {modal && <ArticleModal item={modal} onClose={() => setModal(null)} />}
    </>
  )
}
