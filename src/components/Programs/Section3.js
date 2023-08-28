const Section3 = ({ programs, heading, backgroundC , textColor}) => {
  
  return (
    <>
    <div  style={{ backgroundColor: backgroundC, color : textColor }} className="mb-0 pb-10" >
      <div className="md:p-10" ><h1 className=" mb-10 text-center font-extrabold text-3xl" id='All_Progs'  >{heading}</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programs.map((program, index) => (
          <div key={index} className="p-4 md:p-0 md:flex  rounded-xl" style={{ backgroundColor: program.bg_color }}>
            <div className="md:w-1/2" id={program.id}>
              <img src={program.image} alt="prog" className="w-full md:h-52 rounded-lg pt-3 pl-3" />
              <h2 className="text-center font-bold" >{program.title.toUpperCase()}</h2>
              <hr className="border-t-4 mx-auto w-1/2 border-yellow-400"/>
            </div>
            <div className="md:w-1/2 pl-4">
              <div  className="mt-4">{program.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </>
    
  );
};

export default Section3;
