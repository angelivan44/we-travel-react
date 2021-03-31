import styled from "@emotion/styled";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";
import { GiPeru } from "react-icons/gi";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import color from "../../app/color";
import { useState } from "react";

export default function SideBar(){
  const [toogle, setToogle] = useState(false)
  function handleDepartments(){
    setToogle(!toogle)
  }
  return (
    <StyledDiv>
      <StyledUl toogle={toogle}>
        <li><AiFillHome /> Home</li>
        <li><FaUserCircle /> Login</li>
        <li><HiPhotograph /> All Posts</li>
        <li>
          <GiPeru /> Department 
          {toogle ? <IoMdArrowDropup onClick={()=>handleDepartments()}/> : <IoMdArrowDropdown onClick={()=>handleDepartments()}/>}
          <ul>
            <li>Amazonas</li>
            <li>Anchash</li>
            <li>Apurimac</li>
            <li>Arequipa</li>
            <li>Ayacucho</li>
            <li>Cajamarca</li>
            <li>Cusco</li>
            <li>Huancavelica</li>
            <li>Huánuco</li>
            <li>Ica</li>
            <li>Junín</li>
            <li>La Libertad</li>
            <li>Lambayeque</li>
          </ul>
        </li>
      </StyledUl>
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  width: 260px;
  min-height: calc( 100vh - 172px );
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
      display: ${(props)=>props.toogle ? "inline-block":"none"};
      height:100px;
      overflow: auto;
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