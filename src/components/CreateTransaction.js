import React, { useState } from 'react';
import { createTransaction } from '../api';

const CreateTransaction = () => {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('DEPOSIT');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { amount, transaction_type: transactionType, user: userId };
    const response = await createTransaction(data);
    alert(Transaction Created: ${JSON.stringify(response)});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Transaction</h2>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </label>
      <br />
      <label>
        Transaction Type:
        <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="DEPOSIT">Deposit</option>
          <option value="WITHDRAWAL">Withdrawal</option>
        </select>
      </label>
      <br />
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTransaction;
