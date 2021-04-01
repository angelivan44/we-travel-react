/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Button from "./Button";
import InputField from "./FormField";
import Logo from "../../assets/images/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  const location = useLocation();
  const history = useHistory();

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px 20px;
      `}
    >
      <div onClick={()=>{history.push("/")}}>
        <img src={Logo} />
      </div>
      <div
        css={css`
          display: flex;
          width: 50%;
          align-items: center;
          border: 1px solid #d5603f;
          box-sizing: border-box;
          border-radius: 8px;
          padding: 8px;
          & > input {
            border: 1px transparent;
            width: 100%;
            &:focus {
              outline: none;
            }
          }
        `}
      >
        <AiOutlineSearch />
        <input placeholder="search" />
      </div>
      <div
        css={css`
          display: flex;
          flex-flow: wrap;
          gap: 8px;
        `}
      >
        <Button color="orange" text="Log in" onClick={(e)=>{
          e.preventDefault();
          history.push("/session")
        }} />
        <Button color="white" text="Create Post" onClick={(e)=>{
          e.preventDefault();
          history.push("/newpost")
        }}/>
      </div>
    </div>
  );
}
