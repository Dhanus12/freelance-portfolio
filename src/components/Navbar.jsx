import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

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
        <button aria-label="Menu" aria-expanded={open} className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay (explicit link styling + close button) */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={`${open ? 'block' : 'hidden'} md:hidden fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-lg pt-24 pb-12 px-6 min-h-screen relative`}
      >
        {/* Close button inside overlay */}
        <button
          aria-label="Close menu"
          className="absolute top-4 right-4 p-2 rounded-md text-white hover:text-cyan-400"
          onClick={() => setOpen(false)}
        >
          <FaTimes size={22} />
        </button>

        <div className="flex flex-col text-xl gap-3 text-white">
          <h2 className="mb-2 text-2xl font-bold">Menu</h2>
          <NavLink onClick={() => setOpen(false)} to="/" className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 transition-colors">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 transition-colors">About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/services" className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 transition-colors">Services</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/projects" className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 transition-colors">Projects</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/resume" className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 transition-colors">Resume</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className="block px-3 py-2 rounded-md text-white hover:text-cyan-400 transition-colors">Contact</NavLink>
        </div>
      </div>
    </header>
  )
}