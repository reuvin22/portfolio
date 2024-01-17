import React from 'react'

export default function SkillCardFE(props) {
  return (
    <>
    <div className="bg-slate-800 h-64 rounded-xl w-96">
        <h1 className='text-center my-5'>{props.title}</h1>
        <div className='grid grid-cols-3 gap-y-5 place-items-center'>
            <img src={props.skill} alt="Skills" className='img'/>
            <img src={props.skill1} alt="Skills" className='img'/>
            <img src={props.skill2} alt="Skills" className='img'/>
            <img src={props.skill3} alt="Skills" className='img'/>
            <img src={props.skill4} alt="Skills" className='img'/>
            <img src={props.skill5} alt="Skills" className='img'/>
        </div>
    </div>
    </>
  )
}
