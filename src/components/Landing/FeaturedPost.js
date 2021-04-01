<<<<<<< HEAD
import { GiPalmTree } from "react-icons/gi"
import styled from "@emotion/styled"
import color from "../../app/color"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { fetchShowPost } from "../../features/post/postSlice"

export default function FeaturedPosts () {
  const data = useSelector(state => state.post.posts)
  const history = useHistory();
  const dispatch = useDispatch();
  
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

=======
import styled from "@emotion/styled";
import color from "../../app/color";

export default function FeaturedPosts() {
  const data = [
    {
      id: 1,
      img:
        "https://d1bvpoagx8hqbg.cloudfront.net/originals/tumbes-2750fd463f92e3fc58bc4cd0737c7371.jpg",
      date: "2020-04-05",
      description: "Best Travel guide to Tumbes!",
    },
    {
      id: 2,
      img:
        "https://blog.recorrido.pe/wp-content/uploads/2020/08/Trujillo-centro.jpg",
      date: "2020-04-20",
      description: "The 101 restaurantes present: Trujillo",
    },
    {
      id: 3,
      img:
        "https://www.playas-peru.com/wp-content/uploads/2019/01/playas-en-piura-3.jpg",
      date: "2020-01-05",
      description: "Best places to travel with Familiy",
    },
  ];
>>>>>>> main
  return (
    <StyledDiv>
      <h1>Most Popular Posts</h1>
      <div>
<<<<<<< HEAD
        {postsRender[0]}
        <div>
          {postsRender[1]}
          {postsRender[0]}
=======
        <Post>
          <img src={data[0].img} alt="" />
          <p>{data[0].date}</p>
          <h3>{data[0].description}</h3>
        </Post>
        <div>
          <Post>
            <img src={data[1].img} alt="" />
            <p>{data[1].date}</p>
            <h3>{data[1].description}</h3>
          </Post>
          <Post>
            <img src={data[2].img} alt="" />
            <p>{data[2].date}</p>
            <h3>{data[2].description}</h3>
          </Post>
>>>>>>> main
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
<<<<<<< HEAD
  };

`
=======
  }
`;
>>>>>>> main
