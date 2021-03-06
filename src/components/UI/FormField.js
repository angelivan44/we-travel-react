import styled from "@emotion/styled";
import color from "../../app/color";

export default function FormField({ children, size }) {
  return <StyledDiv size={size}>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  width: ${(props) => (props.size ? props.size : "300px")};
  display: flex;
  flex-direction: column;
  gap: 4px;
  label {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #4f4f4f;
  }
  input {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
    border: 1px solid ${color.orange};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px 16px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #bdbdbd;
    }
  }
  textarea {
    width: 100%;
    height: 80px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
    border: 1px solid ${color.orange};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 8px 16px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #bdbdbd;
    }
  }
`;
