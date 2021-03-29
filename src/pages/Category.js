import styled from "@emotion/styled";
import SideBar from "../components/Category/SideBar";
import PostContainer from "../components/Landing/PostContainer";
import Navbar from "../components/UI/Navbar";

export default function Category() {
  return (
    <div>
      <Navbar />
      <StyledDiv>
        <SideBar />
        <div>
          <PostContainer />
        </div>
      </StyledDiv>
    </div>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-flow: wrap;
`;
