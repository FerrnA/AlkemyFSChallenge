import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AsideButton, FormStyled } from "./FormStyled";
import { BsPlusSquare } from "react-icons/bs";
import { handleShowForm, handleClick } from "./utils/functions";
import { putTransaction } from "../../../../redux/reducers/transactions/actions";

const bgwhite = { backgroundColor: "#e9e9ed" };
const bgblue = {
  backgroundImage: "linear-gradient(to right, #4c7ed5 0 20%, #1b92bb)",
};

function Form() {
  const [transactionType, setTransactionType] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionDescription, setTransactionDescription] = useState("");
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmitForm = async () => {
    await dispatch(
      putTransaction({
        type: transactionType,
        amount: transactionAmount,
        description: transactionDescription,
      })
    );
    window.location.reload(false);
  };

  return (
    <>
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
                style={transactionType === "Ingress" ? bgblue : bgwhite}
                onClick={() => handleClick("Ingress", setTransactionType)}
              >
                Ingreso
              </button>
              <button
                style={transactionType === "Egress" ? bgblue : bgwhite}
                onClick={() => handleClick("Egress", setTransactionType)}
              >
                Egreso
              </button>
            </div>
            <div className="amountInput">
              <input
                placeholder="$    monto"
                value={transactionAmount}
                onChange={(e) => {
                  if (!isNaN(Number(e.target.value)))
                    setTransactionAmount(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="descriptionInput">
            <textarea
              placeholder="Concepto (opcional)"
              value={transactionDescription}
              onChange={(e) => setTransactionDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
      </FormStyled>
      {transactionType.length > 0 && transactionAmount.length > 0 && (
        <AsideButton>
          <button
            style={{
              backgroundImage:
                "linear-gradient(to right, #4c7ed5 0 20%, #1b92bb)",
            }}
            onClick={handleSubmitForm}
          >
            Continuar
          </button>
        </AsideButton>
      )}
    </>
  );
}

export default Form;
