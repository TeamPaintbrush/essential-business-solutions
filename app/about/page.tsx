import React from 'react'

export default function About() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div className="card" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1>About Essential Business Solutions Services</h1>
        <p>Essential Business Solutions Services is dedicated to providing exceptional business solutions that drive success and operational excellence.</p>
        
        <section style={{ marginTop: '2rem' }}>
          <h2>Our Mission</h2>
          <p>To empower businesses with reliable, efficient, and customized administrative, management, and event coordination services that foster growth and sustainability.</p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Our Vision</h2>
          <p>To be the trusted partner for businesses seeking comprehensive support solutions, recognized for our commitment to excellence, professionalism, and client satisfaction.</p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>What We Do</h2>
          <p>We provide three core service categories designed to support your business at every level:</p>
          <ul style={{ lineHeight: '1.8', marginTop: '1rem' }}>
            <li><strong>Administrative Services:</strong> Streamline your office operations with our comprehensive administrative support.</li>
            <li><strong>Business Management and Support:</strong> Enhance your business strategy and operations with expert guidance.</li>
            <li><strong>Event & Project Coordination:</strong> Execute flawless events from planning to post-event analysis.</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Our Approach</h2>
          <p>We believe in tailored solutions. Every business has unique challenges, and we conduct comprehensive reviews to determine specific needs and provide customized service packages. All services require a signed service agreement prior to commencement to ensure clarity and professionalism.</p>
        </section>

        <section style={{
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: '#e0f2fe',
          borderRadius: 'var(--radius)',
          border: '1px solid #0ea5e9'
        }}>
          <h3>Ready to Transform Your Business?</h3>
          <p>Contact us today to discuss how we can support your business goals.</p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Phone:</strong> 407-350-7019<br />
            <strong>Email:</strong> info@essentialbusinesssolutions.co<br />
            <strong>Web:</strong> essentialbusinesssolutions.co
          </p>
        </section>
      </div>
    </main>
  )
}