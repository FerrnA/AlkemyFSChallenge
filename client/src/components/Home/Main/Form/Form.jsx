import React, { useState } from "react";
import { FormStyled } from "./FormStyled";
import { BsPlusSquare } from "react-icons/bs";

const bgwhite = { backgroundColor: "#e9e9ed" };
const bgblue = {
  backgroundImage: "linear-gradient(to right, #4c7ed5 0 20%, #1b92bb)",
};

function Form() {
  const [transactionType, setTransactionType] = useState("");
  const handleClick = (str) => {
    if (str === "ingress") {
      setTransactionType("ingress");
    } else {
      setTransactionType("egress");
    }
  };
  return (
    <FormStyled>
      <BsPlusSquare />
      <span>&nbsp;Add new transaction</span>
      <div className="formtop">
        <div className="buttonsChoice">
          <button
            style={transactionType === "ingress" ? bgblue : bgwhite}
            onClick={() => handleClick("ingress")}
          >
            Ingreso
          </button>
          <button
            style={transactionType === "egress" ? bgblue : bgwhite}
            onClick={() => handleClick("egress")}
          >
            Egreso
          </button>
        </div>
        <div className="amountInput">
          <input placeholder="$    monto"></input>
        </div>
      </div>
      <div className="descriptionInput">
        <textarea placeholder="Concepto (opcional)"></textarea>
      </div>
    </FormStyled>
  );
}

export default Form;
