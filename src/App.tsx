import { useEffect, useState } from 'react'
import { albums, type Album } from './data'
import './App.css'

function App() {
  const [active, setActive] = useState<Album | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock scroll + close the album viewer on Escape.
  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          Alex Dateling
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
          <a href="#albums">Albums</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero band-soft">
          <div className="band-inner">
            <p className="eyebrow">Photographer &middot; Visual Storyteller</p>
            <h1>
              Light, framed with
              <br />
              intention.
            </h1>
            <p className="hero-sub">
              I capture quiet moments and bold landscapes across the world.
              Portraits, streets, and the spaces in between.
            </p>
            <a className="btn" href="#albums">
              View the albums
            </a>
          </div>
        </section>

        <section id="albums" className="albums band-light">
          <div className="band-inner">
            <div className="section-head">
              <h2>Albums</h2>
            </div>

            <div className="album-grid">
              {albums.map((a) => (
                <div key={a.id} className="album-card">
                  <button
                    className="album-thumb"
                    onClick={() => setActive(a)}
                    aria-label={`Open ${a.title}`}
                  >
                    <span className="album-thumb-frame" aria-hidden="true">
                      <iframe
                        src={a.embed}
                        title={`${a.title} preview`}
                        tabIndex={-1}
                        scrolling="no"
                      ></iframe>
                    </span>
                    <span className="album-thumb-overlay">View album</span>
                  </button>
                  <span className="album-info">
                    <strong>{a.title}</strong>
                    <em>{a.description}</em>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about band-dark">
          <div className="band-inner about-grid">
            <div className="about-text">
              <h2>About</h2>
              <p>
                I&rsquo;m Alex Dateling (aka 7BD), a photographer based in
                Johannesburg and visual creator focused on capturing people,
                movement, and authentic moments.
              </p>
              <p>
                From sports and events to portraits and everyday stories, I create
                images that preserve the feeling of being there.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <h2>Let&rsquo;s create something.</h2>
        <a className="mail" href="mailto:hello@alexdateling.com">
         ADateling@Gmail.com
        </a>
        <div className="social">
          <a href="https://instagram.com/alexdateling" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://github.com/alexdateling" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {/* <a href="https://x.com" target="_blank" rel="noreferrer">
            X
          </a> */}
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Alex Dateling. All rights reserved.
        </p>
      </footer>

      {active && (
        <div className="viewer" onClick={() => setActive(null)}>
          <div className="viewer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="viewer-bar">
              <strong>{active.title}</strong>
              <span className="viewer-actions">
                <a href={active.url} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
                <button
                  className="viewer-close"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                >
                  &times;
                </button>
              </span>
            </div>
            <iframe
              src={active.embed}
              title={active.title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default App
