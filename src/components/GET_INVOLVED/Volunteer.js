import React, { useState } from 'react';

export default function Volunteer() {
  const [formErrors, setFormErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.elements.fn.value,
      lastName: e.target.elements.ln.value,
      email: e.target.elements.em.value,
      phoneNumber: e.target.elements.pn.value,
      streetAddress: e.target.elements.sa.value,
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

  const isSubmitDisabled = Object.keys(formErrors).length > 0;
  return (
    <>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div>
          <h1 className="font-bold text-3xl text-center mt-10 mb-6">Volunteer</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">First Name</h1>
              <input type="text" className="p-2 border rounded" id="fn" />
              <label htmlFor="fn" className="mb-2">First Name</label>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Last Name</h1>
              <input type="text" className="p-2 border rounded" id="ln" />
              <label htmlFor="ln" className="mb-2">Last Name</label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Email</h1>
              <input type="email" className="p-2 border rounded" id="em" />
              <label htmlFor="em" className="mb-2">example@example.com</label>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Phone Number</h1>
              <input type="tel" className="p-2 border rounded" id="pn" />
              <label htmlFor="pn" className="mb-2">Please enter a valid phone number</label>
            </div>
          </div>

          <div className="py-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Address</h1>
              <input type="text" className="p-2 border rounded" id="sa" />
              <label htmlFor="sa" className="mb-2">Street address</label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">City</h1>
              <input type="text" className="p-2 border rounded" id="ct" />
              <label htmlFor="ct" className="mb-2">City</label>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">State/Province</h1>
              <input type="text" className="p-2 border rounded" id="st" />
              <label htmlFor="st" className="mb-2">State/Province</label>
            </div>
          </div>
          <div className="flex flex-col">
              <input type="text" className="p-2 border rounded" id="zp" />
              <label htmlFor="zp" className="mb-2">Zip Code</label>
          </div>
          <div className="flex justify-center">
          <button type="submit" className={`px-6 py-3 blue text-black font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSubmitDisabled}>
            Submit
          </button>
          </div>
        </div>
      </form>
    </>
  );
}
