import React from 'react'
import SkillCardBE from './SkillCardBE'
import SkillCardFE from './SkillCardFE'
import SkillDatabase from './SkillDatabase'
import SkillCloud from './SkillCloud'

export default function Skills() {
  return (
    <>
        <section className='my-20 h-full w-screen'>
            <div className="mySkills">
                <div className='list'>
                    <h1 className='my-20 '>My Skills</h1>
                    <div className="grid grid-cols-2 gap-y-20 gap-x-20
                    sm:grid-cols-1 text-white text-3xl sm:gap-y-5 font-bold md:grid-cols-1"
                    >
                        <SkillCardFE />
                        <SkillCardBE />
                        <SkillDatabase />
                        <SkillCloud />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}