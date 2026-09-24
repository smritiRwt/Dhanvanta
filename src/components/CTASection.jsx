import React from 'react'
import {Link} from 'react-router-dom'

export default function CTASection(){
  return (
    <div className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold">Your Wealth Journey Can Start Today</h3>
        <p className="mt-3">Start with knowledge. Build good financial habits. Plan for your future.</p>
        <div className="mt-6">
          <Link to="/calculators" className="bg-white text-primary px-5 py-3 rounded font-semibold">Explore Wealth Calculators</Link>
        </div>
      </div>
    </div>
  )
}
