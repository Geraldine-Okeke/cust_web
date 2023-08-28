import React from 'react';
import './Mandate.css';

export default function Section1(props) {
  const myStyle = {
    backgroundImage: `url(${props.bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 'auto'
  };

  const containerClassName = `float-${props.floatDirection || 'left'} md:pl-10 my-52 text-white text-center md:w-1/2 w-full p-4`;

  return (
    <div className="" style={myStyle}>
      <div className={containerClassName} >
        <h1 className='text-4xl font-bold '>{props.title}</h1>
        <p className='mt-20 text-start leading-8'>{props.details}</p>
      </div>
    </div>
  );
}
