import React from 'react'

function List(props) {
  return (
    <>
        <div className="projects">
          <div className="image-container">
            <img src={props.image} alt="Project Image"/>
          </div>
            <h1>{props.title}</h1>
            <a href={props.link}><button>{props.button}</button></a>
        </div>
    </>
  )
}

export default List