import {
  ArrowRight,
  BookOpen,
  Coins,
  Globe2,
  HandHeart,
  Mail,
  Menu,
  Mic2,
  Network,
  Radio,
  Signal,
  Youtube,
  Zap,
} from 'lucide-react'

const pillars = [
  {
    icon: BookOpen,
    label: 'Study',
    title: 'The most important Bitcoin ideas, right now.',
    copy: 'Breakthroughs, monetary history, tools, books, podcasts, essays, builders, and conversations worth your scarce attention.',
    items: ['Bitcoin breakthroughs', 'Monetary history', 'Self-custody guides', 'AI + Bitcoin', 'Books, podcasts & essays', 'Tools and builders'],
  },
  {
    icon: Zap,
    label: 'Stack',
    title: 'Real-world strategies for patient accumulation.',
    copy: 'Work, creativity, discipline, business, and asymmetric opportunities translated into durable Bitcoin habits.',
    items: ['DCA systems', 'Bitcoin side hustles', 'Treasury strategies', 'Lifestyle design', 'Income-to-Bitcoin pipelines', 'Real case studies'],
  },
  {
    icon: HandHeart,
    label: 'Give Back',
    title: 'Strengthen the network that protects your future.',
    copy: 'Education, nodes, mining, open-source support, circular economies, and helping people cross the Bitcoin Rubicon.',
    items: ['Run a node', 'Mine with Bitaxe', 'Support open-source developers', 'Teach friends & family', 'Build tools', 'Create content'],
  },
] as const

const signalPoints = ['education over hype', 'conviction over speculation', 'participation over passivity', 'long-term thinking over short-term noise']

const channels = [
  ['Nostr', Network],
  ['YouTube', Youtube],
  ['Rumble', Radio],
  ['X/Twitter', Signal],
  ['Podcasts', Mic2],
  ['Email', Mail],
] as const

function Enso({ size = 'small' }: { size?: 'tiny' | 'small' | 'large' }) {
  return <span className={`enso enso-${size}`} aria-hidden />
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Study Stack Give Back.bitcoin home">
      <Enso />
      <span>
        <strong>Study Stack</strong>
        <em>Give Back.bitcoin</em>
      </span>
    </a>
  )
}

function CTA({
  children,
  href,
  variant = 'primary',
}: {
  children: React.ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <a className={`cta ${variant}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={17} />
    </a>
  )
}

function Navbar() {
  const links = [
    ['Study', '#study'],
    ['Stack', '#stack'],
    ['Give Back', '#give-back'],
    ['Signal', '#signal'],
    ['Community', '#community'],
  ]

  return (
    <header className="nav-shell">
      <Logo />
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <CTA href="#subscribe">Subscribe</CTA>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <Menu size={22} />
        </summary>
        <div>
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="mobile-cta" href="#subscribe">
            Subscribe
          </a>
        </div>
      </details>
    </header>
  )
}

function NewsletterForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={`newsletter-form ${compact ? 'compact' : ''}`}
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <label>
        <span>Email address</span>
        <input type="email" placeholder="Enter your email" required />
      </label>
      <button type="submit">Subscribe</button>
    </form>
  )
}

function SectionHeader({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string
  title: string
  copy?: string
  center?: boolean
}) {
  return (
    <div className={`section-header ${center ? 'center' : ''}`}>
      <Enso size="tiny" />
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  )
}

function PillarCard({ pillar, id }: { pillar: (typeof pillars)[number]; id: string }) {
  const Icon = pillar.icon

  return (
    <article className="pillar-card" id={id}>
      <div className="pillar-topline">
        <span>
          <Icon size={22} strokeWidth={1.6} />
        </span>
        <p>{pillar.label}</p>
      </div>
      <h3>{pillar.title}</h3>
      <p>{pillar.copy}</p>
      <ul>
        {pillar.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-frame" id="top">
      <div className="paper-grain" aria-hidden />
      <Navbar />
      <main>{children}</main>
      <footer className="footer">
        <div className="footer-newsletter">
          <div>
            <p className="eyebrow">Your participation is essential.</p>
            <h2>Study. Stack. Give Back.</h2>
          </div>
          <NewsletterForm compact />
        </div>
        <div className="footer-grid">
          <Logo />
          <p>Study Bitcoin. Stack Bitcoin. Give Back.</p>
          <p>A weekly signal in a world of noise. ₿</p>
          <p>∞/21M</p>
        </div>
      </footer>
    </div>
  )
}

export function HomePage() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">A weekly signal in a world of noise. ₿</p>
          <h1>Study Stack Give Back.bitcoin</h1>
          <p className="subtitle">Study Bitcoin. Stack Bitcoin. Give Back.</p>
          <p className="hero-text">
            Bitcoin is more than an investment. It is an invitation to participate.
          </p>
          <div className="button-row">
            <CTA href="#subscribe">Subscribe to the Weekly Newsletter</CTA>
            <CTA href="#signal" variant="secondary">
              Explore This Week’s Signal
            </CTA>
          </div>
          <p className="microcopy">Three powerful ideas. Every week. Straight to your inbox.</p>
        </div>
        <div className="hero-art reveal delay-1">
          <div className="bitcoin-sigil">
            <Enso size="large" />
            <Coins size={104} strokeWidth={1.05} />
            <span>21M</span>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <SectionHeader
          eyebrow="The Mission"
          title="A new generation of Bitcoin citizens."
          copy="Not tourists. Not gamblers. Participants."
        />
        <div className="mission-copy">
          <p>People who understand Bitcoin deeply.</p>
          <p>People who build long-term wealth responsibly.</p>
          <p>People who contribute back to the network that protects their future.</p>
        </div>
      </section>

      <section className="pillar-grid" aria-label="This week content structure">
        <PillarCard pillar={pillars[0]} id="study" />
        <PillarCard pillar={pillars[1]} id="stack" />
        <PillarCard pillar={pillars[2]} id="give-back" />
      </section>

      <section className="signal-section" id="signal">
        <div>
          <SectionHeader
            eyebrow="The Signal"
            title="A calm, intelligent weekly Bitcoin briefing."
            copy="No casino energy. No endless price obsession. Just signal."
          />
          <div className="signal-list">
            {signalPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <div className="button-row">
            <CTA href="#subscribe">Study something important</CTA>
            <CTA href="#give-back" variant="secondary">
              Give back stronger
            </CTA>
          </div>
        </div>
        <div className="ink-panel" aria-hidden>
          <Radio size={92} strokeWidth={1.1} />
          <Enso size="large" />
        </div>
      </section>

      <section className="quote-band">
        <p>“Your participation is essential.”</p>
      </section>

      <section className="community-section" id="community">
        <SectionHeader
          center
          eyebrow="Join the Movement"
          title="Wherever Bitcoiners gather to learn and build, we’ll be there."
        />
        <div className="channel-grid">
          {channels.map(([label, Icon]) => (
            <a href="#subscribe" key={label}>
              <Icon size={22} strokeWidth={1.5} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="newsletter-section" id="subscribe">
        <SectionHeader
          center
          eyebrow="The Weekly Briefing"
          title="Three powerful ideas. Every week."
          copy="Study something important. Stack smarter. Give back stronger."
        />
        <NewsletterForm />
      </section>
    </Layout>
  )
}

export const AboutPage = HomePage
export const BlogPage = HomePage
export const ChaptersPage = HomePage
export const CommunityPage = HomePage
export const MeditationsPage = HomePage
export const NewsletterPage = HomePage
export const PodcastPage = HomePage
export const ResourcesPage = HomePage
export const ShopPage = HomePage
export const ToolsPage = HomePage
