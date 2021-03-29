import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
  cursor: pointer;
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
