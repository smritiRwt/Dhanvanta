import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const navigation=[
  {label:'Home',to:'/#top'},
  {label:'About',to:'/#about'},
  {label:'Services',to:'/#services'},
  {label:'Tax Planning',to:'/#tax-planning'},
  {label:'Insurance',to:'/#health-insurance'},
  {label:'Loans',to:'/#loans'},
  {label:'Investments',to:'/#investments'},
  {label:'Calculators',to:'/#investments'}
]

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

        <nav className="desktop-nav hidden xl:flex items-center">
          {navigation.map(item=><Link key={item.label} to={item.to} className="nav-link">{item.label}</Link>)}
          <Link to="/contact" className="ml-2 cta">Get in touch</Link>
        </nav>

        <div className="xl:hidden">
          <button onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="menu-button">☰</button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden">
          <nav className="mobile-menu">
            {navigation.map(item=><Link key={item.label} to={item.to} className="nav-link" onClick={()=>setOpen(false)}>{item.label}</Link>)}
            <Link to="/contact" className="mt-2 cta" onClick={()=>setOpen(false)}>Get in touch</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
