import React from 'react'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: 'white' }}>
      {/* Top Bar with Phone Numbers */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{
          padding: '0.75rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img src="/assets/LOGO_3.png" alt="Essential Business Solutions Services Logo" style={{ height: '100px', width: 'auto' }} />
          </Link>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="tel:8133730936" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: '#1e293b'
            }}>
              <div style={{
                backgroundColor: '#f0d44d',
                borderRadius: '50%',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Phone size={18} color="#1e293b" />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>(813) 373-0936</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={12} /> TAMPA OFFICE
                </div>
              </div>
            </a>
            <a href="tel:4073507019" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: '#1e293b'
            }}>
              <div style={{
                backgroundColor: '#f0d44d',
                borderRadius: '50%',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Phone size={18} color="#1e293b" />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>(407) 350-7019</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={12} /> HOME OFFICE
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#6db3bb'
      }}>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2rem',
          margin: 0,
          padding: 0,
          width: '100%',
          justifyContent: 'flex-start'
        }}>
          <li><Link href="/" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Home</Link></li>
          <li><Link href="/services" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Services</Link></li>
          <li><Link href="/about" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>About</Link></li>
          <li><Link href="/contact" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Contact</Link></li>
          <li><Link href="/booking" style={{ color: 'white', fontWeight: '500', textDecoration: 'none' }}>Book Now</Link></li>
        </ul>
        <Link href="/contact" style={{
          backgroundColor: '#f0d44d',
          color: '#1e293b',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: '600',
          whiteSpace: 'nowrap'
        }}>CONTACT US</Link>
      </nav>
    </header>
  )
}

export default Header