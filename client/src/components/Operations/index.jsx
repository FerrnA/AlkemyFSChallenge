import React, { useEffect } from "react";
import { OperationsStyled } from "./OperationsStyled";
import Form from "./Form";
import RowTransaction from "./RowTransaction";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTransactions, getUserBalance } from "../../redux/reducers/transactions/actions";

function Operations() {
  const dispatch = useDispatch();
  let balance = useSelector((state) => state.transactions.userBalance);
  let data = useSelector((state) => state.transactions.allTransactions);

  const nOfTransactions = data?.length || 0;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchAllTransactions());
      dispatch(getUserBalance());
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OperationsStyled>
      <div className="balance">
        <span>Balance ${balance}</span>
      </div>
      <div className="form">
        <Form />
      </div>
      <div className="title-abm">
        <span>Historial de transacciones</span>
      </div>
      <div className="transactions">
        <table>
          <thead>
            <tr className="table-head-row">
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Concepto</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((t) => <RowTransaction t={t} key={t.trasaction_id}></RowTransaction>)}
            {/* Display a prompt in case there's no transactions in the database */}
            {nOfTransactions === 0 && (
              <div className="no-transactions">Sin transacciones registradas</div>
            )}
            {/* Add empty rows in case transactions are less than 10 */}
            {nOfTransactions < 10 &&
              [...Array(10 - nOfTransactions)].map((i) => (
                <tr className="empty-cells">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </OperationsStyled>
  );
}

export default Operations;
