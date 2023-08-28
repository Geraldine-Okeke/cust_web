import React, { useState } from 'react';

export default function Mentor() {
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.elements.fn.value,
      lastName: e.target.elements.ln.value,
      email: e.target.elements.em.value,
      phoneNumber: e.target.elements.pn.value,
      companyName: e.target.elements.cn.value,
      companyContact: e.target.elements.cp.value,
      address: e.target.elements.sa.value,
      city: e.target.elements.ct.value,
      stateProvince: e.target.elements.st.value,
      zipCode: e.target.elements.zp.value,
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
      <form onSubmit={handleSubmit}>
        <div className='px-5'>
        <h1 className="text-3xl font-bold my-2">NAME</h1>
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
          
        <div className="md:flex  gap-9">
          
          <div className=" md:w-1/2  ">
          <h1 className="text-3xl font-bold mb-5">EMAIL</h1>
            <div className="flex flex-col">
              <input type="email" className="p-2 border rounded" id="em"  />
              <label htmlFor="em" className="mb-2 ">example@example.com</label>
            </div>
          </div>
            <div className=" md:w-1/2 ">
            <h1 className="text-3xl font-bold mb-5">PHONE NUMBER</h1>
              <div className="flex flex-col">
                <input type="tel" className="p-2 border rounded" id="pn" />
                <label htmlFor="pn" className="mb-2 ">Please enter a valid phone number</label>
              </div>
            </div>
        </div>

        <div className="md:flex  gap-9">
          <div className=" md:w-1/2  ">
          <h1 className="text-3xl font-bold mb-5">COMPANY NAME</h1>
            <div className="flex flex-col">
              <input type="text" className="p-2 border rounded" id="cn"  />
              <label htmlFor="cn" className="mb-2 ">Name of Company</label>
            </div>
          </div>
            <div className=" md:w-1/2 ">
            <h1 className="text-3xl font-bold mb-5">COMPANY CONTACT</h1>
              <div className="flex flex-col">
                <input type="tel" className="p-2 border rounded" id="cp" />
                <label htmlFor="cp" className="mb-2 ">Company phone number</label>
              </div>
            </div>
        </div>

        <div className="py-4 ">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">ADDRESS</h1>
              <input type="text" className="p-2 border rounded" id="sa" />
              <label htmlFor="sa" className="mb-2">
                Street address
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">CITY</h1>
              <input type="text" className="p-2 border rounded" id="ct" />
              <label htmlFor="ct" className="mb-2">
                City
              </label>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">STATE/PROVINCE</h1>
              <input type="text" className="p-2 border rounded" id="st" />
              <label htmlFor="st" className="mb-2">
                State/Province
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">ZIP CODE</h1>
            <input type="text" className="p-2 border rounded" id="zp" />
            <label htmlFor="zp" className="mb-2">
              Zip Code
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`px-6 py-3 blue text-black font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${
                Object.keys(formErrors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={Object.keys(formErrors).length > 0}
            >
              Submit
            </button>
          </div>
        </div>
        
        
      </form>
    </>
  );
}
