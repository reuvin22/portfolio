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
    <section id="hero">
        <motion.div className="navBar-container"
          initial = {{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
          whileInView={{opacity: 100}}
          viewport={{ once:true }}
        >
          <img src={NameLogo} alt="Name Logo" className='nameLogo'/>
          <img src={Burger} 
            alt="Burger Button" 
            className="burger"
            onClick={handleBurgerClick}/>
          <div className="navbar">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </motion.div>
        <motion.div className="openBurger" 
          style={{ display: burger ? 'block' : 'none'}} 
          initial = {{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          whileInView={{opacity: 100}}
          viewport={{ once:true }}
          >
            <img src={X} 
              alt="Close Burger" 
              className='x'
              onClick={handleCloseClick}/>
            <div className="navbarBurger">
              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </motion.div>
        <motion.div className="intro"
          initial={{ opacity:0, x:0 }}
          transition={{ duration: 0.8, ease: "easeIn"  }}
          whileInView={{opacity: 100, x: 100}}
          viewport={{ once:true }}
        >
          <h2>Hi, I'm <span>Reuvin Hernandez</span></h2><br />
          <h1>Web Developer</h1><br />
          <h3>Passionate web developer dedicated to creating exceptional digital experiences with expertise in front-end and back-end technologies.</h3><br />
          <motion.div className="buttons"
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 100 }}
            transition={{ delay: 1 }}
          >
            <a href={Cv}download="Reuvin H.pdf" target='__blank' rel="noopener noreferrer"><button>Download CV</button></a><button>Message Me</button>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero