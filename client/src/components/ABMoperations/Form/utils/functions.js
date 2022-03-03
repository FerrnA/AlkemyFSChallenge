export const handleShowForm = (formRef) => {
  formRef.current.style.display === "none"
    ? (formRef.current.style.display = "block")
    : (formRef.current.style.display = "none");
};

export const handleClick = (str, setTransactionType) => {
  if (str === "Ingress") {
    setTransactionType("Ingress");
  } else {
    setTransactionType("Egress");
  }
};
