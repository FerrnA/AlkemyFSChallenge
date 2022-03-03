import React from "react";
import { useOutletContext } from "react-router-dom";
import { HomeStyled } from "./HomeStyled";
import RowTransaction from "./RowTransaction/RowTransaction";

function Home() {
  const { data, balance } = useOutletContext();
  const noftransactions = data?.length || 0;

  return (
    <HomeStyled>
      <div className="balance">
        <span>Balance ${balance}</span>
      </div>
      <div className="title1">
        <span>Tus últimas transacciones</span>
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
