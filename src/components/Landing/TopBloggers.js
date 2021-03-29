import styled from "@emotion/styled"
import BloggerCard from "../containers/BloggerCard"
export default function TopBloggers () {
  const data = [
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      name: "Robert TM",
      github: "google.com",
      linkedin: "google.com"
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      name: "Andromeda_019",
      github: "google.com",
      linkedin: "google.com"
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150",
      name: "Angel Huayas",
      github: "google.com",
      linkedin: "google.com"
    },
    {
      id: 4,
      img: "https://via.placeholder.com/150",
      name: "Chokolove",
      github: "google.com",
      linkedin: "google.com"
    },
  ]
  
  return (
    <StyleDiv>
      <h1>Top Bloggers</h1>
      <StyleWrapperCard>
      <BloggerCard
        src={"https://www.playas-peru.com/wp-content/uploads/2019/01/playas-en-piura-3.jpg"}
        nameUser={"@John"}
        content={
          "Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla"
        }
      ></BloggerCard>
      <BloggerCard
        
        nameUser={"@John"}
        content={
          "Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla, Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla"
        }
      ></BloggerCard>
      </StyleWrapperCard>

    </StyleDiv>
  )

}

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  gap:20px;
  padding: 20px 65px 65px 65px;
  background: #A1683A;
  & > h1{
    color: #FFFFFF;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
  }
`

const StyleWrapperCard= styled.div`
  display: flex;
  gap: 16px;
`