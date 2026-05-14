import Icon from './Icon.jsx'
import { candidate } from '../data/site.js'
import { useFacebookFeed } from '../hooks/useFacebookFeed.js'

function fmt(iso) {
  return new Date(iso).toLocaleDateString('en-NG', { day: '2-digit', month: 'short', year: 'numeric' })
}

function truncate(text, max = 180) {
  if (!text) return ''
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text
}

// ── Loading skeleton ──────────────────────────────────────────
function Skeleton() {
  return (
    <div className="animate-pulse rounded-2xl overflow-hidden bg-apc-dark-card ring-1 ring-white/[0.07]">
      <div className="aspect-[16/10] bg-white/[0.06]" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-white/[0.08] rounded w-1/3" />
        <div className="h-4 bg-white/[0.08] rounded w-full" />
        <div className="h-4 bg-white/[0.08] rounded w-4/5" />
        <div className="h-3 bg-white/[0.05] rounded w-1/4 mt-4" />
      </div>
    </div>
  )
}

// ── Coming Soon placeholder ───────────────────────────────────
function ComingSoon() {
  return (
    <div className="col-span-full reveal">
      {/* Mock post cards (blurred) */}
      <div className="relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 select-none pointer-events-none blur-[3px] opacity-40">
          {[
            { w: '3/4', lines: [{ w: 'full' }, { w: '5/6' }, { w: '2/3' }] },
            { w: '2/3', lines: [{ w: 'full' }, { w: 'full' }, { w: '3/4' }] },
            { w: '4/5', lines: [{ w: '5/6' }, { w: 'full' }, { w: '1/2' }] },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-apc-dark-card ring-1 ring-white/[0.07]">
              <div className={`aspect-[16/10] ${i % 2 === 0 ? 'tile-green' : 'tile-gold'} opacity-60`} />
              <div className="p-5 space-y-3">
                <div className={`h-2.5 bg-white/10 rounded w-1/4`} />
                {card.lines.map((l, j) => (
                  <div key={j} className={`h-3.5 bg-white/10 rounded w-${l.w}`} />
                ))}
                <div className="h-3 bg-apc-green/20 rounded w-1/4 mt-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Overlay badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center px-4">
          <div className="bg-apc-dark/80 backdrop-blur-md rounded-3xl ring-1 ring-white/10 px-10 py-10 max-w-md w-full shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden ring-2 ring-apc-gold/40 shadow-[0_0_24px_rgba(212,175,55,0.2)]">
              <img src="/apc-logo.jpeg" alt="APC" className="w-full h-full object-cover" />
            </div>

            {/* Label */}
            <span className="mt-5 inline-block text-[10px] uppercase tracking-[0.28em] font-bold text-apc-gold">
              Social Feed
            </span>

            <h3 className="mt-2 font-display italic font-bold text-2xl sm:text-3xl text-white leading-tight">
              Coming Soon
            </h3>

            <p className="mt-3 text-white/55 text-sm leading-relaxed">
              Live posts from the campaign's Facebook page will appear here. Follow us now to stay updated on rallies, announcements and community moments.
            </p>

            {/* Divider */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-white/[0.08]" />
              <span className="text-[10px] text-white/30 uppercase tracking-widest">Follow us</span>
              <div className="flex-1 h-px bg-white/[0.08]" />
            </div>

            {/* Social buttons */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href={candidate.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex-1 btn-outline-light py-2.5 gap-2 justify-center text-sm"
              >
                <Icon name="facebook" className="w-4 h-4" />
                Facebook
              </a>
              <a
                href={candidate.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex-1 btn-outline-light py-2.5 gap-2 justify-center text-sm"
              >
                <Icon name="instagram" className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Error state ───────────────────────────────────────────────
function FeedError({ message }) {
  return (
    <div className="col-span-full py-14 text-center reveal">
      <p className="text-white/40 text-sm">Could not load posts — {message}</p>
      <a href={candidate.socials.facebook} target="_blank" rel="noreferrer" className="btn-outline mt-6">
        View on Facebook
      </a>
    </div>
  )
}

// ── Single post card ──────────────────────────────────────────
function PostCard({ post }) {
  const image = post.full_picture ||
    post.attachments?.data?.[0]?.media?.image?.src ||
    null

  const text = post.message || post.story || ''

  return (
    <article className="reveal group card-dark overflow-hidden flex flex-col hover:ring-apc-green/30 transition-all duration-300">
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] text-white/40 uppercase tracking-[0.18em] font-medium">
          {fmt(post.created_time)}
        </p>
        {text && (
          <p className="mt-2 text-white/80 text-[15px] leading-relaxed flex-1">
            {truncate(text)}
          </p>
        )}
        <a
          href={post.permalink_url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-apc-green font-semibold text-sm hover:gap-3 transition-all self-start"
        >
          View post <Icon name="arrowRight" className="w-4 h-4" />
        </a>
      </div>
    </article>
  )
}

// ── Main section ──────────────────────────────────────────────
export default function SocialFeed() {
  const { posts, loading, error, configured } = useFacebookFeed(6)

  return (
    <section id="social" className="section bg-apc-dark">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="eyebrow-light">Social Feed</span>
            <h2 className="section-title-light mt-3">Latest from Facebook.</h2>
            <p className="section-sub">
              Follow the campaign — rallies, announcements and community moments as they happen.
            </p>
          </div>
          <a
            href={candidate.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-light self-start sm:self-end shrink-0 gap-2"
          >
            <Icon name="facebook" className="w-4 h-4" />
            Follow Page
          </a>
        </div>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading && !configured) || (!loading && error === 'not_configured') ? <ComingSoon /> : null}
          {loading && configured && Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)}
          {!loading && error && error !== 'not_configured' && <FeedError message={error} />}
          {!loading && !error && posts.map((p) => <PostCard key={p.id} post={p} />)}
          {!loading && !error && posts.length === 0 && <ComingSoon />}
        </div>
      </div>
    </section>
  )
}
