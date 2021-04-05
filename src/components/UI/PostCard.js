import styled from "@emotion/styled";
import { GrLocation } from "react-icons/gr";
import { FaRegComment, FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowUser, resetuser } from "../../features/user/userSlice";

const StyledDiv = styled.div`
  display: flex;
  cursor: pointer;
  width: 80%;
  height: 280px;
  padding: 30px;
  background: #f8f8f8;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: #484848;
  p {
    margin: 0;
  }
  & > img {
    border-radius: 8px;
    width: 50%;
    height: 258px;
  }
  & > .container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .user {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #5b7083;
    & > img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
    & > .user-description {
      display: flex;
      flex-direction: column;
    }
  }

  .post {
    display: flex;
    flex-direction: column;
    gap: 2px;
    & > p {
      font-size: 18px;
      line-height: 20px;
    }
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-top: 25px;
    & > .card-count {
      display: flex;
      gap: 10px;
    }
    & > span {
      display: flex;
      align-items: center;
      gap: 3px;
      color: #767e0f;
    }
    & > div > span {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
`;

function textCrop(text){
  return text.length > 100 ? text.substring(0,(100))+"..." : text;
}


export default function PostCard({
  img,
  username,
  user_id,
  avatar,
  release_date,
  title,
  description="",
  comments_count,
  likes_count,
  location,
  id,
}) {
  const dispatch = useDispatch();
  const current_user = useSelector(state => state.session.user.id)
  const handleProfile = (user_id)=>{
    current_user === user_id ? dispatch(resetuser(user_id)) : dispatch(fetchShowUser(user_id))
    history.push("/profile")
  }
  const history = useHistory();
  return (
    <StyledDiv>
      <img src={img} alt="" onClick={()=>{ history.push(`/post/${id}`)}}/>
      <div className="container">
        <div className="user">
          <img src={avatar} alt="" onClick={()=>{handleProfile(user_id)}}/>
          <div className="user-description">
            <p>{username}</p>
            <p>{release_date}</p>
          </div>
        </div>
        <div className="post">
          <h2 className="post-title">{title}</h2>
          <p>{textCrop(description)}</p>
        </div>
        <div className="card-footer">
          <div className="card-count">
            <span>
              <FaRegComment />
              <p>{comments_count}</p>
            </span>
            <span>
              <FaHeart />
              <p>{likes_count}</p>
            </span>
          </div>
          <span>
            <GrLocation />
            <p className="location">{location}</p>
          </span>
        </div>
      </div>
    </StyledDiv>
  );
}
