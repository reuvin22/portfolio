import React from 'react'
import Card from '../components/Card'
import Laptop from '../images/laptop.png'
import Editing from '../images/Editing.png'

function About() {
  return (
    <section id="about">
        <div className="about-container">
            <div className="about-info">
                    <h1>ABOUT</h1>
                    <div className="about-paragraph">
                    <p>I am Reuvin Hernandez, a web developer. I am passionate and dedicated to my profession, and I believe that I am equipped with the necessary skills and knowledge to make a successful project.</p>
                    <div className="about-exp">
                        <h1>1</h1>
                        <div className="year">
                            <h2>Year</h2><br />
                            <h2>Web Development</h2><br />
                            <h2>Experience</h2>
                        </div>
                    </div>
                    <div className="cards">
                        <Card title="Web Development" 
                        logo={Laptop} 
                        descriptions="Turn your dream website come true."/>
                        <Card title="Video Editing" 
                        logo={Editing} 
                        descriptions="Turn your video ad looks stunning!"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About