import styled from "@emotion/styled";
import PostCard from "../UI/PostCard";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default function PostContainer() {
  const data = [
    {
      id: 1,
      img:
        "https://cdn.www.gob.pe/uploads/document/file/767989/standard_cajamarca.jpg",
      user: {
        avatar:
          "https://stackoverflow.com/questions/2683803/gravatar-is-there-a-default-image",
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
        avatar:
          "https://stackoverflow.com/questions/2683803/gravatar-is-there-a-default-image",
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
        avatar:
          "https://stackoverflow.com/questions/2683803/gravatar-is-there-a-default-image",
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

  return (
    <StyledDiv>
      {data.map((el) => (
        <PostCard
          key={el.id}
          img={el.img}
          username={el.user.username}
          avatar={el.user.avatar}
          release_date={el.release_date}
          title={title}
          description={description}
          likes_count={likes_count}
          comments_count={comments_count}
          location={location}
        />
      ))}
    </StyledDiv>
  );
}
