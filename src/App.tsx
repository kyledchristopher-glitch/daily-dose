import { motion } from 'framer-motion'

import exterior from './assets/exterior.webp'
import interiorWide from './assets/interior-wide.webp'
import lounge from './assets/lounge.webp'
import bar from './assets/bar.webp'
import marzocco from './assets/marzocco.webp'
import stumptown from './assets/stumptown.webp'
import mugs from './assets/mugs.webp'
import books from './assets/books.webp'
import retail from './assets/retail.webp'

const ADDRESS = '907 Memorial Drive SE, Suite 112, Atlanta, GA 30316'
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Daily Dose Coffee ${ADDRESS}`,
)}`
const INSTAGRAM_URL = 'https://www.instagram.com/dailydosecoffee/'

const gallery = [
  {
    image: bar,
    title: 'Designed for slow mornings.',
    alt: 'La Marzocco bar with menu board',
  },
  {
    image: books,
    title: 'Built for conversation.',
    alt: 'Wall of curated books and cards',
  },
  {
    image: mugs,
    title: 'Stay a while.',
    alt: 'Skyline mugs on warm wood shelf',
  },
]

const details = [
  {
    image: stumptown,
    label: 'Coffee',
    title: 'Stumptown Roasters',
    body: 'Sourced from one of the most respected roasters in the country.',
  },
  {
    image: marzocco,
    label: 'Equipment',
    title: 'La Marzocco Espresso',
    body: 'Precision equipment behind every drink.',
  },
  {
    image: retail,
    label: 'Bakery',
    title: "Alon's Bakery Pastries",
    body: 'Delivered fresh daily.',
  },
  {
    image: exterior,
    label: 'Access',
    title: 'Free Adjacent + Street Parking',
    body: 'Easy access right on Memorial Drive.',
  },
]

const amenities = [
  'Coffee',
  'Tea',
  'Pastries',
  'Quick Bites',
  'Free Wi-Fi',
  'Free Parking',
  'Cards Accepted',
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark">Daily Dose</a>
        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#space">The Space</a>
          <a href="#experience">Experience</a>
          <a href="#visit">Visit</a>
        </nav>
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="nav-link">
          Directions
        </a>
      </header>

      <section id="top" className="hero">
        <motion.img
          src={interiorWide}
          alt="Daily Dose Coffee interior"
          className="hero-image"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero-overlay" />
        <div className="hero-gradient" />

        <div className="hero-content">
          <FadeIn>
            <p className="eyebrow">Reynoldstown · Atlanta</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1>
              Your Daily Dose,
              <br />
              <span>Elevated.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="hero-copy">
              Specialty coffee, tea, and pastries in a thoughtfully designed space in Reynoldstown.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="button-row">
              <a className="button button-primary" href={MAPS_URL} target="_blank" rel="noreferrer">
                Get Directions
              </a>
              <a className="button button-secondary" href="#visit">
                View Hours
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="statement section-pad-xl">
        <FadeIn>
          <h2>
            Not just coffee.
            <br />
            <span>A space designed to be experienced.</span>
          </h2>
        </FadeIn>
      </section>

      <section id="about" className="section-pad grid-two about-grid">
        <FadeIn>
          <div className="image-frame">
            <img src={lounge} alt="Leather banquette seating inside Daily Dose Coffee" />
          </div>
        </FadeIn>
        <div className="copy-block">
          <FadeIn>
            <p className="eyebrow">About</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h3>An intentionally designed neighborhood café.</h3>
          </FadeIn>
          <FadeIn delay={0.14}>
            <div className="body-copy">
              <p>
                Daily Dose Coffee is a refined coffee shop in Reynoldstown, built around the idea that environment matters.
              </p>
              <p>
                Clean lines, warm materials, and a quiet atmosphere make it a place to meet, work, or settle in longer than you planned.
              </p>
              <p>
                The coffee program features <strong>Stumptown Coffee Roasters</strong>, with fresh baked goods from <strong>Alon’s Bakery</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="space" className="section-pad-lg">
        <div className="section-intro narrow-left">
          <FadeIn>
            <p className="eyebrow">The Space</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h3>
              Architectural, warm,
              <br />
              <span>and unhurried.</span>
            </h3>
          </FadeIn>
        </div>

        <div className="gallery-stack">
          {gallery.map((item, index) => (
            <FadeIn key={item.title}>
              <figure className="gallery-item">
                <img src={item.image} alt={item.alt} />
                <figcaption>
                  {index < 2 ? item.title : ''}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="experience" className="section-pad-xl experience-wrap">
        <div className="section-intro narrow-left">
          <FadeIn>
            <p className="eyebrow">Experience</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h3>
              Everything you need.
              <br />
              <span>Nothing extra.</span>
            </h3>
          </FadeIn>
        </div>

        <div className="amenities-list">
          {amenities.map((item, index) => (
            <FadeIn key={item} delay={index * 0.03}>
              <div className="amenity-row">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-pad details-wrap">
        <div className="section-intro narrow-left">
          <FadeIn>
            <p className="eyebrow">Details</p>
          </FadeIn>
        </div>

        <div className="detail-list">
          {details.map((detail, index) => (
            <FadeIn key={detail.title}>
              <article className="detail-row">
                <p className="detail-label">
                  {String(index + 1).padStart(2, '0')} — {detail.label}
                </p>
                <div className="detail-copy">
                  <h4>{detail.title}</h4>
                  <p>{detail.body}</p>
                </div>
                <div className="detail-image">
                  <img src={detail.image} alt={detail.title} />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="visit" className="section-pad visit-grid">
        <div>
          <FadeIn>
            <p className="eyebrow">Visit</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h3>
              Visit us in
              <br />
              <span>Reynoldstown.</span>
            </h3>
          </FadeIn>
        </div>

        <div className="visit-info">
          <FadeIn delay={0.12}>
            <div>
              <p className="eyebrow">Address</p>
              <p className="visit-text">
                Daily Dose Coffee
                <br />
                907 Memorial Drive SE
                <br />
                Suite 112
                <br />
                Atlanta, GA 30316
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div>
              <p className="eyebrow">Hours</p>
              <div className="hours-grid">
                <span>Mon–Fri</span>
                <span>7AM – 8PM</span>
                <span>Sat–Sun</span>
                <span>8AM – 7PM</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="button-row visit-buttons">
              <a className="button button-primary" href={MAPS_URL} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
              <a className="button button-secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="final-cta">
        <img src={exterior} alt="Daily Dose Coffee storefront on Memorial Drive" className="final-cta-image" />
        <div className="final-cta-overlay" />
        <div className="final-cta-content">
          <FadeIn>
            <h2>
              Stop in for your
              <br />
              <span>daily dose.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="button-row center-buttons">
              <a className="button button-primary" href={MAPS_URL} target="_blank" rel="noreferrer">
                Get Directions
              </a>
              <a className="button button-secondary" href="#visit">
                Visit Today
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="site-footer">
        <p className="brand-mark">Daily Dose Coffee</p>
        <p>Reynoldstown · Atlanta, GA</p>
        <p>© {new Date().getFullYear()} — All rights reserved</p>
      </footer>
    </main>
  )
}
