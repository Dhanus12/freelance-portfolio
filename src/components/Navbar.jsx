import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import gsap from 'gsap'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const tl = useRef(null)

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
      .fromTo(
        menuRef.current,
        { y: '-100%', autoAlpha: 0 },
        { y: '0%', autoAlpha: 1, duration: 0.4, ease: 'power2.out' }
      )
      .from(
        menuRef.current?.querySelectorAll('a'),
        { y: 12, autoAlpha: 0, stagger: 0.05, duration: 0.3 },
        '<'
      )
  }, [])

  useEffect(() => {
    if (!tl.current) return
    if (open) tl.current.restart(true)
    else tl.current.reverse()
  }, [open])

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <div className="container flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500" />
          <span className="font-bold text-lg">Priya Dharshini</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Projects</NavLink>
          <NavLink to="/resume" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Resume</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Contact</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button aria-label="Menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`${open ? 'block' : 'hidden'} md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 pt-20 pb-8 px-6`}
      >
        <div className="flex flex-col text-lg gap-4">
          <NavLink onClick={() => setOpen(false)} to="/" className="nav-link">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className="nav-link">About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/services" className="nav-link">Services</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/projects" className="nav-link">Projects</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/resume" className="nav-link">Resume</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className="nav-link">Contact</NavLink>
        </div>
      </div>
    </header>
  )
}