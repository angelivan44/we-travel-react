import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function FormField({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #4F4F4F;
  }
  input {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #4F4F4F;
    border: 1px solid #2F80ED;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px 16px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #BDBDBD;
    }
  }
`;
