import React from 'react'

export default function List2(props) {
  return (
    <>
        <div className="grid place-items center text-white bg-slate-800 w-96">
          <img src={props.image} alt="Project Image" className='w-full h-72'/>
          <div className="flex justify-center align-items-center gap-x-5 my-5">
            <img src={props.prog1} alt="Tech Tools" className='img'/>
            <img src={props.prog2} alt="Tech Tools"className='img'/>
            <img src={props.prog3} alt="Tech Tools" className='img'/>
            <img src={props.prog4} alt="Tech Tools" className='img'/>
          </div>
            <h1 className='text-2xl text-center font-bold'>{props.title}</h1>
            <h3 className='text-center'>{props.status}</h3>
            <div className="w-full flex justify-center align-items-center gap-x-5">
                <a href={props.link}><button className='border-2 py-3 px-10 border-purple-800 rounded-2xl my-5 cursor-pointer hover:bg-purple-500'>{props.button}</button></a>
            </div>
        </div>
    </>
  )
}
