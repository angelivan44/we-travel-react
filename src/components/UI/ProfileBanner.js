import styled from "@emotion/styled";
import { GrLocation } from "react-icons/gr";
import { FaBirthdayCake, FaTwitter } from "react-icons/fa";

const StyledDiv = styled.div`
  background: #ebeef0;
  & > .cover-img {
    position: relative;
    width: 1092px;
    height: 359px;
    top: 150px;
    left: 375px;
    z-index: 1;
  }
  & > .avatar-img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    right: 15%;
    top: 250px;
    position: relative;
    z-index: 2;
  }
  .white-background {
    position: absolute;
    width: 100%;
    height: 420px;
    left: 0px;
    top: 411px;
    background: #ffffff;
    border: 1px solid red;
  }
  & > .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    right: 15%;
    top: 280px;
    z-index: 3;
    & > .user-info__icons {
      display: flex;
      justify-content: space-evenly;
      & > span {
        display: flex;
        align-items: center;
        gap: 3px;
      }
    }
  }
`;

export default function ProfileBanner({
  cover,
  avatar,
  name,
  username,
  description,
  location,
  birthday,
  twitter,
}) {
  return (
    <StyledDiv>
      <img className="cover-img" src={cover} alt="" />
      <div className="white-background"></div>
      <img className="avatar-img" src={avatar} alt="" />
      <div className="user-info">
        <p>{name}</p>
        <p>{username}</p>
        <p>{description}</p>
      </div>
      <div className="user-info__icons">
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
