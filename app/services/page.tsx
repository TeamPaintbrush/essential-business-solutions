import React from 'react'
import Link from 'next/link'

export default function Services() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div className="card">
        <h1>Our Services</h1>
        <p>At Essential Business Solutions Services, we offer comprehensive solutions tailored to your unique business challenges.</p>
        
        <section style={{ marginTop: '2rem' }}>
          <h2>Administrative Services</h2>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>General Office Management:</strong> Organizing files, managing schedules, and streamlining office workflows.</li>
            <li><strong>Data Entry:</strong> Accurate input and organization of business data for easy access and analysis.</li>
            <li><strong>Customer Support:</strong> Responding to client inquiries and maintaining professional communication.</li>
            <li><strong>Human Resources Support:</strong> Assisting with employee onboarding, records management, and compliance.</li>
            <li><strong>Task Coordination:</strong> Assigning responsibilities, monitoring progress, and ensuring deadlines are met.</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Business Management and Support</h2>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>Operational Support:</strong> Improving daily workflows and ensuring effective business operations.</li>
            <li><strong>Strategic Planning:</strong> Partnering on long-term business goals, planning, and execution strategies.</li>
            <li><strong>Project Management:</strong> Managing small-scale projects from planning to completion with clear deliverables.</li>
            <li><strong>Financial Oversight:</strong> Tracking budgets, monitoring spending, and enhancing financial efficiency (in collaboration with your accountant).</li>
            <li><strong>Client Relations:</strong> Maintaining and strengthening professional relationships to support business growth.</li>
            <li><strong>HR and Team Support:</strong> Implementing systems for employee performance, training, and engagement.</li>
            <li><strong>Reporting and Documentation:</strong> Creating organized reports and maintaining essential business records.</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Event & Project Coordination</h2>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>Pre-Event Planning:</strong> Outlining event goals, logistics, and timelines to ensure smooth execution.</li>
            <li><strong>Budget Management:</strong> Creating, managing, and optimizing budgets to maximize resources.</li>
            <li><strong>Vendor and Supplier Management:</strong> Sourcing and coordinating vendors, contracts, and service logistics.</li>
            <li><strong>Event Program Development:</strong> Designing schedules, speaker lineups, and engaging programming for events.</li>
            <li><strong>Permits and Compliance:</strong> Securing necessary permits and ensuring all legal requirements are met.</li>
            <li><strong>Marketing and Promotion Coordination:</strong> Planning and executing strategies to promote and increase event attendance.</li>
            <li><strong>On-Site Event Coordination:</strong> Managing real-time logistics and ensuring seamless event execution.</li>
            <li><strong>Crisis Management:</strong> Preparing for and responding to unexpected challenges during events.</li>
            <li><strong>Post-Event Evaluation and Reporting:</strong> Reviewing outcomes, collecting feedback, and providing recommendations.</li>
          </ul>
        </section>

        <section style={{
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: '#f8fafc',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)'
        }}>
          <h3>Additional Services Available</h3>
          <p>Tailored solutions for unique business challenges and advanced planning available after consultation. Comprehensive reviews are conducted to determine specific needs and pricing adjustments.</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic' }}>Please note: All services require a signed service agreement prior to commencement.</p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/booking" className="btn">Schedule a Consultation</Link>
        </div>
      </div>
    </main>
  )
}