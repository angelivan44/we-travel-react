import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import BloggerCard from "../containers/BloggerCard";
export default function TopBloggers() {

  const topBloggers = useSelector(state => state.user.most_populars)
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
        {topBloggers.map((user) => (
          <BloggerCard key={user.id}
            src={user.avatar_url}
            nameUser={user.name}
            content={user.description}
            user_id={user.id}
          ></BloggerCard>
        ))}
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
  flex-flow: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center
  `;