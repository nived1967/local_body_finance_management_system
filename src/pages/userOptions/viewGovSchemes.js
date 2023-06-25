import React from 'react';

const ViewGovernmentSchemes = () => {
  // Dummy data for government schemes
  const governmentSchemes = [
    { id: 1, name: 'Scheme A', description: 'Description of Scheme A' },
    { id: 2, name: 'Scheme B', description: 'Description of Scheme B' },
    { id: 3, name: 'Scheme C', description: 'Description of Scheme C' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View Government Schemes</h2>
      <ul className="list-disc list-inside">
        {governmentSchemes.map((scheme) => (
          <li key={scheme.id} className="mb-2">
            <h3 className="text-lg font-semibold">{scheme.name}</h3>
            <p className="text-sm text-gray-600">{scheme.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewGovernmentSchemes;
