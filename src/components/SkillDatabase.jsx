import React from 'react'

export default function SkillDatabase(props) {
  const database = [{
    firebase: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ffirebase.png?alt=media&token=fab5b961-4a06-40a2-9675-e0662cc8d3e9",
    mysql: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fmysql.png?alt=media&token=891162f9-d981-48fc-8779-f2502d97ee3e",
    postgresql: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fpostgresql.png?alt=media&token=e423818d-4aab-43f1-bdad-3e7fa1349a26",
    mongodb: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fmongodb.png?alt=media&token=45085628-4d3f-43e6-adc9-79daf7bac13c"
    }
  ]
  return (
    <div className="border-2 bg-slate-800 rounded-md py-5 px-10">
      <h1 className='text-center'>Database</h1>
      {database.map(db => {
        return (
        <div className='grid grid-cols-2 place-items-center gap-x-2 gap-y-3 mt-8'>
          <div className='grid'>
          <img src={db.firebase} className='h-24 w-24'/>
          <span className='text-sm text-center'>Firebase</span>
          </div>
          <div className='grid'>
          <img src={db.mysql} className='h-24 w-24'/>
          <span className='text-sm text-center'>MySQL</span>
          </div>
          <div className='grid'>
          <img src={db.mongodb} className='h-24 w-24'/>
          <span className='text-sm text-center'>Mongodb</span>
          </div>
          <div className='grid'>
          <img src={db.postgresql} className='h-24 w-24'/>
          <span className='text-sm text-center'>PostgreSQL</span>
          </div>
        </div>)
      })}
    </div>
  )
}
