import React from 'react'

function List1(props) {
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
            <h3>{props.status}</h3>
            <div className="btns">
                <a href={props.link}><button>{props.button}</button></a><a href={props.link2}><button>{props.button2}</button></a>
            </div>
        </div>
    </>
  )
}

export default List1