import styled from "@emotion/styled"
import FormField from "../components/UI/FormField"
import travel1 from "../assets/images/travel1.png"
import travel2 from "../assets/images/travel2.png"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentUser, fetchLogin } from "../features/session/sessionSlice"
import color from "../app/color"
import { fetchShowUser, fetchSignUp, fetchUpdateUser, fetchUserPin } from "../features/user/userSlice"
import UserService from "../features/user/user_service"


export default function Login () {
  const [target, setTarget] = useState("login")
  const [formStep, setFormStep] = useState("step1")
  const [dataUser , setDataUser] = useState({
    email : "",
    password : "",
    username: "",
    errors : false,
    id:"",
  })
  const history = useHistory()
  const dispatch = useDispatch();
  const userState = useSelector(state => state.session)
  const userSignup = useSelector(state => state.user.user)
  const statusLogin = useSelector(state => state.session.status)
  const statusSigup = useSelector(state => state.user.status)
  function handleSubmit(email , password) {
   
    dispatch(fetchLogin({email , password}))
  }
  
useEffect(()=>{

  if(statusLogin == "success"){
    history.push("/")
  }
  
},[statusLogin])

useEffect(()=>{

  if(statusSigup=="created"){
    setFormStep("step3")
  }
  if(statusSigup=="verify"){
    setFormStep("step2")
  }
  if(statusSigup=="success"){
    dispatch(fetchShowUser(sessionStorage.getItem("user_id")))
    history.push("/profile")
  }
},[statusSigup])

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
        {userState.error&&<p>email or password incorrect</p>}
        <button type="submit">LOGIN</button>
     </StyledForm>
   ) 
  }
  
  function stepForm1 (){

    return (
    <StyledForm >

        <FormField size={"100%"}>
          <label>Username</label>
          <input type="text" name ="username"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Email</label>
          <input type="email" name="email"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Password</label>
          <input type="password" name="password"/>
        </FormField>
        {dataUser.error&&<p>{dataUser.email || ""}{dataUser.password ||""}</p>}
        <button onClick={ (e) => {
          e.preventDefault()
          const form = e.target.closest("form");
          const {username ,email , password} = form;
          dispatch(fetchSignUp({ username:username.value, email:email.value, password:password.value }))
          
          }}>NEXT</button>
    </StyledForm>)
  }
  function stepForm2 (){
    return (
    <StyledForm onSubmit={(e)=>{
        e.preventDefault();
        const form = e.target;
        const {username , name , birthdate , description , avatar , cover} = form
        const formData = new FormData();
          formData.append('name', name.value);
          formData.append('birthdate', birthdate.value);
          formData.append('description', description.value);
          formData.append('avatar', avatar.files[0]);
          formData.append('cover', cover.files[0]);
        dispatch(fetchUpdateUser({formData: formData}))
    }} >
        
        <FormField size={"100%"}>
          <label>Name</label>
          <input type="text" name="name"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Birthdate</label>
          <input type="date" name ="birthdate"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Description</label>
          <textarea  name="description"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Avatar</label>
          <input type="file" name="avatar"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Cover</label>
          <input type="file" name="cover"/>
        </FormField>
        <button type="submit">SIGN UP</button>
    </StyledForm>)
  };

  function pinForm() {
    return (
      <StyledForm>
        <FormField size={"100%"}>
          <label>Insert Pin</label>
          <input type="text" name="pin"/>
      </FormField>
      <button type="button" onClick={ async (e)=>{
        e.preventDefault();
        const form = e.target.closest("form");
        const { pin } = form;
        dispatch(fetchUserPin({id:sessionStorage.getItem("user_id"),pin: pin.value}))
        }}>Send Pin</button>
      </StyledForm>
      
    )
  };



  function SignInForm() {
    const ob =  {
      step3 : pinForm(),
      step1 : stepForm1(),
      step2 : stepForm2(),
    }
    return (
      <SignInContainer>
      <div>
        <Step active={formStep == "step1"} onClick={() => setFormStep("step1")}>
          <p>1</p>
          <div>
            <h4>{formStep == "step1" ? "in progress" : "done"}</h4>
            <h3>Login information</h3>
          </div>
        </Step>
        <Step active={formStep == "step3"} onClick={() => setFormStep("step3")}>
          <p>2</p>
            <div>
              <h4>{formStep == "step3" ? "in progress" : "pending"}</h4>
              <h3>Email Confiormation</h3>
            </div>
        </Step>
        <Step active={formStep == "step2"} onClick={() => setFormStep("step2")}>
          <p>3</p>
          <div>
            <h4>{formStep =="step2" ? "in progress" : "pending"}</h4>
            <h3>Personal information</h3>
          </div>
        </Step>
      </div>
      {ob[formStep] }
    </SignInContainer>
   ) 
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
    display: block ;
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
