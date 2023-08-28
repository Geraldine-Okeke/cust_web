import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Offcanvas = ({ onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className="lg:hidden fixed top-0 right-0 h-full z-30 w-full bg-gray-800 text-white transform transition-transform duration-300 overflow-y-auto">
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        &times;
      </button>
      <ul className="p-4 space-y-2">
        <li className="relative">
            <Link
              to="/"
              className="block text-white"
            >
              HOME
            </Link>
            
          
        </li>
        <li className="relative">
            <Link
              to="/MANDATE/Mandate"
              className="block text-white"
            >
              OUR MANDATE
            </Link>
            
        </li>
        
        <li className="relative">
          <div className="flex items-center">
            <Link
              to="/Programs/Programs"
              className="block text-white"
              onClick={() => setActiveDropdown(null)}
            >
              PROGRAMS
            </Link>
            <span
              className={`ml-2 cursor-pointer ${
                activeDropdown === 2 ? 'transform rotate-180' : ''
              }`}
              onClick={() => toggleDropdown(2)}
            >
              ▼
            </span>
          </div>
          {activeDropdown === 2 && (
            <ul className="bg-gray-800 p-2 mt-1 space-y-2">
              <li>
                <Link to="#" className="block hover:text-gray-400">
                  ARTS
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-400">
                  LEADERSHIP
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-400">
                  ENTREPRENEURSHIP
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-400">
                  FOOD/SHELTER
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-400">
                  SBG AWARENESS
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative">
          <div className="flex items-center">
            <Link
              to="/TRIBE/Tribe"
              className="block text-white"
              onClick={() => setActiveDropdown(null)}
            >
              OUR TRIBE
            </Link>
            <span
              className={`ml-2 cursor-pointer ${
                activeDropdown === 3 ? 'transform rotate-180' : ''
              }`}
              onClick={() => toggleDropdown(3)}
            >
              ▼
            </span>
          </div>
          {activeDropdown === 3 && (
            <ul className="bg-gray-800 p-2 mt-1 space-y-2">
              <li>
                <Link to="#" className="block hover:text-gray-400">
                  BOARD OF DIRECTORS
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-400">
                  EXECUTIVE ADVISORY
                </Link>
              </li>
              <li>
                <Link to="#" className="block hover:text-gray-400">
                  DEVELOPMENT TEAM
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative">
            <Link
              to="/NEWS/News" 
              className="block text-white"
            >
              NEWS
            </Link>
        </li>
        <li className="relative">
            <Link
              to="/BLOG/Blog" 
              className="block text-white"
            >
              BLOG
            </Link>
            
        </li>

        <li className="relative">
            <Link
              to="/CONTACT/Contact"
              className="block text-white"
            >
              CONTACT US
            </Link>
           
        </li>

        <li className="relative">
          <div className="flex items-center">
            <Link
              to="/GET_INVOLVED/GetInvolved"
              className="block text-white"
              onClick={() => setActiveDropdown(null)}
            >
              GET INVOLVED
            </Link>
            <span
              className={`ml-2 cursor-pointer ${
                activeDropdown === 7 ? 'transform rotate-180' : ''
              }`}
              onClick={() => toggleDropdown(7)}
            >
              ▼
            </span>
          </div>
          {activeDropdown === 7 && (
            <ul className="bg-gray-800 p-2 mt-1 space-y-2">
              <li>
                <Link to="/GET_INVOLVED/Volunteer" className="block hover:text-gray-400">
                  AS A VOLUNTEER
                </Link>
              </li>
              <li>
                <Link to="/GET_INVOLVED/Sponsor" className="block hover:text-gray-400">
                  AS A SPONSOR
                </Link>
              </li>
              <li>
                <Link to="/GET_INVOLVED/Mentor" className="block hover:text-gray-400">
                  AS A MENTOR
                </Link>
              </li>
              
            </ul>
          )}
        </li>

        <li><Link to="#" className="block text-white">DONATE</Link></li>
      </ul>
    </div>
  );
};

export default Offcanvas;
