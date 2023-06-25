import React, { useState } from 'react';

const Paytax = () => {
  const [from, setFrom] = useState('');
  const [place, setPlace] = useState('');
  const [taxType, setTaxType] = useState('');
  const [to, setTo] = useState('');
  const [amt, setAmt] = useState('');

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleTaxTypeChange = (event) => {
    setTaxType(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleAmtChange = (event) => {
    setAmt(event.target.value);
  };

  const handlePay = () => {
    // Add your payment logic here
    console.log('From:', from);
    console.log('Place:', place);
    console.log('Tax Type:', taxType);
    console.log('To:', to);
    console.log('Amount:', amt);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Pay Tax</h1>
      <div className="bg-white shadow p-6 rounded-lg w-80">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from">
            From
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="from"
            type="text"
            placeholder="Enter From"
            value={from}
            onChange={handleFromChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="place">
            Place
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="place"
            value={place}
            onChange={handlePlaceChange}
          >
            <option value="">Select Place</option>
            <option value="Kochi">Kochi</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taxType">
            Tax Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="taxType"
            value={taxType}
            onChange={handleTaxTypeChange}
          >
            <option value="">Select Tax Type</option>
            <option value="Income Tax">Income Tax</option>
            <option value="Land Tax">Land Tax</option>
            <option value="Building Tax">Building Tax</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
            To
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="to"
            type="text"
            placeholder="Enter To"
            value={to}
            onChange={handleToChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amt">
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amt"
            type="text"
            placeholder="Enter Amount"
            value={amt}
            onChange={handleAmtChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handlePay}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Paytax;
