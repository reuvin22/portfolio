import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
function Projects() {
  const comp = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.timeline(() => {

    }, comp)

    return () => ctx.revert()
  })
  return (
    <>
        <section id="proj" className='h-full w-screen my-10'>
            
        </section>
    </>
  )
}

export default Projects