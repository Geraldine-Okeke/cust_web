import React, { useState } from 'react';

const Section3 = () => {
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.elements.fn.value,
      lastName: e.target.elements.ln.value,
      email: e.target.elements.em.value,
      phoneNumber: e.target.elements.pn.value,
      message: e.target.elements.ta.value,
    };

    
    const errors = {};
    for (const field in formData) {
      if (!formData[field]) {
        errors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required`;
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log(formData);

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully!');
        e.target.reset();
        setFormErrors({});
      } else {
        console.error('Form data submission failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <h1 className="font-bold text-3xl text-center mt-10 mb-20" id="contact">SEND US A MESSAGE</h1>
      <form className="" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-5 pl-4">Name</h1>
       <div className="md:flex p-4 gap-10">
        <div className=" md:w-1/2  ">
          <div className="flex flex-col">
            <input type="text" className="p-2 border rounded" id="fn" />
            <label htmlFor="fn" className="mb-2 ">First Name</label>
          </div>
        </div>
          <div className=" md:w-1/2 ">
            <div className="flex flex-col">
              <input type="text" className="p-2 border rounded" id="ln"  />
              <label htmlFor="ln" className="mb-2 ">Last Name</label>
            </div>
          </div>
       </div>
        
       <div className="md:flex p-4 gap-9">
        
        <div className=" md:w-1/2  ">
        <h1 className="text-3xl font-bold mb-5">Email</h1>
          <div className="flex flex-col">
            <input type="email" className="p-2 border rounded" id="em"  />
            <label htmlFor="em" className="mb-2 ">example@example.com</label>
          </div>
        </div>
          <div className=" md:w-1/2 ">
          <h1 className="text-3xl font-bold mb-5">Phone Number</h1>
            <div className="flex flex-col">
              <input type="tel" className="p-2 border rounded" id="pn" />
              <label htmlFor="pn" className="mb-2 ">Please enter a valid phone number</label>
            </div>
          </div>
       </div>
        <textarea id="ta" className="w-full p-4 border rounded-md resize-y focus:outline-none focus:ring focus:border-blue-300" rows="4" placeholder="Enter your message"></textarea>
        <label htmlFor="ta"className='pl-4' >Message</label> <br/>
        <button
          type="submit"
          className={`px-4 py-2 float-right my-8 mr-10 blue w-32 font-bold text-black rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${
            Object.keys(formErrors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={Object.keys(formErrors).length > 0}
        >
          SEND
        </button>

      </form>


    </>
  )
  
  
}
export default Section3