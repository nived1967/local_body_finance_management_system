import React, { useState } from 'react';

const AddUserTransaction = () => {
  const [transaction, setTransaction] = useState({
    userId: '',
    taxType: '',
    amount: '',
    deadline: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle submitting the transaction to the backend
    console.log('Submitted transaction:', transaction);
    alert('Transaction added');
    // Display a success message or redirect the user to another page
  };

  // Dummy tax types for the dropdown
  const taxTypes = ['Income Tax', 'Sales Tax', 'Property Tax'];

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Add User Transaction</h1>
      <form onSubmit={handleSubmit} className="w-64">
        <div className="mb-4">
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
            User ID:
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={transaction.userId}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="taxType" className="block text-sm font-medium text-gray-700 mb-1">
            Tax Type:
          </label>
          <select
            id="taxType"
            name="taxType"
            value={transaction.taxType}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Tax Type</option>
            {taxTypes.map((taxType) => (
              <option key={taxType} value={taxType}>
                {taxType}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
            Deadline:
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={transaction.deadline}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-600"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddUserTransaction;
