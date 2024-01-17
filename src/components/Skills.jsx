import React from 'react'
import PHP from '../images/php.png'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import JS from '../images/js.png'
import Reacts from '../images/react.png'
import ReactN from '../images/reactN.png'
import Laravel from '../images/laravel.png'
import SkillCardBE from './SkillCardBE'
import SkillCardFE from './SkillCardFE'
import SkillDatabase from './SkillDatabase'
import SkillCloud from './SkillCloud'
import Mysql from '../images/mysql.png'
import Mongo from '../images/mongo.png'
import Firebase from '../images/firebase.png'
import GraphQL from '../images/graphql.png'
import AWS from '../images/aws.png'
import Docker from '../images/docker.png'
import { motion } from 'framer-motion'
import Tailwind from '../images/tailwind.png'

export default function Skills() {
  return (
    <>
        <section className='my-20 h-full w-screen'>
            <div className="mySkills">
                <div className='list'>
                    <h1>My Skills</h1>
                    <motion.div className="grid grid-cols-2 gap-y-20 gap-x-20
                    sm:grid-cols-1 text-white text-3xl font-bold"
                        initial = {{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 100, x: 0 }}
                        transition={{ delay: 0.5, ease: "easeIn" }}
                        viewport={{ once:true }}
                    >
                        <SkillCardFE 
                            title="FrontEnd"
                            skill = {HTML}
                            skill1 = {CSS}
                            skill2 = {JS}
                            skill3 = {Reacts}
                            skill4 = {ReactN}
                            skill5 = {Tailwind}
                        />
                        <SkillCardBE 
                            title="BackEnd"
                            skill = {PHP}
                            skill2 = {Laravel}
                        />
                        <SkillDatabase 
                            title="Database"
                            skill6 = {Mysql}
                            skill7 = {Mongo}
                            skill8 = {Firebase}
                            skill9 = {GraphQL}
                        />
                        <SkillCloud 
                            title="Cloud & Container"
                            skill = {AWS}
                            skill2 = {Docker}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    </>
  )
}