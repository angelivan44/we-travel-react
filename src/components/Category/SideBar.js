import styled from "@emotion/styled";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";
import { GiPeru } from "react-icons/gi";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import color from "../../app/color";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetuser } from "../../features/user/userSlice";

export default function SideBar(){
  const dispatch = useDispatch();
  const current_user = useSelector(state => state.session.user.id)
  const departments = useSelector(state => state.department.departments)
  const [toogle, setToogle] = useState(false)
  function handleDepartments(){
    setToogle(!toogle)
  }
  const redirectTo = ()=>{
    if(sessionStorage.getItem("token")){
      dispatch(resetuser(current_user))
      history.push("/profile")
    }
    else {
      history.push("/session")
    }
  }

  const isLogin = ()=>{
    return sessionStorage.getItem("token")
  }
  const history = useHistory();
  return (
    <StyledDiv>
      <StyledUl toogle={toogle}>
        <li onClick={()=>{history.push("/")}}><AiFillHome /> Home</li>
        <li onClick={()=>{redirectTo()}}><FaUserCircle /> {isLogin() ? "Profile" : "Login"}</li>
        <li>
          <GiPeru /> Department 
          {toogle ? <IoMdArrowDropup onClick={()=>handleDepartments()}/> : <IoMdArrowDropdown onClick={()=>handleDepartments()}/>}
          <ul>
            {departments.map((department) => {
              return (
                <li onClick={()=>{history.push(`/category/${department.id}`)}}>{department.name}</li>
              )
            })}
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