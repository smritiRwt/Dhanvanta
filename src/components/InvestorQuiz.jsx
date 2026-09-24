import React, {useState} from 'react'

const questions = [
  {q:'How long do you plan to invest?', key:'q1', options:['Less than 3 years','3–5 years','5–10 years','More than 10 years']},
  {q:'What is your primary financial goal?', key:'q2', options:['Short-term saving','Buying a home','Child education','Retirement','Long-term wealth creation']},
  {q:'How would you react if your investment fell 15%?', key:'q3', options:['Withdraw','Wait and monitor','Continue investing','Invest more']},
  {q:'Do you maintain an emergency fund?', key:'q4', options:['Yes','No','Currently building one']},
  {q:'How familiar are you with investments?', key:'q5', options:['Beginner','Basic knowledge','Intermediate','Experienced']}
]

export default function InvestorQuiz(){
  const [answers,setAnswers]=useState({})
  const [result,setResult]=useState(null)

  const setAns=(k,v)=> setAnswers(a=>({...a,[k]:v}))

  const scoreProfile = ()=>{
    let score=0
    if(answers.q1==='More than 10 years') score+=2
    if(answers.q3==='Invest more'||answers.q3==='Continue investing') score+=2
    if(answers.q5==='Experienced'||answers.q5==='Intermediate') score+=1
    if(answers.q4==='Yes') score+=1
    if(score>=4) return 'Growth-Oriented Approach'
    if(score>=2) return 'Balanced Approach'
    return 'Conservative Approach'
  }

  const submit = (e)=>{ e.preventDefault(); setResult(scoreProfile()) }

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">What Type of Investor Are You?</h3>
      <form onSubmit={submit} className="space-y-4">
        {questions.map(q=> (
          <div key={q.key}>
            <div className="font-medium">{q.q}</div>
            <div className="mt-2 grid sm:grid-cols-2 gap-2">
              {q.options.map(o=> (
                <label key={o} className="p-2 border rounded cursor-pointer">
                  <input type="radio" name={q.key} onChange={()=>setAns(q.key,o)} className="mr-2" /> {o}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="flex gap-3">
          <button className="cta" type="submit">See My Profile</button>
          <button type="button" onClick={()=>{setAnswers({}); setResult(null)}} className="px-4 py-2 border rounded">Reset</button>
        </div>
      </form>
      {result && (
        <div className="mt-4 p-3 bg-slate-50 rounded">
          <div className="font-semibold">Your Educational Profile</div>
          <div className="mt-2">{result}</div>
          <div className="mt-2 text-sm text-slate-600">This is educational only and not personalised financial advice.</div>
        </div>
      )}
    </div>
  )
}
