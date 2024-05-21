import React from 'react'
import Card from '../components/Card'
import { motion } from 'framer-motion'
import Sidebar from './Sidebar'

function About() {
  return (
    <section id="abouts" className='h-5/6 my-10 w-screen'>
        <Sidebar />
        <div className="mx-10">
                    <motion.h1
                        initial = {{ opacity: 0 }}
                        whileInView={{ opacity: 100 }}
                        transition={{ delay: 0.3, ease: "easeIn" }}
                        viewport={{ once:true }}
                    className='text-header font-bold grid place-items-center my-20'>ABOUT</motion.h1>
                    <div className="flex gap-20 
                    md:grid md:gap-5 md:place-items-center
                    sm:grid sm:gap-5 sm:place-teims-center">
                            <motion.div className="w-full"
                                initial = {{ opacity: 0, y: -60 }}
                                whileInView={{ opacity: 100, y: 0 }}
                                transition={{ delay: 1, ease: "easeIn" }}
                                viewport={{ once:true }}
                            >
                                    <div className="text-center w-full text-header h-full">
                                        <h1 className='text-8xl mb-5'>1</h1>
                                        <h2>Year</h2><br />
                                        <h2>Web Development</h2><br />
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
                            <motion.div className="flex justify-center items-center gap-10"
                                initial = {{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 100, x: 0 }}
                                transition={{ delay: 0.5, ease: "easeIn" }}
                                viewport={{ once:true }}
                            >
                                <Card title="Web Development" 
                                logo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Flaptop.png?alt=media&token=edc34cac-30a5-43b5-938b-3de6e6b931ae"
                                descriptions="Turn your dream website into reality."/>
                                <Card title="Video Editing"
                                className="card2"
                                logo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FEditing.png?alt=media&token=4e9577f4-4c79-4eca-88dc-491383b60da2"
                                descriptions="Make your video ads look stunning!"/>
                            </motion.div>
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default About