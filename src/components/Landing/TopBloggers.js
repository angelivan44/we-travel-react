import styled from "@emotion/styled";
import BloggerCard from "../containers/BloggerCard";
export default function TopBloggers() {
  const data = [
    {
      id: 1,
      avatar:
        "https://res.cloudinary.com/robcar/image/upload/v1613786735/image_1_cyn7va.png",
      name: "@Chokolove",
      description:
        "Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla",
    },
    {
      id: 2,
      avatar: "",
      name: "@Andromeda_019",
      description:
        "Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla, Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla",
    },
    {
      id: 3,
      avatar:
        "https://res.cloudinary.com/robcar/image/upload/v1613786735/image_1_cyn7va.png",
      name: "@Angel Huayas",
      description:
        "Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla",
    },
  ];

  return (
    <StyleWrapper>
      <h1>Top Bloggers</h1>
      <StyleDiv>
        <StyleWrapperCard>
          {data.map((user) => (
            <BloggerCard
              src={user.avatar}
              nameUser={user.name}
              content={user.description}
            ></BloggerCard>
          ))}
        </StyleWrapperCard>
      </StyleDiv>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.div`
  background: #a1683a;
  padding: 20px 20px 65px 20px;
  & > h1 {
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
  }
`;

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  overflow: auto;
  
`;

const StyleWrapperCard = styled.div`
  display: flex;
  gap: 16px;
  margin: auto;
  padding-right: 60px;
`;
