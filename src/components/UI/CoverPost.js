import styled from "@emotion/styled";
import color from "../../app/color";

export default function CoverPost({ src}) {
  return (
  <StyledDiv >
   <img src={src}/>
  </StyledDiv>);
}

const StyledDiv =  styled.div`
  width:100%;
  height:50vh;
  min-height:150px;
  display:flex;
  & img {
    flex-grow:1;
  }
`;
