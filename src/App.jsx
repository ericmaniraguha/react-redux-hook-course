import React from 'react';
import Banking from './components/Banking';
import Balance from './components/Balance';
import AccountStatus from './components/AccountStatus';
import Auth from './components/Auth';

const App = () => {
  return (
    <div className='container'>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
};

export default App;
