/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import Logo from "../../assets/images/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "./Avatar";
import { resetuser } from "../../features/user/userSlice";
import color from "../../app/color";

export default function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const current_user = useSelector((state) => state.session.user);
  const avatar = (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        margin: 0;
        padding: 0;
        & h4 {
          color: ${color.white};
          margin: 0;
          padding: 0;
        }
      `}
      onClick={() => {
        dispatch(resetuser(current_user.id));
        history.push(`/profile`);
      }}
    >
      <Avatar src={current_user.avatar_url} type="small"></Avatar>
      <h4>{current_user.username}</h4>
    </div>
  );

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 75px;
        background: #3f4238;
      `}
    >
      <div
        onClick={() => {
          history.push("/");
        }}
      >
        <img src={Logo} alt="" />
      </div>
      <div
        css={css`
          display: flex;
          width: 50%;
          align-items: center;
          border: 2px solid ${color.crema};
          box-sizing: border-box;
          border-radius: 8px;
          padding: 8px;
          background: ${color.white};
          margin-left: 25rem;
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
          gap: 30px;
        `}
      >
        {current_user.id ? (
          avatar
        ) : (
          <Button
            color="orange"
            text="Log in"
            onClick={(e) => {
              e.preventDefault();
              history.push("/session");
            }}
          />
        )}
        <Button
          color={"verde4"}
          text="Create Post"
          onClick={(e) => {
            e.preventDefault();
            history.push("/newpost");
          }}
        />
      </div>
    </div>
  );
}
