import styled from "@emotion/styled";
import AvatarPost from "../components/Post/AvatarPost";
import CoverPost from "../components/Post/CoverPost";

const direcction = "https://i.pinimg.com/originals/90/e1/45/90e145dd0f6ffd0dbde2ddc8a9cfd588.jpg";

const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqLx7wMSo52wlsR6Z-wSojQce5u7qiQnnMA&usqp=CAU"
export default function Post() {
  return (
    <div>
      <CoverPost src={direcction}/>
      <AvatarPost src={avatar} name="@jhon" date="24-15"></AvatarPost>

    </div>
  )
}

const StyledDiv =  styled.div`
  width:100%;
  height:600px;
  min-height: 150px;
`;