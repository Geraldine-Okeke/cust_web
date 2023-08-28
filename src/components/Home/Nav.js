import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Offcanvas from './Offcanvas';
import logo from './Images/nav-image.png';
import './Home.css';


const Nav = () => {
  
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    toggleOffcanvas();
  };

  return (
    <>
      <nav
      className={`${
        isScrolled ? 'blue' : 'bg-transparent'
      } fixed top-0 w-full  flex flex-row  transition-all duration-300 z-30 h-auto min-h-[50px] custom-nav  `}
    >
      <div className="logo">
          <img src={logo} alt='logo' className='w-16 h-16'/>
        </div>
      <div className="flex  space-x-2">
        
        <ul className="hidden lg:flex text-white nav-ul text-ml items-center">
        <li className="relative group">
          <Link
            to="/"
            className={`nav-link ${
              location.pathname === '/' ? 'border-b-2 border-green-500' : ''
            }`}
            onClick={handleLinkClick}
          >
            HOME
          </Link>
          
        </li>

          <li className=' whitespace-nowrap relative group'>
            <Link
              to="/MANDATE/Mandate"
              className={`nav-link ${
                location.pathname.includes('/MANDATE') ? 'border-b-2 border-green-500' : ''
              }`}
              onClick={handleLinkClick}
            >
              OUR MANDATE
            </Link>
            
          </li>
          <li className=' whitespace-nowrap relative group'>
            <Link
              to="/Programs/Programs"
              className={`nav-link ${
                location.pathname.includes('/Programs') ? 'border-b-2 border-green-500' : ''
              }`}
              onClick={handleLinkClick}
            >
              PROGRAMS
            </Link>
            <ul className="absolute hidden group-hover:block blue rounded-lg font-bold p-2 mt-1 space-y-2 left-0">
              <li>
                <Link to="#" className="block hover:text-gray-800 ">
                  ARTS
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-800">
                  LEADERSHIP
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-800">
                  ENTREPRENEURSHIP
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-800">
                  FOOD SHELTER
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-800">
                  SBG AWARENESS
                </Link>
              </li>
            </ul>
          </li>
          <li className=' whitespace-nowrap relative group'>
            <Link
              to="/TRIBE/Tribe"
              className={`nav-link ${
                location.pathname.includes('/TRIBE') ? 'border-b-2 border-green-500' : ''
              }`}
              onClick={handleLinkClick}
            >
              OUR TRIBE
            </Link>
            <ul className="absolute hidden group-hover:block blue rounded-lg font-bold p-2 mt-1 space-y-2 left-0">
              <li>
                <Link to="#" className="block hover:text-gray-800">
                  BOARD OF DIRECTORS
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-800">
                  EXECUTIVE ADVISORY
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-800">
                  DEVELOPMENT TEAM
                </Link>
              </li>
            </ul>
          </li>
          <li className=' whitespace-nowrap relative group'>
            <Link to="/NEWS/News" onClick={handleLinkClick}>
              NEWS
            </Link>
          </li>
          <li className=' whitespace-nowrap relative group'>
            <Link to="/BLOG/Blog" onClick={handleLinkClick}>
              BLOG
            </Link>
            
          </li>
          <li className=' whitespace-nowrap relative group'>
            <Link
              to="/CONTACT/Contact"
              className={`nav-link ${
                location.pathname.includes('/CONTACT') ? 'border-b-2 border-green-500' : ''
              }`}
              onClick={handleLinkClick}
            >
              CONTACT US
            </Link>
            
          </li>
          <li className=' whitespace-nowrap  relative group'>
          <Link
            to="/GET_INVOLVED/GetInvolved"
            className={`nav-link  w-32 ${
              location.pathname.includes('/GET_INVOLVED') ? 'border-b-2 border-green-500' : ''
            }`}
            onClick={handleLinkClick}
          >
            GET INVOLVED
            
          </Link>
          {/*<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
            <path d="M6.5 10.5L12.1292 0.75H0.870835L6.5 10.5Z" fill="white"/>
          </svg>
          */}
          <ul className="absolute hidden group-hover:block blue rounded-lg font-bold p-2 mt-1 space-y-2 left-0">
              <li>
                <Link to="/GET_INVOLVED/Volunteer" className="block hover:text-gray-800">
                  AS A VOLUNTEER
                </Link>
              </li>
              <li>
                <Link to="/GET_INVOLVED/Sponsor" className="block hover:text-gray-800">
                  AS A SPONSOR
                </Link>
              </li>
              <li>
                <Link to="/GET_INVOLVED/Mentor" className="block hover:text-gray-800">
                  AS A MENTOR
                </Link>
              </li>
            </ul>
        </li>


          <li className=' '>
            <Link to="#" onClick={handleLinkClick}>
            <button className='bg-green-600 -mr-20 float-right px-5 py-2 font-calibri text-base font-bold leading-7 rounded-full border-2 border-white text-white'>DONATE</button>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className="lg:hidden text-white text-5xl w-16 h-16 absolute right-2 top-2"
        onClick={toggleOffcanvas}
      >
        ☰
      </button>
      {showOffcanvas && <Offcanvas onClose={toggleOffcanvas} />}
      
    </nav>
    
    </>
    
   
  );
};

export default Nav;