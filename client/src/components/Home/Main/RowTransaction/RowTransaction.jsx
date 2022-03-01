import React, { useState } from "react";
import { RowTransactionStyled } from "./RowTransactionStyled";
import { FiMoreVertical } from "react-icons/fi";
import RowEditing from "./RowEditing/RowEditing";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../../../redux/reducers/transactions/actions";
import swal from "sweetalert";

function RowTransaction({ t }) {
  const [showOptions, setShowOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    swal({
      title: `Esta por borrar la transacción`,
      text: "¿esta seguro/a que desea continuar?",
      icon: "warning",
      button: "Accept",
    })
      .then((res) => dispatch(deleteTransaction(t.transaction_id)))
      .then((res) => window.location.reload(false));
  };

  return isEditing ? (
    <RowEditing t={t} setIsEditing={setIsEditing}></RowEditing>
  ) : (
    <RowTransactionStyled>
      <td>{t.type}</td>
      <td>{t.date.slice(0, 13).replace(/-|-/g, "/").replace("T", "  ")} hs</td>
      <td>${t.amount}</td>
      <td className="descriptionTd">
        {t.description ? t.description : "-"}
        <FiMoreVertical
          onClick={() => setShowOptions(!showOptions)}
          style={{
            position: "absolute",
            top: "30%",
            right: "1px",
          }}
          size="20"
          onMouseOver={(e) => (e.target.style.cursor = "pointer")}
        />
        {showOptions && (
          <div>
            <p>
              Edit<button onClick={() => setIsEditing(true)}>✏</button>
            </p>
            <p>
              Delete<button onClick={handleDelete}>🗑</button>
            </p>
          </div>
        )}
      </td>
    </RowTransactionStyled>
  );
}

export default RowTransaction;
