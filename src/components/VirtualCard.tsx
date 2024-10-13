import React from 'react';
import { CreditCard } from 'lucide-react';

const VirtualCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Virtual Card</h2>
        <CreditCard size={32} />
      </div>
      <div className="mb-8">
        <p className="text-lg mb-1">Card Number</p>
        <p className="text-2xl font-mono">**** **** **** 1234</p>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-sm mb-1">Card Holder</p>
          <p className="font-semibold">John Doe</p>
        </div>
        <div>
          <p className="text-sm mb-1">Expires</p>
          <p className="font-semibold">12/25</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualCard;