import styled from "styled-components";

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(14, 60px);
  grid-auto-rows: 60px;
  .balance {
    grid-area: 1 / 6 / 3 / 8;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    span {
      font-size: 1.5rem;
      font-weight: 600;
      color: #b1eeb1;
    }
  }
  .transactions {
    grid-area: 3 / 3 / 11 / 11;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    position: relative;
    table {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
      width: 100%;
      border-collapse: collapse;
      tbody {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
      }
      th {
        font-weight: 600;
        height: 2.5rem;
      }
      td,
      th {
        text-align: center;
        border-top: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
      }
    }
  }
  .form {
    grid-area: 11 / 3 / 15 / 11;
    padding: 1rem;
    border: 1px solid #d9d9d9;
    display: flex;
    justify-content: flex-start;
  }
  .sintransacciones {
    border: none;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555;
  }
  @media screen and (max-width: 992px) {
    .form {
      grid-area: 11 / 2 / 16 / 12; //
      padding: 1rem; //
      border: 1px solid #d9d9d9; //
      display: flex; //
      flex-direction: column;
      justify-content: flex-start;
    }
    .transactions {
      grid-area: 3 / 2 / 11 / 12;
    }
  }
  @media screen and (max-width: 550px) {
    .form {
    }
    .transactions {
      table {
        th,
        tbody,
        td {
          font-size: 12px;
        }
      }
    }
  }
`;
