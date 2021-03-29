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
  width: 350px;
  height: 144px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0px 23px;
  border: 1px solid #ffdeb1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const ContentCard = styled.div`
  line-height: 18px;
  color: #6b705c;

  & h2 {
    cursor: pointer;
    margin-bottom: 0px;
    text-shadow: -2px -2px 1px #ffdeb1, 2px 2px 1px #ffdeb1,
      -2px 2px 1px #ffdeb1, 2px -2px 1px #ffdeb1;
  }
  & p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
