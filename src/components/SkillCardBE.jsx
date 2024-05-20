import React from 'react'
import gsap from 'gsap'
export default function SkillCardBE() {
  const beList = [
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fphp.png?alt=media&token=6b432623-07ac-4b09-9b9b-5876aef8368a",
      title: "PHP"
    },
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Flaravel.png?alt=media&token=08c0b0a3-9302-4b63-b122-f040b84f51e7",
      title: "Laravel"
    },
    {lang: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fnode.png?alt=media&token=618e5ba0-b755-457a-9048-75c1c4867350",
      title: "Node Js"
    }
  ]

  
  return (
    <div className="border-2 bg-slate-800 rounded-md py-5 px-10">
      <h1 className='text-center'>Backend</h1>
      <div className='grid grid-cols-2 place-items-center gap-x-2 gap-y-6 mt-8'>
        {beList.map((be, beIndex) => (
              <div className='grid' key={beIndex}>
                <img src={be.lang} className='h-24 w-24 sm:h-12 sm:w-12' id='language'/>
                <span className='text-sm text-center sm:mt-2'>{be.title}</span>
              </div>
          )
        )}
        </div>
    </div>
  )
}
