import styled from "@emotion/styled";
import color from "../../app/color";

export default function Button({ text, color }) {
  return <StyledButton color={color}>{text}</StyledButton>;
}

const StyledButton =  styled.button`
  cursor: pointer;
  padding: 8px 16px;
  background: ${props => props.color ? color[props.color] : color.marron};
  border-radius: 8px;
  color: ${props => props.color === "white" ? color.orange : "white"};
  border: 1px ${props => props.color === "white" ? "solid" : "transparent"};
  font-family: 'Rubik';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  &:focus {
    outline: none;
  }
`;
