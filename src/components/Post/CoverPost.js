import styled from "@emotion/styled";

export default function CoverPost({ src }) {
  return (
    <StyledDiv>
      <img src={src} alt="" />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  height: 75vh;
  min-height: 150px;
  display: flex;
  & img {
    flex-grow: 1;
  }
`;
