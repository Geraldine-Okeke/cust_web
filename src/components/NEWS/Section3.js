import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Events from './Events';

export default function Section3() {
  const [events, setEvents] = useState([]);
  const [useApi, setUseApi] = useState(false); // I will Set this to true when API is ready

  useEffect(() => {
    if (useApi) {
      // Fetch events from API and update the events state
      async function fetchEvents() {
        try {
          const response = await fetch('api endpoint');
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          console.error('Error fetching events from API:', error);
        }
      }

      fetchEvents();
    } else {
      setEvents(Events); // Use local events from Events.js
    }
  }, [useApi]);

  return (
    <>
      {events.map((event, index) => (
      <div className='flex flex-col md:flex-row border p-2 md:p-12 rounded-xl shadow-lg m-6' key={index}>
        <div className="md:w-1/2 p-4 relative">
          <img src={event.image} alt={`Event ${index + 1}`} className="w-full h-auto md:w-3/4 rounded-xl" />
          <span className="text-black absolute top-1/2 left-0 transform -translate-y-1/2 h-10 flex px-2 rounded-lg items-center text-center font-bold yellow">{event.date}</span>
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className='text-4xl font-bold'>About this Event</h1>
          <p className='leading-8 pt-4 md:pt-16'>{event.description}</p>
          <Link to={event.link}>
            <button className='yellow text-black font-bold mt-4 rounded-full px-6 py-2 hover:bg-yellow-700'>JOIN NOW</button>
          </Link>
        </div>
      </div>
      
      ))}
    </>
  );
}
