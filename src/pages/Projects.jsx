import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const gridRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current?.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        y: 24,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  const handleEnter = (el) => {
    gsap.to(el, { scale: 1.02, boxShadow: '0 0 25px rgba(6,182,212,0.2)', duration: 0.2 })
  }
  const handleLeave = (el) => {
    gsap.to(el, { scale: 1, boxShadow: 'none', duration: 0.2 })
  }

  return (
    <section className="section container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
      <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="card overflow-hidden" onMouseEnter={(e) => handleEnter(e.currentTarget)} onMouseLeave={(e) => handleLeave(e.currentTarget)}>
            <div className="w-full h-40 bg-slate-900 border-b border-slate-800 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                title={p.title}
                className="max-h-36 object-contain p-3"
                loading="lazy"
                decoding="async"
                onLoad={() => console.debug('Project image loaded:', p.title)}
                onError={(e) => {
                  console.error('Project image failed to load:', p.title, p.image)
                  e.currentTarget.src = '/vite.svg'
                }}
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{t}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block btn-outline">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}