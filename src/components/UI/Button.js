import styled from "@emotion/styled";
import color from "../../app/color";

export default function Button({ text, color, onClick }) {
  return (
    <StyledButton color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  margin-left:10px;
  padding: 7px 14px;
  background: ${(props) => (props.color ? color[props.color] : color.marron)};
  border-radius: 25px;
  color: ${(props) => (props.color === "white" ? color.orange : color.verde1)};
  border: 1px ${(props) => (props.color === "white" ? "solid" : "transparent")};
  font-family: monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 5px;
  height:35px;
  &:focus {
    outline: none;
  }
`;
