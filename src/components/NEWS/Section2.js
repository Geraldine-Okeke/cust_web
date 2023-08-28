import React from 'react';
import Slide from './Slide';
export default function Section2() {
  return (
    <div className="yellow news rounded-b-xl ">
      <h1 className='text-center font-bold text-4xl p-12'>News</h1>
      <div className="flex px-3 flex-col md:flex-row">
        <div className="md:w-1/2  w-auto">
          <span className="font-bold text-black md:p-4">What is happening now</span>
          <h1 className="text-white font-bold text-2xl md:text-4xl md:p-4 w-auto ">KINDLEGATE FOUNDATION IN COLLABORATION WITH ...</h1>
        </div>
        <div className="md:w-1/2 ">
          <p className='md:p-4'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor”
          </p>
        </div>
      </div>

      <div className="flex justify-center  p-6   ">
        <Slide />
      </div>

    </div>
  );
}
