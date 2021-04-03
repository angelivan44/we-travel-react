import { GiPalmTree } from "react-icons/gi"
import styled from "@emotion/styled"
import color from "../../app/color"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { fetchShowPost } from "../../features/post/postSlice"

export default function FeaturedPosts () {
  const dataApi = useSelector(state => state.post.posts.populars)
  const history = useHistory();
  const dispatch = useDispatch();
  const data = dataApi || [{service_url:[]}]
  const postsRender = data.map((post)=>{
    return (
      <Post onClick={()=>{
        dispatch(fetchShowPost(post.id))
        history.push(`/post/${post.id}`)
        }}>
          <img src={post.service_url[0]} />
          <p>{post.created_at}</p>
          <h3>{post.body}</h3>
      </Post>
    )
  })

  return (
    <StyledDiv>
      <h1>Most Popular Posts</h1>
      <div>
        {postsRender[0]}
        <div>
          {postsRender[1]}
          {postsRender[0]}
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 20px 60px;
  & > h1 {
    margin: 0;
    margin-bottom: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 61px;
    line-height: 74px;
    letter-spacing: -0.5px;
    color: ${color.purple};
  }
  & > div {
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    gap: 60px;
    height: 410px;
    & > div {
      display: flex;
      flex-flow: column;
      gap: 50px;
      flex-grow: 1;
    }
  }
`;
const Post = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: ${color.white};
  text-align: center;
  box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  & > img {
    border-radius: 5px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: brightness(80%);
  }
  & > p {
    margin: 0;
    margin-top: 75px;
  }
  & > h3 {
    margin: 0;
  };

`
