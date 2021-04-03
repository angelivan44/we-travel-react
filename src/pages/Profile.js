import styled from "@emotion/styled";
import ProfileBanner from "../components/UI/ProfileBanner";
import PostCard from "../components/UI/PostCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import BloggerCard from "../components/containers/BloggerCard";

// const data = {
//   id: 1,
//   email: "test@mail.com",
//   username: "test1",
//   role: "user",
//   name: "test",
//   created_at: "2021-03-31T16:29:37.605Z",
//   updated_at: "2021-04-02T19:58:14.271Z",
//   location: null,
//   birthdate: "1999-01-12",
//   social: "@test",
//   description: "A passionate Full-Stack developer from Peru peru",
//   avatar_url: "https://travel-blog-cp.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2054527726e4289e96b2bedd4096973a2d89f8be/avatar.png",
//   cover_url: "https://cdn.pixabay.com/photo/2018/02/03/15/40/landscape-3127859__340.jpg",
//   followers_data: [
//     {
//       id: 3,
//       email: "test3@mail.com",
//       username: "test3",
//       role: "user",
//       name: "test3",
//       created_at: "2021-03-31T16:29:48.338Z",
//       updated_at: "2021-03-31T16:29:49.940Z",
//       location: null,
//       birthdate: "1999-01-12",
//       social: "@test3",
//       description: "A passionate Full-Stack developer from Peru peru",
//       avatar_url: "https://travel-blog-cp.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3ac682caed4bdfea5cc29ad2e19346d3d623de49/avatar.png"
//     }
//   ],
//   following_data: [
//     {
//       id: 2,
//       email: "test2@mail.com",
//       username: "test2",
//       role: "user",
//       name: "test2",
//       created_at: "2021-03-31T16:29:43.301Z",
//       updated_at: "2021-03-31T16:29:45.291Z",
//       location: null,
//       birthdate: "1999-01-12",
//       social: "@test2",
//       description: "A passionate Full-Stack developer from Peru peru",
//       avatar_url: "https://travel-blog-cp.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf231c8c9efb3531ba4f0e30449da56ee7676347/avatar.png"
//     }
//   ],
//   posts_data: [
//     {
//       id: 1,
//       title: "test",
//       body: "asdasdasdasdsadsadsadsa",
//       likes_count: 1,
//       comments_count: 1,
//       user_id: 1,
//       department_id: 1,
//       created_at: "2021-03-31T16:29:58.893Z",
//       updated_at: "2021-03-31T16:29:58.926Z",
//       location: null,
//       service_url: [
//         "https://travel-blog-cp.herokuapp.com//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--75d054b2200178e0f97d0d6fbf320be735f7209a/cover.jpg",
//         "https://travel-blog-cp.herokuapp.com//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--721f962d93b2796a411556379c8021e7b96d237a/cover.jpg",
//         "https://travel-blog-cp.herokuapp.com//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bc0bb87e4ba2b53ec36e56e030a40a1e16276e27/cover.jpg"
//       ]
//     },
//     {
//       id: 3,
//       title: "mi viaje a tingo",
//       body: "aaaaaaaaaaa",
//       likes_count: 0,
//       comments_count: 0,
//       user_id: 1,
//       department_id: 1,
//       created_at: "2021-04-01T16:30:24.588Z",
//       updated_at: "2021-04-01T16:30:24.609Z",
//       location: null,
//       service_url: [
//         "https://travel-blog-cp.herokuapp.com//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0024457aa93b87fcd1eb43b32694202831cc7a75/tingo%20maria.jpg"
//       ]
//     },
//     {
//       id: 4,
//       title: "mi viaje a tingo",
//       body: "aaaaaaaaaaa",
//       likes_count: 0,
//       comments_count: 0,
//       user_id: 1,
//       department_id: 1,
//       created_at: "2021-04-01T16:32:58.486Z",
//       updated_at: "2021-04-01T16:32:58.503Z",
//       location: null,
//       service_url: [
//         "https://travel-blog-cp.herokuapp.com//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c25b405e3757bfa9783583e7280334b301fb2464/tingo%20maria.jpg"
//       ]
//     },
//     {
//       id: 5,
//       title: "nuevo Post",
//       body: "asasasasa",
//       likes_count: 0,
//       comments_count: 0,
//       user_id: 1,
//       department_id: 1,
//       created_at: "2021-04-01T20:00:14.833Z",
//       updated_at: "2021-04-01T20:00:14.833Z",
//       location: null,
//       service_url: []
//     },
//     {
//       id: 6,
//       title: "Mi nuevo Post",
//       body: "este es un nuevo post con 3 imagenes",
//       likes_count: 0,
//       comments_count: 0,
//       user_id: 1,
//       department_id: 1,
//       created_at: "2021-04-01T20:12:07.392Z",
//       updated_at: "2021-04-01T20:12:07.429Z",
//       location: null,
//       service_url: [
//         "https://travel-blog-cp.herokuapp.com//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--31d6e53eca0298dabd9b592609012a38ea3b5783/images.jpeg",
//         "https://travel-blog-cp.herokuapp.com//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f58203dc60617c8626b7eb49adc7e1bd7b7278c4/laguna%20tingo%20maria.jpeg",
//         "https://travel-blog-cp.herokuapp.com//rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7f42f67014fae3345a25e3dbf321ee7ca58114bc/tingo%20maria.jpg"
//       ]
//     }
//   ],
//   comments: [
//     {
//       id: 2,
//       user_id: 1,
//       commentable_id: 2,
//       commentable_type: "Post",
//       created_at: "2021-03-31T16:30:07.520Z",
//       updated_at: "2021-03-31T16:30:07.520Z",
//       body: "ggwp"
//     }
//   ],
//   likes: [
//     {
//       id: 1,
//       user_id: 1,
//       likeable_id: 1,
//       likeable_type: "Post",
//       created_at: "2021-03-31T16:29:58.898Z",
//       updated_at: "2021-03-31T16:29:58.898Z"
//     }
//   ]
// }


