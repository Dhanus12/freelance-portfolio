import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data/services'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
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

  return (
    <section className="section container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Services</h2>
      <p className="text-slate-300 mb-6 max-w-3xl">
        We provide end-to-end solutions across cloud infrastructure, DevOps automation, and modern application development. Below are our core offerings.
      </p>
      <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card p-6">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-slate-400 text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}