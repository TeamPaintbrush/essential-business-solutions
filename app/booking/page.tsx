'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'

interface BookingForm {
  name: string
  email: string
  phone: string
  service: string
  date: Date
  message: string
}

export default function Booking() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<BookingForm>()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const onSubmit = (data: BookingForm) => {
    console.log('Booking data:', data)
    alert('Booking request submitted! We will contact you soon.')
    // Here you would typically send the data to a backend or email service
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>Book a Consultation</h1>
        <p>Schedule a consultation with our experts. Fill out the form below.</p>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'Phone is required' })}
            />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="service">Service:</label>
            <select
              id="service"
              {...register('service', { required: 'Please select a service' })}
            >
              <option value="">Select a service</option>
              <option value="administrative">Administrative Services</option>
              <option value="business-management">Business Management and Support</option>
              <option value="event-coordination">Event & Project Coordination</option>
              <option value="custom">Custom/Multiple Services</option>
            </select>
            {errors.service && <span className="error">{errors.service.message}</span>}
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Message:</label>
            <textarea
              id="message"
              {...register('message')}
              style={{ height: '100px' }}
            ></textarea>
          </div>
          <button type="submit" className="btn">Submit Booking</button>
        </form>
      </div>
    </main>
  )
}