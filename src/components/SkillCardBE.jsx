import React from 'react'

export default function SkillCardBE(props) {
  return (
    <div className="skillCard">
        <h1>{props.title}</h1>
        <div className='skillset'>
            <img src={props.skill} alt="Skills" className='imgSkill'/>
            <img src={props.skill2} alt="Skills" className='imgSkill'/>
        </div>
    </div>
  )
}
