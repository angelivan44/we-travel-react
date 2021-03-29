import styled from "@emotion/styled";
import color from "../../app/color";

export default function CategoryBanner () {
  const data = {
    img: "https://viajes.nationalgeographic.com.es/medio/2018/03/01/machu-picchu_5ff969ae_1280x720.jpg",
    title: "CUSCO",
    description: "Cusco se extiende a lo largo del valle del río Huatanay (o Watanay). Ubicado en el extremo oriental del Nudo de Cusco , su elevación es de alrededor de 3.400 m (11.200 pies). Al norte está la cordillera de Vilcabamba con montañas de 4.000 a 6.000 metros de altura (13.000 a 20.000 pies). El pico más alto es el Salcantay (6.271 metros o 20.574 pies) a unos 60 kilómetros (37 millas) al noroeste de Cusco. "
  }

  return (
    <StyledDiv>
      <img src={data.img} />
      <BannerBody>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </BannerBody>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
  & > img {
    width: 100%;
  };
`
const BannerBody = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: ${color.white};
  & > h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 61px;
    line-height: 74px;
    letter-spacing: -0.5px;
  };
  & > p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
  }
`