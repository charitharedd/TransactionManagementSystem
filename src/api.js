const API_BASE_URL = 'https://your-api-url.com/api/transactions';

export const createTransaction = async (data) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getTransactions = async (userId) => {
  const response = await fetch(${API_BASE_URL}?user_id=${userId});
  return response.json();
};

export const getTransactionById = async (id) => {
  const response = await fetch(${API_BASE_URL}/${id});
  return response.json();
};

export const updateTransaction = async (id, data) => {
  const response = await fetch(${API_BASE_URL}/${id}, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};
