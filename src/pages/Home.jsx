import React from 'react'
import Hero from '../components/Hero'
import ReturnsEstimator from '../components/ReturnsEstimator'
import {Landmark, ShieldCheck, Sparkles, TrendingUp} from 'lucide-react'
import Services from './Services'

export default function Home(){
  return (
    <div className="home-page single-page">
      <ReturnsEstimator />
      <section id="why-wealth" className="home-principles">
        <div className="section-heading">
          <span className="eyebrow">THE DHANVANTA WAY</span>
          <h2>Why Wealth Creation is Important</h2>
        </div>
        <div className="principles-grid detailed-principles">
          <article className="principle-card"><div className="card-icon" aria-hidden="true"><Sparkles size={34} strokeWidth={2}/></div><div className="card-number">01</div><h3>Start Small</h3><p>You don't need a large amount to begin. Consistency matters. Even a small monthly contribution can become meaningful when you give it time and keep investing regularly.</p><span className="card-arrow">↗</span></article>
          <article className="principle-card"><div className="card-icon" aria-hidden="true"><TrendingUp size={34} strokeWidth={2}/></div><div className="card-number">02</div><h3>Beat Inflation</h3><p>Understand inflation and plan long-term to protect purchasing power. Money kept idle may lose value, so thoughtful investing helps your future goals stay on track.</p><span className="card-arrow">↗</span></article>
          <article className="principle-card"><div className="card-icon" aria-hidden="true"><ShieldCheck size={34} strokeWidth={2}/></div><div className="card-number">03</div><h3>Financial Security</h3><p>Prepare for emergencies, family needs and retirement. A clear plan combines savings, protection and investments so one unexpected event does not derail your future.</p><span className="card-arrow">↗</span></article>
          <article className="principle-card"><div className="card-icon" aria-hidden="true"><Landmark size={34} strokeWidth={2}/></div><div className="card-number">04</div><h3>Financial Freedom</h3><p>Build a long-term plan aligned with your goals. Wealth is not just about earning more, it is about creating choices and confidence for the life you want.</p><span className="card-arrow">↗</span></article>
        </div>
      </section>
      <Hero />

      <section id="about" className="content-section about-section">
        <div className="section-kicker">OUR PURPOSE</div>
        <div className="split-content"><h2>Our Mission for Financial Freedom</h2><p>Our mission is to make investment guidance simple, practical, and accessible for every Indian family. We help you understand Mutual Funds, SIPs, stocks, and long-term wealth creation so you can make confident decisions and move closer to your financial goals.</p></div>
      </section>

      <Services />
    </div>
  )
}
