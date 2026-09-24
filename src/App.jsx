import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Calculators from './pages/Calculators'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/calculators/*" element={<Calculators/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blogs/:slug" element={<BlogDetails/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
