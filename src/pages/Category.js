import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CategoryBanner from "../components/Category/CategoryBanner";
import SideBar from "../components/Category/SideBar";
import PostContainer from "../components/Landing/PostContainer";
import { fetchShowDepartment } from "../features/department/departmentSlice";

export default function Category() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
    dispatch(fetchShowDepartment(id));
  }, [pathname]);

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
