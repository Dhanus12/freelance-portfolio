import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ type: '', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '' })

    gsap.fromTo(formRef.current, { y: 6 }, { y: 0, duration: 0.2 })

    const env = import.meta.env
    console.debug('EmailJS env full', env)
    const serviceId = env.VITE_EMAILJS_SERVICE_ID || 'service_wdbxjzv' // fallback to provided ID
    const templateId = env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = env.VITE_EMAILJS_PUBLIC_KEY

    // debug: surface env values to help diagnose missing IDs
    console.debug('EmailJS env check', { serviceId, templateId, publicKey })

    try {
      const missing = []
      if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID')
      if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID')
      if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY')
      if (missing.length) {
        throw new Error(`EmailJS env vars not set: ${missing.join(', ')}`)
      }

      // send notification to you (site owner)
      const ownerRes = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      console.debug('EmailJS owner response', ownerRes)

      // auto-reply to the sender (handle failure separately so owner mail still succeeds)
      const autoTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID
      if (autoTemplateId) {
        try {
          const fd = new FormData(formRef.current)
          const senderName = fd.get('name') || ''
          const senderEmail = fd.get('email') || ''
          const autoPayload = {
            // Match your template variables
            name: senderName, // screenshot shows "Hi {{name}}"
            title: 'Portfolio Contact',

            // Recipient variables for "To Email"
            to_email: senderEmail,
            reply_to: senderEmail,
            email: senderEmail,
            user_email: senderEmail,

            // Optional niceties
            to_name: senderName,
            from_name: 'Portfolio'
          }
          console.debug('EmailJS auto-reply payload', autoPayload)
          // pass public key as 4th positional arg per emailjs.send signature
          const res = await emailjs.send(
            serviceId,
            autoTemplateId,
            autoPayload,
            publicKey
          )
          console.debug('EmailJS auto-reply response', res)
          setStatus({ type: 'success', message: 'Message sent! Please check your inbox for our auto-reply.' })
        } catch (autoErr) {
          const adetail = autoErr?.text || autoErr?.message || 'Unknown auto-reply error'
          console.error('EmailJS auto-reply error:', autoErr)
          setStatus({ type: 'success', message: `Message sent to owner. Auto-reply failed: ${adetail}` })
        }
      } else {
        setStatus({ type: 'success', message: 'Message sent to owner.' })
      }
      formRef.current.reset()
    } catch (err) {
      const detail = err?.text || err?.message || 'Unknown error'
      setStatus({ type: 'error', message: `Failed to send: ${detail}` })
      console.error('EmailJS error:', err)
    }
  }

  return (
    <section className="section container">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form ref={formRef} onSubmit={onSubmit} className="card p-6 space-y-4">
          <input type="hidden" name="title" value="Portfolio Contact" />
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" required className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 focus:border-cyan-400 outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 focus:border-cyan-400 outline-none" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 focus:border-cyan-400 outline-none" />
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
          {status.message && (
            <p className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>{status.message}</p>
          )}
        </form>

        <div className="card p-6 space-y-3">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <p className="text-slate-300">Location: India</p>
          <p className="text-slate-300">LinkedIn: <a className="hover:text-cyan-400" href="https://linkedin.com/in/priya-dharshini-k-206829274/" target="_blank" rel="noreferrer">linkedin.com/in/priya-dharshini-k-206829274/</a></p>
        </div>
      </div>
    </section>
  )
}