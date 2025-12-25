'use client'

import React, { useState } from 'react'
import { Mail, Phone, Globe, MapPin, Loader2 } from 'lucide-react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for inquiries, consultations, or to learn more about our services.</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div>
            <h2>Contact Information</h2>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="tel:4073507019" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#1e293b' }}>
                <Phone size={20} color="#6db3bb" />
                <span><strong>Phone:</strong> (407) 350-7019</span>
              </a>
              <a href="mailto:info@essentialbusinesssolutions.co" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#1e293b' }}>
                <Mail size={20} color="#6db3bb" />
                <span><strong>Email:</strong> info@essentialbusinesssolutions.co</span>
              </a>
              <a href="https://essentialbusinesssolutions.co" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#1e293b' }}>
                <Globe size={20} color="#6db3bb" />
                <span><strong>Website:</strong> essentialbusinesssolutions.co</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', color: '#1e293b' }}>
                <MapPin size={20} color="#6db3bb" style={{ marginTop: '0.25rem' }} />
                <div>
                  <strong>Locations:</strong><br />
                  Tampa Office<br />
                  Home Office - Nationwide Services
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
              <div className="form-group">
                <label htmlFor="name">Name: <span style={{ color: '#dc2626' }}>*</span></label>
                <input type="text" id="name" name="name" required aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email: <span style={{ color: '#dc2626' }}>*</span></label>
                <input type="email" id="email" name="email" required aria-required="true" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message: <span style={{ color: '#dc2626' }}>*</span></label>
                <textarea id="message" name="message" style={{ height: '100px' }} required aria-required="true"></textarea>
              </div>
              <button type="submit" className="btn" disabled={isSubmitting} style={{ 
                opacity: isSubmitting ? 0.7 : 1, 
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'center'
              }}>
                {isSubmitting && <Loader2 size={20} className="spin" style={{ animation: 'spin 1s linear infinite' }} />}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '4px' }} role="alert">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}