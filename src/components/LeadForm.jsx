import React, {useState} from 'react'
import {GOOGLE_SCRIPT_URL} from '../config/formConfig'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  product: '',
  message: ''
}

const products = [
  'Tax Planning',
  'Loans',
  'Health Insurance',
  'Life Insurance',
  'Investment Planning',
  'Insurance Planning',
  'Retirement Planning',
  'Child Education Planning',
  'SIP / Mutual Funds',
  'General Query'
]

function validateForm(form) {
  const errors = {}
  const phone = form.phone.replace(/[\s-]/g, '').replace(/^\+91/, '').replace(/^91(?=\d{10}$)/, '')

  if (!form.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!/^[6-9]\d{9}$/.test(phone)) errors.phone = 'Enter a valid 10-digit Indian phone number.'
  if (!form.product) errors.product = 'Please select a requirement.'

  return errors
}

export default function LeadForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const setField = (field, value) => {
    setForm(current => ({...current, [field]: value}))
    setErrors(current => ({...current, [field]: ''}))
    if (status !== 'idle') setStatus('idle')
  }

  const submit = async event => {
    event.preventDefault()
    const validationErrors = validateForm(form)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT')) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {'Content-Type': 'text/plain;charset=utf-8'},
        body: JSON.stringify(form),
        // Apps Script redirects its response to a Google-hosted URL. The browser
        // blocks reading that redirected response, even though the POST succeeds.
        mode: 'no-cors'
      })

      if (!response) throw new Error('Lead submission failed')

      setForm(initialForm)
      setErrors({})
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="lead-form-wrap">
      {status === 'success' && (
        <div className="form-status success-status" role="status">Thank you! Your enquiry has been submitted successfully. We will get back to you soon.</div>
      )}
      {status === 'error' && (
        <div className="form-status error-status" role="alert">Something went wrong. Please try again.</div>
      )}

      <form className="lead-form" onSubmit={submit} noValidate>
        <div className="form-field">
          <label htmlFor="fullName">Full Name <span>*</span></label>
          <input id="fullName" type="text" placeholder="Enter your full name" value={form.fullName} onChange={event => setField('fullName', event.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} />
          {errors.fullName && <small id="fullName-error" className="field-error">{errors.fullName}</small>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address <span>*</span></label>
          <input id="email" type="email" placeholder="Enter your email address" value={form.email} onChange={event => setField('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <small id="email-error" className="field-error">{errors.email}</small>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone Number <span>*</span></label>
          <input id="phone" type="tel" inputMode="numeric" placeholder="Enter your phone number" value={form.phone} onChange={event => setField('phone', event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />
          {errors.phone && <small id="phone-error" className="field-error">{errors.phone}</small>}
        </div>

        <div className="form-field">
          <label htmlFor="product">Product / Requirement <span>*</span></label>
          <select id="product" value={form.product} onChange={event => setField('product', event.target.value)} aria-invalid={Boolean(errors.product)} aria-describedby={errors.product ? 'product-error' : undefined}>
            <option value="">Select a requirement</option>
            {products.map(product => <option key={product} value={product}>{product}</option>)}
          </select>
          {errors.product && <small id="product-error" className="field-error">{errors.product}</small>}
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Tell us how we can help you..." value={form.message} onChange={event => setField('message', event.target.value)} />
        </div>

        <button className="cta submit-button" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
          {status !== 'submitting' && <span>↗</span>}
        </button>
        <p className="privacy-note">By submitting this form, you agree that we may use your contact details to respond to your enquiry.</p>
      </form>
    </div>
  )
}
