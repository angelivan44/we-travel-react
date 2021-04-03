import styled from "@emotion/styled";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCreatePostComment } from "../../features/comment/commentSlice";

export default function Comments() {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  const user = {
    user: "Choko",
    avatar: "https://via.placeholder.com/150",
  };
  const data = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/150",
      user: "tester1",
      user_nick: "McTester",
      created_at: new Date().toDateString(),
      body: "Queeee, noooo!!! que mala eres",
      comments: 24,
      likes: 142,
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/150",
      user: "tester2",
      user_nick: "Testi",
      created_at: new Date().toDateString(),
      body: "Que mala eres Juliana",
      comments: 2,
      likes: 57,
    },
  ];

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
        <img src={user.avatar} alt="" />
        <input
          name="body"
          onChange={(e) => {
            setComments(e.target.value);
          }}
          placeholder="Remember to thing before write..."
        />
        <button type="submit">Comment</button>
      </StyledForm>
      <StyledCardContainer>
        {data.map((el) => (
          <Card key={el.id}>
            <img src={el.avatar} alt="" />
            <div>
              <p>
                {el.user}{" "}
                <span>
                  @{el.user_nick} {el.created_at}
                </span>
              </p>
              <p>{el.body}</p>
              <div>
                <p>
                  <FaRegComment /> <span>{el.comments}</span>
                </p>
                <p>
                  <FcLike /> <span>{el.likes}</span>
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
