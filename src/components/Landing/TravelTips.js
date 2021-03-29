import styled from "@emotion/styled";
import color from "../../app/color";
export default function TravelTips(){
  const data = [
    {
      id: 1,
      place: "cajamarca",
      img: "https://www.playas-peru.com/wp-content/uploads/2019/01/playas-en-piura-3.jpg",
      title: "Proven Health & Lifestyle Hacks that will boost your enerhy at home ",
      author: "El Pepe",
      date: "2019-11-03",
      description: "Suspendisse ultrices at diam lectus nullam. sa dsadsadsasaswqewq Nisl, sagittis viverra enim erat tortor ultricies massa turpis.sadd sadsadds Arcu pulvinar aenean nam laoreet nulla... Leer mas"
    },
    {
      id: 2,
      place: "trujillo",
      img: "https://blog.recorrido.pe/wp-content/uploads/2020/08/Trujillo-centro.jpg",
      title: "Proven Health & Lifestyle Hacks that will boost your enerhy at home ",
      author: "El Pepe",
      date: "2019-11-03",
      description: "Suspendisse ultrices at diam lectus nullam. sa dsadsadsasaswqewq Nisl, sagittis viverra enim erat tortor ultricies massa turpis.sadd sadsadds Arcu pulvinar aenean nam laoreet nulla... Leer mas"
    },
    {
      id: 3,
      place: "tumbes",
      img: "https://d1bvpoagx8hqbg.cloudfront.net/originals/tumbes-2750fd463f92e3fc58bc4cd0737c7371.jpg",
      title: "Proven Health & Lifestyle Hacks that will boost your enerhy at home ",
      author: "El Pepe",
      date: "2019-11-03",
      description: "Suspendisse ultrices at diam lectus nullam. sa dsadsadsasaswqewq Nisl, sagittis viverra enim erat tortor ultricies massa turpis.sadd sadsadds Arcu pulvinar aenean nam laoreet nulla... Leer mas"
    },
  ]

  return (
    <StyledDiv>
      <h1>Travel Tips</h1>
      <CardContainer>
        {data.map(el => (
          <Card key={el.id}>
            <img src={el.img} alt={el.place}/>
            <CardText>
              <h3>By <span>{el.author}</span> on {el.date} </h3>
              <h1>{el.title}</h1>
              <p>{el.description}</p>
            </CardText>
          </Card>
        ))}
      </CardContainer>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding: 24px 117px;
  & > h1 {
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 59px;
    color: ${color.purple};
  };
`
const CardContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 70px;
`
const Card = styled.article`
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 240px;
  & > img {
    width: 240px;
    height: 170px;
    border-radius: 12px 12px 0 0;
  };
  
`
const CardText = styled.div`
  padding: 16px;
  & > h1{
    margin: 16px 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #484848;
  };
  & > h3 {
    margin: 0;
    margin-left: 10px;
    font-family: Inter;
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
    color: #4B5D68;
    & > span {
      text-decoration: underline;
    };
  };
  & > p {
    margin: 0;
    margin-top: 8px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #4B5D68;
  };
`