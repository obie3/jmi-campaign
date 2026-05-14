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

// ── Not-yet-configured placeholder ───────────────────────────
function SetupPrompt() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center reveal">
      <div className="w-16 h-16 rounded-2xl overflow-hidden ring-1 ring-white/10 mb-5">
        <img src="/apc-logo.jpeg" alt="APC" className="w-full h-full object-cover" />
      </div>
      <h3 className="font-display italic text-2xl font-bold text-white">Facebook feed coming soon</h3>
      <p className="mt-3 text-white/50 max-w-sm text-sm leading-relaxed">
        Add <code className="text-apc-gold bg-white/[0.07] px-1.5 py-0.5 rounded text-xs">VITE_FB_PAGE_ID</code> and{' '}
        <code className="text-apc-gold bg-white/[0.07] px-1.5 py-0.5 rounded text-xs">VITE_FB_ACCESS_TOKEN</code> to your{' '}
        <code className="text-apc-gold bg-white/[0.07] px-1.5 py-0.5 rounded text-xs">.env</code> file to activate live posts.
      </p>
      <a
        href={candidate.socials.facebook}
        target="_blank"
        rel="noreferrer"
        className="btn-outline mt-8 gap-2"
      >
        <Icon name="facebook" className="w-4 h-4" />
        Follow on Facebook
      </a>
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
          {loading && !configured && <SetupPrompt />}
          {loading &&  configured && Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)}
          {!loading && error === 'not_configured' && <SetupPrompt />}
          {!loading && error && error !== 'not_configured' && <FeedError message={error} />}
          {!loading && !error && posts.map((p) => <PostCard key={p.id} post={p} />)}
          {!loading && !error && posts.length === 0 && (
            <p className="col-span-full text-center text-white/40 py-14">No posts found.</p>
          )}
        </div>
      </div>
    </section>
  )
}
