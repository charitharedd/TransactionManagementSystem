import React, { useState, useEffect } from 'react';
import { getTransactions } from '../api';
import { Link } from 'react-router-dom';

const TransactionList = () => {
  const [userId, setUserId] = useState('');
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const data = await getTransactions(userId);
    setTransactions(data.transactions);
  };

  return (
    <div>
      <h2>Transaction List</h2>
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button onClick={fetchTransactions}>Fetch</button>
      </label>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.transaction_id}>
            <Link to={/transactions/${txn.transaction_id}}>
              {txn.transaction_type} - ${txn.amount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
