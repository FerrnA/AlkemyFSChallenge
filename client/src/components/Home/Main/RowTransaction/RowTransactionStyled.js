import styled from "styled-components";

export const RowTransactionStyled = styled.tr`
  td {
    height: 2.65rem;
    text-align: center;
    height: 2.5rem;
    border-top: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
  }
  .descriptionTd {
    position: relative;
    button {
      margin: 0 0 0 0.8rem;
      &:hover {
        cursor: pointer;
      }
    }
    div {
      position: absolute;
      top: 0.2rem;
      right: -5.5rem;
      background-color: #ededed;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 4px 0 0 4px;
      button {
        width: 1.6rem;
        height: 1.6rem;
        margin: 0 4px 4px 4px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
