import styled from "@emotion/styled"
import color from "../app/color"
import FormField from "../components/UI/FormField"
import { BiUser } from "react-icons/bi"

export default function EditProfile() {
  return (
    <StyledDiv>
      <h1>Edit profile <br/>Personal information</h1>
      <StyledForm>
        <FormField size={"100%"}>
          <label>Password</label>
          <input type="password"/>
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
        <div>
          <button>X CANCEL</button>
          <button><BiUser/> SIGN UP</button>
        </div>
      </StyledForm>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width:507px;
  margin:auto;
  & > h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 59px;
    color: ${color.gris3};
    margin-bottom: 0;
  };
`
const StyledForm = styled.form`
  padding:40px; 
  & > div{
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    & > button {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 1.25px;
      text-transform: uppercase;
      color: ${color.white};
      padding: 8px 16px;
      background: #B7B7A4;
      border-radius: 16px;
      border: 1px transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  };

`