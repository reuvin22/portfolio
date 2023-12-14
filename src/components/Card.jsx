import React from 'react'

function Card(props) {
  return (
    <>
        <div className="card">
            <img src={props.logo} alt="Logo" className={props.class}/>
            <h2>{props.title}</h2>
            <p>{props.descriptions}</p>
        </div>
    </>
  )
}

export default Card