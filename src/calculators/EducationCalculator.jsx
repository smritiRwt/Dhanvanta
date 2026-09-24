import React, {useState} from 'react'

function toNumber(v){ return Number(v)||0 }

export default function EducationCalculator(){
  const [childAge,setChildAge]=useState(5)
  const [startAge,setStartAge]=useState(18)
  const [currentCost,setCurrentCost]=useState(200000)
  const [inflation,setInflation]=useState(6)
  const [returnRate,setReturnRate]=useState(8)

  const calc = ()=>{
    const years = Math.max(0, toNumber(startAge)-toNumber(childAge))
    const futureCost = toNumber(currentCost)*Math.pow(1+toNumber(inflation)/100, years)
    const R = toNumber(returnRate)/100/12
    const n = years*12
    let monthly = 0
    if(n>0){
      monthly = (futureCost * R) / (Math.pow(1+R,n)-1)
    }
    return {years,futureCost,monthly}
  }

  const {years,futureCost,monthly} = calc()

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">Child Education Goal Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <label>
          <div className="text-sm">Child's Current Age</div>
          <input type="number" min="0" value={childAge} onChange={e=>setChildAge(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Education Start Age</div>
          <input type="number" min="0" value={startAge} onChange={e=>setStartAge(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Current Education Cost (₹)</div>
          <input type="number" min="0" value={currentCost} onChange={e=>setCurrentCost(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        <label>
          <div className="text-sm">Expected Education Inflation (%)</div>
          <input type="number" step="0.1" value={inflation} onChange={e=>setInflation(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Expected Investment Return (%)</div>
          <input type="number" step="0.1" value={returnRate} onChange={e=>setReturnRate(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
      </div>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Years Remaining</div>
          <div className="text-lg font-semibold">{years} years</div>
        </div>
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Estimated Future Education Cost</div>
          <div className="text-lg font-semibold">₹ {Math.round(futureCost).toLocaleString()}</div>
        </div>
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Estimated Monthly Investment</div>
          <div className="text-lg font-semibold">₹ {Math.round(monthly).toLocaleString()}</div>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-500">Illustration only. Use for planning purposes.</p>
    </div>
  )
}
