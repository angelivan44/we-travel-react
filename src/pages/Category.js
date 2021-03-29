import styled from "@emotion/styled";
import SideBar from "../components/Category/SideBar";
import Navbar from "../components/UI/Navbar";

export default function Category () {
  return (
    <div>
      <StyledDiv>
        <SideBar />
      </StyledDiv>
    </div>
  )
}
const StyledDiv = styled.div`
  display: flex;
  flex-flow: wrap;
`