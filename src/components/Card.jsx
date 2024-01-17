import React from 'react'

function Card(props) {
  return (
    <>
        <div className="card">
            <img src={props.logo} alt="Logo" className={props.class}/>
            <h2 className='text-center'>{props.title}</h2>
            <p className='text-center'>{props.descriptions}</p>
        </div>
    </>
  )
}

export default Card