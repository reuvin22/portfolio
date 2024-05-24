import React, { useState, useEffect, useRef } from 'react';
import Cv from './Hernandez.R.pdf'; 
import gsap from 'gsap';
import Sidebar from './Sidebar';
import { ScrollTrigger } from 'gsap/src/all';

function Hero() {
  const comp = useRef(null);
  
  useEffect(() => {
      const ctx = gsap.timeline();
      ctx.from(['#logo', '#nav'], {
        xPercent: "-100",
        color: "white",
        duration: 1.5,
        opacity: 0,
      }).from(['#intro1', '#intro2', '#intro3', '#intro4', '#intro5'], {
        xPercent: "-30",
        color: "white",
        duration: 0.8,
        opacity: 0,
        delay: 0.2
      });
    return () => ctx.revert()
  }, []);
  return (
    <>
      <section id="home" className='h-screen w-screen overflow-hidden sm:mt-20' ref={comp}>
        <div className='w-11/15 grid place-items-center my-20' id='heroContainer'>
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