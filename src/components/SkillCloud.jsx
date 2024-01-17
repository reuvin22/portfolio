import React from 'react'

export default function SkillCloud(props) {
  return (
    <div className="bg-slate-800 h-56 sm:w-96 rounded-xl">
        <h1 className='text-center'>{props.title}</h1>
        <div className='grid grid-cols-2 place-items-center my-5'>
            <img src={props.skill} alt="Skills" className='smImg'/>
            <img src={props.skill2} alt="Skills" className='smImg'/>
        </div>
    </div>
  )
}
