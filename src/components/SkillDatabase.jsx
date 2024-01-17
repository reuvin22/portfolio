import React from 'react'

export default function SkillDatabase(props) {
  return (
    <div className="bg-slate-800 h-64 w-96 rounded-xl">
        <h1 className='text-center'>{props.title}</h1>
        <div className='grid grid-cols-2 gap-y-5 place-items-center my-5'>
          <img src={props.skill6} alt="Skills" className='img'/>
          <img src={props.skill7} alt="Skills" className='img'/>
          <img src={props.skill9} alt="Skills" className='img'/>
          <img src={props.skill8} alt="Skills" className='img'/>
        </div>
    </div>
  )
}
