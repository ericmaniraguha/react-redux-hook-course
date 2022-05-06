import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const balanceStore = useSelector((state) => state);

  return (
    <div>
      <h1>${balanceStore}</h1>
    </div>
  );
};

export default Balance;
