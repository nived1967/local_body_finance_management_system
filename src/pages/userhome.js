import React from 'react';

const UserHome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">User Home</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">View Tax Records</h2>
          <p>Content for View Tax Records</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">View Pending Transactions</h2>
          <p>Content for View Pending Transactions</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">View Gov. Schemes</h2>
          <p>Content for View Gov. Schemes</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Pay Tax</h2>
          <p>Content for Pay Tax</p>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
