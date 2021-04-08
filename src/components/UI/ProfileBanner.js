import styled from "@emotion/styled";
import { GrLocation } from "react-icons/gr";
import { FaBirthdayCake, FaTwitter } from "react-icons/fa";
import { Avatar } from "./Avatar";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowUser } from "../../features/user/userSlice";
import { useEffect } from "react";
import { fetchFollowingUser } from "../../features/session/sessionSlice";
import color from "../../app/color";

export default function ProfileBanner({
  cover,
  avatar,
  name,
  username,
  description,
  location,
  birthday,
  twitter,
  sameUser,
  user_id,
}) {
  const history = useHistory();
  const current_user = useSelector(state => state.session.user.id)
  const showUser = useSelector(state => state.user.show_user.id)
  const current_userData = useSelector(state => state.session.user)
  console.log(current_user, user_id)
  const dispatch = useDispatch();
  const isFollowing = (following_data=[])=>{
    const follow = following_data.find(follow => follow.id === showUser)
    return !!follow
  }


  return (
    <StyledDiv>
      <div>
        <img src={cover}></img>
        <StyleAvatar>
          <Avatar src={avatar} type="big"></Avatar>
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
          {sameUser ? <>
          <Button  onClick={(e)=>{
            e.preventDefault();
            history.push("/edit")}} color="verde4" text="Edit Profile">
          </Button>
          <Button onClick={(e)=>{
            e.preventDefault();
            history.push("/newpost")}} color="verde4" text="New Post">
          </Button>
          </> :
          <Button onClick={(e)=>{
            e.preventDefault();
            console.log(current_user , user_id)
            dispatch(fetchFollowingUser({user_id:current_user ,following: user_id }))}}color="verde4" text={isFollowing(current_userData.following_data) ? "Siguiendo":"Seguir"}/>}
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
    & img {
      height:50vh;
      width:100vw;
      max-height:50vh;
      background-color:${color.verde1};
    }
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