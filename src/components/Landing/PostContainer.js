import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import PostCard from "../UI/PostCard";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-top: 35px;
`;

export default function PostContainer() {
<<<<<<< HEAD

  const data = useSelector(state => state.post.posts)
  console.log(data, "esto son los post de api")
  const data2 = [
    {
      id: 1,
      img:
        "https://cdn.www.gob.pe/uploads/document/file/767989/standard_cajamarca.jpg",
      user: {
        avatar: "http://www.gravatar.com/avatar/?d=identicon",
        username: "@John",
      },
      release_date: "Jan 12, 2021",
      title: "Mi aventura en las campanas campestres de San Matias",
      description:
        "Linda y acogedora cabaña en medio de la campiña oxapampina, cuenta con una vista privilegiada rodeada de pastizales y bosque, a tan solo 6 minutos del centro.",
      likes_count: "5",
      comments_count: "2",
      location: "Oxapampa, Peru",
    },
    {
      id: 2,
      img:
        "https://cdn.www.gob.pe/uploads/document/file/767989/standard_cajamarca.jpg",
      user: {
        avatar: "http://www.gravatar.com/avatar/?d=identicon",
        username: "@John",
      },
      release_date: "Jan 12, 2021",
      title: "Mi aventura en las campanas campestres de San Matias",
      description:
        "Linda y acogedora cabaña en medio de la campiña oxapampina, cuenta con una vista privilegiada rodeada de pastizales y bosque, a tan solo 6 minutos del centro.",
      likes_count: "5",
      comments_count: "2",
      location: "Oxapampa, Peru",
    },
    {
      id: 3,
      img:
        "https://cdn.www.gob.pe/uploads/document/file/767989/standard_cajamarca.jpg",
      user: {
        avatar: "http://www.gravatar.com/avatar/?d=identicon",
        username: "@John",
      },
      release_date: "Jan 12, 2021",
      title: "Mi aventura en las campanas campestres de San Matias",
      description:
        "Linda y acogedora cabaña en medio de la campiña oxapampina, cuenta con una vista privilegiada rodeada de pastizales y bosque, a tan solo 6 minutos del centro.",
      likes_count: "5",
      comments_count: "2",
      location: "Oxapampa, Peru",
    },
  ];
=======
  const department = useSelector((state) => state.department.currentDepartment);
  let posts = department.posts_data;
  if (typeof posts === "undefined") {
    posts = [];
  }
>>>>>>> main

  return (
    <StyledDiv>
      {posts.map((el) => (
        <PostCard
          key={el.id}
<<<<<<< HEAD
          img={el.service.url[0]}
=======
          img={el.service_url}
>>>>>>> main
          username={el.user.username}
          avatar={el.user.avatar_url}
          release_date={el.created_at}
          title={el.title}
          description={el.body}
          likes_count={el.likes_count}
          comments_count={el.comments_count}
          location={el.location}
        />
      ))}
    </StyledDiv>
  );
}
