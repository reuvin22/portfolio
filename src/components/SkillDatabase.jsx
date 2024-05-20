import React from 'react';

export default function SkillDatabase(props) {
  const database = [
    {
      dbs: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Ffirebase.png?alt=media&token=fab5b961-4a06-40a2-9675-e0662cc8d3e9",
      title: "firebase"
    },
    {
      dbs: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fmysql.png?alt=media&token=891162f9-d981-48fc-8779-f2502d97ee3e",
      title: "MySQL"
    },
    {
      dbs: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fpostgresql.png?alt=media&token=e423818d-4aab-43f1-bdad-3e7fa1349a26",
      title: "PostgreSQL"
    },
    {
      dbs: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fmongodb.png?alt=media&token=45085628-4d3f-43e6-adc9-79daf7bac13c",
      title: "MongoDB"
    }
  ];

  return (
    <div className="border-2 bg-slate-800 rounded-md py-5 px-10">
      <h1 className='text-center'>Database</h1>
      <div className='grid grid-cols-2 gap-4 mt-8'>
        {database.map((db, index) => (
          <div key={index} className='grid place-items-center'>
            <img src={db.dbs} alt={db.title} className='h-24 w-24 sm:h-12 sm:w-12'/>
            <span className='text-sm text-center sm:mt-2'>{db.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
