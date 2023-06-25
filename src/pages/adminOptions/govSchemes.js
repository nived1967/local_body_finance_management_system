import React, { useState } from 'react';

const GovernmentSchemes = () => {
  const [governmentSchemes, setGovernmentSchemes] = useState([
    { id: 1, name: 'Scheme A', fundsAllocated: 5000 },
    { id: 2, name: 'Scheme B', fundsAllocated: 8000 },
    { id: 3, name: 'Scheme C', fundsAllocated: 10000 },
  ]);
  const [newSchemeName, setNewSchemeName] = useState('');
  const [newFundsAllocated, setNewFundsAllocated] = useState('');

  const handleSchemeNameChange = (event) => {
    setNewSchemeName(event.target.value);
  };

  const handleFundsAllocatedChange = (event) => {
    setNewFundsAllocated(event.target.value);
  };

  const handleAddScheme = () => {
    const newScheme = {
      id: Date.now(),
      name: newSchemeName,
      fundsAllocated: parseInt(newFundsAllocated),
    };

    setGovernmentSchemes([...governmentSchemes, newScheme]);
    setNewSchemeName('');
    setNewFundsAllocated('');
  };

  const handleDeleteScheme = (id) => {
    const updatedSchemes = governmentSchemes.filter((scheme) => scheme.id !== id);
    setGovernmentSchemes(updatedSchemes);
  };

  // Calculate the total funds allocated
  const totalFundsAllocated = governmentSchemes.reduce(
    (total, scheme) => total + scheme.fundsAllocated,
     0
  );

  // Calculate the total number of transactions
  const totalTransactions = governmentSchemes.length;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Gov. Fund</h2>
        <p className="text-lg">{totalFundsAllocated}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Total Transactions</h2>
        <p className="text-lg">{totalTransactions}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Sales Allocated</h2>
        <ul className="list-disc list-inside">
          {governmentSchemes.map((scheme) => (
            <li key={scheme.id} className="mb-2">
              <h3 className="text-lg font-semibold">{scheme.name}</h3>
              <p className="text-sm text-gray-600">
                Funds Allocated: {scheme.fundsAllocated}
              </p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleDeleteScheme(scheme.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="schemeName">
          Scheme Name
        </label>
        <input
          className="w-full border rounded py-2 px-4"
          id="schemeName"
          type="text"
          value={newSchemeName}
          onChange={handleSchemeNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1" htmlFor="fundsAllocated">
          Funds Allocated
        </label>
        <input
          className="w-full border rounded py-2 px-4"
          id="fundsAllocated"
          type="number"
          value={newFundsAllocated}
          onChange={handleFundsAllocatedChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddScheme}
      >
        Add Scheme
      </button>
    </div>
  );
};

export default GovernmentSchemes;
