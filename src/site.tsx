import {
  ArrowRight,
  BookOpen,
  Check,
  Heart,
  Layers3,
  Play,
  Podcast,
  Radio,
  Shield,
  Twitter,
  Youtube,
  Zap,
} from 'lucide-react'

const studyItems = ['Bitcoin breakthroughs', 'Monetary history', 'Self-custody guides', 'AI + Bitcoin', 'Books, podcasts & essays', 'Tools and builders']
const stackItems = ['DCA systems', 'Bitcoin side hustles', 'Treasury strategies', 'Lifestyle design', 'Income-to-Bitcoin pipelines', 'Real case studies']
const giveItems = ['Run a node', 'Mine with Bitaxe', 'Support open-source devs', 'Teach friends & family', 'Build tools', 'Create content', 'Participate']

function Logo() {
  return (
    <a href="#home" className="brand-lockup" aria-label="Study Stack Give Back home">
      <span className="stack-mark" aria-hidden>
        <span />
        <span />
        <span />
      </span>
      <span>
        <strong>Study Stack</strong>
        <em>Give Back . bitcoin</em>
      </span>
    </a>
  )
}

function Nav() {
  return (
    <header className="site-nav">
      <Logo />
      <nav className="nav-links" aria-label="Primary navigation">
        {['Home', 'Newsletter', 'This Week', 'About', 'Resources', 'Archive'].map((item, index) => (
          <a className={index === 0 ? 'active' : ''} href={index === 0 ? '#home' : `#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a className="bolt-button" href="#this-week" aria-label="This week's signal">
          <Zap size={20} fill="currentColor" />
        </a>
        <a className="cta-btn nav-cta" href="#newsletter">
          Subscribe <ArrowRight size={17} />
        </a>
      </div>
    </header>
  )
}

function PillButton({ children, href, variant = 'primary' }: { children: React.ReactNode; href: string; variant?: 'primary' | 'ghost' }) {
  return (
    <a className={`pill-btn ${variant}`} href={href}>
      {children}
      <ArrowRight size={17} />
    </a>
  )
}

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Bitcoin pillars artwork">
      <div className="coin-orbit">
        <span>₿</span>
      </div>
      <div className="neon-road" />
      <div className="mountain-range" />
      <div className="pillar-stack">
        <div className="glass-block study-block">
          <BookOpen size={40} />
          <div>
            <strong>STUDY</strong>
            <span>Understand Bitcoin deeply</span>
          </div>
        </div>
        <div className="glass-block stack-block">
          <Layers3 size={40} />
          <div>
            <strong>STACK</strong>
            <span>Build wealth and freedom</span>
          </div>
        </div>
        <div className="glass-block give-block">
          <Heart size={40} />
          <div>
            <strong>GIVE BACK</strong>
            <span>Strengthen the Bitcoin network</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Checklist({ items, tone }: { items: string[]; tone: 'purple' | 'orange' | 'green' }) {
  return (
    <ul className={`check-list ${tone}`}>
      {items.map((item) => (
        <li key={item}>
          <Check size={14} />
          {item}
        </li>
      ))}
    </ul>
  )
}

function PillarCard({
  tone,
  icon,
  title,
  question,
  items,
}: {
  tone: 'purple' | 'orange' | 'green'
  icon: React.ReactNode
  title: string
  question: string
  items: string[]
}) {
  return (
    <article className={`pillar-card ${tone}`}>
      <div className="icon-disc">{icon}</div>
      <h3>{title}</h3>
      <p>{question}</p>
      <Checklist items={items} tone={tone} />
      <a className="outline-link" href={`#${title.toLowerCase().replaceAll(' ', '-')}`}>
        Explore {title} <ArrowRight size={16} />
      </a>
    </article>
  )
}

function SignalPanel() {
  return (
    <section className="signal-news-grid" id="this-week">
      <article className="panel signal-panel">
        <div className="panel-head">
          <h2>This Week’s Signal</h2>
          <a href="#archive">View all issues</a>
        </div>
        <div className="feature-signal">
          <div className="safe-art">
            <Shield size={62} />
            <span>₿</span>
          </div>
          <div>
            <span className="badge">Featured</span>
            <h3>Self-Custody in 2024: Beyond the Basics</h3>
            <p>A practical guide to owning your future with confidence.</p>
            <div className="tag-row">
              <span>Study</span>
              <span>Stack</span>
              <span>Give Back</span>
            </div>
          </div>
        </div>
      </article>

      <article className="panel newsletter-panel" id="newsletter">
        <h2>Weekly Newsletter</h2>
        <p>Three ideas. Every week. Straight to your inbox.</p>
        <form
          className="subscribe-form"
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <label>
            <span>Email address</span>
            <input type="email" placeholder="Enter your email address" required />
          </label>
          <button type="submit">
            Subscribe Now <ArrowRight size={17} />
          </button>
        </form>
        <div className="newsletter-notes">
          <span>
            <Check size={16} /> Free. Unsubscribe anytime.
          </span>
          <span>
            <Check size={16} /> No spam. Just Bitcoin.
          </span>
        </div>
      </article>
    </section>
  )
}

function Community() {
  const channels = [
    { icon: <Zap size={34} fill="currentColor" />, name: 'Nostr', copy: 'Decentralized conversations', handle: 'npub...study...stack', tone: 'purple' },
    { icon: <Youtube size={34} fill="currentColor" />, name: 'YouTube', copy: 'Weekly videos & deep dives', handle: '@StudyStackBitcoin', tone: 'red' },
    { icon: <Play size={34} fill="currentColor" />, name: 'Rumble', copy: 'Watch & share on Rumble', handle: '@StudyStackBitcoin', tone: 'green' },
    { icon: <Twitter size={34} />, name: 'X / Twitter', copy: 'Daily signals & updates', handle: '@StudyStackBTC', tone: 'blue' },
    { icon: <Podcast size={34} />, name: 'Podcast', copy: 'Long-form conversations with builders', handle: 'Coming Soon', tone: 'purple' },
  ]

  return (
    <section className="community-section" id="resources">
      <div className="section-row">
        <h2>Join the Movement</h2>
        <p>We publish across the platforms where Bitcoiners learn, build and connect.</p>
      </div>
      <div className="channel-grid">
        {channels.map((channel) => (
          <a className={`channel-card ${channel.tone}`} href="#newsletter" key={channel.name}>
            {channel.icon}
            <div>
              <h3>{channel.name}</h3>
              <p>{channel.copy}</p>
              <span>{channel.handle}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer-motto">
        <p>Your participation is essential.</p>
        <p>
          Study. Stack. Give Back. <span>∞ / 21M</span>
        </p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  )
}

export function HomePage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden />
      <div className="page-glow" aria-hidden />
      <Nav />
      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="tag-chip">
              <span />
              Study. Stack. Give Back.
            </span>
            <h1>
              Study Bitcoin.
              <br />
              <span className="iridescent-text">Stack Bitcoin.</span>
              <br />
              <em className="iridescent-text">Give Back.</em>
            </h1>
            <p>A weekly signal in a world of noise. Three pillars. One mission: to help you learn, build wealth, and strengthen Bitcoin.</p>
            <div className="hero-actions">
              <PillButton href="#newsletter">Subscribe to the Weekly Newsletter</PillButton>
              <PillButton href="#this-week" variant="ghost">
                Explore This Week’s Signal
              </PillButton>
            </div>
            <div className="social-proof">
              <div className="avatar-stack" aria-hidden>
                <span />
                <span />
                <span />
                <span />
              </div>
              <p>Join 12,847+ Bitcoiners building the future.</p>
            </div>
          </div>
          <HeroArt />
        </section>

        <section className="pillars-section">
          <div className="section-title">
            <h2>3 Pillars. 1 Mission.</h2>
            <p>Everything we do focuses on these three core subjects every week.</p>
          </div>
          <div className="pillar-grid">
            <PillarCard tone="purple" icon={<BookOpen size={34} />} title="STUDY" question="What’s worth learning this week?" items={studyItems} />
            <PillarCard tone="orange" icon={<Layers3 size={34} />} title="STACK" question="How are people stacking in the real world?" items={stackItems} />
            <PillarCard tone="green" icon={<Heart size={34} />} title="GIVE BACK" question="How do we strengthen the network?" items={giveItems} />
          </div>
        </section>

        <SignalPanel />
        <Community />
      </main>
      <Footer />
    </>
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
