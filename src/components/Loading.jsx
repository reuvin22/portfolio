import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
function Loading() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
      setTimeout(() => {
        navigate('/home')
      }, 3000)
        const ctx = gsap.timeline();
        ctx.from('#loading', {
          scale: 1.2,
          repeat: -1,
          yoyo: true,
        })
      return () => ctx.revert()
    }, [])
  return (
    <div className='absolute w-full h-full bg-slate-900 z-20 grid place-items-center overflow-hidden' id='load'>
          <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FLogo1.png?alt=media&token=f3e8428f-61f3-4cbc-9334-be41e1c498ea" alt="Loading" className='h-60 w-60 sm:w-40 sm:h-40 absolute' id='loading'/>
        </div>
  )
}

export default Loading