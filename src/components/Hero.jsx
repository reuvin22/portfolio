import React from 'react'
import NameLogo from '../images/Logo1.png'
import Cv from '../components/Reuvin H..pdf'

function Hero() {
  return (
    <>
      <div className="navBar-container">
        <img src={NameLogo} alt="nameLogo" />
        <div className="navbar">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </div>

      <div className="intro">
        <h2>Hi, I'm <span>Reuvin Hernandez</span></h2><br />
        <h1>Web Developer</h1><br />
        <h3>Passionate web developer dedicated to creating exceptional digital experiences with expertise in front-end and back-end technologies.</h3><br />
        <div className="buttons">
          <a href={Cv}download="Reuvin H.pdf" target='__blank' rel="noopener noreferrer"><button>Download CV</button></a><button>Message Me</button>
        </div>
      </div>
    </>
  )
}

export default Hero