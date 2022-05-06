import React from 'react';

const Banking = () => {
  return (
    <div className='form-group'>
      <button className='btn btn-success'>Deposit</button>
      <button className='btn btn-primary'>Withdraw</button>
      <button className='btn btn-warning'>Collect Interest</button>
      <button className='btn btn-danger'>Delete Account</button>
      <button className='btn btn-secondary'>Change Account type</button>
    </div>
  );
};

export default Banking;
