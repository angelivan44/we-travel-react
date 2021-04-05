import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Pagination } from "../UI/Pagination";
import PostCard from "../UI/PostCard";
import { useState } from "react";

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
  /* Para
 la Paginacion */
  const limit = 4;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <StyledDiv>
      <Pagination
        total={posts.length}
        limit={limit}
        page={currentPage}
        onSelectPage={(pageNum) => setCurrentPage(pageNum)}
      />
      {posts.slice((currentPage - 1) * limit, currentPage * limit).map((el) => (
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
          id={el.id}
        />
      ))}
      <Pagination
        total={posts.length}
        limit={limit}
        page={currentPage}
        onSelectPage={(pageNum) => setCurrentPage(pageNum)}
      />
    </StyledDiv>
  );
}
