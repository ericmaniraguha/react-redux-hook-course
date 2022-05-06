import React from 'react';
import { useSelector } from 'react-redux';

const AccountStatus = () => {
  const isSavingAccount = useSelector((state) => state.isSavingAccount);
  return (
    <div>
      <h1>{isSavingAccount ? 'Saving account' : 'Checking account'}</h1>
    </div>
  );
};

export default AccountStatus;
