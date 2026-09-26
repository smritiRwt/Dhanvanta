import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {ArrowRight,BriefcaseBusiness,Car,ChartNoAxesCombined,Check,Clock3,HeartPulse,House,Landmark,Percent,Plus,Shield,ShieldCheck,Stethoscope,WalletCards} from 'lucide-react'

const loanOptions=[
  {title:'Personal Loan',label:'PERSONAL NEEDS',description:'Explore flexible financing for planned expenses or an unexpected cost. Compare repayment terms before choosing an option.',fit:'Planned purchases, travel, or urgent expenses',icon:WalletCards},
  {title:'Home Loan',label:'HOME OWNERSHIP',description:'Explore financing for buying, building, or improving a home. Review the tenure and total repayment alongside the monthly instalment.',fit:'Buying, building, or improving a home',icon:House},
  {title:'Car Loan',label:'VEHICLE FINANCE',description:'Compare options for a new or pre-owned vehicle. Choose a repayment plan that leaves room in your monthly budget.',fit:'A new or pre-owned vehicle',icon:Car},
  {title:'Loan Against Property',label:'PROPERTY BACKED',description:'Learn how eligible property may be used to access financing. Understand the repayment commitment and collateral terms first.',fit:'Eligible property-backed borrowing',icon:Landmark},
  {title:'Business Loan',label:'BUSINESS FINANCE',description:'Explore financing for working capital, equipment, or expansion plans. Match the borrowing period to your business cash flow.',fit:'Working capital or business growth',icon:BriefcaseBusiness},
  {title:'Loans Against Securities',label:'PORTFOLIO BACKED',description:'Explore lending against eligible securities while understanding the associated risks. Eligibility and terms depend on the lender and asset.',fit:'Liquidity against eligible investments',icon:ChartNoAxesCombined}
]

const healthBenefits=[
  {title:'Hospitalisation & day care',description:'Cover for eligible hospital stays and day-care procedures.',icon:Stethoscope},
  {title:'Unlimited sum insured reset',description:'Restore your cover when you need it, subject to policy terms.',icon:Plus},
  {title:'Cashless care across India',description:'Cashless treatment at any hospital in India, as described in the policy.',icon:HeartPulse},
  {title:'AYUSH treatment',description:'Cover for eligible AYUSH treatment up to the sum insured.',icon:ShieldCheck},
  {title:'Worldwide cashless hospitalisation',description:'Access eligible cashless hospitalisation worldwide, subject to policy terms.',icon:Shield},
  {title:'Annual sum insured increase',description:'Sum insured can increase by 100% every year, irrespective of claims.',icon:ChartNoAxesCombined},
  {title:'One unlimited claim',description:'Unlimited cover for one claim of your choice during the policy lifetime.',icon:HeartPulse},
  {title:'Active renewal rewards',description:'Get up to 30% off renewals for staying active, subject to eligibility.',icon:Percent},
  {title:'Pre & post-hospitalisation',description:'Eligible expenses covered from 90 days before to 180 days after hospitalisation.',icon:Clock3},
  {title:'Road & air ambulance',description:'Ambulance cover up to the sum insured, as per policy terms.',icon:Car},
  {title:'Customisable waiting periods',description:'Choose from available waiting-period options to suit your needs.',icon:Clock3},
  {title:'Cashless OPD services',description:'Medicine orders and lab-test bookings are available for an additional premium.',icon:Stethoscope}
]

const goals=[
  {title:'Tax Planning',label:'PLAN AHEAD',description:'Bring tax decisions into your wider financial picture. Explore eligible choices with a qualified professional.',icon:Percent,href:'#tax-planning'},
  {title:'Retirement Planning',label:'FUTURE YOU',description:'Turn your retirement vision into a long-term savings target. Start with a monthly estimate and adjust it as life changes.',icon:Landmark,href:'/calculators#retirement'},
  {title:'Health Insurance',label:'PROTECT HEALTH',description:'Prepare for medical costs before they become a financial strain. Compare cover, benefits, and policy terms carefully.',icon:HeartPulse,href:'#health-insurance'},
  {title:'Life Insurance',label:'PROTECT FAMILY',description:'Consider how your family would manage financially if your income changed. Explore protection suited to your responsibilities.',icon:ShieldCheck,href:'#cashback'},
  {title:'Loans',label:'FUND A MILESTONE',description:'Borrowing can support a major goal when the terms fit your budget. Compare repayment costs before you commit.',icon:WalletCards,href:'#loans'},
  {title:'Investment Planning',label:'BUILD WEALTH',description:'Connect contributions to a goal, time horizon, and comfort with risk. See how regular investing could add up over time.',icon:ChartNoAxesCombined,href:'#investments'}
]

