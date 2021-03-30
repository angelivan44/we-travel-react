import styled from "@emotion/styled";
import { GrLocation } from "react-icons/gr";
import { FaBirthdayCake, FaTwitter } from "react-icons/fa";

const StyledDiv = styled.div`
  background: #ebeef0;
  & > .cover-img {
    position: absolute;
    width: 1092px;
    height: 359px;
    left: 375px;
  }
  & > .avatar-img {
    border-radius: 50%;
    width: 257px;
    height: 266px;
    position: relative;
  }
  .white-background {
    position: absolute;
    width: 100%;
    height: 510px;
    left: 0px;
    top: 411px;
    background: #ffffff;
  }
  & > .user-info {
    display: flex;
    justify-content: space-evenly;
    & > span {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
`;

export default function ProfileBanner({
  cover,
  avatar,
  location,
  birthday,
  twitter,
}) {
  return (
    <StyledDiv>
      <img className="cover-img" src={cover} />
      <div className="white-background"></div>
      <img className="avatar-img" src={avatar} />
      <div className="user-info">
        <span>
          <GrLocation />
          <p>{location}</p>
        </span>
        <span>
          <FaBirthdayCake />
          <p>{birthday}</p>
        </span>
        <span>
          <FaTwitter />
          <p>{twitter}</p>
        </span>
      </div>
    </StyledDiv>
  );
}
