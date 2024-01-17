import React from 'react'
import Card from '../components/Card'
import Laptop from '../images/laptop.png'
import Editing from '../images/Editing.png'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className='h-5/6 py-10 bg-gradient-to-r from-slate-900 to-slate-950'>
        <div className="mx-10">
                    <motion.h1
                        initial = {{ opacity: 0 }}
                        whileInView={{ opacity: 100 }}
                        transition={{ delay: 0.3, ease: "easeIn" }}
                        viewport={{ once:true }}
                    className='text-header font-bold grid place-items-center my-10'>ABOUT</motion.h1>
                    <div className="flex gap-20 
                    md:grid md:gap-5 md:place-items-center
                    sm:grid sm:gap-5 sm:place-teims-center">
                            <motion.div className="w-full"
                                initial = {{ opacity: 0, y: -60 }}
                                whileInView={{ opacity: 100, y: 0 }}
                                transition={{ delay: 1, ease: "easeIn" }}
                                viewport={{ once:true }}
                            >
                                    <div className="grid place-items-center  w-full text-header h-full">
                                        <h1 className='text-8xl'>2</h1>
                                        <h2>Years</h2><br />
                                        <h2 className='web'>Web Development</h2><br />
                                        <h2>Experience</h2>
                                    </div>
                            </motion.div>
                        <div className="">
                            <motion.div className="text-2xl text-white my-5"
                                initial = {{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 100, x: 0 }}
                                transition={{ delay: 0.5, ease: "easeIn" }}
                                viewport={{ once:true }}
                            >
                            <p className='md:text-center sm:text-center'>I am Reuvin Hernandez, a web developer. I am passionate and dedicated to my profession, and I believe that I am equipped with the necessary skills and knowledge to make a successful project.</p>
                            </motion.div>
                            <motion.div className="flex justify-center gap-10"
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
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default About