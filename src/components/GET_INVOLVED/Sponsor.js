import React, { useState } from 'react';

export default function Sponsor() {
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      goalInterest: e.target.elements.ta.value,
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
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div>
          <div>
            <h1 className="text-3xl font-bold">GOAL INTEREST</h1>
            <textarea
              id="ta"
              className="w-full p-4 border rounded-md resize-y focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="py-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Address</h1>
              <input type="text" className="p-2 border rounded" id="sa" />
              <label htmlFor="sa" className="mb-2">
                Street address
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">City</h1>
              <input type="text" className="p-2 border rounded" id="ct" />
              <label htmlFor="ct" className="mb-2">
                City
              </label>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">State/Province</h1>
              <input type="text" className="p-2 border rounded" id="st" />
              <label htmlFor="st" className="mb-2">
                State/Province
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Zip Code</h1>
            <input type="text" className="p-2 border rounded" id="zp" />
            <label htmlFor="zp" className="mb-2">
              Zip Code
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`px-6 py-3 blue text-black rounded-full font-bold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${
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
