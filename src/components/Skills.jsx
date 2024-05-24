import React, { useState } from 'react'

export default function Skills() {
    const [id, setId] = useState(0)
    const skills = [
        {
            name: "HTML",
            img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fhtml.png?alt=media&token=cda20417-e71c-41d6-9c1e-022e394e0806",
            percent: "90%"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fcss.png?alt=media&token=1b83fe87-d98f-4511-a72c-c7b68a3848d8",
            percent: "80%",
            name: "CSS"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fjs.png?alt=media&token=ef21e926-fe20-4f54-ba5b-b366a820986c",
        percent: "70%",
        name: "Javascript"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Freact.png?alt=media&token=b3fc2469-0fb2-4954-8f5e-2c8099f2b6dc",
        percent: "70%",
        name: "React Js"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FreactN.png?alt=media&token=5f16894a-37a1-4ef1-a45f-0f62601ff2dc",
        percent: "50%",
        name: "React Native"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ftailwind.png?alt=media&token=db1cb375-8728-4a9e-bd39-ace30f3463fe",
        percent: "70%",
        name: "Tailwind"
        },
        {img:"https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fphp.png?alt=media&token=6b432623-07ac-4b09-9b9b-5876aef8368a",
        percent: "80%",
        name: "PHP"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Flaravel.png?alt=media&token=08c0b0a3-9302-4b63-b122-f040b84f51e7",
        percent: "80%",
        name: "Laravel"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fmysql.png?alt=media&token=891162f9-d981-48fc-8779-f2502d97ee3e",
        percent: "80%",
        name: "MySQL"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fpostgresql.png?alt=media&token=e423818d-4aab-43f1-bdad-3e7fa1349a26",
        percent: "70%",
        name: "PostgreSQL"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ffirebase.png?alt=media&token=fab5b961-4a06-40a2-9675-e0662cc8d3e9",
        percent: "60%",
        name: "Firebase"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fmongodb.png?alt=media&token=45085628-4d3f-43e6-adc9-79daf7bac13c",
        percent: "60%",
        name: "MongoDB"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fdocker.png?alt=media&token=2c8a4488-14ef-44df-b7c7-16226985e032",
        percent: "50%",
        name: "Docker"
        },
        {img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Faws.png?alt=media&token=6aa7adf8-3581-4b87-a275-9a512bd226e0",
        percent: "40%",
        name: "AWS"
        }

    ]

    const handleOnClick = (id) => {
        setId(id)
    }
  return (
    <>
        <section className='my-20 h-full w-screen'>
            <div className='px-24 grid place-items-center gap-y-10'>
                <h1 className='font-bold text-white text-4xl'>My Skills</h1>
                <div className='grid place-items-center gap-y-5'>
                    <img src={skills[id]?.img} alt="Skill Image" className='max-h-36'/>
                    <span className='font-bold text-4xl text-white'>{skills[id]?.name}</span>
                </div>
                <div class="w-96 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full`} style={{ width: `${skills[id]?.percent}` }}>{skills[id]?.percent}</div>
                </div>
                <div className='grid grid-cols-5 gap-x-5 gap-y-10 w-[80%] place-items-center'>
                {skills.map((skill, index) => 
                    (<div key={index}>
                        <img src={skill.img} alt="Skills" className='h-12 w-12 rounded-full cursor-pointer hover:scale-150 duration-75' onClick={() => handleOnClick(index)}/>
                    </div>)
                )}
                </div>
            </div>
        </section>
    </>
  )
}