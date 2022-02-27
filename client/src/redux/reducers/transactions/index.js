import { GET_ALL_TRANSACTIONS, PUT_TRANSACTION } from "./const";

const initialState = [];

export const transactions = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TRANSACTIONS:
      return [...payload.userTransactions];
    case PUT_TRANSACTION:
      return state;
    default:
      return state;
  }
};
