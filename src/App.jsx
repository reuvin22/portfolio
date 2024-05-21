import './design/style.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <div className='bg-gradient-to-r from-slate-900 to-slate-950 overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skills />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