const products=[
  {title:'Health Insurance',label:'HEALTH & CARE',icon:HeartPulse,description:'Explore cover for hospital care and eligible treatment. Compare benefits and exclusions before choosing a policy.'},
  {title:'Car Insurance',label:'MOTOR COVER',icon:Car,description:'Review protection options for your car and everyday journeys. Check inclusions, exclusions, and claim support.'},
  {title:'Bike Insurance',label:'TWO-WHEELER COVER',icon:Car,description:'Find cover that fits how you ride and where you travel. Understand the policy benefits before renewing or buying.'},
  {title:'Life Insurance',label:'FAMILY PROTECTION',icon:ShieldCheck,description:'Explore ways to protect the people who depend on you. Compare cover amount, duration, and policy conditions.'}
]

export default function Services(){
  const [showAllBenefits,setShowAllBenefits]=useState(false)
  const visibleBenefits=showAllBenefits ? healthBenefits : healthBenefits.slice(0,6)

  return (
    <div className="services-experience" id="services">
      <section className="services-intro">
        <div className="services-intro-copy"><span className="eyebrow">A PLAN FOR WHAT MATTERS</span><h1>Find the Right Plan Based on Your Goals</h1><p>Make confident choices across protection, borrowing, and investing. Start with the goals that matter to you, then explore the options and details at your own pace.</p><a href="#tax-planning" className="cta">Start Tax Planning <ArrowRight size={17}/></a></div>
        <div className="intro-visual" aria-hidden="true"><div className="intro-orbit orbit-one"/><div className="intro-orbit orbit-two"/><div className="intro-visual-mark"><ChartNoAxesCombined size={43}/></div><div className="intro-visual-label"><span>YOUR NEXT CHAPTER</span><strong>Planned with purpose.</strong></div></div>
      </section>

      <section className="goal-section" aria-labelledby="goal-heading">
        <div className="section-heading"><div><span className="eyebrow">START WITH WHAT MATTERS TO YOU</span><h2 id="goal-heading">Plan Today. Build a Better Tomorrow.</h2></div><p>Choose financial products based on your personal goals. A thoughtful next step can make the bigger picture easier to navigate.</p></div>
        <div className="goal-grid">{goals.map(({title,label,description,icon:Icon,href})=><a className="goal-card" href={href} key={title}><span className="goal-icon"><Icon size={21}/></span><span className="goal-card-copy"><small className="goal-label">{label}</small><strong>{title}</strong><small className="goal-description">{description}</small></span><ArrowRight className="goal-arrow" size={17}/></a>)}</div>
      </section>

      <section className="product-section" aria-labelledby="product-heading">
        <div className="product-heading"><div><span className="eyebrow">COVER FOR EVERYDAY LIFE</span><h2 id="product-heading">Explore insurance products</h2><p>Find a starting point for the protection you need.</p></div><a href="#health-insurance" className="text-link">Explore cover <ArrowRight size={16}/></a></div>
        <div className="product-grid">{products.map(({title,label,icon:Icon,description})=><a className="product-card" href={title==='Health Insurance' ? '#health-insurance' : '#cashback'} key={title}><span className="product-card-arrow"><ArrowRight size={17}/></span><span className="product-art"><Icon size={37} strokeWidth={1.7}/></span><small className="product-label">{label}</small><strong>{title}</strong><small className="product-description">{description}</small></a>)}</div>
        <a className="more-products" href="#cashback">More protection options <ArrowRight size={17}/></a>
      </section>

      <section className="tax-section" id="tax-planning">
        <div className="tax-illustration" aria-hidden="true"><div className="tax-coin coin-a">₹</div><div className="tax-coin coin-b"><Percent size={22}/></div><div className="tax-document"><span/><span/><span/><strong><Check size={22}/></strong></div></div>
        <div className="tax-copy"><span className="eyebrow">TAX PLANNING</span><h2>Make your tax plan work towards tomorrow.</h2><p>Build tax decisions into your long-term plan instead of treating them as a once-a-year task. Review eligible options in the context of your income, goals, and applicable tax rules.</p><div className="tax-plan-note"><ShieldCheck size={19}/><span><strong>Create a tax-efficient retirement fund</strong><small>Explore eligible options with a qualified financial professional.</small></span></div><Link to="/contact" className="cta">Start Tax Planning <ArrowRight size={17}/></Link></div>
      </section>

      <section className="loans-section" id="loans">
        <div className="section-heading"><div><span className="eyebrow">FINANCING YOUR NEXT STEP</span><h2>Loans for life’s important plans</h2></div><p>Compare options thoughtfully and choose borrowing that fits your needs and repayment comfort.</p></div>
        <div className="loan-grid">{loanOptions.map(({title,label,description,fit,icon:Icon})=><article className="loan-card" key={title}><span className="loan-icon"><Icon size={22}/></span><span className="loan-label">{label}</span><h3>{title}</h3><p>{description}</p><div className="loan-fit"><small>COMMONLY USED FOR</small><span>{fit}</span></div><Link to="/contact" className="loan-link">Explore options <ArrowRight size={15}/></Link></article>)}</div>
      </section>

      <section className="health-section" id="health-insurance">
        <div className="health-intro"><div><span className="eyebrow">HEALTH INSURANCE</span><h2>Care for your health. Confidence for your finances.</h2></div><p>In today’s world, the rising costs of medical care are an unavoidable reality. From initial doctor visits to lab tests and pharmacy bills, the cumulative expenses of comprehensive treatment can become overwhelming.</p></div>
        <div className="benefit-group-label"><span>CARE & ACCESS</span><i/></div><div className="benefit-grid">{visibleBenefits.slice(0,5).map(({title,description,icon:Icon})=><article className="benefit-card" key={title}><span className="benefit-icon"><Icon size={20}/></span><h3>{title}</h3><p>{description}</p></article>)}</div>
        {visibleBenefits.length>5&&<><div className="benefit-group-label secondary-label"><span>MORE WAYS TO FEEL PREPARED</span><i/></div><div className="benefit-grid">{visibleBenefits.slice(5).map(({title,description,icon:Icon})=><article className="benefit-card" key={title}><span className="benefit-icon"><Icon size={20}/></span><h3>{title}</h3><p>{description}</p></article>)}</div></>}
        <div className="health-actions"><button type="button" className="view-benefits" onClick={()=>setShowAllBenefits(!showAllBenefits)} aria-expanded={showAllBenefits}>{showAllBenefits ? 'View fewer benefits' : 'View all benefits'}<Plus size={16} className={showAllBenefits ? 'rotated' : ''}/></button><Link to="/contact" className="cta">Explore Health Insurance <ArrowRight size={17}/></Link></div>
        <small className="policy-disclaimer">Benefits, discounts, limits and eligibility are subject to the insurer’s policy wording, underwriting and applicable terms and conditions.</small>
      </section>

      <section className="cashback-section" id="cashback">
        <div className="section-heading"><div><span className="eyebrow">A LITTLE EXTRA VALUE</span><h2>Protection, with a cashback benefit</h2></div><p>Explore eligible offers on selected policies and see whether they suit your plans.</p></div>
        <div className="cashback-grid"><article className="cashback-offer life-offer"><div className="cashback-offer-top"><span className="cashback-icon"><ShieldCheck size={22}/></span><span>01 / LIFE COVER</span></div><strong className="cashback-percent">10<sup>%</sup></strong><h3>Up to 10% Cashback</h3><p>On eligible life insurance policies. Review your cover needs and confirm offer details before you apply.</p><Link to="/contact" className="cashback-link">Check eligibility <ArrowRight size={16}/></Link><span className="offer-decoration" aria-hidden="true">✳</span></article><article className="cashback-offer health-offer"><div className="cashback-offer-top"><span className="cashback-icon"><HeartPulse size={22}/></span><span>02 / HEALTH COVER</span></div><strong className="cashback-percent">5<sup>%</sup></strong><h3>Up to 5% Cashback</h3><p>On eligible health insurance policies. Compare the benefits and policy terms alongside the offer.</p><Link to="/contact" className="cashback-link">Check eligibility <ArrowRight size={16}/></Link><span className="offer-decoration" aria-hidden="true">✳</span></article></div>
        <p className="cashback-disclaimer">Cashback is available only on eligible policies and is subject to applicable terms, conditions and insurer rules. Offer details may change.</p>
      </section>
    </div>
  )
}