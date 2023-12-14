import React from 'react'
import List from './List'

function Projects() {
  return (
    <>
        <section id="projects">
            <div className="project-container">
                <div className="project-content">
                    <h1>Projects</h1>
                </div>
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
            </div>
        </section>
    </>
  )
}

export default Projects