import React, {useState} from 'react'

function toNumber(v){ return Number(v)||0 }

export default function RetirementCalculator(){
  const [currentAge,setCurrentAge]=useState(30)
  const [retireAge,setRetireAge]=useState(60)
  const [monthlyExpense,setMonthlyExpense]=useState(40000)
  const [inflation,setInflation]=useState(6)
  const [annualReturn,setAnnualReturn]=useState(8)
  const [lifeExpectancy,setLifeExpectancy]=useState(85)

  const calc = ()=>{
    const yearsUntil = Math.max(0, toNumber(retireAge)-toNumber(currentAge))
    const yearsRetired = Math.max(0,toNumber(lifeExpectancy)-toNumber(retireAge))
    const expenseAtRetire = toNumber(monthlyExpense)*Math.pow(1+toNumber(inflation)/100, yearsUntil)
    const realReturn = (1+toNumber(annualReturn)/100)/(1+toNumber(inflation)/100)-1
    let corpus = 0
    if(realReturn>0){
      const r = realReturn
      const annuity = (1 - Math.pow(1+r, -yearsRetired))/r
      corpus = expenseAtRetire*12*annuity
    } else {
      corpus = expenseAtRetire*12*yearsRetired
    }
    // monthly investment to reach corpus assuming annualReturn
    const R = toNumber(annualReturn)/100/12
    const n = yearsUntil*12
    let monthlyInvestment = 0
    if(n>0){
      monthlyInvestment = (corpus * R) / (Math.pow(1+R,n)-1)
    }
    return {yearsUntil,expenseAtRetire,corpus,monthlyInvestment}
  }

  const {yearsUntil,expenseAtRetire,corpus,monthlyInvestment} = calc()

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">Retirement Corpus Calculator</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <label>
          <div className="text-sm">Current Age</div>
          <input type="number" min="18" value={currentAge} onChange={e=>setCurrentAge(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Retirement Age</div>
          <input type="number" min="40" value={retireAge} onChange={e=>setRetireAge(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Current Monthly Expenses (₹)</div>
          <input type="number" min="0" value={monthlyExpense} onChange={e=>setMonthlyExpense(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        <label>
          <div className="text-sm">Expected Inflation (%)</div>
          <input type="number" step="0.1" value={inflation} onChange={e=>setInflation(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Expected Annual Return (%)</div>
          <input type="number" step="0.1" value={annualReturn} onChange={e=>setAnnualReturn(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <div className="text-sm">Life Expectancy</div>
          <input type="number" value={lifeExpectancy} onChange={e=>setLifeExpectancy(e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </label>
      </div>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Years Until Retirement</div>
          <div className="text-lg font-semibold">{yearsUntil} years</div>
        </div>
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Estimated Monthly Expense at Retirement</div>
          <div className="text-lg font-semibold">₹ {Math.round(expenseAtRetire).toLocaleString()}</div>
        </div>
        <div className="p-4 bg-slate-50 rounded">
          <div className="text-sm text-slate-500">Required Retirement Corpus</div>
          <div className="text-lg font-semibold">₹ {Math.round(corpus).toLocaleString()}</div>
        </div>
      </div>

      <div className="mt-3 text-sm">Estimated Monthly Investment: <strong>₹ {Math.round(monthlyInvestment).toLocaleString()}</strong></div>
      <p className="mt-3 text-sm text-slate-500">Illustration only. Use as guidance; not financial advice.</p>
    </div>
  )
}
