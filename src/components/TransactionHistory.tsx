import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const transactions = [
  { id: 1, type: 'income', amount: 500, description: 'Salary', date: '2023-03-15' },
  { id: 2, type: 'expense', amount: 50, description: 'Groceries', date: '2023-03-14' },
  { id: 3, type: 'expense', amount: 30, description: 'Netflix', date: '2023-03-13' },
  { id: 4, type: 'income', amount: 100, description: 'Freelance', date: '2023-03-12' },
];

const TransactionHistory: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Transaction History</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center">
              {transaction.type === 'income' ? (
                <ArrowUpRight className="text-green-500 mr-2" />
              ) : (
                <ArrowDownLeft className="text-red-500 mr-2" />
              )}
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <p className={`font-semibold ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
              ${transaction.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;