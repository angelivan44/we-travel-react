import styled from "@emotion/styled";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";
import { GiPeru } from "react-icons/gi";
import { IoMdArrowDropup } from "react-icons/io";
import color from "../../app/color";

export default function SideBar(){
  return (
    <StyledDiv>
      <StyledUl>
        <li><AiFillHome /> Home</li>
        <li><FaUserCircle /> Login</li>
        <li><HiPhotograph /> All Posts</li>
        <li>
          <GiPeru /> Department
          <ul>
            <IoMdArrowDropup />
            <li>Amazonas</li>
            <li>Anchash</li>
            <li>Apurimac</li>
            <li>Ayacucho</li>
          </ul>
        </li>
      </StyledUl>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  width: 200px;
  min-height: calc( 100vh - 90px );
  height: 100%;
  background: #F8F8F8;
`
const StyledUl = styled.ul`
  list-style: none;
  padding: 22px;
  margin: 100px 0 0 0;
  & > li {
    filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: ${color.black};
    & > ul {
      width: 130px;
      padding: 12px;
      margin: 0;
      margin-left: 20px;
      list-style: none;
      border: 1px solid #C4C4C4;
      box-sizing: border-box;
      position:relative;
      & > svg{
        position: absolute;
        bottom: 6px;
        right: 6px;
      }
      & > li {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.1px;
        color: ${color.black};
      };
    };
  };
`