const StyledDiv = styled.div`
  background-color: #ebeef0;
  display: flex;
  flex-direction: column;
  & > .profile-body {
    display: flex;
    gap: 15px;
    margin: 0 auto;
  }
  .profile-aside {
    width: 300px;
    height: 400px;
    background: #fff;
    border-radius: 10px;
    padding: 20px 0;
    margin-right: 200px;
    color: #484848;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    font-weight: bold;
  }
  & hr {
    height:1px;
    width:100%;
  }
`;

const StyledOptions = styled.div`
  display:flex;
  gap:30px;
  margin:0 auto;
  & input {
    display:none;
  }
  & input:checked  + label{
      color:red;
    };
  
`

const StyledContainer = styled.div`
  display:grid;
  margin: 10px auto;
  grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
  grid-auto-rows: 300px;
`

export default function Profile() {
  const current_user = useSelector(state => state.session.user)
  const show_user = useSelector(state => state.user.show_user )
  const user_identificator = useSelector(state => state.user.user_id)
  const [currentView , setCurrentView] = useState("posts")
  const sameUser = current_user.id === show_user.id
  const customData = sameUser ? current_user : (current_user.id === user_identificator ? current_user : show_user )

  const initialData = {posts_data:[],followers_data:[], following_data:[]}
  const data = customData || initialData
  const user_posts =(<StyledContainer>
    {data.posts_data.map( post => 
    {return <PostCard
    post={post.service_url[0]}
    username={data.username}
    avatar={data.avatar_url}
    release_date={post.created_at}
    title={post.title}
    description={post.description}
    likes_count={post.likes_count}
    comments_count={post.comments_count}
    location={post.location}
  />})}</StyledContainer>)

  const user_followers = (<StyledContainer>
    {data.followers_data.map(follower =>{
      return <BloggerCard
              src={follower.avatar_url}
              nameUser={follower.username}
              content={follower.description}
              />  
    })}
  </StyledContainer>)

  const user_followings = (<StyledContainer>
    {data.following_data.map(following =>{
      return <BloggerCard
              src={following.avatar_url}
              nameUser={following.username}
              content={following.description}
              />  
    })}
  </StyledContainer>)

const setViewObject = {
  followers: user_followers,
  followings: user_followings,
  posts: user_posts,
}
  return (
    <div>
        <StyledDiv>
          <div>
            <ProfileBanner
              cover={data.cover_url}
              avatar={data.avatar_url}
              name={data.name}
              username={data.username}
              description={data.description}
              location={data.location}
              birthday={data.birthdate}
              twitter={data.social}
            />
          </div>
          <hr></hr>
          <StyledOptions onChange={(e)=>{
            const input = e.target
            setCurrentView(input.value)
          }} >
            {sameUser&&<><input type="radio" id="followers" name="user" value="followers"/>
            <label for="followers">followers</label>
            <input type="radio" id="followings" name="user" value="followings"/>
            <label for="followings">followings</label></>}
            <input type="radio" id="posts" name="user" value="posts"/>
            <label for="posts">posts</label>
          </StyledOptions>
           {setViewObject[currentView]}
        </StyledDiv>
    </div>
  );
}
