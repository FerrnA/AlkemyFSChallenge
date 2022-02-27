import React from "react";
import Form from "./Form/Form";
import { MainStyled } from "./MainStyled";

function Main({ data }) {
  const noftransactions = data?.length;

  return (
    <MainStyled>
      <div className="balance">
        <span>Balance $1232</span>
      </div>
      <div className="transactions">
        <table>
          <thead>
            <tr
              style={{
                backgroundImage:
                  "linear-gradient(to right, #8c65f6 0 20%, #019CAD)",
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
            {data &&
              data.map((t) => (
                <tr>
                  <td>{t.type}</td>
                  <td>
                    {t.date
                      .slice(0, 13)
                      .replace(/-|-/g, "/")
                      .replace("T", "  ")}
                    hs
                  </td>
                  <td>${t.amount}</td>
                  <td>{t.description ? t.description : "-"}</td>
                </tr>
              ))}
            {noftransactions === undefined && (
              <div className="sintransacciones">
                Sin transacciones registradas
              </div>
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
