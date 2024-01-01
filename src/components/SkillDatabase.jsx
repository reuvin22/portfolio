import React from 'react'

export default function SkillDatabase(props) {
  return (
    <div className="skillCard">
        <h1>{props.title}</h1>
        <div className='skillset'>
            <img src={props.skill6} alt="Skills" className='imgSkill'/>
            <img src={props.skill7} alt="Skills" className='imgSkill'/>
        </div>
        <div className='skillset'>
          <img src={props.skill9} alt="Skills" className='imgSkill'/>
          <img src={props.skill8} alt="Skills" className='imgSkill'/>
        </div>
    </div>
  )
}
