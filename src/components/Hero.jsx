import React, { useState, useEffect, useRef } from 'react';
import Cv from './Hernandez.R.pdf'; 
import gsap from 'gsap';
import Sidebar from './Sidebar';

function Hero() {
  const comp = useRef(null);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 3000)
      const ctx = gsap.timeline();
      ctx.from('#loading', {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
      }).from('#welcome', {
        xPercent: '-100',
        delay: 0.5
      }).from('#developer', {
        yPercent: "30",
        color: "white",
        duration: 1.2,
        opacity: 0,
        delay: 2.1
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
      });
    
    // Clear the timeout when the component unmounts
    return () => ctx.revert()
  }, []);
  return (
    <>
      <section className='h-screen w-screen overflow-hidden' ref={comp}>
        <div className={loading ? 'absolute w-full h-full bg-slate-900 z-20 grid place-items-center overflow-hidden' : 'hidden'} id='load'>
          <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FLogo1.png?alt=media&token=f3e8428f-61f3-4cbc-9334-be41e1c498ea" alt="Loading" className='h-60 w-60 sm:w-40 sm:h-40 absolute' id='loading'/>
        </div>
        <div className='absolute w-full h-full bg-slate-900 z-20 place-items-center overflow-hidden hidden' id='welcome'>
          <h1>Welcome to my Portfolio</h1>
        </div>
        <Sidebar />
        <div className='w-11/15 grid place-items-center my-20' id='heroContainer'>
          <div>
            <span className='font-bold text-gray-800 text-[200px] z-0 absolute left-0 -rotate-12 sm:hidden md:hidden' id='developer'>DEVELOPER</span>
          </div>
            <div className="grid place-items-center h-96 w-full z-10">
              <h2 className='text-header text-3xl sm:text-center' id='intro1'>I'm <span className='text-blue-500 sm:text-3xl font-bold text-5xl' id='intro2'>Reuvin Hernandez</span></h2><br />
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

export default Hero;