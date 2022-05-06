import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const balanceStore = useSelector((state) => state);
  console.log(balanceStore);
  return (
    <div>
      <h1>${balanceStore.balance}</h1>
    </div>
  );
};

export default Balance;
