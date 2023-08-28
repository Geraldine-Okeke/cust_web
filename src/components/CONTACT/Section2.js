import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Section2 =()=>{
  return (
    <div className=' contact h-auto text-white rounded-b-xl'>
      <h1 className="text-3xl font-extrabold text-center mt-10">CONTACT INFORMATION</h1>
      <div className="flex flex-wrap mt-10 pb-20">
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-2xl font-bold">Address</h2>
          <hr className='my-2 border-t-2 border-yellow-500 w-1/4' />
          <p className='leading-10'>The Grey Gate, Olushola Agbaje, Off Road 13 lekki Phase I, Lagos, Nigeria.</p>
        </div>
        <div className="w-full md:w-1/3 p-4  ">
          <h2 className="text-2xl font-bold md:text-center">Phone and Email</h2>
          <hr className='my-2 border-t-2 border-yellow-500 w-1/4 md:mx-auto'/>
          <p className='md:text-center pb-7'> +234 818 038 0006</p>
          <p className='md:text-center'>info@kindlegatefoundation.org</p>
        </div>
        <div className="w-full md:w-1/3 p-4 h-auto">
          <h2 className="text-2xl font-bold md:text-center">Social Media</h2>
          <hr className='my-2 border-t-2 border-yellow-500 w-1/4 md:mx-auto' />
          <div className="flex md:justify-center items-center ">
            <div className="w-auto p-2">
              <Link to="https://www.facebook.com/kindlegatefoundation">
                <FaFacebook size={22} />
              </Link>
            </div>
            <div className="w-auto p-2">
              <Link to="https://twitter.com/kindlegatecares">
                <FaTwitter size={22} />
              </Link>
            </div>
            <div className="w-auto p-2">
              <Link to="https://www.instagram.com/kindlegatefoundation/?hl=en">
                <FaInstagram size={22} />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
     
    </div>
    
  );

}
export default Section2