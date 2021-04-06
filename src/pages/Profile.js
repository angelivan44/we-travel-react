import styled from "@emotion/styled";
import ProfileBanner from "../components/UI/ProfileBanner";
import PostCard from "../components/UI/PostCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import BloggerCard from "../components/containers/BloggerCard";

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
  const sameIdentificator = current_user.id === customData.id
  const initialData = {posts_data:[],followers_data:[], following_data:[]}
  console.log(sameUser , customData , user_identificator , current_user , show_user)
  const data = customData || initialData
  const user_posts =(<StyledContainer>
    {data.posts_data.map( post => 
    {return <PostCard
    img={post.service_url[0]}
    username={data.username}
    avatar={data.avatar_url}
    release_date={post.created_at}
    title={post.title}
    description={post.description}
    likes_count={post.likes_count}
    comments_count={post.comments_count}
    location={post.location}
    id={post.id}
    user_id={data.id}
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
            {sameIdentificator&&<><input type="radio" id="followers" name="user" value="followers"/>
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
