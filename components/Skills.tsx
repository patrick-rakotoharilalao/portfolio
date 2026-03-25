const skills = [
    { cat: 'Languages', items: ['Java', 'PHP', 'TypeScript', 'JavaScript'] },
    { cat: 'Backend', items: ['Spring Boot', 'Laravel', 'Express.js', 'Node.js'] },
    { cat: 'Frontend', items: ['React / Next.js', 'Vue.js / Nuxt.js', 'HTML / CSS'] },
    { cat: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'Redis'] },
    { cat: 'DevOps & Tools', items: ['Docker', 'Git / GitHub', 'Linux', 'Postman'] },
    { cat: 'Languages spoken', items: ['Malagasy (C2)', 'French (C1)', 'English (B1)'] },
]

export default function Skills() {
    return (
        <section id="skills" style={{ padding: '6rem 2rem', background: 'var(--bg-2)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <p style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
                    color: 'var(--accent)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem',
                }}>// Skills</p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '4rem' }}>
                    My tech stack
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                    {skills.map(({ cat, items }) => (
                        <div key={cat} style={{
                            border: '1px solid var(--border)', padding: '2rem',
                            background: 'var(--bg-3)', position: 'relative', overflow: 'hidden',
                        }}>
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                                background: 'linear-gradient(to right, var(--accent), var(--accent-2))',
                            }} />
                            <p style={{
                                fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
                                color: 'var(--accent)', letterSpacing: '0.2em', marginBottom: '1.2rem',
                            }}>{cat.toUpperCase()}</p>
                            <ul style={{ listStyle: 'none' }}>
                                {items.map(item => (
                                    <li key={item} style={{
                                        padding: '0.5rem 0', borderBottom: '1px solid var(--border)',
                                        color: 'var(--text)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.75rem',
                                    }}>
                                        <span style={{ color: 'var(--accent)', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem' }}>▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}