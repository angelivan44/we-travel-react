import styled from "@emotion/styled";

export default function Replies({ avatar }) {
  return (
    <StyledDiv>
      <StyledForm>
        <img src={avatar} alt="" />
        <input name="body" placeholder="Añadir una respuesta" />
        <button type="submit">Comment</button>
      </StyledForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-left: 30px;
  padding: 15px;
`;

const StyledForm = styled.form`
  padding: 8px;
  border: 1px solid #ebeef0;
  box-sizing: border-box;
  margin: 40px 0;
  display: flex;
  position: relative;
  height: 120px;
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  & > input {
    width: 100%;
    height: 60px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    border: 1px transparent;
    & ::plaholder {
      color: #5b7083;
    }
    &:focus {
      outline: none;
    }
  }
  & > button {
    position: absolute;
    bottom: 16px;
    right: 16px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background: #3f4238;
    padding: 8px 16px;
    border: 1px transparent;
    border-radius: 100px;
  }
`;
