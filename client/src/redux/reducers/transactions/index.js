import { GET_ALL_TRANSACTIONS } from "./const";

const initialState = [];

export const transactions = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TRANSACTIONS:
      return [...payload.transactions];
    default:
      return state;
  }
};
