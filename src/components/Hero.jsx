import React from 'react'
import {Link} from 'react-router-dom'

export default function Hero(){
  return (
    <section id="top" className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">BUILD WITH PURPOSE</span>
          <h1>Why Wealth Creation is Important for People in India</h1>
          <p>Building wealth is not only for the rich. With disciplined saving, smart investing, proper insurance, and long-term planning, every family can work towards financial freedom.</p>
          <div className="hero-actions">
            <Link to="/contact" className="cta">Start Planning <span>↗</span></Link>
            <a href="#why-wealth" className="hero-link">Explore the approach <span>→</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-glow" />
          <div className="chart-card">
            <div className="chart-top"><span>WEALTH GROWTH</span><strong>+24.8%</strong></div>
            <div className="chart-lines"><i /><i /><i /><i /><i /></div>
            <div className="chart-labels"><span>2020</span><span>2022</span><span>2024</span><span>2026</span></div>
          </div>
          <div className="art-badge"><span>₹</span><div><strong>Start small.</strong><small>Grow steadily.</small></div></div>
        </div>
      </div>
    </section>
  )
}
