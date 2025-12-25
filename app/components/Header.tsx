'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, MapPin, Menu, X, MessageSquare } from 'lucide-react'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header style={{ backgroundColor: 'white', position: 'relative' }}>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Top Bar with Phone Numbers */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <Link href="/" style={{ textDecoration: 'none' }} aria-label="Home">
            <img 
              src="/assets/LOGO_3.png" 
              alt="Essential Business Solutions Services - Administrative Services, Business Management, and Event Coordination" 
              style={{ height: '50px', width: 'auto' }} 
            />
          </Link>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }} className="contact-numbers">
            <a href="tel:8133730936" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: '#1e293b'
            }} aria-label="Call Tampa office at 813-373-0936">
              <div style={{
                backgroundColor: '#f0d44d',
                borderRadius: '50%',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} aria-hidden="true">
                <Phone size={18} color="#1e293b" />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: '700' }}>(813) 373-0936</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={10} aria-hidden="true" /> TAMPA
                </div>
              </div>
            </a>
            <a href="sms:8133730936" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              textDecoration: 'none',
              color: '#6db3bb',
              fontSize: '0.875rem'
            }} aria-label="Text Tampa office">
              <MessageSquare size={16} /> Text
            </a>
            <a href="tel:4073507019" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: '#1e293b'
            }} aria-label="Call home office at 407-350-7019">
              <div style={{
                backgroundColor: '#f0d44d',
                borderRadius: '50%',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} aria-hidden="true">
                <Phone size={18} color="#1e293b" />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: '700' }}>(407) 350-7019</div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <MapPin size={10} aria-hidden="true" /> HOME
                </div>
              </div>
            </a>
            <a href="sms:4073507019" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              textDecoration: 'none',
              color: '#6db3bb',
              fontSize: '0.875rem'
            }} aria-label="Text home office">
              <MessageSquare size={16} /> Text
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
        backgroundColor: '#6db3bb',
        position: 'relative'
      }} aria-label="Main navigation">
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <ul className="desktop-nav" style={{
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
        }} className="desktop-nav">CONTACT US</Link>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      
      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
          <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          <li><Link href="/booking" onClick={() => setMobileMenuOpen(false)}>Book Now</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header