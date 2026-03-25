'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')!
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
            })
        }

        let raf: number
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`
                ctx.fill()
            })
            raf = requestAnimationFrame(animate)
        }
        animate()
        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <>
            <style>{`
                .hero-buttons {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .hero-tag {
                    font-size: 0.85rem;
                    letter-spacing: 0.3em;
                }
                .hero-name {
                    display: block;
                    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    white-space: nowrap;
                    font-size: clamp(1.2rem, 4.5vw, 6rem);
                }
                @media (max-width: 640px) {
                    .hero-tag { font-size: 0.7rem; letter-spacing: 0.15em; }
                    .hero-buttons a { width: 100%; text-align: center; }
                }
                @media (max-width: 400px) {
                    .hero-name { font-size: clamp(1rem, 7vw, 2rem) !important; }
                }
            `}</style>

            <section style={{
                position: 'relative', minHeight: '100vh', display: 'flex',
                alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
            }}>
                <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
                <div style={{
                    position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
                    width: 600, height: 600, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
                    zIndex: 1, pointerEvents: 'none',
                }} />

                <div style={{
                    position: 'relative', zIndex: 2, textAlign: 'center',
                    padding: '0 1.5rem', maxWidth: 700, width: '100%',
                }}>
                    <p className="hero-tag" style={{
                        fontFamily: "'Space Mono', monospace",
                        color: 'var(--accent)', textTransform: 'uppercase',
                        marginBottom: '1.5rem', opacity: 0.8,
                    }}>
                        {'<'} Full Stack Developer · Java · Node.js · PHP {'>'}
                    </p>

                    <h1 style={{
                        fontSize: 'clamp(1.6rem, 5.5vw, 6rem)', fontWeight: 800,
                        lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem',
                    }}>
                        <span style={{ display: 'block', color: 'var(--text)' }}>
                            Alain Patrick
                        </span>
                        <span className="hero-name">
                            Rakotoharilalao
                        </span>
                    </h1>

                    <p style={{
                        fontFamily: "'Space Mono', monospace", fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                        color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 3rem',
                        lineHeight: 1.7,
                    }}>
                        Fresh graduate building robust web applications —<br />
                        from backend architecture to modern interfaces.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" style={{
                            padding: '0.85rem 2.2rem', background: 'var(--accent)', color: 'var(--bg)',
                            fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', fontWeight: 700,
                            textDecoration: 'none', letterSpacing: '0.05em',
                            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                        }}>
                            View Projects
                        </a>
                        <a href="#contact" style={{
                            padding: '0.85rem 2.2rem', border: '1px solid var(--border)',
                            color: 'var(--text)', fontFamily: "'Space Mono', monospace",
                            fontSize: '0.85rem', textDecoration: 'none', letterSpacing: '0.05em',
                            background: 'transparent',
                        }}>
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div style={{
                    position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2,
                }}>
                    <span style={{
                        fontFamily: "'Space Mono', monospace", fontSize: '0.7rem',
                        color: 'var(--text-muted)', letterSpacing: '0.2em',
                    }}>SCROLL</span>
                    <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
                </div>
            </section>
        </>
    )
}