import styled from "@emotion/styled";
import CoverPost from "../components/Post/CoverPost";
import PostDescription from "../components/Post/PostDescription";
import Navbar from "../components/UI/Navbar";

const postData = {
  title: "Mi Aventura en paracas",
  description:
    "The Paracas Peninsula is a desert peninsula within the boundaries of the Paracas National Reserve, a marine reserve that extends south along the coast of Peru. The only marine reserve in the country, it is a designated UNESCO World Heritage Site. This is to mark and preserve the archeological sites of the Paracas culture, in addition to the marine habitat The Paracas Peninsula is a desert peninsula within the boundaries of the Paracas National Reserve, a marine reserve that extends south along the coast of Peru. The only marine reserve in the country, it is a designated UNESCO World Heritage Site. This is to mark and preserve the archeological sites of the Paracas culture, in addition to the marine habitat",
  service_url: [
    "https://www.wamanadventures.com/blog/wp-content/uploads/2019/07/Maravilla-Monta%C3%B1a-de-Colores-Waman-Adventures-1.jpg",
    "https://i.pinimg.com/originals/90/e1/45/90e145dd0f6ffd0dbde2ddc8a9cfd588.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJI3dS1JKC7qTnyMURLBTeVahdPkAbSYBkWQ&usqp=CAU",
  ],
  create_at: "2021-12-10",
};

const User = {
  name: "@jhon Cañon",
  avatar_url: "https://static.toiimg.com/photo/76729750.cms",
};

export default function Post() {
  return (
    <StyledDiv>
      <Navbar></Navbar>
      <CoverPost src={postData.service_url[0]} />
      <PostDescription
        name={User.name}
        date={postData.create_at}
        title={postData.title}
        avatar={User.avatar_url}
        description={postData.description}
        service_url={postData.service_url}
      ></PostDescription>
      <hr></hr>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  & hr {
    height : 1px;
    width: 100%;
    margin:10px;
    
  }
`;
