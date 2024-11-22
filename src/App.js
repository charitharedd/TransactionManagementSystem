
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateTransaction from './components/CreateTransaction';
import TransactionList from './components/TransactionList';
import UpdateTransaction from './components/UpdateTransaction';
import TransactionDetails from './components/TransactionDetails';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/create">Create Transaction</Link> | 
        <Link to="/transactions">Transaction History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Transaction Management</h1>} />
        <Route path="/create" element={<CreateTransaction />} />
        <Route path="/transactions" element={<TransactionList />} />
        <Route path="/transactions/:id" element={<TransactionDetails />} />
        <Route path="/transactions/update/:id" element={<UpdateTransaction />} />
      </Routes>
    </div>
  );
};

export default App;
