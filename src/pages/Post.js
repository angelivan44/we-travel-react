import styled from "@emotion/styled";
import AvatarPost from "../components/Post/AvatarPost";
import CoverPost from "../components/Post/CoverPost";
import PostDescription from "../components/Post/PostDescription";
import Navbar from "../components/UI/Navbar";

const direcction = "https://i.pinimg.com/originals/90/e1/45/90e145dd0f6ffd0dbde2ddc8a9cfd588.jpg";

const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqLx7wMSo52wlsR6Z-wSojQce5u7qiQnnMA&usqp=CAU"
export default function Post() {
  return (
    <div>
      <Navbar></Navbar>
      <CoverPost src={direcction}/>
      <PostDescription 
      description="
      La comprensión de lectura mide la aptitud para captar el sentido de un
      escrito, distinguir entre ideas principales y secundarias, extraer
      conclusiones, hacer interpretaciones y establecer relaciones.
      Consta de textos cortos y largos seguidos de ítems referidos a ellos. Es
      necesario leer cuidadosamente cada texto que se presenta; luego, se debe
      leer por separado cada ítem y analizar las cinco opciones para seleccionar
      entre ellas, la correcta.
      Las respuestas de los ítems deben basarse únicamente en lo que dice el
      texto, sin tomar en cuenta los conocimientos o información que al respecto
      usted poseasssssssss." 
      title="aaaaaaaaaaaa"
      image1 = {avatar}
      image2 = {direcction}
      ></PostDescription>

    </div>
  )
}

const StyledDiv =  styled.div`
  width:100%;
  height:600px;
  min-height: 150px;
`;