import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Home</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/admin/addusertransaction")}>
          <h2 className="text-xl font-bold mb-2">Add User Transaction</h2>
          <p className="text-gray-600">Click here to add a new user transaction</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/admin/usertransactionhistory")}>
          <h2 className="text-xl font-bold mb-2">User Transaction History</h2>
          <p className="text-gray-600">View and manage user transaction history</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/admin/governmentschemes")}>
          <h2 className="text-xl font-bold mb-2">Government Schemes</h2>
          <p className="text-gray-600">Explore and manage government schemes</p>
        </div>
        <div className="bg-white shadow-xl p-6 rounded-lg cursor-pointer hover:shadow-2xl transform transition duration-300 hover:scale-105" onClick={() => navigate("/admin/managetaxes")}>
          <h2 className="text-xl font-bold mb-2">Manage Taxes</h2>
          <p className="text-gray-600">Manage and update tax information</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
