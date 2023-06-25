import React from 'react';

const UserTransactionHistory = () => {
  // Dummy data for user transaction history
  const transactions = [
    {
      id: 1,
      date: '2023-01-01',
      amount: 100,
      status: 'Completed',
    },
    {
      id: 2,
      date: '2023-02-01',
      amount: 200,
      status: 'Pending',
    },
    {
      id: 3,
      date: '2023-03-01',
      amount: 150,
      status: 'Completed',
    },
    // Add more dummy transactions as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Transaction History</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b font-bold text-left">Transaction ID</th>
            <th className="py-2 px-4 border-b font-bold text-left">Date</th>
            <th className="py-2 px-4 border-b font-bold text-left">Amount</th>
            <th className="py-2 px-4 border-b font-bold text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border-b">{transaction.id}</td>
              <td className="py-2 px-4 border-b">{transaction.date}</td>
              <td className="py-2 px-4 border-b">{transaction.amount}</td>
              <td className="py-2 px-4 border-b">{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTransactionHistory;
