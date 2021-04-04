import styled from "@emotion/styled";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCreatePostComment } from "../../features/comment/commentSlice";

export default function Comments({
  avatar,
  id,
  name,
  username,
  created_at,
  body,
  comments_count,
  likes_count,
}) {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const params = useParams();

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
          placeholder="Remember to think before write..."
        />
        <button type="submit">Comment</button>
      </StyledForm>
      <StyledCardContainer>
        {data.map((el) => (
          <Card key={id}>
            <img src={avatar} alt="" />
            <div>
              <p>
                {name}{" "}
                <span>
                  @{username} {created_at}
                </span>
              </p>
              <p>{body}</p>
              <div>
                <p>
                  <FaRegComment /> <span>{comments_count}</span>
                </p>
                <p>
                  <FcLike /> <span>{likes_count}</span>
                </p>
              </div>
            </div>
          </Card>
        ))}
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
