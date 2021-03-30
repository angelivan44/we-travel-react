import styled from "@emotion/styled"
import FormField from "../components/UI/FormField"
import travel1 from "../assets/images/travel1.png"
import travel2 from "../assets/images/travel2.png"
import travel3 from "../assets/images/travel3.png"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { fetchLogin } from "../features/session/sessionSlice"
import color from "../app/color"


export default function Login () {
  const [target, setTarget] = useState("login")
  const [formStep, setFormStep] = useState(1)
  const history = useHistory()
  const dispatch = useDispatch();

  function handleSubmit(email , password) {
   
    dispatch(fetchLogin({email , password}))
  }
  
  useEffect((()=>{
    
  }),[target])

  return (
    <StyledDiv>
      <h1>Welcome {target == "login" ? "back" : ""}</h1>
      
      <div>
        <Button val="login" text="LOGIN" target={target} onClick={() => setTarget("login")}/>
        <Button val="signIn" text="CREATE ACCOUNT" target={target} onClick={() => setTarget("signIn")}/>
      </div>
      {target == "login" ? LoginForm() : SignInForm()}
    <img src={target == "login" ? travel1 : travel2}/>
    </StyledDiv>
  )
  
  function Button({ text, val, onClick, target }) {
    return (
      <SwitchButton onClick={onClick} val={val} target={target}>{text}</SwitchButton>
      )
    }
    
    function LoginForm() {

      return (
        <StyledForm onSubmit = {(e) => {
          e.preventDefault();
          const form = e.target;
          console.log(form)
          const {email , password} = form;
          handleSubmit(email.value , password.value)
         
        }}>
        <p>Login to you account as...</p>
        <FormField size={"100%"}>
          <label>Email</label>
          <input type="email" name="email"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Password</label>
          <input type="password" name="password"/>
        </FormField>
        <button type="submit">LOGIN</button>
     </StyledForm>
   ) 
  }
  function SignInForm() {
    return (
      <SignInContainer>
      <div>
        <Step active={formStep == 1} onClick={() => setFormStep(1)}>
          <p>1</p>
          <div>
            <h4>{formStep == 1 ? "in progress" : "done"}</h4>
            <h3>Login information</h3>
          </div>
        </Step>
        <Step active={formStep == 2} onClick={() => setFormStep(2)}>
          <p>2</p>
          <div>
            <h4>{formStep ==2 ? "in progress" : "pending"}</h4>
            <h3>Personal information</h3>
          </div>
        </Step>
      </div>
      {formStep == 1 ? stepForm1() : stepForm2() }
    </SignInContainer>
   ) 
  }
  function stepForm1 (){
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
        <button onClick={ (e) => {
          e.preventDefault()
          setFormStep(2)
          }}>NEXT</button>
    </StyledForm>)
  }
  function stepForm2 (){
    return (
    <StyledForm >
        <FormField size={"100%"}>
          <label>Username</label>
          <input type="text"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Name</label>
          <input type="text"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Birthdate</label>
          <input type="date"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Description</label>
          <textarea />
        </FormField>
        <FormField size={"100%"}>
          <label>Avatar</label>
          <input type="file"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Cover</label>
          <input type="file"/>
        </FormField>
        <button>SIGN UP</button>
    </StyledForm>)
  }
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
    color: ${color.gris3};
  };
  & > img {
    width: 360px;
  };
  & > div {
    display: flex;
    flex-flow: wrap;
    gap: 11px;
  };
`

const SignInContainer = styled.div`
  & > div{
    display: flex;
    gap:16px;
  };
`
const Step = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap:8px;
  & > p {
    display:flex;
    align-items: center;
    justify-content:center;
    width: 35px;
    height: 35px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${color.white};
    background: ${(props) => props.active ? color.orange : "#E1E2E1"};
    border-radius: 50% ;
    margin: 8px 0;
  };
  & > div > h4{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${(props) => props.active ? color.gris3 : color.gris2};
    margin:0;
  };
  & > div > h3{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: ${(props) => props.active ? color.gris3 : color.gris2};
    margin:0;
  };
`

const SwitchButton = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${color.gris3};
  border: 0;
  background: transparent;
  border-bottom: 2px solid ${(props) => props.val == props.target? "#56202D" : "#8E8E8E"};
  &:focus {
    outline: none;
  }
`

const StyledForm = styled.form`
  width: 100%;
  & > p {
    display:  ;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: ${color.gris3};
    margin-bottom: 11px;
  }
  & > button {
    float:right;
    margin-top: 8px;
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
