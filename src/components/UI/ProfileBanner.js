import styled from "@emotion/styled";
import { GrLocation } from "react-icons/gr";
import { FaBirthdayCake, FaTwitter } from "react-icons/fa";

const StyledDiv = styled.div`
  background: #ebeef0;
  color: #484848;
  & > .cover-img {
    position: relative;
    width: 62%;
    height: 359px;
    top: 130px;
    left: 375px;
    z-index: 1;
  }
  & > .avatar-img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    right: 15%;
    top: 210px;
    position: relative;
    z-index: 2;
    border: 6px solid #fff;
  }
  .white-background {
    position: absolute;
    width: 100%;
    height: 480px;
    left: 0px;
    top: 411px;
    background: #ffffff;
  }
  & > .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 190px;
    z-index: 3;
    margin-left: 6%;
    & > h1 {
      margin-bottom: 0;
    }
  }
  & > .user-info__icons {
    display: flex;
    justify-content: center;
    gap: 45px;
    margin-left: 6%;
    position: relative;
    top: 210px;
    z-index: 3;
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
        <h1>{name}</h1>
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
