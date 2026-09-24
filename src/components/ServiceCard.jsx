import React from 'react'

export default function ServiceCard({title,children}){
  return (
    <div className="principle-card">
      <div className="card-number">0{['Start Small', 'Beat Inflation', 'Financial Security', 'Financial Freedom'].indexOf(title) + 1}</div>
      <div className="principle-title">{title}</div>
      <div className="principle-copy">{children}</div>
      <div className="card-arrow">↗</div>
    </div>
  )
}
