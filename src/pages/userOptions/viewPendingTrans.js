import React from 'react';

const ViewPendingTransactions = () => {
  // Dummy data for pending transactions
  const pendingTransactions = [
    { id: 1, sender: 'John Doe', amount: 1000, status: 'Pending' },
    { id: 2, sender: 'Jane Smith', amount: 1500, status: 'Pending' },
    { id: 3, sender: 'Alice Johnson', amount: 2000, status: 'Pending' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View Pending Transactions</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Sender</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {pendingTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border-b">{transaction.id}</td>
              <td className="py-2 px-4 border-b">{transaction.sender}</td>
              <td className="py-2 px-4 border-b">{transaction.amount}</td>
              <td className="py-2 px-4 border-b">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPendingTransactions;
