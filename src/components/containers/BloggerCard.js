import styled from "@emotion/styled";
import { Avatar } from "../UI/Avatar";

export default function BloggerCard({ src, nameUser, content }) {
  return (
    <StyledCard>
      <Avatar type={"medium"} src={src}></Avatar>
      <ContentCard>
        <h2>{nameUser}</h2>
        <p>{content}</p>
      </ContentCard>
    </StyledCard>
  );
}
const StyledCard = styled.div`
  background: #ffffff;
  width: 422px;
  display: flex;
  align-items: center;
  padding: 10px 23px;
  border: 1px solid #ffdeb1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const ContentCard = styled.div`
  /*  background-color:blue; */
  color: #6b705c;
`;
