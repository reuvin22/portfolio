import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import Sidebar from './Sidebar'
function Projects() {
  const [menu, setMenu] = useState('fullstack')
  const [skillPage, setSkillPage] = useState(0)
  const handleClick = (data) => {
    setMenu(data)
    setSkillPage(0)
  }

  const handleNextPage = () => {
    setSkillPage(skillPage + 1)
  }

  const handlePrevPage = () => {
    setSkillPage(skillPage - 1)
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

  console.log(fullstack.length)
  console.log(skillPage)
  return (
    <>
        <section id="proj" className='w-screen'>
            <div className='w-screen grid h-[79vh] px-20 sm:px-10 md:px-10 sm:grid sm:justify-center sm:items-center py-10'>
              <div className='flex justify-center items-center w-full gap-10'>
                  <button className='text-white cursor-pointer text-xl' onClick={() => handleClick('fullstack')}>Full Stack</button>
                  <button className='text-white cursor-pointer text-xl' onClick={() => handleClick('api')}>API</button>
                  <button className='text-white cursor-pointer text-xl' onClick={() => handleClick('landingpage')}>Landing Page</button>
              </div>
              <div className='flex items-center justify-center gap-5 sm:grid'>
                {menu === 'fullstack' && (
                  fullstack.map((proj, index) => (
                    <div className='w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600 sm:hidden md:hidden' key={index}
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
                {menu === 'fullstack' && (
                <div className='flex relative justify-center items-center gap-5 lg:hidden xl:hidden'>
                  <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === 0 ? 'hidden' : `h-12 w-12 cursor-pointer rotate-180 absolute ml-[-120%] `} onClick={() => handlePrevPage()}/>
                  {menu === 'fullstack' && (
                    <div className='max-w-60 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600 sm:h-96 '
                    >
                      <h1 className='text-center sm:py-3 sm:text-xl'>{fullstack[skillPage]?.title}</h1>
                      <img src={fullstack[skillPage]?.img} alt="Photo" />
                      <p className='text-center sm:py-3 sm:text-xl'>{fullstack[skillPage]?.desc}</p>
                      <div className='flex w-full justify-center items-center gap-5 mt-5'>
                        <a href={fullstack[skillPage]?.github}><button className='bg-green-500 h-10 w-12 rounded-md sm:w-20'>Github</button></a>
                        <a href={fullstack[skillPage]?.live}><button className='bg-green-500 h-10 w-12 rounded-md sm:w-20'>Live</button></a>
                      </div>
                    </div>
                  )}
                  <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === fullstack.length ? 'hidden' : `h-12 w-12 cursor-pointer absolute mr-[-120%]`} onClick={() => handleNextPage()}/>
                </div>
                )}
                {menu === 'api' && (
                  api.map((proj, index) => (
                    <div className='w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600 sm:hidden md:hidden' key={index}
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
                <div className='flex relative justify-center items-center gap-5 lg:hidden xl:hidden'>
                  <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === 0 ? 'hidden' : `h-12 w-12 cursor-pointer rotate-180 absolute ml-[-120%] `} onClick={() => handlePrevPage()}/>
                  {menu === 'api' && (
                    <div className='max-w-60 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600 sm:h-96 '
                    >
                      <h1 className='text-center sm:py-3 sm:text-xl'>{api[skillPage]?.title}</h1>
                      <img src={api[skillPage]?.img} alt="Photo" />
                      <p className='text-center sm:py-3 sm:text-xl'>{api[skillPage]?.desc}</p>
                      <div className='flex w-full justify-center items-center gap-5 mt-5'>
                        <a href={api[skillPage]?.github}><button className='bg-green-500 h-10 w-12 rounded-md sm:w-20'>Github</button></a>
                        <a href={api[skillPage]?.live}><button className='bg-green-500 h-10 w-12 rounded-md sm:w-20'>Live</button></a>
                      </div>
                    </div>
                  )}
                  <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === api.length ? 'hidden' : `h-12 w-12 cursor-pointer absolute mr-[-120%]`} onClick={() => handleNextPage()}/>
                </div>
                )}
                {menu === 'landingpage' && (
                  landingpage.map((proj, index) => (
                    <div className='w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600 sm:hidden md:hidden' key={index}
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
                <div className='flex relative justify-center items-center gap-5 lg:hidden xl:hidden'>
                  <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === 0 ? 'hidden' : `h-12 w-12 cursor-pointer rotate-180 absolute ml-[-120%] `} onClick={() => handlePrevPage()}/>
                  {menu === 'landingpage' && (
                    <div className='max-w-60 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer hover:bg-fuchsia-600 sm:h-96 '
                    >
                      <h1 className='text-center sm:py-3 sm:text-xl'>{landingpage[skillPage]?.title}</h1>
                      <img src={landingpage[skillPage]?.img} alt="Photo" />
                      <p className='text-center sm:py-3 sm:text-xl'>{landingpage[skillPage]?.desc}</p>
                      <div className='flex w-full justify-center items-center gap-5 mt-5'>
                        <a href={landingpage[skillPage]?.github}><button className='bg-green-500 h-10 w-12 rounded-md sm:w-20'>Github</button></a>
                        <a href={landingpage[skillPage]?.live}><button className='bg-green-500 h-10 w-12 rounded-md sm:w-20'>Live</button></a>
                      </div>
                    </div>
                  )}
                  <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === landingpage.length ? 'hidden' : `h-12 w-12 cursor-pointer absolute mr-[-120%]`} onClick={() => handleNextPage()}/>
                </div>
                )}
              </div>
            </div>
        </section>
    </>
  )
}

export default Projects