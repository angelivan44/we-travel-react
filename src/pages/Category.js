import styled from "@emotion/styled";
import CategoryBanner from "../components/Category/CategoryBanner";
import SideBar from "../components/Category/SideBar";
import PostContainer from "../components/Landing/PostContainer";

export default function Category() {
  return (
    <div>
      <StyledDiv>
        <SideBar />
        <CategoryBody>
          <CategoryBanner />
          <PostContainer />
        </CategoryBody>
      </StyledDiv>
    </div>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-flow: wrap;
`;
const CategoryBody = styled.div`
  display: flex;
  width: calc(100% - 260px);
  flex-flow: column;
  padding-top: 0px;
`;
