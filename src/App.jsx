import './design/style.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import gsap from 'gsap'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from './components/Loading'
import Sidebar from './components/Sidebar'
function App() {
  const comp = useRef(null);
  
  useEffect(() => {
      const ctx = gsap.timeline();
      ctx.from('#developer', {
        yPercent: "30",
        color: "white",
        duration: 1.2,
        opacity: 0,
        delay: 0.5
      });
    return () => ctx.revert()
  }, []);
  return (
    <>
      <div className='bg-gradient-to-r from-slate-900 to-slate-950 overflow-x-hidden'>
      <Sidebar />
          <div>
            <span className='font-bold text-gray-800 text-[200px] z-0 absolute left-0 -rotate-12 sm:hidden md:hidden mt-20' id='developer'>DEVELOPER</span>
          </div>
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
