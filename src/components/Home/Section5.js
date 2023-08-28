import round from './Images/Section5.png'
import { Link } from 'react-router-dom';
export default function Section5(props){
  return(
    <>
     <div className='yellow pb-10  mt-0 flex flex-row relative h-auto lg:overflow-hidden sm:pl-10 '>
      <div  className="w-3/4 mt-4 pl-3 h-auto">
        <Link to={props.link}>
          <button className="blue mt-10 mb-5 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full ">
            {props.btn}
          </button>
        </Link>
        <p className='mt-6'>{props.paragraph}</p>
      </div>
      <div className="w-1/4 pr-0 ">
        <img src={round} alt="round " className='pr-0 absolute -right-24'/>
      </div>
     </div>
    </>
  )
}