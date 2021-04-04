import styled from "@emotion/styled";

import { useSelector } from "react-redux";

import Comments from "../components/Post/Comments";
import CoverPost from "../components/Post/CoverPost";
import PostDescription from "../components/Post/PostDescription";

export default function Post() {
  const post = useSelector((state) => state.post.currentPost);

  return (
    <StyledDiv>
      <CoverPost src={post.service_url[0]} />
      <PostDescription
        name={post.user.name}
        date={post.create_at}
        title={post.title}
        avatar={post.user.avatar_url}
        description={post.body}
        service_url={post.service_url}
      ></PostDescription>
      <hr />
      <Comments
        avatar={post.user.avatar_url}
        comments_data={post.comments_data}
      />
      ;
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  & hr {
    height: 1px;
    width: 100%;
    margin: 10px;
  }
`;
