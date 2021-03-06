import styled from "@emotion/styled";
import AvatarPost from "./AvatarPost";

export default function PostDescription({ title, 
  description, 
  service_url, 
  avatar, 
  name, 
  date}) {
  return (
      <StyledDiv >
      <AvatarPost src={avatar} name={name} date={date}></AvatarPost>
      <h2>{title}</h2>
        <StyledImgRigth src={service_url[1]}/>
        <StyledP>{description}</StyledP>
      <StyledImg src={service_url[2]}/>
      
      </StyledDiv>
      );
}

const StyledDiv =  styled.div`
  width:75%;
  height:100%;
  margin: 0 auto;
  & h2 {
    text-align:center;
  }
`;

const StyledImgRigth = styled.img`
  float:left;
  width:20rem;
  height:20rem;
  border-radius:10px;
  margin:0 10px 10px 0;
`;

const StyledImg = styled.div`
  width:100%;
  height:50vh;
  background-image: url(${prop=> prop.src});
  background-size:cover;
  background-attachment:fixed;
`;

const StyledP = styled.p`
  text-align:justify;
  min-height:20rem;
  min-width:20rem;
`;