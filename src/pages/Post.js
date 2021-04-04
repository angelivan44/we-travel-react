import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Comments from "../components/Post/Comments";
import CoverPost from "../components/Post/CoverPost";
import PostDescription from "../components/Post/PostDescription";
import { fetchShowPost } from "../features/post/postSlice";

const User = {
  name: "@jhon Cañon",
  avatar_url: "https://static.toiimg.com/photo/76729750.cms",
};

export default function Post() {
  const post = useSelector((state) => state.post.currentPost);
  const comments = post.comments;
  const data = {
    service_url: ["", ""],
    user: { email: "", avatar_url: "" },
    create_at: "",
    title: "",
    description: "",
  };

  return (
    <StyledDiv>
      <CoverPost src={post.service_url ? post.service_url[0] : ""} />
      <PostDescription
        name={post.user ? post.user.email : ""}
        date={post.create_at ? post.create_at : ""}
        title={post.title || ""}
        avatar={post.user ? post.user.avatar_url : ""}
        description={post.body || ""}
        service_url={post.service_url || []}
      ></PostDescription>
      <hr />
      {comments.map((el) => {
        <Comments 
        key={el.id}
        avatar={el.user.avatar}
        name={el.user.name}
        username={el.user.username}
        create_at={el.created_at}
        body={el.body}
        comments_count={el.comments_count}
        likes_count={el.likes_count}
        />
      })}
      
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
