import axios from "axios";
import { GET_ALL_TRANSACTIONS, PUT_TRANSACTION } from "./const";

export function actionCreator(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

export const fetchAllTransactions = function () {
  return async function (dispatch) {
    try {
      const res = await axios.get("/transactions");
      dispatch(actionCreator(GET_ALL_TRANSACTIONS, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const putTransaction = function (transacData) {
  return async function (dispatch) {
    try {
      const res = await axios.post("/transactions", transacData);
      dispatch(actionCreator(PUT_TRANSACTION, res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
