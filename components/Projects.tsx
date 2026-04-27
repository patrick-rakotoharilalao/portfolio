'use client'

const projects = [
    {
        title: 'Auth as a Service (AaaS)',
        desc: 'Enterprise-grade authentication microservice, production-ready and multi-application via API Key.',
        stack: ['Node.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'Redis', 'Prisma', 'Docker'],
        status: 'Open Source',
        type: 'Personal Project',
        github: 'https://github.com/patrick-rakotoharilalao/auth-service-project',
        demo: '',
        impact: 'Reusable across multiple apps via API Key — eliminates the need to rebuild auth from scratch for every new project.',
        highlights: [
            'JWT + OAuth 2.0 Google + 2FA/MFA TOTP',
            'Redis blacklisting & rate limiting',
            'Swagger docs, clean architecture',
            'Docker multi-stage build + Docker Compose',
        ],
    },
    {
        title: 'ERPNext Integration',
        desc: 'Laravel application with bidirectional flows via ERPNext REST API, eliminating manual data entry.',
        stack: ['PHP', 'Laravel', 'REST API', 'ERPNext', 'MariaDB'],
        status: 'Academic',
        type: 'Academic Project',
        github: '',
        demo: '',
        impact: 'Eliminated manual data entry entirely, reducing human errors and saving several hours of administrative work per week.',
        highlights: [
            'Bidirectional sync with ERPNext REST API',
            'Payroll module: salary, bonuses, deductions',
            'Conflict management & automatic rollback',
        ],
    },
    {
        title: 'Flight Booking System',
        desc: 'Full-featured flight reservation platform built during internship at Zebu Air.',
        stack: ['PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'MySQL', 'Stripe'],
        status: 'Production',
        type: 'Internship · Zebu Air',
        github: '',
        demo: '',
        impact: 'Deployed in production at Zebu Air — handling real bookings with automated payment processing and instant boarding pass delivery.',
        highlights: [
            'Real-time multi-criteria flight search',
            'Multi-leg routing support',
            'Stripe payment integration',
            'PDF boarding pass generation',
        ],
    },
]

export default function Projects() {
    return (
        <>
            <style>{`
                .project-card {
                    border: 1px solid var(--border);
                    background: var(--bg-2);
                    position: relative;
                    transition: border-color 0.3s, transform 0.3s;
                    display: flex;
                    flex-direction: column;
                }
                .project-card:hover {
                    border-color: var(--accent);
                    transform: translateY(-4px);
                }
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .project-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-family: 'Space Mono', monospace;
                    font-size: 0.7rem;
                    letter-spacing: 0.1em;
                    text-decoration: none;
                    padding: 0.4rem 0.9rem;
                    border: 1px solid var(--border);
                    color: var(--text-muted);
                    transition: color 0.2s, border-color 0.2s;
                }
                .project-link:hover {
                    color: var(--accent);
                    border-color: var(--accent);
                }
                .project-link.github { }
                .project-link.demo {
                    border-color: var(--accent);
                    color: var(--accent);
                }
                .project-link.demo:hover {
                    background: rgba(0, 212, 255, 0.08);
                }
                @media (max-width: 640px) {
                    .projects-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <section id="projects" style={{ padding: 'clamp(4rem, 10vw, 8rem) 1.5rem', background: 'var(--bg-2)' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <p style={{
                        fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
                        color: 'var(--accent)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem',
                    }}>// Projects</p>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '3rem' }}>
                        What I've built
                    </h2>

                    <div className="projects-grid">
                        {projects.map((p, i) => (
                            <div key={p.title} className="project-card">
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                                    background: 'linear-gradient(to right, var(--accent), var(--accent-2))',
                                }} />
                                <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', height: '100%' }}>

                                    {/* Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>0{i + 1}</span>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                                            <span style={{
                                                fontFamily: "'Space Mono', monospace", fontSize: '0.62rem',
                                                color: 'var(--accent)', border: '1px solid var(--accent)', padding: '0.18rem 0.55rem',
                                            }}>{p.status}</span>
                                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', color: 'var(--text-muted)' }}>{p.type}</span>
                                        </div>
                                    </div>

                                    {/* Title & desc */}
                                    <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 700, marginBottom: '0.85rem' }}>{p.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.92rem' }}>{p.desc}</p>

                                    {/* Highlights */}
                                    <ul style={{ listStyle: 'none', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {p.highlights.map((h, j) => (
                                            <li key={j} style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: 1.5, display: 'flex', gap: '0.6rem' }}>
                                                <span style={{ color: 'var(--accent)', fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', marginTop: '0.3rem' }}>▸</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Impact */}
                                    <div style={{
                                        marginBottom: '2rem', padding: '0.85rem 1rem',
                                        background: 'rgba(0, 212, 255, 0.05)', borderLeft: '2px solid var(--accent)',
                                    }}>
                                        <p style={{
                                            fontFamily: "'Space Mono', monospace", fontSize: '0.68rem',
                                            color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem',
                                        }}>Impact</p>
                                        <p style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.6 }}>{p.impact}</p>
                                    </div>

                                    {/* Stack */}
                                    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                                        {p.stack.map(s => (
                                            <span key={s} style={{
                                                fontFamily: "'Space Mono', monospace", fontSize: '0.65rem',
                                                color: 'var(--text-muted)', background: 'var(--bg-3)',
                                                padding: '0.28rem 0.65rem', border: '1px solid var(--border)',
                                            }}>{s}</span>
                                        ))}
                                    </div>

                                    {/* Links — affichés seulement si le lien existe */}
                                    {(p.github || p.demo) && (
                                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                            {p.github && (
                                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                                                    ↗ GitHub
                                                </a>
                                            )}
                                            {p.demo && (
                                                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                                                    ↗ Live Demo
                                                </a>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}