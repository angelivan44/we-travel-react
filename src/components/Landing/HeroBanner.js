import styled from "@emotion/styled";
import image from "../../assets/images/heroBanner1.png";
import logo from "../../assets/images/Logo2.png";

export default function HeroBanner() {
  return (
    <StyledDiv>
      <img className="banner" src={image} alt=""></img>
      <img src={logo} alt=""></img>
      <p>
        Somos una comunidad de viajeros que comparten sus <br /> experiencias en
        cada rincón del Perú
      </p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 85vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: white;
  text-align: center;
  & > .banner {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    z-index: -1;
    object-fit: cover;
    object-position: 5% 8%;
  }
  & > p {
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
  }
`;
