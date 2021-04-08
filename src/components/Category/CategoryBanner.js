import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import color from "../../app/color";

export default function CategoryBanner() {
  const department = useSelector((state) => state.department.currentDepartment);
  return (
    <StyledDiv>
      <img src={department.service_url} alt="" />
      <BannerBody>
        <h1>{department.name}</h1>
        <p>{department.description}</p>
      </BannerBody>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  & > img {
    width: 100%;
  }
`;
const BannerBody = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  & > h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 61px;
    line-height: 74px;
    letter-spacing: -0.5px;
    text-shadow:2px 2px black;
  }
  & > p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    text-shadow:2px 2px black;
    text-align:justify;
    margin-right:30px;

  }
`;
