import React from 'react'

function List(props) {
  return (
    <>
        <div className="projects">
            <img src={props.image} alt="Project Image" />
            <h1>{props.title}</h1>
            <a href={props.link}><button>Live</button></a>
        </div>
    </>
  )
}

export default List