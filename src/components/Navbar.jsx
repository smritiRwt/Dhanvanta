import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  return (
    <header className="site-header">
      <div className="announcement">Simple money decisions. Stronger financial futures.</div>
      <div className="nav-inner">
        <Link to="/" className="flex items-center gap-3">
          <div className="brand-mark">D</div>
          <div>
            <div className="brand-name">Dhanvanta</div>
            <div className="brand-subtitle">Investment Guidance</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#top" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Our Services</a>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/contact" className="ml-2 cta">Start Your Wealth Journey</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} aria-label="Toggle menu" className="menu-button">☰</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mobile-menu">
            <a href="#top" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#services" className="nav-link">Our Services</a>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/contact" className="mt-2 cta">Start Your Wealth Journey</Link>
          </div>
        </div>
      )}
    </header>
  )
}
