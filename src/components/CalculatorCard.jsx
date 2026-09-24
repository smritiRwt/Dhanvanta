import React from 'react'

export default function CalculatorCard({title,desc,children}){
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-600">{desc}</div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
