import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">User Home</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/user/viewtax")}>
          <h2 className="text-xl font-bold mb-2">View Tax Records</h2>
          <p className="text-gray-600">Click here to view your tax records</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/user/viewpendingtransactions")}>
          <h2 className="text-xl font-bold mb-2">View Pending Transactions</h2>
          <p className="text-gray-600">View and manage your pending transactions</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/user/viewgovschemes")}>
          <h2 className="text-xl font-bold mb-2">View Gov. Schemes</h2>
          <p className="text-gray-600">Explore and learn about government schemes</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/user/paytax")}>
          <h2 className="text-xl font-bold mb-2">Pay Tax</h2>
          <p className="text-gray-600">Pay your taxes securely and conveniently</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/user/payfine")}>
          <h2 className="text-xl font-bold mb-2">Pay Fine</h2>
          <p className="text-gray-600">Pay your fine</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
