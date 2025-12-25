'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'

interface BookingForm {
  name: string
  email: string
  phone: string
  service: string
  date: Date
  message: string
}

export default function Booking() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<BookingForm>()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Booking data:', data)
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form
    reset()
    setSelectedDate(null)
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>Book a Consultation</h1>
        <p>Schedule a consultation with our experts. Fill out the form below and we'll contact you to confirm your appointment.</p>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>
          <div className="form-group">
            <label htmlFor="name">Name: <span style={{ color: '#dc2626' }}>*</span></label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <span className="error" role="alert">{errors.name.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: <span style={{ color: '#dc2626' }}>*</span></label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <span className="error" role="alert">{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone: <span style={{ color: '#dc2626' }}>*</span></label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { 
                required: 'Phone is required',
                pattern: {
                  value: /^[\d\s\-\(\)]+$/,
                  message: 'Invalid phone number'
                }
              })}
              aria-required="true"
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && <span className="error" role="alert">{errors.phone.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="service">Service: <span style={{ color: '#dc2626' }}>*</span></label>
            <select
              id="service"
              {...register('service', { required: 'Please select a service' })}
              aria-required="true"
              aria-invalid={errors.service ? 'true' : 'false'}
            >
              <option value="">Select a service</option>
              <option value="administrative">Administrative Services</option>
              <option value="business-management">Business Management and Support</option>
              <option value="event-coordination">Event & Project Coordination</option>
              <option value="custom">Custom/Multiple Services</option>
            </select>
            {errors.service && <span className="error" role="alert">{errors.service.message}</span>}
          </div>
          <div className="form-group">
            <label>Preferred Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => {
                setSelectedDate(date)
                setValue('date', date!)
              }}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              placeholderText="Select a date"
              aria-label="Select preferred consultation date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Message:</label>
            <textarea
              id="message"
              {...register('message')}
              style={{ height: '100px' }}
              aria-label="Additional message or requirements"
            ></textarea>
          </div>
          <button type="submit" className="btn" disabled={isSubmitting} style={{
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            justifyContent: 'center',
            width: '100%'
          }}>
            {isSubmitting && <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />}
            {isSubmitting ? 'Submitting...' : 'Submit Booking'}
          </button>
          {submitStatus === 'success' && (
            <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '4px' }} role="alert">
              Booking request submitted successfully! We'll contact you soon to confirm your appointment.
            </div>
          )}
        </form>
      </div>
    </main>
  )
}