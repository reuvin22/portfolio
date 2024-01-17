import React from 'react'

export default function SkillCloud(props) {
  return (
    <div className="bg-slate-800 h-64 sm:w-96 rounded-xl">
        <h1 className='text-center my-5'>{props.title}</h1>
        <div className='flex justify-center align-items-center my-5'>
            <img src={props.skill} alt="Skills" className='smImg'/>
            <img src={props.skill2} alt="Skills" className='smImg'/>
        </div>
    </div>
  )
}
