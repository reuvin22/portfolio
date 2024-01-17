import React, { useState } from 'react'
import NameLogo from '../images/Logo1.png'
import Cv from '../components/Reuvin H..pdf'
import Burger from '../images/burger.png'
import X from '../images/x.png'
import { motion } from 'framer-motion'

function Hero() {
  const [burger, setBurger] = useState(false);

  const handleBurgerClick = () => {
    setBurger(!burger);
  }
  const handleCloseClick  = () => {
    setBurger(false);
  }
  
  return (
    <>
    <section className='h-screen w-screen'>
        <motion.div className="flex place-content-between
        xl:mx-20 xl:my-5
        lg:mx-20 lg:my-5 
        md:mx-10 sm:mx-10"
          initial = {{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
          whileInView={{opacity: 100}}
          viewport={{ once:true }}
        >
          <img src={NameLogo} alt="Name Logo" className='h-32 w-32 my-1 sm:h-28 sm:w-28'/>
          <img src={Burger} 
            alt="Burger Button" 
            className="md:hidden lg:hidden xl:hidden
            sm:w-20 sm:h-20 
            cursor-pointer 
            my-5"
            onClick={handleBurgerClick}/>
          <div className="flex gap-10 text-2xl place-items-center mx-10 sm:hidden">
            <a href="/" className='navLinks'>Home</a>
            <a href="#abouts" className='navLinks'>About</a>
            <a href="#proj" className='navLinks'>Projects</a>
            <a href="#contacts" className='navLinks'>Contact</a>
          </div>
        </motion.div>
        <div className={`absolute h-96 w-screen bg-slate-900 mb-20 border-2 ${burger ? 'block' : 'hidden'}`} >
            <img src={X} 
              alt="Close Burger" 
              className='h-10 w-10 absolute ml-72 mt-5'
              onClick={handleCloseClick}/>
            <div className="grid place-items-center h-full mt-5 text-2xl">
              <a href="/" className='navLinks'>Home</a>
              <a href="#abouts" className='navLinks'>About</a>
              <a href="#proj" className='navLinks'>Projects</a>
              <a href="#contacts" className='navLinks'>Contact</a>
            </div>
          </div>
        <div className='w-11/15 grid place-items-center my-20'>
            <motion.div className="grid place-items-center h-96 w-2/3"
              initial={{ opacity:0, x:-60 }}
              transition={{ duration: 0.8, ease: "easeIn"  }}
              whileInView={{opacity: 100, x: 0}}
              viewport={{ once:true }}
            >
              <h2 className='text-header text-3xl'>Hi, I'm <span className='text-blue-500 sm:text-3xl'>Reuvin Hernandez</span></h2><br />
              <h1 className='text-title font-bold text-center'>Web Developer</h1><br />
              <h3 className='text-p text-center'>Passionate web developer dedicated to creating exceptional digital experiences with expertise in front-end and back-end technologies.</h3><br />
              <motion.div className="flex gap-10"
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 100 }}
                transition={{ delay: 1 }}
              >
                <a href={Cv}download="Reuvin H.pdf" target='__blank' rel="noopener noreferrer"><button className='button'>Download CV</button></a><a href="#contacts"><button className='button'>Message Me</button></a>
              </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero