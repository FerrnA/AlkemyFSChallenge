import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastTransactions, getUserBalance } from "../../redux/reducers/transactions/actions";
import { HomeStyled } from "./HomeStyled";
import RowTransaction from "./RowTransaction";

function Home() {
  const dispatch = useDispatch();
  let balance = useSelector((state) => state.transactions.userBalance);
  let data = useSelector((state) => state.transactions.lastTransactions);

  const nOfTransactions = data?.length || 0;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchLastTransactions());
      dispatch(getUserBalance());
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeStyled>
      <div className="balance">
        <span>Balance ${balance}</span>
      </div>
      <div className="title-home">
        <span>Sus últimas transacciones</span>
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
              <div className="no-transactions">Añade nuevas transacciones para verlas aquí</div>
            )}
            {/* Add empty rows in case transactions are less than 10 */}
            {nOfTransactions < 10 &&
              [...Array(10 - nOfTransactions)].map((i) => (
                <tr className="empty-cells">
                  <td>foo</td>
                  <td>foo</td>
                  <td>foo</td>
                  <td>foo</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </HomeStyled>
  );
}

export default Home;
