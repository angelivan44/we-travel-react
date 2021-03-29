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
export default function PostCard({ img, title }) {
  return (
    <>
      <img src={img} />
      <div className="container">
        <div className="user">
          <img />
          <div className="user-description">
            <p>username</p>
            <p>date post</p>
          </div>
        </div>
        <div className="post">
          <p className="post-title">title</p>
          <p>post description</p>
        </div>
        <div className="card-footer">
          <div>
            <p>comment count</p>
            <p>likes count</p>
          </div>
          <p>ubicacion</p>
        </div>
      </div>
    </>
  );
}
