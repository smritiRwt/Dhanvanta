import React from 'react'
import {blogs} from '../data/blogs'
import BlogCard from '../components/BlogCard'

export default function Blogs(){
  const beginners = blogs.filter(b=> b.category==='Beginners')
  const insurance = blogs.filter(b=> b.category==='Insurance')
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>

      <div>
        <h2 className="text-2xl font-semibold">A. For Beginners</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {beginners.map(b=> <BlogCard key={b.slug} post={b} />)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">B. For Insurance + Wealth Combo</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {insurance.map(b=> <BlogCard key={b.slug} post={b} />)}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">D. Tools that make your website viral</h2>
        <div className="mt-3 text-muted">Retirement Corpus Calculator · Child Education Goal Calculator · Wealth Creation Quiz</div>
      </div>
    </section>
  )
}
