import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCreatePostComment } from "../../features/comment/commentSlice";
import { fetchShowPost } from "../../features/post/postSlice";
import Replies from "./Replies";

import {FiHeart} from "react-icons/fi"
import { fetchCreateLikePost, fetchCreateLikeComment, fetchDeleteLike } from "../../features/like/likeSlice";

export default function Comments({ avatar, comments_data , comments_count,likes_count,likes=[]  }) {
  const [comments, setComments] = useState("");
  const currentUser = useSelector(state=> state.session.user)
  const current_like = useSelector(state=> state.like.currentLike)

  const currentComment = useSelector((state) => state.comment.currentComment);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchShowPost(params.id));
  }, [currentComment]);
  useEffect(() => {
    dispatch(fetchShowPost(params.id));
  }, [current_like]);

  if (comments_data.length >= 0) {
    comments_data = comments_data.slice().sort((a, b) => b["id"] - a["id"]);
  };

  const isLike = (likes_coment) =>{
    const current_like = likes_coment.find((like)=> like.user_id===currentUser.id)
    console.log("aca es el like")
    const colorFill = current_like ? {fill:"red", color:"red"} : {fill:"white", color:"black"} ;
    
    return colorFill
  }

  const toggleLike = (likes_coment) =>{
    const current_like = likes_coment.find((like)=> like.user_id===currentUser.id) 
    const data = current_like ? current_like.id : null  
    return data
  }

  const isLikePost = (likes_post) =>{
    const current_like = likes_post.find((like)=> like.user_id===currentUser.id)
    const colorFill = current_like ? {fill:"red", color:"red"} : {fill:"white", color:"black"} ;
    
    return colorFill
  }

  const toggleLikePost =(likes_post)=>{
    const current_like = likes_post.find(like => like.user_id === currentUser.id)
    const data = current_like ? current_like.id : null
    return data
  }
  return (
    <StyledDiv>
      <StyleLikes>
        <h1>Comentarios({comments_count})</h1>
        <div><FiHeart
        font-size="30px"
        fill={isLikePost(likes).fill} 
        color={isLikePost(likes).color} 
        onClick = {()=>{toggleLikePost(likes) ? dispatch(fetchDeleteLike(toggleLikePost(likes))):dispatch(fetchCreateLikePost(params.id))}}
        /><h1>({likes_count})</h1></div>
      </StyleLikes>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            fetchCreatePostComment({ comments: comments, id: params.id })
          );
        }}
      >
        <img src={currentUser.avatar_url} alt="" />
        <input
          name="body"
          onChange={(e) => {
            setComments(e.target.value);
          }}
          placeholder="Añadir un comentario"
        />
        <button type="submit">Comment</button>
      </StyledForm>
      <StyledCardContainer>
        {comments_data.map((el) => {
          return (
            <>
              <Card key={el.id}>
                <img src={el.user.avatar_url} alt="" />
                <div>
                    <span>
                      @{el.user.username} {el.created_at}
                    </span>
                  <p>{el.body}</p>
                  <div>
                  <p>
                     <FaRegComment /> <span>{el.comments_count}</span>
                  </p>
                  <p>
                    <FiHeart 
                    fill={isLike(el.likes).fill} 
                    color={isLike(el.likes).color} 
                    onClick = {()=>{toggleLike(el.likes) ? dispatch(fetchDeleteLike(toggleLike(el.likes))):dispatch(fetchCreateLikeComment(el.id))}}
                    /> <span>{el.likes_count}</span>
                  </p>
                  </div>
                </div>
              </Card>
              <Replies />
            </>
          );
        })}
      </StyledCardContainer>
    </StyledDiv>
  );
}

const StyleLikes = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  & div {
    display:flex;
    align-items:center;
  }
`

const StyledDiv = styled.div`
  padding: 62px 160px;
  & > h1 {
    margin: 0;
  }
`;
const StyledForm = styled.form`
  padding: 8px;
  border: 1px solid #ebeef0;
  box-sizing: border-box;
  margin: 40px 0;
  display: flex;
  position: relative;
  height: 120px;
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  & > input {
    width: 100%;
    height: 60px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    border: 1px transparent;
    & ::plaholder {
      color: #5b7083;
    }
    &:focus {
      outline: none;
    }
  }
  & > button {
    position: absolute;
    bottom: 16px;
    right: 16px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background: #3f4238;
    padding: 8px 16px;
    border: 1px transparent;
    border-radius: 100px;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-flow: column;
`;
const Card = styled.div`
  padding: 40px;
  display: flex;
  gap: 45px;
  align-items: center;
  border: 1px solid #ebeef0;
  box-sizing: border-box;
  & p {
    margin: 8px 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #0f1419;
    & > span {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #5b7083;
    }
  }
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  & > div > div {
    display: flex;
    gap: 10px;
  }
`;
