import styled from "@emotion/styled";
import image from "../../assets/images/heroBanner1.jpg"

export default function HeroBanner() {
  return (
    <StyledDiv>
      <img src={image}></img>
      <h1>We Travel</h1>
      <p>Somos una comunidad de viajeros que comparten sus <br/> experiencias en cada rincón del Perú</p>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  height: 40vh;
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color:white;
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity : 0.9;
    z-index: -1;
  }
`