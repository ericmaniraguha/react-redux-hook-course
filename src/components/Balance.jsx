import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const balance = useSelector((state) => state.balance);

  const store = useSelector((state) => state);
  console.log('store', store);

  return (
    <div>
      <h1>${balance}</h1>
    </div>
  );
};

export default Balance;
