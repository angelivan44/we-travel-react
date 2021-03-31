import styled from "@emotion/styled";
import { GrLocation } from "react-icons/gr";
import { FaRegComment, FaHeart } from "react-icons/fa";

const StyledDiv = styled.div`
  display: flex;
  cursor: pointer;
  width: 80%;
  height: 280px;
  padding: 30px;
  background: #f8f8f8;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #484848;
  p {
    margin: 0;
  }
  & > img {
    border-radius: 8px;
    width: 447px;
    height: 258px;
  }
  & > .container {
    display: flex;
    flex-direction: column;
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
export default function PostCard({
  img,
  username,
  avatar,
  release_date,
  title,
  description,
  comments_count,
  likes_count,
  location,
}) {
  return (
    <StyledDiv>
      <img src={img} alt="" />
      <div className="container">
        <div className="user">
          <img src={avatar} alt="" />
          <div className="user-description">
            <p>{username}</p>
            <p>{release_date}</p>
          </div>
        </div>
        <div className="post">
          <h2 className="post-title">{title}</h2>
          <p>{description}</p>
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
