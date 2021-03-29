import styled from "@emotion/styled";
import color from "../../app/color";

const StyledDiv = styled.div`
  display: flex;
  cursor: pointer;
  width: 1106px;
  height: 322px;
  padding: 30px;
  background: #f8f8f8;
  justify-content: center;
  & > .img {
    border-radius: 8px;
    width: 447px;
    height: 258px;
    position: absolute;
  }
  & > .container {
    display: flex;
    flex-direction: column;
  }
  .user {
    display: flex;
    gap: 3px;
  }
  .user-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & > .post {
    display: flex;
    flex-direction: column;
    gap: 2px;
    & > .post-title {
      font-weight: bold;
    }
  }
  & > .card-footer {
    display: flex;
    justify-content: space-between;
  }
`;
export default function PostCard({
  img,
  username,
  avatar,
  release_date,
  title,
  description,
  comment_count,
  likes_count,
  location,
}) {
  return (
    <StyledDiv>
      <img src={img} />
      <div className="container">
        <div className="user">
          <img src={avatar} />
          <div className="user-description">
            <p>{username}</p>
            <p>{release_date}</p>
          </div>
        </div>
        <div className="post">
          <p className="post-title">{title}</p>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <div>
            <p>{comment_count}</p>
            <p>{likes_count}</p>
          </div>
          <p>{location}</p>
        </div>
      </div>
    </StyledDiv>
  );
}
