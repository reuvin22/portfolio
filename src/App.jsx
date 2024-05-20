import './design/style.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
function App() {
  return (
    <>
      <div className='bg-gradient-to-r from-slate-900 to-slate-950 overflow-x-hidden'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
