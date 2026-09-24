import React from 'react'
import {Link} from 'react-router-dom'

export default function Services(){
  return (
    <section className="services-page">
      <div className="services-intro">
        <span className="eyebrow">OUR SERVICES</span>
        <h1>Find the right plan based on your goals</h1>
        <p>Whether you want to protect your family, plan your taxes, arrange a loan, or prepare for retirement, we make the next step simple.</p>
        <Link to="/contact" className="cta">Start Tax Planning <span>↗</span></Link>
      </div>

      <div className="service-detail-grid">
        <article className="service-detail-card">
          <span className="service-index">01</span>
          <h2>Tax Planning</h2>
          <p>Plan your taxes with clarity and explore suitable options to build a tax-efficient future.</p>
          <h3>Create a tax-efficient retirement fund</h3>
          <Link to="/contact" className="text-link">Talk to us <span>↗</span></Link>
        </article>

        <article className="service-detail-card">
          <span className="service-index">02</span>
          <h2>Loans</h2>
          <p>Explore loan options for important personal, family, and business needs.</p>
          <ul className="service-list">
            <li>Personal Loan</li>
            <li>Home Loan</li>
            <li>Car Loan</li>
            <li>Loan Against Property</li>
            <li>Business Loan</li>
            <li>Loan Against Securities</li>
          </ul>
          <Link to="/contact" className="text-link">Discuss your requirement <span>↗</span></Link>
        </article>

        <article className="service-detail-card service-detail-card-wide">
          <span className="service-index">03</span>
          <h2>Health Insurance</h2>
          <p>In today’s world, the rising cost of medical care is an unavoidable reality. From doctor visits and lab tests to pharmacy bills, the total cost of treatment can become overwhelming. The right health insurance helps you prepare for these expenses.</p>
          <h3>Key benefits</h3>
          <ul className="service-list service-list-columns">
            <li>Hospitalisation and day-care treatment cover</li>
            <li>Unlimited reset of sum insured</li>
            <li>Cashless treatment at any hospital in India</li>
            <li>Up to 30% renewal discount for staying active</li>
            <li>100% sum insured increase every year, irrespective of claims</li>
            <li>Unlimited coverage for one claim of your choice during the policy lifetime</li>
            <li>AYUSH treatment covered up to the sum insured</li>
            <li>Pre- and post-hospitalisation expenses from 90 to 180 days</li>
            <li>Road and air ambulance covered up to the sum insured</li>
            <li>Customisable waiting periods</li>
            <li>Cashless OPD services with additional premium</li>
            <li>Cashless hospitalisation worldwide</li>
          </ul>
          <Link to="/contact" className="text-link">Explore health cover <span>↗</span></Link>
        </article>

        <article className="service-detail-card cashback-card">
          <span className="service-index">04</span>
          <h2>Policy Cashback</h2>
          <p>Get more value from your protection plans.</p>
          <div className="cashback-offers">
            <strong>Up to 10% <small>cashback</small></strong>
            <span>on life insurance policies</span>
            <strong>Up to 5% <small>cashback</small></strong>
            <span>on health insurance policies</span>
          </div>
          <Link to="/contact" className="text-link">Check eligibility <span>↗</span></Link>
        </article>
      </div>
    </section>
  )
}
