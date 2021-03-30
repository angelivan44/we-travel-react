import styled from "@emotion/styled"
import FormField from "../components/UI/FormField"
import travel1 from "../assets/images/travel1.png"
import travel2 from "../assets/images/travel2.png"
import travel3 from "../assets/images/travel3.png"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"


export default function Login () {
  const [target, setTarget] = useState("login")
  const history = useHistory()
  
  useEffect((()=>{
    
  }),[target])

  return (
    <StyledDiv>
      <h1>Welcome back</h1>
      
      <div>
        <Button val="login" text="LOGIN" target={target} onClick={() => setTarget("login")}/>
        <Button val="create" text="CREATE ACCOUNT" target={target} onClick={() => setTarget("create")}/>
      </div>
      <p>Login to you account as...</p>
      {LoginForm()}
    <img src={travel1}/>
    </StyledDiv>
  )
}

const StyledDiv =  styled.div`
  width: 360px;
  margin: auto;
  & > h1 {
    text-align:center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 59px;
    color: #373737;
  };
  & > p {
    display:  ;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #373737;
    margin-bottom: 11px;
  }
  & > img {
    width: 360px;
  };
  & > div {
    display: flex;
    flex-flow: wrap;
    gap: 11px;
  };
`
function Button({ text, val, onClick, target }) {
  return (
    <SwitchButton onClick={onClick} val={val} target={target}>{text}</SwitchButton>
  )
}
const SwitchButton = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #373737;
  border: 0;
  background: transparent;
  border-bottom: 2px solid ${(props) => props.val == props.target? "#56202D" : "#8E8E8E"};
  &:focus {
    outline: none;
  }
`

const StyledForm = styled.form`
  margin-top: 35px;
  position: relative;
  height: 200px; 
  width: 100%;
  & > button {
    position: absolute;
    bottom: 0;
    right: 0;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    padding: 8px 16px;
    background: #B7B7A4;
    border-radius: 16px;
    border: 1px transparent;
  }
`
function LoginForm() {
  return (
     <StyledForm >
       <FormField size={"100%"}>
         <label>Email</label>
         <input type="email"/>
       </FormField>
       <FormField size={"100%"}>
         <label>Password</label>
         <input type="password"/>
       </FormField>
       <button type="submit">LOGIN</button>
     </StyledForm>
   ) 
 }
