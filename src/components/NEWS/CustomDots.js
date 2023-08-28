import React from 'react';

const CustomDots = ({ currentIndex, totalSlides, goToSlide }) => {
  const dots = [];

  for (let i = 0; i < totalSlides; i++) {
    const dotColor = i === currentIndex ? 'blue' : 'bg-gray-200'; 

    dots.push(
      <div
        key={i}
        className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${dotColor}`}
        onClick={() => {
          goToSlide(i);
        }}
      ></div>
    );
  }

  return <div className="flex justify-center mt-2">{dots}</div>;
};

export default CustomDots;
