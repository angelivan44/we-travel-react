import styled from "@emotion/styled";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCreatePostComment } from "../../features/comment/commentSlice";
import { fetchShowPost } from "../../features/post/postSlice";
import Replies from "./Replies";

export default function Comments({ avatar, comments_data }) {
  const [comments, setComments] = useState("");

  const currentComment = useSelector((state) => state.comment.currentComment);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchShowPost(params.id));
  }, [currentComment]);

  if (comments_data.length >= 0) {
    comments_data = comments_data.slice().sort((a, b) => b["id"] - a["id"]);
  }

  return (
    <StyledDiv>
      <h1>Comentarios</h1>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            fetchCreatePostComment({ comments: comments, id: params.id })
          );
        }}
      >
        <img src={avatar} alt="" />
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
                  <p>
                    {el.user.name}{" "}
                    <span>
                      @{el.user.username} {el.created_at}
                    </span>
                  </p>
                  <p>{el.body}</p>
                  <div>
                    <p>
                      <FaRegComment /> <span>{el.comments_count}</span>
                    </p>
                    <p>
                      <FcLike /> <span>{el.likes_count}</span>
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
