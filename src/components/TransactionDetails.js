import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTransactionById } from '../api';

const TransactionDetails = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      const data = await getTransactionById(id);
      setTransaction(data);
    };
    fetchTransaction();
  }, [id]);

  return (
    <div>
      <h2>Transaction Details</h2>
      {transaction ? (
        <pre>{JSON.stringify(transaction, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TransactionDetails;
