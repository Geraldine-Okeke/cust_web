import './Home.css'
import { Link } from 'react-router-dom';
export default function Section1() {
  

  return (
    <div className='Top-main w-full '>
      <div className='md:float-right  justify-center items-center  w-full mt-20 md:w-full lg:w-1/2 xl:w-1/2 text-white px-3  md:p-20 flex flex-col'>
        <h1 className='mb-10 text-4xl text-center font-bold'>KINDLEGATE <br/> FOUNDATION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. 
          Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. 
        </p>
        <Link to="/GET_INVOLVED/Get_Involved">
          <button className=' blue  text-black rounded-full h-12 mt-10 mb-10 md:px-32 sm:px-16 padding font-bold'>GET INVOLVED</button>
        </Link>
        <Link>
          <button className=' blue text-black  rounded-full h-12 font-bold mb-10 md:px-20 sm:px-10 padding whitespace-nowrap '>KINDLEGATE CAUSE SHOP</button>
        </Link>
       
      </div>
    </div>
      
    
  );
}
