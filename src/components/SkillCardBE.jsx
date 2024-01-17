import React from 'react'

export default function SkillCardBE(props) {
  return (
    <div className="bg-slate-800 h-52 rounded-xl w-96 h-64">
        <h1 className='text-center my-5'>{props.title}</h1>
        <div className='grid grid-cols-2 place-items-center'>
            <img src={props.skill} alt="Skills" className='smImg'/>
            <img src={props.skill2} alt="Skills" className='smImg'/>
        </div>
    </div>
  )
}
