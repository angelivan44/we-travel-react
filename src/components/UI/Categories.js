import styled from "@emotion/styled";
import CategoryCard from "./CategoryCard"

export default function Categories ( ) {
  
  const data = [
    {
      id:1,
      img: "https://cdn.www.gob.pe/uploads/document/file/767989/standard_cajamarca.jpg",
      name: "Cajamarca",
      count: 3
    },
    {
      id:2,
      img: "https://blog.recorrido.pe/wp-content/uploads/2020/08/Trujillo-centro.jpg",
      name: "Trujillo",
      count: 0
    },
    {
      id:3,
      img: "https://www.playas-peru.com/wp-content/uploads/2019/01/playas-en-piura-3.jpg",
      name: "Piura",
      count: 5
    },
    {
      id:4,
      img: "https://d1bvpoagx8hqbg.cloudfront.net/originals/tumbes-2750fd463f92e3fc58bc4cd0737c7371.jpg",
      name: "Tumbes",
      count: 4
    },
  ]
  
  return (
    <StyledDiv>
      {data.map(el => <CategoryCard key={el.id} img={el.img} name={el.name} count={el.count} />)}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 50px;
  padding: 40px 60px;
`