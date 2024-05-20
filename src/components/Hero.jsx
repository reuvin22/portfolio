import React, { useState, useLayoutEffect, useRef } from 'react'
import NameLogo from '../images/Logo1.png'
import Cv from './Hernandez.R.pdf'
import Burger from '../images/burger.png'
import X from '../images/x.png'
import gsap from 'gsap'

function Hero() {
  const comp = useRef(null)
  const [burger, setBurger] = useState(false);

  const handleBurgerClick = () => {
    setBurger(!burger);
  }
  const handleCloseClick  = () => {
    setBurger(false);
  }
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from('#developer', {
        yPercent: "30",
        color: "white",
        duration: 1.5,
        opacity: 0,
        delay: 1
      }).from(['#logo', '#nav'], {
        xPercent: "-100",
        color: "white",
        duration: 1.5,
        opacity: 0,
      }).from(['#intro1', '#intro2', '#intro3', '#intro4', '#intro5'], {
        xPercent: "-30",
        color: "white",
        duration: 0.8,
        opacity: 0,
        delay: 0.3
      })
    }, comp)
    return () => ctx.revert()
  })
  return (
    <>
    <section className='h-screen w-screen overflow-hidden' ref={comp}>
        <div className="flex place-content-between relative
        xl:mx-20 xl:my-5
        lg:mx-20 lg:my-5 
        md:mx-10 sm:mx-10"
        >
          <img src={NameLogo} alt="Name Logo" className='h-32 w-32 my-1 sm:h-28 sm:w-28' id='logo'/>
          <img src={Burger} 
            alt="Burger Button" 
            className="md:hidden lg:hidden xl:hidden
            sm:w-14 sm:h-14
            cursor-pointer 
            my-7"
            onClick={handleBurgerClick}/>
          <div className="flex gap-10 text-2xl place-items-center mx-10 sm:hidden" id='nav'>
            <a href="/" className='navLinks'>Home</a>
            <a href="#abouts" className='navLinks'>About</a>
            <a href="#proj" className='navLinks'>Projects</a>
            <a href="#contacts" className='navLinks'>Contact</a>
          </div>
        </div>
        <div className={`absolute h-96 w-screen bg-slate-900 mb-20 border-2 ${burger ? 'block' : 'hidden'}`} >
            <img src={X} 
              alt="Close Burger" 
              className='h-10 w-10 absolute right-0 mt-10 mr-10'
              onClick={handleCloseClick}/>
            <div className="grid place-items-center h-full mt-5 text-2xl">
              <a href="/" className='navLinks'>Home</a>
              <a href="#abouts" className='navLinks'>About</a>
              <a href="#proj" className='navLinks'>Projects</a>
              <a href="#contacts" className='navLinks'>Contact</a>
            </div>
          </div>
        <div className='w-11/15 grid place-items-center my-20' id='heroContainer'>
          <div>
            <span className='font-bold text-gray-800 text-[200px] z-0 absolute left-0 -rotate-12 sm:hidden md:hidden' id='developer'>DEVELOPER</span>
          </div>
            <div className="grid place-items-center h-96 w-full z-10">
              <h2 className='text-header text-3xl sm:text-center' id='intro1'>Hi, I'm <span className='text-blue-500 sm:text-3xl font-bold text-5xl' id='intro2'>Reuvin Hernandez</span></h2><br />
              <h1 className='font-bold text-center text-white text-8xl sm:text-4xl' id='intro3'>Web Developer</h1><br />
              <div className='w-[60%]'>
              <h3 className='text-p text-center' id='intro5'>Passionate web developer dedicated to creating exceptional digital experiences with expertise in front-end and back-end technologies.</h3><br /></div>
              <div className="flex gap-10" id='intro5'>
                <a href={Cv} download="Hernandez.R.pdf" target='__blank' rel="noopener noreferrer"><button className='button'>Download CV</button></a><a href="#contacts"><button className='button'>Message Me</button></a>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero