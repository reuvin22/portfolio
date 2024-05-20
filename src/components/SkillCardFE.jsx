import React from 'react'

export default function SkillCardFE(props) {
  const feList = [
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fhtml.png?alt=media&token=cda20417-e71c-41d6-9c1e-022e394e0806",
    title: "HTML"},
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fcss.png?alt=media&token=1b83fe87-d98f-4511-a72c-c7b68a3848d8",
      title: "CSS"
    }
    ,
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fjs.png?alt=media&token=ef21e926-fe20-4f54-ba5b-b366a820986c",
      title: "Javascript"
    },
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Freact.png?alt=media&token=b3fc2469-0fb2-4954-8f5e-2c8099f2b6dc",
      title: "React Js"
    },
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FreactN.png?alt=media&token=5f16894a-37a1-4ef1-a45f-0f62601ff2dc",
      title: "React Native"
    },
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fnextjs-icon-dark-background-removebg-preview.png?alt=media&token=d913c160-68c1-4463-825f-86e14cee669c",
      title: "Next Js"
    },
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ftailwind.png?alt=media&token=db1cb375-8728-4a9e-bd39-ace30f3463fe",
      title: "Tailwind"
    }
  ]
  return (
    <>
    <div className="border-2 bg-slate-800 rounded-md py-5 px-10 sm:px-2 sm:py-3">
        <h1 className='text-center my-5'>Frontend</h1>
        <div className='grid grid-cols-4 place-items-center gap-x-2 gap-y-3 mt-8 sm:mt-0'>
        {feList.map((fe, feIndex) => (
            <div className='grid place-items-center' key={feIndex}>
              <img src={fe.lang} className='h-24 w-24 sm:h-12 sm:w-12'/>
              <span className='text-sm text-center sm:mt-2'>{fe.title}</span>
            </div>
        ))}
        </div>
    </div>
    </>
  )
}
