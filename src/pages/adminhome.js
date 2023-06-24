import React from 'react';

const AdminHome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Home</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Add User Transaction</h2>
          <p>Content for Adding User Transaction</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">User Transaction History</h2>
          <p>Content for User Transactions History</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Gov. Schemes</h2>
          <p>Content for Gov. Schemes</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Manage Taxes</h2>
          <p>Content for Managing Taxes</p>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
