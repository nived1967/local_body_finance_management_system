import React from 'react';

const ViewTaxRecords = () => {
  // Dummy data for tax records
  const taxRecords = [
    { id: 1, name: 'John Doe', amount: 1000, year: 2022 },
    { id: 2, name: 'Jane Smith', amount: 1500, year: 2022 },
    { id: 3, name: 'Alice Johnson', amount: 2000, year: 2022 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View Tax Records</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Year</th>
          </tr>
        </thead>
        <tbody>
          {taxRecords.map((record) => (
            <tr key={record.id}>
              <td className="py-2 px-4 border-b">{record.id}</td>
              <td className="py-2 px-4 border-b">{record.name}</td>
              <td className="py-2 px-4 border-b">{record.amount}</td>
              <td className="py-2 px-4 border-b">{record.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTaxRecords;
