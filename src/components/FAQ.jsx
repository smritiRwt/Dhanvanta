import React from 'react'

export default function FAQ(){
  const faqs = [
    {q:'Can I start investing with ₹500 per month?', a:'Yes — some products and mutual funds allow small SIPs. Check product minimums.'},
    {q:'What is a SIP?', a:'SIP (Systematic Investment Plan) allows regular monthly investments into mutual funds, benefiting from rupee-cost averaging and compounding.'},
    {q:'Is mutual fund investment risk-free?', a:'No. Mutual funds invest in markets and carry risk; past returns do not guarantee future results.'},
    {q:'Is term insurance an investment?', a:'Term insurance is primarily risk protection. It is not an investment vehicle.'},
    {q:'How much should I save for retirement?', a:'It depends on your expenses, inflation, retirement age, and other factors. Use the retirement calculator as a guide.'}
  ]
  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      <div className="grid gap-3">
        {faqs.map((f,i)=> (
          <div key={i} className="p-3 bg-slate-50 rounded">
            <div className="font-medium">{f.q}</div>
            <div className="text-sm text-slate-600">{f.a}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
