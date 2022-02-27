import styled from "styled-components";

export const FormStyled = styled.div`
  width: 58%;
  .transactionform {
    display: none;
  }
  .formtop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .buttonsChoice {
    button {
      width: 100px;
      height: 2rem;
    }
    button:first-child {
      border: 1px solid #8f8f9d;
      border-radius: 3px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    button:nth-child(2) {
      border: 1px solid #8f8f9d;
      border-radius: 3px;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .amountInput {
    width: 40%;
    display: flex;
    justify-content: flex-end;
  }
  .descriptionInput {
    display: flex;
    align-items: center;
    padding: 1rem 0 0 1rem;
    textarea {
      width: 100%;
      height: 7rem;
      resize: none;
    }
  }
`;
