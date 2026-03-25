export default function Experience() {
    return (
        <section id="experience" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <p style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
                    color: 'var(--accent)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem',
                }}>// Experience</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '4rem' }}>
                    Where I've worked
                </h2>

                <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                    {/* Timeline line */}
                    <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0,
                        width: 1, background: 'var(--border)',
                    }} />

                    {/* Job */}
                    <div style={{ position: 'relative', marginBottom: '4rem' }}>
                        <div style={{
                            position: 'absolute', left: '-2.35rem', top: '0.4rem',
                            width: 10, height: 10, borderRadius: '50%',
                            background: 'var(--accent)', boxShadow: '0 0 12px var(--accent)',
                        }} />

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                            <span style={{
                                fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                                color: 'var(--accent)', border: '1px solid var(--accent)', padding: '0.2rem 0.7rem',
                            }}>Aug – Nov 2025</span>
                            <span style={{
                                fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                                color: 'var(--text-muted)',
                            }}>Internship</span>
                        </div>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                            Full Stack Developer Intern
                        </h3>
                        <p style={{
                            fontFamily: "'Space Mono', monospace", fontSize: '0.8rem',
                            color: 'var(--accent)', marginBottom: '1.2rem',
                        }}>Zebu Air — Flight Booking System</p>

                        <div style={{
                            display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem',
                        }}>
                            {['PHP/Laravel', 'Vue.js/Nuxt.js', 'MySQL'].map(t => (
                                <span key={t} style={{
                                    fontFamily: "'Space Mono', monospace", fontSize: '0.68rem',
                                    color: 'var(--text-muted)', background: 'var(--bg-3)',
                                    padding: '0.25rem 0.65rem', border: '1px solid var(--border)',
                                }}>{t}</span>
                            ))}
                        </div>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {[
                                'Built a real-time multi-criteria flight search engine with multi-leg routing support.',
                                'Integrated Stripe online payments and automated PDF boarding pass generation.',
                                'Developed a client dashboard for activity tracking, budget management, and passenger handling.',
                            ].map((item, i) => (
                                <li key={i} style={{
                                    color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7,
                                    display: 'flex', gap: '0.75rem',
                                }}>
                                    <span style={{ color: 'var(--accent)', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', marginTop: '0.3rem' }}>▸</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Education */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute', left: '-2.35rem', top: '0.4rem',
                            width: 10, height: 10, borderRadius: '50%',
                            background: 'var(--accent-2)', boxShadow: '0 0 12px var(--accent-2)',
                        }} />

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                            <span style={{
                                fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                                color: 'var(--accent-2)', border: '1px solid var(--accent-2)', padding: '0.2rem 0.7rem',
                            }}>2022 – 2025</span>
                            <span style={{
                                fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                                color: 'var(--text-muted)',
                            }}>Education</span>
                        </div>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                            Bachelor's Degree in Computer Science
                        </h3>
                        <p style={{
                            fontFamily: "'Space Mono', monospace", fontSize: '0.8rem',
                            color: 'var(--accent-2)', marginBottom: '1rem',
                        }}>IT-University — Software Development track</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                            Specialized in software development, covering full-stack web technologies,
                            system architecture, databases, and DevOps practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}