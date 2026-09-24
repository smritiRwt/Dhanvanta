import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {blogs} from '../data/blogs'
import Disclaimer from '../components/Disclaimer'

export default function BlogDetails(){
  const {slug} = useParams()
  const post = blogs.find(b=>b.slug===slug)
  if(!post) return <div className="p-8">Article not found</div>
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-sm text-slate-500">{post.category} • {post.minutes} min read</div>
      <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
      <p className="mt-4 text-slate-700">{post.content}</p>
      <div className="mt-6">
        <Disclaimer />
      </div>
      <div className="mt-6">
        <Link to="/calculators" className="text-accent">Use Calculator</Link>
      </div>
    </section>
  )
}
