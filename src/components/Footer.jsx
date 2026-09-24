import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">Dhanvanta</div>
          <div className="text-sm text-muted mt-2">Practical guidance for building wealth through mutual funds, stocks, and smarter financial decisions.</div>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 text-sm text-muted">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Topics</div>
          <ul className="mt-2 text-sm text-muted">
            <li>Mutual Funds</li>
            <li>SIP</li>
            <li>Insurance</li>
            <li>Retirement</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-muted">© {new Date().getFullYear()} Dhanvanta. All rights reserved.</div>
      </div>
    </footer>
  )
}
