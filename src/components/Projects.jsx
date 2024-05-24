import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import Sidebar from './Sidebar'
function Projects() {
  const [menu, setMenu] = useState('fullstack')

  const handleClick = (data) => {
    setMenu(data)
  }

  const fullstack = [{
    title: "Alumni Tracking System",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fats.png?alt=media&token=756ce7b1-2f60-4a3f-95ac-b980e12639c8",
    desc: "OJT Project",
    github: "",
    live: ""
  },{
    title: "Tourism Management System",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FtourismPic.png?alt=media&token=6bdb93ef-9eab-4862-84b9-6795600beab9",
    desc: "Freelancing Project",
    github: "",
    live: ""
  },{
    title: "Cite",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fcite3.png?alt=media&token=c4f51f6a-7b38-44dc-8005-69c6b6a1e86e",
    desc: "Freelancing Project",
    github: "",
    live: ""
  },
  {
    title: "DOST Attendance Form",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FDOST.png?alt=media&token=16a95feb-a89b-4357-b401-64466d728123",
    desc: "OJT Project",
    github: "",
    live: ""
  }]
  const api = [{
    title: "Findspot API",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ffindspot.png?alt=media&token=14850e1f-ab93-4d06-a85a-f414366e0a82",
    desc: "test test",
    github: "",
    live: ""
  },{
    title: "Camp Connection API",
    img: "",
    desc: "test test"
  },{
    title: "test",
    img: "",
    desc: "test test",
    github: "",
    live: ""
  }]

  const landingpage = [{
    title: "TraPinas",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FladingPage.png?alt=media&token=23b25346-6880-4e2d-a963-1344a99be50e",
    desc: "test test",
    github: "",
    live: ""
  },{
    title: "test",
    img: "",
    desc: "test test",
    github: "",
    live: ""
  },{
    title: "test",
    img: "",
    desc: "test test",
    github: "",
    live: ""
  }]

  const selectedProject = (id) => {
    console.log(id)
  }
  const renderContent = useMemo(() => {
    return (
      <div className='flex items-center justify-center gap-5'>
                {menu === 'fullstack' && (
                  fullstack.map((proj, index) => (
                    <div className='w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600' key={index}
                    onClick={() => selectedProject(index)}>
                      <h1 className='text-center'>{proj.title}</h1>
                      <img src={proj.img} alt="Photo" />
                      <p className='text-center'>{proj.desc}</p>
                      <div className='flex w-full justify-center items-center gap-5 mt-5'>
                        <a href={proj.github}><button className='bg-green-500 h-10 w-12 rounded-md'>Github</button></a>
                        <a href={proj.live}><button className='bg-green-500 h-10 w-12 rounded-md'>Live</button></a>
                      </div>
                    </div>
                  ))
                )}
                {menu === 'api' && (
                  api.map((proj, index) => (
                    <div className='w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600' key={index}
                    onClick={() => selectedProject(index)}>
                      <h1 className='text-center'>{proj.title}</h1>
                      <img src={proj.img} alt="Photo" />
                      <p className='text-center'>{proj.desc}</p>
                      <div className='flex w-full justify-center items-center gap-5 mt-5'>
                      <a href={proj.github}><button className='bg-green-500 h-10 w-12 rounded-md'>Github</button></a>
                        <a href={proj.live}><button className='bg-green-500 h-10 w-12 rounded-md'>Live</button></a>
                      </div>
                    </div>
                  ))
                )}
                {menu === 'landingpage' && (
                  landingpage.map((proj, index) => (
                    <div className='w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600' key={index}>
                      <h1 className='text-center'>{proj.title}</h1>
                      <img src={proj.img} alt="Photo" />
                      <p className='text-center'>{proj.desc}</p>
                      <div className='flex w-full justify-center items-center gap-5 mt-5'>
                      <a href={proj.github}><button className='bg-green-500 h-10 w-12 rounded-md'>Github</button></a>
                        <a href={proj.live}><button className='bg-green-500 h-10 w-12 rounded-md'>Live</button></a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )
  }, [menu])
  return (
    <>
        <section id="proj" className='w-screen'>
            <div className='w-screen h-[79vh] px-20 sm:px-10 md:px-10 sm:flex sm:justify-center sm:items-center py-10'>
              <div className='flex justify-center items-center w-full gap-10 mb-10'>
                  <span className='text-white cursor-pointer text-xl' onClick={() => handleClick('fullstack')}>Full Stack</span>
                  <span className='text-white cursor-pointer text-xl' onClick={() => handleClick('api')}>API</span>
                  <span className='text-white cursor-pointer text-xl' onClick={() => handleClick('landingpage')}>Landing Page</span>
              </div>
              {renderContent}
            </div>
        </section>
    </>
  )
}

export default Projects