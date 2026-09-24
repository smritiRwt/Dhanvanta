import React from 'react'
import RetirementCalculator from '../calculators/RetirementCalculator'
import EducationCalculator from '../calculators/EducationCalculator'
import WealthCalculator from '../calculators/WealthCalculator'

export default function Calculators(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Wealth Calculators</h1>
      <div id="retirement"><RetirementCalculator /></div>
      <div id="education"><EducationCalculator /></div>
      <div id="wealth"><WealthCalculator /></div>
    </section>
  )
}
