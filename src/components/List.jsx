import React from 'react'

function List(props) {
  return (
    <>
        <div className="projects">
          <div className="image-container">
            <img src={props.image} alt="Project Image"/>
          </div>
          <div className="techTools">
            <img src={props.prog1} alt="Tech Tools" />
            <img src={props.prog2} alt="Tech Tools" />
          </div>
            <h1>{props.title}</h1>
            <a href={props.link}><button>{props.button}</button></a>
        </div>
    </>
  )
}

export default List