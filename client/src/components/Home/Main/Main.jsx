import React from "react";
import Form from "./Form/Form";
import { MainStyled } from "./MainStyled";

function Main() {
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
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
            <tr>
              <td>Egreso</td>
              <td>2021/02/24:10hs</td>
              <td>$300</td>
              <td>Girl shes the kind of girl that puts your down</td>
            </tr>
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
