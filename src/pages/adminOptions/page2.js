import React, { useState } from 'react';

const Page2 = () => {
  const [taxAmount, setTaxAmount] = useState('');
  const [taxDeadline, setTaxDeadline] = useState('');

  const handleTaxAmountChange = (event) => {
    setTaxAmount(event.target.value);
  };

  const handleTaxDeadlineChange = (event) => {
    setTaxDeadline(event.target.value);
  };

  const handleConfirm = () => {
    // Add logic to handle confirm button click, e.g., API call, data validation

    // Show popup or notification
    alert('User tax details updated');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Page 2</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="taxAmount">
          Tax Amount
        </label>
        <input
          className="w-full border rounded py-2 px-4"
          id="taxAmount"
          type="text"
          value={taxAmount}
          onChange={handleTaxAmountChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="taxDeadline">
          Tax Deadline
        </label>
        <input
          className="w-full border rounded py-2 px-4"
          id="taxDeadline"
          type="text"
          value={taxDeadline}
          onChange={handleTaxDeadlineChange}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </div>
  );
};

export default Page2;
