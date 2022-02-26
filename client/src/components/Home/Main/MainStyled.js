import styled from "styled-components";

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(14, 1fr);
  .balance {
    grid-area: 1 / 3 / 3 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 1.5rem;
      font-weight: 600;
      color: #b1eeb1;
    }
  }
  .transactions {
    grid-area: 3 / 2 / 11 / 6;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    table {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      width: 100%;
      border-collapse: collapse;
      tbody {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
      }
      th {
        font-weight: 600;
      }
      td,
      th {
        text-align: center;
        height: 2.5rem;
        border-top: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
      }
      td {
        height: 2.65rem;
      }
    }
  }
  .form {
    grid-area: 11 / 2 / 15 / 6;
    padding: 1rem;
    border: 1px solid #d9d9d9;
    display: flex;
    justify-content: flex-start;
  }
`;
