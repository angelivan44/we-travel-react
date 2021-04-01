import styled from "@emotion/styled";
import FormField from "../components/UI/FormField";
import travel5 from "../assets/images/travel5.png";

export default function NewPost() {
  return (
    <StyledForm>
      <StyledDiv1>
        <h1>New Post</h1>
        <FormField size={"100%"}>
          <label>Title</label>
          <input type="text" name="title" />
        </FormField>
        <FormField size={"100%"}>
          <label>Description</label>
          <textarea name="description" />
        </FormField>
      </StyledDiv1>
      <StyledDiv2>
        <img src={travel5} alt="" />
        <div>
          <FormField size={"100%"}>
            <label>Cover post</label>
            <input type="file" name="cover" />
          </FormField>
          <FormField size={"100%"}>
            <label>Main image</label>
            <input type="file" name="cover" />
          </FormField>
          <FormField size={"100%"}>
            <label>Last image</label>
            <input type="file" name="cover" />
          </FormField>
          <button type="submit">New Post</button>
        </div>
      </StyledDiv2>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  padding: 34px;
`;
const StyledDiv1 = styled.div`
  width: 50%;
  & > div > textarea {
    height: 500px;
  }
`;
const StyledDiv2 = styled.div`
  padding-top: 30px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  & > div > div {
    margin-top: 8px;
  }
  & > div > button {
    float: right;
    margin-top: 8px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    padding: 8px 16px;
    background: #b7b7a4;
    border-radius: 16px;
    border: 1px transparent;
  }
`;
