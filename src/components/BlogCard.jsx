import React from 'react'
import {Link} from 'react-router-dom'
import {BookOpen, ShieldCheck} from 'lucide-react'

export default function BlogCard({post}){
  const Icon = post.category === 'Insurance' ? ShieldCheck : BookOpen

  return (
    <div className="card">
      <div className="blog-icon" aria-hidden="true"><Icon size={34} strokeWidth={2}/></div>
      <div className="text-sm text-slate-500">{post.category} • {post.minutes} min read</div>
      <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
      <p className="mt-2 text-slate-600">{post.content.substring(0,120)}...</p>
      <div className="mt-4">
        <Link to={`/blogs/${post.slug}`} className="text-accent">Read More →</Link>
      </div>
    </div>
  )
}
