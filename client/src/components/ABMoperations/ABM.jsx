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

  let data = useSelector((state) => state.transactions.alltransactions);
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
      <div className="title1">
        <span>Historial de transacciones</span>
      </div>
      <div className="transactions">
        <table>
          <thead>
            <tr
              style={{
                backgroundImage: "linear-gradient(to right, #8c65f6 0 20%, #019CAD)",
                color: "#e2e2e2",
              }}
            >
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Concepto</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((t) => <RowTransaction t={t} key={t.trasaction_id}></RowTransaction>)}
            {noftransactions === 0 && (
              <div className="sintransacciones">Sin transacciones registradas</div>
            )}
            {noftransactions < 10 &&
              [...Array(10 - noftransactions)].map((i) => (
                <tr className="emptycells">
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
