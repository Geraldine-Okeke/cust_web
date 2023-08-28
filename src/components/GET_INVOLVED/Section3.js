import { Link } from 'react-router-dom';
export default function Section3(){
  return(
    <>
      <div className="flex flex-wrap backG text-white rounded-t-xl h-auto items-center">
        <div className="w-full md:w-1/3 p-4 text-center">
          <div className='flex justify-center py-10'>
            <Link to="/GET_INVOLVED/Volunteer">
              <button className='bg-yellow-500 text-black rounded-full w-auto px-10 py-3 font-bold mx-auto'>VOLUNTEER</button>
            </Link>
          </div>
          
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 text-center">
          <div className='flex justify-center py-10'>
              <Link to="/GET_INVOLVED/Sponsor">
                <button className='bg-yellow-500 text-black rounded-full w-auto px-10 py-3 font-bold mx-auto'>SPONSOR</button>
              </Link>
            </div>
            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
          </div>
        <div className="w-full md:w-1/3 p-4 text-center">
          <div className='flex justify-center py-10'>
              <Link to="/GET_INVOLVED/Mentor">
                <button className='bg-yellow-500 text-black rounded-full w-auto px-10 py-3 font-bold mx-auto'>MENTOR</button>
              </Link>
            </div>
            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
          </div>
      </div>

    </>
  )
}