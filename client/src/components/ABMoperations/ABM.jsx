import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ABMStyled } from "./ABMStyled";
import Form from "./Form/Form";
import RowTransaction from "./RowTransaction/RowTransaction";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTransactions } from "../../redux/reducers/transactions/actions";

function ABM() {
  const { balance } = useOutletContext();
  const dispatch = useDispatch();

  let data = useSelector((state) => state.transactions.allTransactions);
  const noftransactions = data?.length || 0;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchAllTransactions());
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ABMStyled>
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
            {noftransactions === 0 && (
              <div className="no-transactions">Sin transacciones registradas</div>
            )}
            {/* Add empty rows in case transactions are less than 10 */}
            {noftransactions < 10 &&
              [...Array(10 - noftransactions)].map((i) => (
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
    </ABMStyled>
  );
}

export default ABM;
