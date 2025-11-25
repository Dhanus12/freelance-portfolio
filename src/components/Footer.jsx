import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} priya dharshini. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/priya-dharshini-k-206829274/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="GitHub"><FaGithub size={20} /></a>
          <a href="https://instagram.com/your-instagram" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Instagram"><FaInstagram size={20} /></a>
        </div>
      </div>
    </footer>
  )
}