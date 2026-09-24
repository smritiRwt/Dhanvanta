import React, {useState} from 'react'

function toNumber(v){ return Number(v)||0 }

export default function WealthCalculator(){
  const [initial,setInitial]=useState(100000)
  const [monthly,setMonthly]=useState(5000)
  const [years,setYears]=useState(10)
  const [annualReturn,setAnnualReturn]=useState(10)

  const calc = ()=>{
    const pv = toNumber(initial)
    const P = toNumber(monthly)
    const r = toNumber(annualReturn)/100/12
    const n = toNumber(years)*12
    let fv = pv * Math.pow(1+r,n)
    for(let i=0;i<n;i++){ fv += P * Math.pow(1+r, n-1-i) }
    const invested = pv + P*n
    const returns = fv - invested
    return {fv,invested,returns}
  }

  const {fv,invested,returns} = calc()

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">Wealth Creation Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <label>
          <div className="text-sm">Initial Investment (₹)</div>
          <input type="number" value={initial} onChange={e=>setInitial(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Monthly Investment (₹)</div>
          <input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Investment Period (Years)</div>
          <input type="number" value={years} onChange={e=>setYears(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Expected Annual Return (%)</div>
          <input type="number" value={annualReturn} onChange={e=>setAnnualReturn(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
      </div>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Total Amount Invested</div>
          <div className="text-lg font-semibold">₹ {Math.round(invested).toLocaleString()}</div>
        </div>
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Estimated Returns</div>
          <div className="text-lg font-semibold">₹ {Math.round(returns).toLocaleString()}</div>
        </div>
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Estimated Final Value</div>
          <div className="text-lg font-semibold">₹ {Math.round(fv).toLocaleString()}</div>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-500">Illustration only. Actual returns may vary.</p>
    </div>
  )
}
