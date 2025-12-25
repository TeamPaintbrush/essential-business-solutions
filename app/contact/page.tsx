import React from 'react'

export default function Contact() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for inquiries, consultations, or to learn more about our services.</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div>
            <h2>Contact Information</h2>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> 407-350-7019</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> info@essentialbusinesssolutions.co</p>
              <p><strong>Website:</strong> essentialbusinesssolutions.co</p>
            </div>
          </div>
          <div>
            <h2>Send a Message</h2>
            <form style={{ marginTop: '1rem' }}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" style={{ height: '100px' }}></textarea>
              </div>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}