import Sec2_img from './Images/Section2.png'
import { Link } from 'react-router-dom';
export default function Section2(){
  return(
    <>
    <section>
      <div className='grid grid-cols-2 gap-4 bg-gray-200 pb-10 mb-10 rounded-xl '>
        <div className='mt-10'>
          <img className='-ml-20 mt-3' src={Sec2_img} alt=""/>
        </div>
        <div className='mt-10'>
          <div className='mt-5 mb-10'>
            <div className='flex flex-col items-end'>
              <h2 className='text-2xl font-bold '>OUR MANDATE</h2>
              <hr className='float-left w-20 font-extrabold border-t-2 bg-custom-yellow mb-4' />
            </div>
            <div>
              <p className=''>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
              Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo
              magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque 
              habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              </p>
            </div>
            
          </div>
          <div className='flex flex-col'>
            <div className=' flex flex-col items-end'>
              <h2 className='text-2xl font-bold'>OBJECTIVES</h2>
              <hr className=' w-20 font-bold border-t-2 bg-custom-yellow mb-4' />
            </div>
            <div>
              <p className=''>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue 
              massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
              sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus 
              a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
              ac turpis egestas. 
              </p>
            </div>
            
          </div>
          <div className='py-10 sm:float-right mr-0 sm:mr-20'>
            <Link to='/MANDATE/Mandate'>
              <button className=' light-blue hover:bg-blue-600 text-black font-semibold  whitespace-nowrap h px-2 rounded-full padding  w-auto h-14' >LEARN MORE</button>
            </Link>
            
          </div>
           
        </div>
        
      </div>
    </section>
    
    </>
  )
}