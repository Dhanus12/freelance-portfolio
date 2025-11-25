import { Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

const PageWrapper = ({ children }) => {
  const container = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.current,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
    })
    return () => ctx.revert()
  }, [])
  return <div ref={container}>{children}</div>
}

function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageWrapper key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  )
}

export default App
