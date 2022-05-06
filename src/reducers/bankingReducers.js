const initialState = 0;

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.amount;

    case 'WITHDRAW':
      return state - action.amount;

    case 'COLLECT_INTEREST':
      return state * 1.04;
    case 'DELETE_ACCOUNT':
      return 0;

    default:
      return state;
  }
};

//actions

//deposit

const deposit = {
  type: 'DEPOSIT',
  amount: 150,
};

//Withdraw
const withdraw = {
  type: 'WITHDRAW',
  amount: 50,
};

//collect interest
const collectInterest = {
  type: 'COLLECT_INTEREST',
};

//delete account
const deleteAccount = {
  type: 'DELETE_ACCOUNT',
};
