import { GET_ALL_TRANSACTIONS, GET_LAST_TRANSACTIONS, GET_USER_BALANCE } from "./const";

const initialState = {};

export const transactions = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TRANSACTIONS:
      return { ...state, alltransactions: [...payload.userTransactions] };
    case GET_LAST_TRANSACTIONS:
      return { ...state, lasttransactions: [...payload.userTransactions] };
    case GET_USER_BALANCE:
      return { ...state, userBalance: payload.userBalance };
    default:
      return state;
  }
};
