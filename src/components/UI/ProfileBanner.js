import styled from "@emotion/styled";
import { GrLocation } from "react-icons/gr";
import { FaBirthdayCake, FaTwitter } from "react-icons/fa";
import { Avatar } from "./Avatar";
import Button from "./Button";

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
      <div>
        <img src={cover}></img>
        <StyleAvatar>
          <Avatar type="big"></Avatar>
        </StyleAvatar>
      </div>
      
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
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
        <div>
          <Button>
            Edit Profile
          </Button>
          <Button>
            New Post
          </Button>
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: #484848;
  background-color:white;
  display:flex;
  margin-top:0;
  flex-direction:column;
  align-items:center;
  & > div {
    margin:0 auto;
    & h2 {
      text-align:center;
    }

    & > p {
      width:50%;
      text-align:center;
      margin:0 auto;
      }
    & > div {
      margin-top: 10px;
      display:flex;
      gap:30px;
      justify-content:center;
      & span {
        display:flex;
        align-items:baseline;
        gap:10px;
      }
    }
  }
`;

const StyleAvatar = styled.div`
  width:100%;
  height:125px;
  margin:0;
  padding:0;
  transform: translateY(-110%)
`