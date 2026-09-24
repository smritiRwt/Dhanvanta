import React from 'react'
import LeadForm from '../components/LeadForm'

export default function Contact(){
  return (
    <section className="contact-page">
      <div className="contact-layout">
        <div className="contact-intro">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>Let's Start Your Wealth Journey</h1>
          <p>Have questions about investments, insurance, retirement planning, or your financial goals? Send us an enquiry and our team can get back to you.</p>
          <div className="contact-topics">
            <div><span>01</span>Investment Planning</div>
            <div><span>02</span>Insurance Planning</div>
            <div><span>03</span>Retirement Planning</div>
            <div><span>04</span>Child Education Planning</div>
          </div>
        </div>
        <div className="contact-form-panel">
          <div className="form-panel-heading"><span>YOUR DETAILS</span><small>* Required fields</small></div>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
