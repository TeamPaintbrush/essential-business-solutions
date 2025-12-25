import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 2rem 1rem',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        <div>
          <img src="/assets/LOGO_3.png" alt="Essential Business Solutions Services Logo" style={{ height: '125px', width: 'auto', marginBottom: '1rem' }} />
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Professional administrative services, business management support, and event coordination tailored to your unique needs.
          </p>
        </div>
        <div>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/services" style={{ color: 'var(--text-secondary)' }}>Services</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/about" style={{ color: 'var(--text-secondary)' }}>About</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="/contact" style={{ color: 'var(--text-secondary)' }}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Contact Info</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            <strong>Phone:</strong> 407-350-7019
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            <strong>Email:</strong> info@essentialbusinesssolutions.co
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            <strong>Web:</strong> essentialbusinesssolutions.co
          </p>
        </div>
        <div>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Call to Action</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Ready to get started? Book your consultation today!
          </p>
          <Link href="/booking">
            <button style={{
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Book Now
            </button>
          </Link>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border)',
        color: 'var(--text-light)'
      }}>
        <p>&copy; 2025 Essential Business Solutions Services. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer