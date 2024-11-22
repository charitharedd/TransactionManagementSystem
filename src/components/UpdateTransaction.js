import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateTransaction } from '../api';

const UpdateTransaction = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('COMPLETED');

  const handleUpdate = async () => {
    const response = await updateTransaction(id, { status });
    alert(Transaction Updated: ${JSON.stringify(response)});
  };

  return (
    <div>
      <h2>Update Transaction #{id}</h2>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="COMPLETED">Completed</option>
          <option value="FAILED">Failed</option>
        </select>
      </label>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateTransaction;
