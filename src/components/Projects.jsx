import React from 'react'
import List from './List'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <>
        <section id="projects">
            <motion.div className="project-container"
              initial = {{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ delay: 0.3, ease: "easeIn" }}
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
                      image = ""
                      title = "My Project"
                      link = "/"
                    />
                    <List 
                      image = ""
                      title = "My Project"
                      link = "/"
                    />
                    <List 
                      image = ""
                      title = "My Project"
                      link = "/"
                    />
                    <List 
                      image = ""
                      title = "My Project"
                      link = "/"
                    />
                  </div>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Projects