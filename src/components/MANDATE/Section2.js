import image from '../Home/Images/Section2.png'
import './Mandate.css'
import React, { useEffect, useRef } from 'react';
export default function Section2(){
  const aboutSectionRef = useRef(null); 
  useEffect(() => {
    const locationHash = window.location.hash;
    if (locationHash === '#about') {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
    <div className="">
      <div className="grid grid-cols-3 gap-3.5">
        <div className="col-span-3 p-4 md:col-span-2 md:">
          <div className="w-full py-10 md:w-3/4 md:p-10" ref={aboutSectionRef} id='about'>
            <h1 className="font-extrabold text-2xl">About Us</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            </p>
            <br/>
            <p>
            purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
            </p>
            <br/>
            <p>
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum
            dolor sit amet, consectetuer adipiscing Maecenasporttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            puruslectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra
            </p>
            
          </div>
          <div className="w-full py-10 md:w-3/4 md:p-10">
            <h1 className="font-extrabold text-2xl">Our History</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            </p>
            <br/>
            <p>
            purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
            </p>
            <br/>
            <p>
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum
            dolor sit amet, consectetuer adipiscing Maecenasporttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            puruslectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra
            </p>
            
          </div>
        </div>
        <div className="hidden md:block p-4 ml-1/4 md:w-full relative w-1/2">
          <img className='absolute -right-32  top-48 round' src={image} alt=''/>
        </div>
      </div>
    </div>
    </>
  )
}
