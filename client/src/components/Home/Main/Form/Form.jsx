import React, { useRef, useState } from "react";
import { FormStyled } from "./FormStyled";
import { BsPlusSquare } from "react-icons/bs";
import { handleShowForm, handleClick } from "./utils/functions";

const bgwhite = { backgroundColor: "#e9e9ed" };
const bgblue = {
  backgroundImage: "linear-gradient(to right, #4c7ed5 0 20%, #1b92bb)",
};

function Form() {
  const [transactionType, setTransactionType] = useState("");
  const formRef = useRef();
  return (
    <FormStyled>
      <BsPlusSquare
        onClick={() => handleShowForm(formRef)}
        style={{ margin: "0 1.4rem 0 4rem" }}
      />
      <span>Add new transaction</span>
      <div className="transactionform" ref={formRef}>
        <div className="formtop">
          <div className="buttonsChoice">
            <button
              style={transactionType === "ingress" ? bgblue : bgwhite}
              onClick={() => handleClick("ingress", setTransactionType)}
            >
              Ingreso
            </button>
            <button
              style={transactionType === "egress" ? bgblue : bgwhite}
              onClick={() => handleClick("egress", setTransactionType)}
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
      </div>
    </FormStyled>
  );
}

export default Form;
