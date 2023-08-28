import React from 'react';
import team from './Teams';
import  { useEffect, useRef } from 'react';
export default function Section3() {
  const teamRef = useRef(null); 

  useEffect(() => {
    
    const locationHash = window.location.hash;
    if (locationHash === '#team') {
      
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
    <div ref={teamRef} id='team'>
    <h1 className='font-extrabold text-3xl text-center' >Our Team</h1>
    </div>
    <div className="md:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-full">
      {team.map((employee, index) => (
        <div key={index} className=" p-10 flex flex-col items-center">
          <img src={employee.image} alt={employee.name} className="w-full  " />
          <div className=' blue h-10 w-full'><h2 className='font-bold text-2xl text-center'>{employee.name}</h2></div>
          <div className='shadow-xl' >
            <span className="text-gray-600 font-semibold">{employee.contact}</span>
            <p>{employee.summary}</p>
          </div>
          
        </div>
      ))}
    </div>
    </>
  );
}

      