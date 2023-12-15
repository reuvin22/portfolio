import React from 'react'
import Card from '../components/Card'
import Laptop from '../images/laptop.png'
import Editing from '../images/Editing.png'

function About() {
  return (
    <section id="about">
        <div className="about-container">
                    <h1>ABOUT</h1>
                    <div className="about-exp">
                            <div className="year">
                                <h1>1</h1>
                                <h2>Year</h2><br />
                                <h2>Web Development</h2><br />
                                <h2>Experience</h2>
                            </div>
                    </div>
                    <div className="about-paragraph">
                    <p>I am Reuvin Hernandez, a web developer. I am passionate and dedicated to my profession, and I believe that I am equipped with the necessary skills and knowledge to make a successful project.</p>
                    </div>
                    <div className="cards">
                        <Card title="Web Development" 
                        logo={Laptop} 
                        descriptions="Turn your dream website into reality."/>
                        <Card title="Video Editing"
                        className="card2"
                        logo={Editing} 
                        descriptions="Makes your video ads looks stunning!"/>
                    </div>
                </div>
    </section>
  )
}

export default About