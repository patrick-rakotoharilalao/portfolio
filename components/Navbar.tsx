'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')

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
        .nav-link:hover, .nav-link.active {
          color: var(--accent);
        }
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        @media (max-width: 640px) {
          .nav-links { display: none; }
        }
      `}</style>

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
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={`nav-link${active === link ? ' active' : ''}`}
                            onClick={() => setActive(link)}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <a href="mailto:patrickrakotoharilalao@gmail.com" style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                    color: 'var(--accent)', border: '1px solid var(--accent)',
                    padding: '0.45rem 1rem', textDecoration: 'none',
                    letterSpacing: '0.1em', transition: 'all 0.2s',
                }}>
                    Hire me
                </a>
            </nav >
        </>
    )
}