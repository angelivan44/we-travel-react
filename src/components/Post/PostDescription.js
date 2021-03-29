import styled from "@emotion/styled";
import AvatarPost from "./AvatarPost";
const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqLx7wMSo52wlsR6Z-wSojQce5u7qiQnnMA&usqp=CAU"

export default function PostDescription({ title , description , image1 , image2}) {
  return (
  <StyledDiv >
  <AvatarPost src={avatar} name="@jhon" date="24-15"></AvatarPost>
   <h2>{title}</h2>
   <StyledImgRigth src={image1}/>
   <p>{description}</p>
   <StyledImg src={image2}/>
   
  </StyledDiv>);
}

const StyledDiv =  styled.div`
  width:75%;
  height:100%;
  margin: 0 auto;
  & p {
    text-align:justify;
  }
  & h2 {
    text-align:center;
  }
`;

const StyledImgRigth = styled.img`
  float:left;
  width:20rem;
  height:75%;
  border-radius:10px;
  margin:0 10px 10px 0;
`
const StyledImg = styled.div`
  width:100%;
  height:50vh;
  background-image: url(${prop=> prop.src});
  background-size:cover;
  background-attachment:fixed;
`
