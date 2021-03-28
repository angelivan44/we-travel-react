import styled from "@emotion/styled";
import color from "../../app/color";
import Button from "./Button";

export default function NewPosts() {
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

    }
  ]
  
  return (
    <StyledDiv>
      <h1>Newest Posts</h1>
      <div>
        {data.map(el => (
          <Card key={el.id}>
            <img src={el.img} alt={el.place}/>
            <h2>{el.place.toUpperCase()}</h2>
            <CardText>
              <h1>{el.title}</h1>
              <h3>By <span>{el.author}</span> on {el.date} </h3>
              <p>{el.description}</p>
            </CardText>
          </Card>
        ))}
        <div>
          <Button color="orange" text="BROWSE ALL POST" />
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding: 24px 117px;
  & > h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 59px;
    color: ${color.purple};
  };
  & > div {
    display: flex;
    flex-flow: column;
    gap: 30px;
    & > div{
      width: 210px;
      margin: auto;
    };
  };
`

const Card = styled.section`
  position: relative;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  & > img {
    width: 245px;
    height: 195 px;
    border-radius: 15px 0 0 15px;
  };
  & > h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    margin: 0;
    position: absolute;
    top: 15px;
    left: 13px;
    padding: 8px;
    background: #F5F5F6;
    border-radius: 5px;
  }
`
const CardText = styled.div`
  padding: 24px;
  & > h1{
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
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
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: justify;
    color: #4B5D68;
  }
`