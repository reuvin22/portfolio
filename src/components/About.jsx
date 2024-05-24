import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../components/Card';
import Sidebar from './Sidebar';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const icons = [
    "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FScam.png?alt=media&token=18a0d2ac-60cb-4103-86c1-4be503c9df3b",
    "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FGarapal.png?alt=media&token=2843d057-59b3-4e56-9e1c-44d8a8fe2b5c",
    "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Flspu.png?alt=media&token=d8504e7c-6887-4422-8ef7-9edc3739480f",
    "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FLBIS%20(1).png?alt=media&token=be5deebc-19e4-493c-95cf-fbd2e043ee5a"
  ]
  const [exp, setExp] = useState('exp');
  useEffect(() => {
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#abouts',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    aboutTimeline.from('#year', {
      xPercent: '-10',
      duration: 0.5,
      opacity: 0,
    }).from(['#intro', '#cards'], {
      xPercent: '20',
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });
    return () => aboutTimeline.kill(); // Cleanup timeline
  }, []);

  const handleExp = (data) => {
    setExp(data)
  }
  return (
    <section id="abouts" className="w-screen">
      <div className="mx-10">
        <h1 className="text-header font-bold grid place-items-center py-10">ABOUT</h1>
        <div className="flex gap-20 md:grid md:gap-5 md:place-items-center sm:grid sm:gap-5 sm:place-teims-center">
          <div className="w-full" id="year">
            <div className="text-center w-full text-header h-full">
              <h1 className="text-8xl mb-5">1</h1>
              <h2>Year</h2>
              <br />
              <h2>Web Development</h2>
              <br />
              <h2>Experience</h2>
            </div>
          </div>
          <div className="">
            <div className="text-2xl text-white my-5" id="intro">
              <p className="md:text-center sm:text-center">
                I am Reuvin Hernandez, a web developer. I am passionate and dedicated to my profession, and I believe that I am equipped with the necessary skills and knowledge to make a successful project.
              </p>
            </div>
            <div className="flex justify-center items-center gap-10" id="cards">
              <Card
                title="Web Development"
                logo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Flaptop.png?alt=media&token=edc34cac-30a5-43b5-938b-3de6e6b931ae"
                descriptions="Turn your dream website into reality."
              />
              <Card
                title="Video Editing"
                className="card2"
                logo="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FEditing.png?alt=media&token=4e9577f4-4c79-4eca-88dc-491383b60da2"
                descriptions="Make your video ads look stunning!"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='grid my-10'>
          <div className='grid place-items-center'>
            <div className='flex w-full items-center justify-center gap-x-5'>
              <button className='text-2xl text-white border-fuchsia-800 border-2 py-2 px-5 rounded-xl hover:bg-fuchsia-800'
              onClick={() => handleExp('exp')}>Experience</button>
              <button className='text-2xl text-white border-fuchsia-800 border-2 py-2 px-5 rounded-xl hover:bg-fuchsia-800 duration-75'
              onClick={() => handleExp('edu')}>Education</button>
            </div>
            <div className='w-full my-10'>
            {exp === 'exp' && (
              <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Feb 2024 - April 2024"
                iconStyle={{ background: 'white', color: '#fff' }}
                icon={<img src={icons[0]} alt='QSolutionz'/>}
              >
                <h3 className="vertical-timeline-element-title">QSolutionz Philippines</h3>
                <h4 className="vertical-timeline-element-subtitle">Full Stack Developer </h4>
                <h1 className='text-xl mt-3'>
                  Technologies
                </h1>
                <p>
                  React Js, Next Js, Laravel, PostgreSQL, Linux, Docker, Postman, Jira, Github
                </p>
                <h1 className='text-xl mt-3'>
                  Responsibilities
                </h1>
                <p>
                  Creating UI, Creating Tables in Database, Manages database
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                className="vertical-timeline-element--work"
                date="July 2023 - Nov 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img src={icons[1]} alt='CampConnection'/>}
              >
                <h3 className="vertical-timeline-element-title">Camp Connection</h3>
                <h4 className="vertical-timeline-element-subtitle">Backend Developer</h4>
                <h1 className='text-xl mt-3'>
                  Technologies
                </h1>
                <p>
                  Laravel, MySQL, AWS, Twilio, OrangeHost, Postman, Github, Slack, GoDaddy
                </p>
                <h1 className='text-xl mt-3'>
                  Responsibilities
                </h1>
                <p>
                  Creating API, Creates and Manages database and hosting, Integrate Third Party Services, Authentication and Authorization using token, Manages Domain from GoDaddy and Email domain in AWS
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                className="vertical-timeline-element--work"
                date="Mar 2022 - Jun 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img src={icons[2]} alt='LSPU'/>}
              >
                <h3 className="vertical-timeline-element-title">Laguna State Polytechnic University (OJT College)</h3>
                <h4 className="vertical-timeline-element-subtitle">Full Stack Developer</h4>
                <h1 className='text-xl mt-3'>
                  Technologies
                </h1>
                <p>
                  HTML, CSS, Javascript, PHP, MySQL
                </p>
                <h1 className='text-xl mt-3'>
                  Responsibilities
                </h1>
                <p>
                  Creating UI, Creating Tables in Database, Manages database
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                className="vertical-timeline-element--work"
                date="Mar 2018 - Jun 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img src={icons[2]} alt='LSPU'/>}
              >
                <h3 className="vertical-timeline-element-title">Laguna State Polytechnic University (OJT Senior High School)</h3>
                <h4 className="vertical-timeline-element-subtitle">Full Stack Developer</h4>
                <h1 className='text-xl mt-3'>
                  Technologies
                </h1>
                <p>
                  HTML, CSS, Javascript, PHP, MySQL
                </p>
                <h1 className='text-xl mt-3'>
                  Responsibilities
                </h1>
                <p>
                  Creating UI, Creating Tables in Database, Manages database
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
            )}
            {exp === 'edu' && (
              <VerticalTimeline>
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                className="vertical-timeline-element--work"
                date="2018-2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img src={icons[2]} alt='LSPU'/>}
              >
                <h3 className="vertical-timeline-element-title">Laguna State Polytechnic University</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Computer Science</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                className="vertical-timeline-element--work"
                date="2016-2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<img src={icons[2]} alt='LSPU'/>}
              >
                <h3 className="vertical-timeline-element-title">Laguna State Polytechnic University</h3>
                <h4 className="vertical-timeline-element-subtitle">Senior High School (ICT)</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                className="vertical-timeline-element--work"
                date="2012-2016"
                iconStyle={{ background: 'white', color: '#fff' }}
                icon={<img src={icons[3]} alt='LBIS' />}
              >
                <h3 className="vertical-timeline-element-title">Los Banos Integrated School</h3>
                <h4 className="vertical-timeline-element-subtitle">Junior High School (ICT)</h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
            )}
            </div>
          </div>
      </div>
    </section>
  );
}

export default About;
