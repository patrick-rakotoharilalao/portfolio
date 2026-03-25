'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <style>{`
        .nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: var(--accent);
          transition: width 0.3s;
        }
        .nav-link:hover { color: var(--accent); }
        .nav-link:hover::after { width: 100%; }

        .mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(8, 11, 15, 0.98);
          backdrop-filter: blur(16px);
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          transition: opacity 0.3s, transform 0.3s;
        }
        .mobile-menu a {
          font-family: 'Space Mono', monospace;
          font-size: 1.5rem;
          color: var(--text);
          text-decoration: none;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .mobile-menu a:hover { color: var(--accent); }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--text);
          transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hire-btn { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="mobile-menu">
                    {links.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}

                    <a
                        href="mailto:patrickrakotoharilalao@gmail.com"
                        style={{ fontSize: '0.9rem', color: 'var(--accent)', marginTop: '1rem' }}
                        onClick={() => setMenuOpen(false)}
                    >
                        Hire me
                    </a>
                </div>
            )}

            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                padding: '1.25rem 2.5rem',
                background: scrolled ? 'rgba(8,11,15,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                transition: 'all 0.3s',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                <a href="#" style={{
                    fontFamily: "'Space Mono', monospace", fontWeight: 700,
                    fontSize: '0.9rem', color: 'var(--text)', textDecoration: 'none',
                    letterSpacing: '0.05em',
                }}>
                    <span style={{ color: 'var(--accent)' }}>P.</span>Rakotoharilalao
                </a>

                <div className="nav-links" style={{ display: 'flex', gap: '2.5rem' }}>
                    {links.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
                            {link}
                        </a>
                    ))}
                </div>

                <a href="mailto:patrickrakotoharilalao@gmail.com" className="hire-btn" style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                    color: 'var(--accent)', border: '1px solid var(--accent)',
                    padding: '0.45rem 1rem', textDecoration: 'none',
                    letterSpacing: '0.1em', transition: 'all 0.2s',
                }}>
                    Hire me
                </a>

                <button
                    className={`hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </nav>
        </>
    )
}