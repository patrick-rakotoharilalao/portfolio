export default function About() {
    return (
        <section id="about" style={{
            padding: '8rem 2rem', maxWidth: 1100, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center',
        }}>
            <div>
                <p style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
                    color: 'var(--accent)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.2rem',
                }}>// About me</p>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>
                    Passionate about<br />
                    <span style={{ color: 'var(--accent)' }}>clean code</span><br />
                    & solid architecture.
                </h2>
                <div style={{
                    width: 64, height: 2,
                    background: 'linear-gradient(to right, var(--accent), var(--accent-2))',
                    marginBottom: '2rem',
                }} />
            </div>

            <div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                    Fresh Computer Science graduate from IT-University (2022–2025),
                    I master the full development cycle — from backend (Node.js, Laravel, Spring Boot)
                    to modern frontends (Vue.js, React/Next.js).
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                    Curious, rigorous and quality-driven, I'm looking to contribute to
                    ambitious projects where solid engineering truly makes a difference.
                    Based in Madagascar, open to opportunities.
                </p>

                <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem' }}>
                    {[['2025', 'Graduate'], ['2+', 'Projects'], ['5+', 'Technologies']].map(([num, label]) => (
                        <div key={label}>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: "'Space Mono', monospace" }}>{num}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}