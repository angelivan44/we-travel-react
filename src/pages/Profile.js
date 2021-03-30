import styled from "@emotion/styled";
import ProfileBanner from "../components/UI/ProfileBanner";
import PostCard from "../components/UI/PostCard";

const data = [
  {
    cover:
      "https://www.wamanadventures.com/blog/wp-content/uploads/2019/07/Maravilla-Monta%C3%B1a-de-Colores-Waman-Adventures-1.jpg",
    avatar: "https://static.toiimg.com/photo/76729750.cms",
    name: "John GiCannon",
    username: "@jhonca",
    description:
      "Linda y acogedora cabaña en medio de la campiña oxapampina, cuenta con una vista privilegiada rodeada de pastizales y bosque, a tan solo 6 minutos del centro.",
    location: "Oxapampa, Peru",
    birthday: "25 mayo",
    twitter: "@johndoe",
    post: {
      img:
        "https://cdn.www.gob.pe/uploads/document/file/767989/standard_cajamarca.jpg",
      release_date: "Jan 12, 2021",
      title: "Mi aventura en las campanas campestres de San Matias",
      description:
        "Linda y acogedora cabaña en medio de la campiña oxapampina, cuenta con una vista privilegiada rodeada de pastizales y bosque, a tan solo 6 minutos del centro.",
      likes_count: "5",
      comments_count: "2",
      location: "Oxapampa, Peru",
    },
  },
];

const StyledDiv = styled.div`
  background-color: #ebeef0;
`;

export default function Profile() {
  return (
    <div>
      {data.map((el) => (
        <StyledDiv>
          <ProfileBanner
            cover={el.cover}
            avatar={el.avatar}
            location={el.location}
            birthday={el.birthday}
            twitter={el.twitter}
          />
          <div className="user-posts">
            <PostCard
              post={el.post.img}
              username={el.username}
              avatar={el.avatar}
              release_date={el.post.release_date}
              title={el.post.title}
              description={el.post.description}
              likes_count={el.likes_count}
              comments_count={el.comments_count}
              location={el.post.location}
            />
          </div>
        </StyledDiv>
      ))}
      ;
    </div>
  );
}
