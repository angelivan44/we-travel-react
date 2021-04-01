import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import PostCard from "../UI/PostCard";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-top: 35px;
`;

export default function PostContainer() {
  const department = useSelector((state) => state.department.currentDepartment);
  let posts = department.posts_data;
  if (typeof posts === "undefined") {
    posts = [];
  }

  return (
    <StyledDiv>
      {posts.map((el) => (
        <PostCard
          key={el.id}
          img={el.service_url}
          username={el.user.username}
          avatar={el.user.avatar_url}
          release_date={el.created_at}
          title={el.title}
          description={el.body}
          likes_count={el.likes_count}
          comments_count={el.comments_count}
          location={el.location}
        />
      ))}
    </StyledDiv>
  );
}
