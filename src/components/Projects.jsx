import React from 'react'
import List from './List'
import { motion } from 'framer-motion'
import Findspot from '../images/findspot.png'
import Laravel from '../images/laravel.png'
import Mysql from '../images/mysql.png'
import ATS from '../images/ATS.png'
import PHP from '../images/php.png'

function Projects() {
  return (
    <>
        <section id="projects">
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
                    <h1>Projects</h1>
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
                    <List 
                      image = {ATS}
                      title = "Alumni Tracking System"
                      link = "https://atsdevs.org/ATS/index.php"
                      button= "Live"
                      prog1 = {PHP}
                      prog2 = {Mysql}
                    />
                    <List 
                      image = ""
                      title = "My Project"
                      link = "/"
                      button= "Live"
                    />
                    <List 
                      image = ""
                      title = "My Project"
                      link = "/"
                      button= "Live"
                    />
                  </div>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Projects