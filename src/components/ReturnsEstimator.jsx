import React, {useState} from 'react'
import {Calculator, TrendingUp} from 'lucide-react'
import {Link} from 'react-router-dom'

const formatRupees = value => `₹ ${Math.round(value).toLocaleString('en-IN')}`

export default function ReturnsEstimator(){
  const [mode,setMode]=useState('sip')
  const [amount,setAmount]=useState(25000)
  const [years,setYears]=useState(11)
  const [annualReturn,setAnnualReturn]=useState(12)
  const months=years*12
  const monthlyRate=annualReturn/100/12
  const invested=mode==='sip' ? amount*months : amount
  const futureValue=mode==='sip'
    ? amount*((Math.pow(1+monthlyRate,months)-1)/monthlyRate)
    : amount*Math.pow(1+annualReturn/100,years)
  const growth=Math.max(0,futureValue-invested)
  const investedShare=futureValue>0 ? Math.min(100,invested/futureValue*100) : 100

  return (
    <section className="returns-section" id="investments">
      <div className="returns-layout">
        <div className="returns-copy">
          <span className="eyebrow">A clearer view of tomorrow</span>
          <h2>Small steps can grow into something meaningful.</h2>
          <p>Explore an estimate for your investment goal. Adjust the amount, time horizon and expected return to see how the numbers change.</p>
          <div className="returns-note"><TrendingUp size={18}/><span>Illustrations are estimates, not guaranteed returns.</span></div>
        </div>
        <div className="estimator-panel">
          <div className="estimator-heading"><span className="estimator-icon"><Calculator size={20}/></span><div><strong>Returns estimator</strong><small>Build a view around your goal</small></div></div>
          <div className="estimator-tabs" role="group" aria-label="Investment type">
            <button type="button" className={mode==='sip' ? 'active' : ''} onClick={()=>setMode('sip')} aria-pressed={mode==='sip'}>SIP</button>
            <button type="button" className={mode==='lumpsum' ? 'active' : ''} onClick={()=>setMode('lumpsum')} aria-pressed={mode==='lumpsum'}>Lumpsum</button>
          </div>
          <label className="amount-field"><span>{mode==='sip' ? 'Monthly investment amount' : 'One-time investment amount'}</span><span className="amount-input"><b>₹</b><input type="number" min="500" step="500" value={amount} onChange={event=>setAmount(Math.max(500,Number(event.target.value)||500))} aria-label={mode==='sip' ? 'Monthly investment amount in rupees' : 'One-time investment amount in rupees'}/></span></label>
          <div className="estimator-control"><div className="control-label"><label htmlFor="investment-years">Investment duration</label><strong>{years} <small>years</small></strong></div><input id="investment-years" type="range" min="1" max="30" value={years} onChange={event=>setYears(Number(event.target.value))}/><div className="range-ends"><span>1 year</span><span>30 years</span></div></div>
          <div className="estimator-control"><div className="control-label"><label htmlFor="expected-return">Expected annual return</label><strong>{annualReturn}<small>%</small></strong></div><input id="expected-return" type="range" min="1" max="20" value={annualReturn} onChange={event=>setAnnualReturn(Number(event.target.value))}/><div className="range-ends"><span>1%</span><span>20%</span></div></div>
          <div className="estimate-result"><span>Estimated value after {years} years</span><strong>{formatRupees(futureValue)}</strong></div>
          <div className="estimate-breakdown"><div className="donut-chart" role="img" aria-label={`${Math.round(investedShare)} percent invested and ${Math.round(100-investedShare)} percent estimated growth`} style={{'--invested-share':`${investedShare}%`}}><span>Growth<br/>snapshot</span></div><div className="breakdown-legend"><p><i className="legend-invested"/>Amount invested<strong>{formatRupees(invested)}</strong></p><p><i className="legend-growth"/>Estimated growth<strong>{formatRupees(growth)}</strong></p></div></div>
          <Link to="/contact" className="estimator-cta">Discuss an investment plan <span aria-hidden="true">↗</span></Link>
          <small className="estimate-disclaimer">Illustrative calculation using monthly compounding. Actual investment outcomes may differ.</small>
          <Link to="/calculators" className="more-calculators-link">Explore retirement and education calculators <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}