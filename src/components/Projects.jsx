import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
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
    account: "email: test123@gmail.com, password: test123",
    github: "https://github.com/reuvin22/atsfe",
    live: "https://atsfe-reuvin22s-projects.vercel.app/"
  },{
    title: "Tourism Management System",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FtourismPic.png?alt=media&token=6bdb93ef-9eab-4862-84b9-6795600beab9",
    desc: "Freelancing Project (Just Click Login)",
    github: "https://github.com/reuvin22/tourismlaguna",
    live: "https://tourismlaguna.vercel.app",
    message: "Under Revision"
  },{
    title: "Cite",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fcite3.png?alt=media&token=c4f51f6a-7b38-44dc-8005-69c6b6a1e86e",
    desc: "Freelancing Project",
    github: "",
    live: "",
    message: "Not Available (Under Revision)"
  },
  {
    title: "DOST Attendance Form",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FDOST.png?alt=media&token=16a95feb-a89b-4357-b401-64466d728123",
    desc: "OJT Project",
    account: "email: admin123@gmail.com, password: 123123123",
    github: "https://github.com/reuvin22/dostFe",
    live: "https://dost-fe-reuvin22s-projects.vercel.app/",
  }]
  const api = [{
    title: "Findspot API",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ffindspot%20(1)%20(1).png?alt=media&token=ea4d5204-e514-485b-9bf0-d98f6bdfe19d",
    desc: "Team Project (Unfinished project)",
    github: "https://github.com/reuvin22/FindSpot",
    live: ""
  }]

  const landingpage = [{
    title: "TraPinas",
    img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FladingPage.png?alt=media&token=23b25346-6880-4e2d-a963-1344a99be50e",
    desc: "Simple Landing Page (Under Revision)",
    github: "https://github.com/reuvin22/travel",
    live: "https://travel-zeta-smoky.vercel.app/"
  }]

  const selectedProject = (id) => {
    console.log(id)
  }

  useEffect(() => {
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#proj',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    aboutTimeline.from('#title', {
      xPercent: '-10',
      duration: 0.5,
      opacity: 0,
    }).from(['#selector'], {
      xPercent: '20',
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });
    return () => aboutTimeline.kill();
  }, []);

  const renderContent = useMemo(() => {
    return (
      <>
          <div className='flex justify-center items-center w-full gap-10'>
                      <span className='text-white cursor-pointer text-xl' onClick={() => handleClick('fullstack')}>Full Stack</span>
                      <span className='text-white cursor-pointer text-xl' onClick={() => handleClick('api')}>API</span>
                      <span className='text-white cursor-pointer text-xl' onClick={() => handleClick('landingpage')}>Landing Page</span>
                  </div>
                  <div className='flex items-center justify-center gap-5 sm:grid'>
                    {menu === 'fullstack' && (
                      fullstack.map((proj, index) => (
                        <div className='w-72 h-96 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer sm:hidden md:hidden grid' key={index}
                        onClick={() => selectedProject(index)}>
                          <h1 className='text-center text-lg font-bold mt-3'>{proj.title} <br /> {proj.message}</h1>
                          <img src={proj.img} alt="Photo" />
                          <p className='text-center text-lg font-bold'>{proj.desc}</p>
                          <p className='text-center text-sm font-bold'>{proj.account}</p>
                          <div className='flex w-full justify-center items-center gap-5 mt-5'>
                            <a href={proj.github}><button className='bg-blue-500 hover:bg-blue-700 h-10 w-24 rounded-md py-2 px-5'>Github</button></a>
                            <a href={proj.live}><button className='bg-blue-500 hover:bg-blue-700 h-10 w-24 rounded-md py-2 px-5'>Live</button></a>
                          </div>
                        </div>
                      ))
                    )}
                    {menu === 'api' && (
                      api.map((proj, index) => (
                        <div className='w-72 h-96 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer sm:hidden md:hidden grid' key={index}
                        onClick={() => selectedProject(index)}>
                          <h1 className='text-center text-lg font-bold mt-3'>{proj.title}</h1>
                          <img src={proj.img} alt="Photo" />
                          <p className='text-center text-lg font-bold'>{proj.desc}</p>
                          <div className='flex w-full justify-center items-center gap-5 mt-5'>
                            <a href={proj.github}><button className='bg-blue-500 hover:bg-blue-700 h-10 w-24 rounded-md py-2 px-5'>Github</button></a>
                            <a href={proj.live}><button className='bg-blue-500 h-10 hover:bg-blue-700 w-24 rounded-md py-2 px-5'>Live</button></a>
                          </div>
                        </div>
                      ))
                    )}
                    {menu === 'landingpage' && (
                      landingpage.map((proj, index) => (
                        <div className='w-72 h-96 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer sm:hidden md:hidden grid' key={index}
                        onClick={() => selectedProject(index)}>
                          <h1 className='text-center text-lg font-bold mt-3'>{proj.title}</h1>
                          <img src={proj.img} alt="Photo" />
                          <p className='text-center text-lg font-bold'>{proj.desc}</p>
                          <div className='flex w-full justify-center items-center gap-5 mt-5'>
                            <a href={proj.github}><button className='bg-blue-500 hover:bg-blue-700 h-10 w-24 rounded-md py-2 px-5'>Github</button></a>
                            <a href={proj.live}><button className='bg-blue-500 hover:bg-blue-700 h-10 w-24 rounded-md py-2 px-5'>Live</button></a>
                          </div>
                        </div>
                      ))
                    )}
                    {menu === 'fullstack' && (
                      <div className='flex relative justify-center items-center gap-5 lg:hidden xl:hidden'>
                      <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === 0 ? 'hidden' : `h-12 w-12 cursor-pointer rotate-180 absolute ml-[-120%] `} onClick={() => handlePrevPage()}/>
                      {menu === 'fullstack' && (
                        <div className='max-w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer sm:h-96 '
                        >
                          <h1 className='text-center sm:py-3 sm:text-xl mt-3'>{fullstack[skillPage]?.title}</h1>
                          <img src={fullstack[skillPage]?.img} alt="Photo" />
                          <p className='text-center sm:py-3 sm:text-xl'>{fullstack[skillPage]?.desc}</p>
                          <div className='flex w-full justify-center items-center gap-5 mt-5'>
                            <a href={fullstack[skillPage]?.github}><button className='hover:bg-blue-700 bg-blue-500 h-10 w-12 rounded-md sm:w-20'>Github</button></a>
                            <a href={fullstack[skillPage]?.live}><button className='hover:bg-blue-700 bg-blue-500 h-10 w-12 rounded-md sm:w-20'>Live</button></a>
                          </div>
                        </div>
                      )}
                      <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === fullstack.length -1 ? 'hidden' : `h-12 w-12 cursor-pointer absolute mr-[-120%]`} onClick={() => handleNextPage()}/>
                    </div>
                    )}
                    {menu === 'api' && (
                      <div className='flex relative justify-center items-center gap-5 lg:hidden xl:hidden'>
                      <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === 0 ? 'hidden' : `h-12 w-12 cursor-pointer rotate-180 absolute ml-[-120%] `} onClick={() => handlePrevPage()}/>
                      {menu === 'api' && (
                        <div className='max-w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer sm:h-96 '
                        >
                          <h1 className='text-center sm:py-3 sm:text-xl mt-3'>{api[skillPage]?.title}</h1>
                          <img src={api[skillPage]?.img} alt="Photo" />
                          <p className='text-center sm:py-3 sm:text-xl'>{api[skillPage]?.desc}</p>
                          <div className='flex w-full justify-center items-center gap-5 mt-5'>
                            <a href={api[skillPage]?.github}><button className='bg-blue-500 hover:bg-blue-700 h-10 w-12 rounded-md sm:w-20'>Github</button></a>
                            <a href={api[skillPage]?.live}><button className='bg-blue-500 hover:bg-blue-700 h-10 w-12 rounded-md sm:w-20'>Live</button></a>
                          </div>
                        </div>
                      )}
                      <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === api.length -1 ? 'hidden' : `h-12 w-12 cursor-pointer absolute mr-[-120%]`} onClick={() => handleNextPage()}/>
                    </div>
                    )}
                    {menu === 'landingpage' && (
                      <div className='flex relative justify-center items-center gap-5 lg:hidden xl:hidden'>
                      <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === 0 ? 'hidden' : `h-12 w-12 cursor-pointer rotate-180 absolute ml-[-120%] `} onClick={() => handlePrevPage()}/>
                      {menu === 'landingpage' && (
                        <div className='max-w-72 h-72 border-2 border-white rounded-lg px-10 text-white relative overflow-hidden cursor-pointer sm:h-96 '
                        >
                          <h1 className='text-center sm:py-3 sm:text-xl mt-3'>{landingpage[skillPage]?.title}</h1>
                          <img src={landingpage[skillPage]?.img} alt="Photo" />
                          <p className='text-center sm:py-3 sm:text-xl'>{landingpage[skillPage]?.desc}</p>
                          <div className='flex w-full justify-center items-center gap-5 mt-5'>
                            <a href={landingpage[skillPage]?.github}><button className='hover:bg-blue-700 bg-blue-500 h-10 w-12 rounded-md sm:w-20'>Github</button></a>
                            <a href={landingpage[skillPage]?.live}><button className='hover:bg-blue-700 bg-blue-500 h-10 w-12 rounded-md sm:w-20'>Live</button></a>
                          </div>
                        </div>
                      )}
                      <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=e3b654bd-ac5e-4eb8-863f-52a89bda040a" alt="Arrow" className={skillPage === landingpage.length -1 ? 'hidden' : `h-12 w-12 cursor-pointer absolute mr-[-120%]`} onClick={() => handleNextPage()}/>
                    </div>
                    )}
                  </div>
                </>
    )
  }, [menu, skillPage])
  return (
    <>
        <section id="proj" className='w-screen'>
            <div className='w-screen grid h-[79vh] px-0 sm:px-10 md:px-10 sm:grid sm:justify-center sm:items-center py-10' id='selector'>
            <h1 className='text-center text-white text-4xl font-bold' id='title'>My Projects</h1>
              {renderContent}
            </div>
        </section>
    </>
  )
}

export default Projects