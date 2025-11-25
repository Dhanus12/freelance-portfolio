import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

export default function Resume() {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current?.querySelectorAll('.card'), {
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
    <section className="section container" ref={containerRef}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Resume</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-slate-300">
            <li><span className="text-slate-400">Location:</span> Bengaluru, India</li>
            <li><span className="text-slate-400">Phone:</span> +91 63843 98651</li>
            <li><span className="text-slate-400">Email:</span> <a className="hover:text-cyan-400" href="mailto:priyadharshini09082003@gmail.com">priyadharshini09082003@gmail.com</a></li>
            <li><span className="text-slate-400">LinkedIn:</span> <a className="hover:text-cyan-400" href="https://linkedin.com/in/priya-dharshini-k-206829274/" target="_blank" rel="noreferrer">linkedin.com/in/priya-dharshini-k-206829274/</a></li>
          </ul>
        </div>

        {/* Professional Summary */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
          <p className="text-slate-300">Engineering graduate with hands-on experience in CI/CD, Docker, Kubernetes, and AWS cloud. Seeking a DevOps role to implement automated solutions and optimize software delivery pipelines.</p>
        </div>

        {/* Education */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <ul className="space-y-2 text-slate-300">
            <li><span className="font-semibold">Bachelor of Engineering (B.E.) – Electronics and Communication Engineering</span></li>
            <li>CGPA: 8.28</li>
            <li>PSV College of Engineering and Technology, Anna University</li>
            <li>2021 – 2025 | India</li>
          </ul>
        </div>

        {/* Courses & Certifications */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-3">Courses & Certifications</h3>
          <ul className="space-y-3 text-slate-300">
            <li>
              <div className="font-semibold">DevOps Engineer Certification – 3 Months, ACTE Technologies, Chennai</div>
              <div className="text-slate-400">18.06.2025 – 17.09.2025</div>
            </li>
            <li>
              <div className="font-semibold">Python Full Stack Developer Certification – 3 Months, Inmakes Pvt. Ltd.</div>
              <div className="text-slate-400">15.10.2024 – 15.01.2025</div>
            </li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="card p-6 md:col-span-2">
          <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-4 text-slate-300">
            <ul className="space-y-1">
              <li><span className="text-slate-400">Operating Systems:</span> Windows, Linux</li>
              <li><span className="text-slate-400">DevOps Tools:</span> Git, Docker, Kubernetes, Jenkins</li>
              <li><span className="text-slate-400">Cloud Platforms:</span> AWS (VPC, RDS, Auto Scaling, EC2, S3, IAM, EBS, CloudWatch, ELB, Volumes, Route53)</li>
              <li><span className="text-slate-400">Scripting:</span> Bash, Python</li>
            </ul>
            <ul className="space-y-1">
              <li><span className="text-slate-400">Concepts:</span> CI/CD, Infrastructure as Code (IaC) basics</li>
              <li><span className="text-slate-400">Networking:</span> Basic TCP/IP, IoT integration, cloud communication</li>
              <li><span className="text-slate-400">Other Tools:</span> VS Code, Microsoft Tools, AnyDesk</li>
            </ul>
          </div>
        </div>

        {/* Core Skills */}
        <div className="card p-6 md:col-span-2">
          <h3 className="text-xl font-semibold mb-3">Core Skills</h3>
          <div className="grid md:grid-cols-2 gap-4 text-slate-300">
            <div>
              <div className="font-semibold mb-1">Digital and Analog Circuit Design</div>
              <p>Designing, analyzing, and testing analog/digital circuits using Multisim, MATLAB.</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Internet of Things (IoT)</div>
              <ul className="list-disc ml-5 space-y-1">
                <li>Sensor integration</li>
                <li>Wireless communication (MQTT, CoAP, Bluetooth, Wi‑Fi)</li>
                <li>Embedded programming with microcontrollers</li>
                <li>Cloud connectivity</li>
                <li>Tools used: Arduino Uno</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-1">Embedded Systems</div>
              <p>Experience in IoT‑based health monitoring applications.</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="card p-6 md:col-span-2">
          <h3 className="text-xl font-semibold mb-3">Projects</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <div className="font-semibold">Deploy and Manage Nginx Container on Multiple Hosts using Ansible & Docker</div>
              <div className="text-slate-400">25‑09‑2025 to 30‑09‑2025</div>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Built IaC automation using Ansible for multi‑host Nginx deployment.</li>
                <li>Automated Docker installation, image pull, and lifecycle management.</li>
                <li>Configured restart policies for high availability.</li>
                <li>Centralized management using a control node.</li>
                <li>Verified deployments using Docker CLI and curl tests.</li>
                <li><span className="text-slate-400">Tech:</span> Ansible, Docker, AWS EC2, Ubuntu, YAML, SSH</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Vehicle Number Plate Detection Using IoT</div>
              <div className="text-slate-400">25‑03‑2024 to 01‑04‑2024</div>
              <p className="mt-2">Developed vehicle number detection using IoT + image processing. Used OCR for character recognition. Sent vehicle data to the cloud using IoT modules.</p>
            </div>
            <div>
              <div className="font-semibold">Low‑Power Turbo Coded Health Monitoring System</div>
              <div className="text-slate-400">07‑02‑2025 to 27‑05‑2025</div>
              <p className="mt-2">Built a low‑power health monitoring system for real‑time data communication. Focus on energy efficiency for wearable & IoT applications.</p>
            </div>
          </div>
        </div>

        {/* Strengths */}
        <div className="card p-6 md:col-span-2">
          <h3 className="text-xl font-semibold mb-3">Strengths</h3>
          <ul className="list-disc ml-5 space-y-1 text-slate-300">
            <li>Strong troubleshooting skills</li>
            <li>Effective communication</li>
            <li>Team collaboration</li>
            <li>Quick learner, adaptable to new technologies</li>
          </ul>
        </div>
      </div>
    </section>
  )
}