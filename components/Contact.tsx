'use client'

export default function Contact() {
    return (
        <>
            <style>{`
        .social-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 0.1em;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .social-link:hover {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }
        .contact-socials {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-top: 4rem;
          flex-wrap: wrap;
        }
      `}</style>

            <section id="contact" style={{ padding: 'clamp(4rem, 10vw, 8rem) 1.5rem' }}>
                <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
                    <p style={{
                        fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
                        color: 'var(--accent)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem',
                    }}>// Contact</p>
                    <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Let's work<br />
                        <span style={{ color: 'var(--accent)' }}>together.</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
                        Available for internships, freelance missions or full-time positions.
                        Don't hesitate to reach out!
                    </p>

                    <a href="mailto:patrickrakotoharilalao@gmail.com" style={{
                        display: 'inline-block', padding: '1rem clamp(1.5rem, 4vw, 3rem)',
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                        color: 'var(--bg)', fontFamily: "'Space Mono', monospace",
                        fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: 700,
                        textDecoration: 'none', letterSpacing: '0.05em',
                        clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                        wordBreak: 'break-all',
                    }}>
                        patrickrakotoharilalao@gmail.com
                    </a>

                    <div className="contact-socials">
                        <a href="https://www.linkedin.com/in/patrick-rakotoharilalao-a5324a362/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                        <a href="tel:+261339165420" className="social-link">+261 33 91 654 20</a>
                    </div>

                    <p style={{
                        fontFamily: "'Space Mono', monospace", fontSize: '0.7rem',
                        color: 'var(--border)', marginTop: '5rem', letterSpacing: '0.15em',
                    }}>
                        © 2025 Alain Patrick Rakotoharilalao — Built with Next.js
                    </p>
                </div>
            </section>
        </>
    )
}