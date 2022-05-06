const initialState = {
  balance: 0,
};

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + action.amount };

    case 'WITHDRAW':
      return { balance: state.balance - action.amount };

    case 'COLLECT_INTEREST':
      return { balance: state.balance * 1.08 };

    case 'DELETE_ACCOUNT':
      return { balance: 0 };

    default:
      return state;
  }
};
