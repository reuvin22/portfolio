import React from 'react'
import List from './List'
import List1 from './List1'
import List2 from './List2'
import { motion } from 'framer-motion'
import Findspot from '../images/findspot.png'
import Laravel from '../images/laravel.png'
import Mysql from '../images/mysql.png'
import ATS from '../images/ATS.png'
import PHP from '../images/php.png'
import Pawfect from '../images/PawfectShop.jpg'
import Trapinas from '../images/ladingPage.png'
import ReactP from '../images/react.png'
import ReactN from '../images/reactN.png'
import Firebase from '../images/firebase.png'
import CSS from '../images/css.png'
import DOST from '../images/DOST.png'
import Tailwind from '../images/tailwind.png'

function Projects() {
  return (
    <>
        <section id="proj" className='h-full w-screen my-10'>
            <motion.div className="project-container"
              initial = {{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ delay: 0.7, ease: "easeIn" }}
              viewport={{ once:true }}
            >
                <motion.div className="project-content"
                  initial = {{ opacity: 0 }}
                  whileInView={{ opacity: 100 }}
                  transition={{ delay: 0.3, ease: "easeIn" }}
                  viewport={{ once:true }}
                >
                    <h1 className='my-20'>Projects</h1>
                </motion.div>
                <div className="project-list-container">
                  <div className="project-list">
                    <List 
                      image = {Findspot}
                      title = "Find Spot API"
                      link = "https://github.com/reuvin22/FindSpot.git"
                      button= "Github"
                      prog1 = {Laravel}
                      prog2 = {Mysql}
                    />
                    <List1 
                      image = {ATS}
                      status = "Under Construction (Revision)"
                      title = "Alumni Tracking System"
                      link = "https://github.com/reuvin22/AlumniTrackingSystem.git"
                      button= "Github"
                      link2 = "https://atsdevs.org/Tracking/index.php"
                      button2 = "Live"
                      prog1 = {PHP}
                      prog2 = {Mysql}
                    />
                    <List2
                      image = {Pawfect}
                      title = "Pawfect Shop"
                      link = "/"
                      button= "Github"
                      prog1 = {Laravel}
                      prog2 = {Mysql}
                      prog3 = {ReactN}
                      prog4 = {Firebase}
                    />
                    <List1 
                      image = {Trapinas}
                      title = "TraPinas (Landing Page)"
                      link = "https://github.com/reuvin22/travel.git"
                      button= "Github"
                      link2 = "https://travel-zeta-smoky.vercel.app/"
                      button2="Live"
                      prog1 = {ReactP}
                      prog2 = {CSS}
                    />
                    <List2
                      image = {DOST}
                      title = "DOST Attendance Form"
                      link = "https://github.com/reuvin22/dostFe"
                      button= "Github"
                      prog1 = {Laravel}
                      prog2 = {Mysql}
                      prog3 = {ReactP}
                      prog4 = {Tailwind}
                    />
                  </div>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Projects