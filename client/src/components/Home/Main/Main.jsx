import React from "react";
import Form from "./Form/Form";
import { MainStyled } from "./MainStyled";
import RowTransaction from "./RowTransaction/RowTransaction";

function Main({ data, balance }) {
  const noftransactions = data?.length;

  return (
    <MainStyled>
      <div className="balance">
        <span>Balance ${balance}</span>
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
            {noftransactions === undefined && (
              <div className="sintransacciones">Sin transacciones registradas</div>
            )}
            {noftransactions < 10 &&
              [...Array(10 - noftransactions)].map((i) => (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="form">
        <Form />
      </div>
    </MainStyled>
  );
}

export default Main;
