import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageTaxes = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [taxType, setTaxType] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleTaxTypeChange = (event) => {
    setTaxType(event.target.value);
  };

  const handleConfirm = () => {
    // Add logic to handle confirm button click, e.g., API call, data validation

    // Navigate to Page 2
    navigate('/admin/manageTaxes/page2');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Taxes</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="userId">
          User ID
        </label>
        <input
          className="w-full border rounded py-2 px-4"
          id="userId"
          type="text"
          value={userId}
          onChange={handleUserIdChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="taxType">
          Tax Type
        </label>
        <select
          className="w-full border rounded py-2 px-4"
          id="taxType"
          value={taxType}
          onChange={handleTaxTypeChange}
        >
          <option value="">Select Tax Type</option>
          <option value="income">Income Tax</option>
          <option value="property">Property Tax</option>
          <option value="building">Building Tax</option>
          {/* Add options for tax types */}
        </select>
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

export default ManageTaxes;
