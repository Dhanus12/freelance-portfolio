import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(aboutRef.current?.querySelectorAll('.reveal'), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        y: 24,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.5,
        ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="section container" ref={aboutRef}>
      <h2 className="reveal text-2xl md:text-3xl font-bold mb-6">About Me</h2>
      <div className="reveal grid md:grid-cols-[220px_1fr] gap-8 items-start">
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500" />
        <div>
          <p className="text-slate-300">
            Engineering graduate with hands-on experience in CI/CD, Docker, Kubernetes, and AWS Cloud. Seeking a DevOps role to implement automated solutions, optimize deployment pipelines, and enhance cloud infrastructure.
          </p>
        </div>
      </div>

      <div className="reveal mt-10 grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <ul className="text-slate-300 space-y-1">
            <li>Bachelor of Engineering (B.E.) – Electronics and Communication Engineering</li>
            <li>PSV College of Engineering and Technology, Anna University</li>
            <li>CGPA: 8.28</li>
            <li>2021 – 2025 | India</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Courses & Certifications</h3>
          <ul className="text-slate-300 space-y-1">
            <li>DevOps Engineer Certification (3 Months) – ACTE Technologies, Chennai (18.06.2025 – 17.09.2025)</li>
            <li>Python Full Stack Developer Certification (3 Months) – Inmakes Pvt. Ltd. (15.10.2024 – 15.01.2025)</li>
          </ul>
        </div>
      </div>

      <div className="reveal mt-10 grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
          <ul className="text-slate-300 grid grid-cols-2 gap-2">
            <li>Windows</li>
            <li>Linux</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Jenkins</li>
            <li>Python</li>
            <li>Bash</li>
            <li>AWS (EC2, S3, RDS, IAM, VPC, CloudWatch, ELB, Route53)</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-2">Core Skills</h3>
          <ul className="text-slate-300 space-y-1">
            <li>Digital & Analog Circuit Design</li>
            <li>Internet of Things (IoT): MQTT, CoAP, Bluetooth, Wi‑Fi</li>
            <li>Embedded programming (Arduino Uno)</li>
            <li>Cloud connectivity for real-time data processing</li>
            <li>Experience in health monitoring IoT applications</li>
          </ul>
        </div>
      </div>
    </div>
  )
}