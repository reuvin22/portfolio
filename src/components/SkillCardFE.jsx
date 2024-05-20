import React from 'react'

export default function SkillCardFE(props) {
  const feList = [{
    html: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fhtml.png?alt=media&token=cda20417-e71c-41d6-9c1e-022e394e0806",
    css: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fcss.png?alt=media&token=1b83fe87-d98f-4511-a72c-c7b68a3848d8",
    js: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fjs.png?alt=media&token=ef21e926-fe20-4f54-ba5b-b366a820986c",
    react: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Freact.png?alt=media&token=b3fc2469-0fb2-4954-8f5e-2c8099f2b6dc",
    reactN: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FreactN.png?alt=media&token=5f16894a-37a1-4ef1-a45f-0f62601ff2dc",
    next: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fnextjs-icon-dark-background-removebg-preview.png?alt=media&token=d913c160-68c1-4463-825f-86e14cee669c",
    tailwind: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ftailwind.png?alt=media&token=db1cb375-8728-4a9e-bd39-ace30f3463fe"
  }]
  return (
    <>
    <div className="border-2 bg-slate-800 rounded-md py-5 px-10">
        <h1 className='text-center my-5'>Frontend</h1>
        {feList.map(fe => {
          return (
            <div className='grid grid-cols-3 place-items-center gap-x-2 gap-y-3 mt-8'>
              <div className='grid'>
                <img src={fe.html} className='h-24 w-24'/>
                <span className='text-sm text-center'>Html</span>
                </div>
                <div className='grid'>
                <img src={fe.css} className='h-24 w-24'/>
                <span className='text-sm text-center'>CSS</span>
                </div>
                <div className='grid'>
                <img src={fe.js} className='h-24 w-24'/>
                <span className='text-sm text-center'>Javascript</span>
                </div>
                <div className='grid'>
                <img src={fe.react} className='h-24 w-24'/>
                <span className='text-sm text-center'>React Js</span>
              </div>
              <div className='grid'>
                <img src={fe.reactN} className='h-24 w-24'/>
                <span className='text-sm text-center'>React Native</span>
              </div>
              <div className='grid'>
                <img src={fe.next} className='h-24 w-24'/>
                <span className='text-sm text-center'>Next Js</span>
              </div>
            </div>)
        })}
    </div>
    </>
  )
}
