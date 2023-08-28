import { Link } from 'react-router-dom';

export default function Section4({ title, programs, showButton }) {
  return (
    <>
      <div>
        <h1 className='font-bold text-3xl text-center mt-16'>{title}</h1>
      </div>
      <div className="md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {programs.map((program, index) => (
          <div key={index} className="p-10 flex flex-col items-center lg:w-full">
            <img src={program.image} alt="prog" className="w-full" />
            <div className='my-10 '><h2 className='font-bold text-2xl text-center'>{program.title}</h2></div>
            <div className='shadow-xl'>
              <p className='mb-5 leading-8'>{program.details}</p>
              <Link to={program.link}>
                <span className='hover:text-green-500'>Read More</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {showButton && (
        <div className='text-center pb-10'>
          <button className='rounded-full py-2 w-auto px-10 blue font-bold text-black'>LEARN MORE</button>
        </div>
      )}
    </>
  );
}
