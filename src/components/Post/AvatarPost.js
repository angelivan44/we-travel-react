import styled from "@emotion/styled";

export default function AvatarPost({ src , name , date}) {
  return (
    <StyledDiv>
      <StyledImg  src={src}>
      </StyledImg>
      <div>
        <h4>{name}</h4>
        <p>{date}</p>
      </div>
      
  </StyledDiv>
  );
}

const StyledImg =  styled.img`
  display:inline;
  width:78px;
  height:78px;
  border-radius:50%;
  border:solid 1px ;
  transform: translateY(-50%);
`;

const StyledDiv =  styled.div`
  display:flex;
  column-gap:6px;
  height:39px;
  & div {
    height:100%;
    margin:0;
    padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;

    & h4 {
      font-size:1rem;
      margin:0;
      padding:0;
        }
    & p {
      font-size :0.5rem;
      margin:0;
      padding:0;
    }
  }
`;
