import React from 'react'
import Link from 'next/link'
import { FileText, Briefcase, Calendar, Users, ClipboardCheck, TrendingUp, Star } from 'lucide-react'

export default function Home() {
  return (
    <main id="main-content" style={{ backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'url(/images/Wallpaper 4k.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }} aria-label="Hero section">
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(109, 179, 187, 1) 0%, rgba(240, 212, 77, 0.5) 100%)',
          zIndex: 1
        }} aria-hidden="true"></div>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '3rem', 
          alignItems: 'center', 
          position: 'relative', 
          zIndex: 2 
        }} className="hero-grid">
          {/* Text Content */}
          <div style={{ color: 'white', zIndex: 2 }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Organize First<br />
              Execute Second<br />
              Excel Last
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              lineHeight: '1.6',
              marginBottom: '2rem',
              opacity: 0.95,
              color: 'white'
            }}>
              Reliable Administrative Services, Business Management, and Event Coordination Transform Your Operations. With Locations Nationwide, We Are Your One-Stop Shop For Complete Business Solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <Link href="/booking" style={{
                backgroundColor: '#f0d44d',
                color: '#1e293b',
                padding: '1rem 2rem',
                borderRadius: '4px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
              }} aria-label="Book a consultation now">BOOK NOW</Link>
              <Link href="/contact" style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '4px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                border: '2px solid white'
              }} aria-label="Get a free quote">GET A FREE QUOTE</Link>
            </div>
            {/* Badges */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{
                backgroundColor: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <div style={{ color: '#f0d44d' }}>●</div>
                <span style={{ color: '#6db3bb', fontWeight: '600' }}>Same Day Service</span>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={20} fill="#f0d44d" color="#f0d44d" />
                  <span style={{ color: '#6db3bb', fontWeight: '700', fontSize: '1.1rem' }}>4.9 Stars</span>
                </div>
                <div style={{ color: '#64748b', fontSize: '0.875rem' }}>500 Reviews in Google</div>
              </div>
            </div>
          </div>

          {/* Right Column - Accent Graphic */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              border: '8px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}>
              <div style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                backgroundColor: 'rgba(240, 212, 77, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: '700',
                textAlign: 'center',
                padding: '2rem'
              }}>
                Professional<br/>Management<br/>Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '0rem 2rem 6rem 2rem', backgroundColor: '#f8fafc' }}>
        <div className="services-grid-container">
          <div className="services-grid">
            {[
              { icon: FileText, title: 'Administrative', color: '#64748b' },
              { icon: Briefcase, title: 'Business Management', color: '#6db3bb' },
              { icon: Calendar, title: 'Event Planning', color: '#6db3bb' },
              { icon: Users, title: 'HR Support', color: '#64748b' },
              { icon: ClipboardCheck, title: 'Project Management', color: '#64748b' },
              { icon: TrendingUp, title: 'Strategic Planning', color: '#64748b' }
            ].map((service, index) => {
              const Icon = service.icon
              const isHighlighted = service.title === 'Event Planning'
              return (
                <Link
                  key={index}
                  href="/services"
                  style={{
                    backgroundColor: isHighlighted ? service.color : 'white',
                    padding: '6rem 1.5rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    display: 'block'
                  }}
                  className="service-card-hover"
                >
                  <Icon 
                    size={48} 
                    color={isHighlighted ? 'white' : service.color}
                    style={{ marginBottom: '1rem' }}
                  />
                  <h3 style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: isHighlighted ? 'white' : '#1e293b',
                    margin: 0
                  }}>{service.title}</h3>
                  <div style={{
                    color: isHighlighted ? 'rgba(255,255,255,0.9)' : '#f0d44d',
                    fontSize: '0.875rem',
                    marginTop: '0.5rem',
                    fontWeight: '500'
                  }}>LEARN MORE</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing & Retainer Section */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#6db3bb',
              marginBottom: '1rem'
            }}>Pricing & Retainer Overview</h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto'
            }}>Flexible packages designed to meet your business needs</p>
          </div>

          {/* Hourly Rates */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#6db3bb',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>Hourly Rates (Starting)</h3>
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#6db3bb', marginBottom: '1rem' }}>Administrative Services</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#64748b' }}>Standard Rate:</span>
                    <span style={{ fontWeight: '700', color: '#f0d44d' }}>$35/hr</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Partner Rate:</span>
                    <span style={{ fontWeight: '700', color: '#6db3bb' }}>$30/hr</span>
                  </div>
                </div>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#6db3bb', marginBottom: '1rem' }}>Business Management & Support</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#64748b' }}>Standard Rate:</span>
                    <span style={{ fontWeight: '700', color: '#f0d44d' }}>$50/hr</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Partner Rate:</span>
                    <span style={{ fontWeight: '700', color: '#6db3bb' }}>$30/hr</span>
                  </div>
                </div>
                <div style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#6db3bb', marginBottom: '1rem' }}>Event & Project Coordination</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#64748b' }}>Standard Rate:</span>
                    <span style={{ fontWeight: '700', color: '#f0d44d' }}>$50/hr</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>Partner Rate:</span>
                    <span style={{ fontWeight: '700', color: '#6db3bb' }}>$30/hr</span>
                  </div>
                </div>
              </div>
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                backgroundColor: 'rgba(109, 179, 187, 0.1)',
                borderRadius: '8px',
                borderLeft: '4px solid #6db3bb'
              }}>
                <p style={{ fontSize: '0.9rem', color: '#1e293b', margin: 0 }}>
                  <strong>Partner Rate:</strong> Applies when the client provides a minimum of 4 paid cleaning contracts or closed referrals/month. Must be ongoing and active to remain eligible.
                </p>
              </div>
            </div>
          </div>

          {/* Retainer Packages */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#6db3bb',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>Retainer Packages (Starting)</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {/* Admin Support */}
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                padding: '2.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#6db3bb',
                  marginBottom: '1rem'
                }}>Admin Support</h4>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#f0d44d',
                  marginBottom: '1rem'
                }}>$750<span style={{ fontSize: '1rem', color: '#64748b' }}>/month</span></div>
                <p style={{
                  color: '#64748b',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>Dedicated monthly support with check-ins and task execution</p>
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: '#1e293b'
                }}>
                  <strong>Includes:</strong> 1 monthly check-in
                </div>
              </div>

              {/* Business Management - Featured */}
              <div style={{
                backgroundColor: '#6db3bb',
                borderRadius: '12px',
                padding: '2.5rem',
                boxShadow: '0 8px 24px rgba(109, 179, 187, 0.3)',
                border: '2px solid #6db3bb',
                transform: 'scale(1.05)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  backgroundColor: '#f0d44d',
                  color: '#1e293b',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>MOST POPULAR</div>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '1rem'
                }}>Business Management</h4>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '1rem'
                }}>$1,500<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>/month</span></div>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>Ongoing operations, planning, and team coordination</p>
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: 'white'
                }}>
                  <strong>Includes:</strong> Bi-weekly strategy or update meetings
                </div>
              </div>

              {/* Event/Project Coordination */}
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                padding: '2.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <h4 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#6db3bb',
                  marginBottom: '1rem'
                }}>Event/Project Coordination</h4>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#f0d44d',
                  marginBottom: '1rem'
                }}>$2,000<span style={{ fontSize: '1rem', color: '#64748b' }}>/month</span></div>
                <p style={{
                  color: '#64748b',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>Full event/project planning and logistics management</p>
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: '#1e293b'
                }}>
                  <strong>Includes:</strong> Weekly or as-needed coordination
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div style={{
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: '#6db3bb',
              marginBottom: '1rem'
            }}>Important Notes</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                padding: '0.75rem 0',
                color: '#1e293b',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#3b82f6', minWidth: '20px' }}>•</span>
                <span>Retainers are based on scope, value, and outcome—not hourly tracking</span>
              </li>
              <li style={{
                padding: '0.75rem 0',
                color: '#1e293b',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#3b82f6', minWidth: '20px' }}>•</span>
                <span>Additional projects outside regular scope are billed separately or at a discounted partner rate</span>
              </li>
              <li style={{
                padding: '0.75rem 0',
                color: '#1e293b',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem'
              }}>
                <span style={{ color: '#3b82f6', minWidth: '20px' }}>•</span>
                <span>All prices are subject to change based on project scope and requirements. Custom packages available upon request</span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contact" style={{
              backgroundColor: '#f0d44d',
              color: '#1e293b',
              padding: '1rem 3rem',
              borderRadius: '4px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(240, 212, 77, 0.3)',
              transition: 'all 0.3s ease'
            }}>GET A FREE QUOTE</Link>
          </div>
        </div>
      </section>
    </main>
  )
}