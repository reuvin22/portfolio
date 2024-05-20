import React from 'react'

export default function SkillCloud(props) {
  const cloudList = [{
    aws: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Faws.png?alt=media&token=6aa7adf8-3581-4b87-a275-9a512bd226e0",
    firebase: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ffirebase.png?alt=media&token=fab5b961-4a06-40a2-9675-e0662cc8d3e9",
    docker: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fdocker.png?alt=media&token=2c8a4488-14ef-44df-b7c7-16226985e032"
  }]
  return (
    <div className="border-2 bg-slate-800 rounded-md py-5 px-10">
      <h1 className='text-center'>Cloud & Container</h1>
        {cloudList.map(cloud => {
          return (
            <div className='grid grid-cols-2 place-items-center gap-x-2 gap-y-3 mt-8'>
              <div className='grid'>
                <img src={cloud.firebase} className='h-24 w-24'/>
                <span className='text-sm text-center'>Firebase</span>
                </div>
                <div className='grid'>
                <img src={cloud.aws} className='h-24 w-24'/>
                <span className='text-sm text-center'>AWS</span>
              </div>
              <div className='grid'>
                <img src={cloud.docker} className='h-24 w-24'/>
                <span className='text-sm text-center'>Docker</span>
              </div>
          </div>
          )
        })}
    </div>
  )
}
