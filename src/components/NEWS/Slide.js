import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Items from '../NEWS/Items';
import { Link } from 'react-router-dom';
import CustomDots from './CustomDots';
import arrow from './Images/arrow.png'
const Slide = () => {
  const [items, setItems] = useState([]);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useApi, setUseApi] = useState(false); //i will Set to true when API is ready

  useEffect(() => {
    async function fetchDataFromApi() {
      try {
        const pageId = ''
        const accessToken = ''
        const response = await fetch(`https://graph.facebook.com/v12.0/${pageId}/feed?access_token=${accessToken}
        `);
        const data = await response.json();
        console.log('Fetched data from API:', data);
        setItems(data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
        // Fallback to local events data
        setItems(Items);
      }
    }

    if (useApi) {
      fetchDataFromApi();
    } else {
      setItems(Items);
    }
  }, [useApi]);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  return (
    <div>
      <div className="">
        <Slider {...settings} ref={sliderRef}>
          {items.map((item, index) => (
            <div key={index} className="px-2 md:px-4 py-4 relative">
              <div className="border rounded-3xl">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="mb-2 h-48 w-full" />
                  <span className="absolute bottom-0 right-0 bg-yellow-500 text-black font-bold p-2">
                    {item.date}
                  </span>
                </div>
                <div>
                  <p className="px-4 py-8 bg-white">{item.title}</p>
                </div>
                <div className='bg-white'>
                  <Link to={item.link}>
                    <button className='border flex flex-row w-32 justify-between p-2 rounded-xl'>Read More
                      <img className='w-5 h-5 rounded-full' src={arrow} alt='arrow' />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className='text-center pt-10 pb-5'>
          <button className="w-12 text-2xl h-12 p-2 mr-2 blue rounded-full" onClick={() => sliderRef.current.slickPrev()}>
            &lt;
          </button>
          <button className="w-12 text-2xl h-12 p-2 blue rounded-full" onClick={() => sliderRef.current.slickNext()}>
            &gt;
          </button>
        </div>
        <CustomDots
          currentIndex={currentIndex}
          totalSlides={items.length}
          goToSlide={index => sliderRef.current.slickGoTo(index)}
        />
      </div>
    </div>
  );
};


export default Slide;
