import React from 'react'
import Card from '../components/Card'
import Laptop from '../images/laptop.png'
import Editing from '../images/Editing.png'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about">
        <motion.div className="about-container"
            initial = {{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ delay: 0.3, ease: "easeIn" }}
            viewport={{ once:true }}
        >
                    <h1>ABOUT</h1>
                    <motion.div className="about-exp"
                        initial = {{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 100, y: 0 }}
                        transition={{ delay: 1, ease: "easeIn" }}
                        viewport={{ once:true }}
                    >
                            <div className="year">
                                <h1>1</h1>
                                <h2>Year</h2><br />
                                <h2>Web Development</h2><br />
                                <h2>Experience</h2>
                            </div>
                    </motion.div>
                    <motion.div className="about-paragraph"
                        initial = {{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 100, x: 0 }}
                        transition={{ delay: 0.5, ease: "easeIn" }}
                        viewport={{ once:true }}
                    >
                    <p>I am Reuvin Hernandez, a web developer. I am passionate and dedicated to my profession, and I believe that I am equipped with the necessary skills and knowledge to make a successful project.</p>
                    </motion.div>
                    <motion.div className="cards"
                        initial = {{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 100, x: 0 }}
                        transition={{ delay: 0.5, ease: "easeIn" }}
                        viewport={{ once:true }}
                    >
                        <Card title="Web Development" 
                        logo={Laptop} 
                        descriptions="Turn your dream website into reality."/>
                        <Card title="Video Editing"
                        className="card2"
                        logo={Editing} 
                        descriptions="Makes your video ads looks stunning!"/>
                    </motion.div>
                </motion.div>
    </section>
  )
}

export default About