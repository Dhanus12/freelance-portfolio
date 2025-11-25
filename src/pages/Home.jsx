import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { services } from '../data/services'
import { NavLink } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current?.children, {
        y: 24,
        autoAlpha: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      })

      gsap.from(servicesRef.current?.querySelectorAll('.service-item'), {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
        y: 24,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      })

      // subtle parallax for hero on scroll
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // hover scale effect for services cards
      const cards = servicesRef.current?.querySelectorAll('.service-item') || []
      cards.forEach((el) => {
        const enter = () => gsap.to(el, { scale: 1.02, boxShadow: '0 0 25px rgba(6,182,212,0.15)', duration: 0.2 })
        const leave = () => gsap.to(el, { scale: 1, boxShadow: 'none', duration: 0.2 })
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
        // store references for cleanup
        el.__enter = enter
        el.__leave = leave
      })
    })
    return () => {
      // cleanup hover listeners
      const cards = servicesRef.current?.querySelectorAll('.service-item') || []
      cards.forEach((el) => {
        if (el.__enter) el.removeEventListener('mouseenter', el.__enter)
        if (el.__leave) el.removeEventListener('mouseleave', el.__leave)
        delete el.__enter
        delete el.__leave
      })
      ctx.revert()
    }
  }, [])

  // Initialize VANTA Birds background on mount
  useEffect(() => {
    if (window.VANTA && window.VANTA.BIRDS && vantaRef.current) {
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        // match theme colors
        backgroundAlpha: 0.0,
        color1: 0x22d3ee, // cyan-400
        color2: 0xa78bfa, // purple-500
        birdSize: 1.5,
        quantity: 3,
        separation: 30.0,
        alignment: 20.0,
        cohesion: 20.0,
        speedLimit: 1.5,
      })
    }
    return () => {
      if (vantaEffect.current && typeof vantaEffect.current.destroy === 'function') {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  return (
    <div>
      <div ref={vantaRef} id="vanta-bg" className="fixed inset-0 -z-10 pointer-events-none" />
      <section ref={heroRef} className="section container relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-cyan-400">priya dharshini</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl text-slate-300">
          AWS | DevOps | Full-Stack Developer | Web Designer
        </p>
        <p className="mt-4 max-w-2xl text-slate-400">
          Engineering graduate with hands-on experience in CI/CD, Docker, Kubernetes, and AWS Cloud. I build scalable infrastructure and modern web applications.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <NavLink to="/projects" className="btn-primary">View Projects</NavLink>
          <NavLink to="/contact" className="btn-outline">Contact Me</NavLink>
        </div>
      </section>

      <section className="section container">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Services</h2>
        <div ref={servicesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-item card p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}