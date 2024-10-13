import React from 'react';
import VirtualCard from './components/VirtualCard';
import CashFlowGraph from './components/CashFlowGraph';
import QuickTransfer from './components/QuickTransfer';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Fintech Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VirtualCard />
          </div>
          <div className="lg:col-span-1">
            <QuickTransfer />
          </div>
          <div className="lg:col-span-2">
            <CashFlowGraph />
          </div>
          <div className="lg:col-span-1">
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;