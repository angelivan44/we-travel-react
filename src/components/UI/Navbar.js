/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import Button from "./StyledButton";
import InputField from "./FormField";

export default function Navbar() {
  const location = useLocation();

  return (
    <div css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      & h1{
        margin: 0;
      }
    `}>
      <div><h1>Brand</h1></div>
      <div>
        <InputField size="400">
          <input placeholder="Search" />
        </InputField>
      </div>
      <div>
        <Button>Log In</Button>
        <Button>Create Account</Button>
      </div>
    </div>
  );
}