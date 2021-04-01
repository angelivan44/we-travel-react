import styled from "@emotion/styled";
import color from "../../app/color";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function MeetTeam() {
  const data = [
    {
      id: 1,
      img: "https://via.placeholder.com/150",
      name: "Robert TM",
      github: "google.com",
      linkedin: "google.com",
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      name: "Andromeda_019",
      github: "google.com",
      linkedin: "google.com",
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150",
      name: "Angel Huayas",
      github: "google.com",
      linkedin: "google.com",
    },
    {
      id: 4,
      img: "https://via.placeholder.com/150",
      name: "Chokolove",
      github: "google.com",
      linkedin: "google.com",
    },
  ];

  return (
    <StyledDiv>
      <h1>Meet the Team</h1>
      <CardContainer>
        {data.map((el) => (
          <Card key={el.id}>
            <img src={el.img} alt="" />
            <h1>{el.name}</h1>
            <div>
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
          </Card>
        ))}
      </CardContainer>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;
  & > h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.25px;
    color: ${color.purple};
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.article`
  width: 160px;
  & > img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  & > h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${color.black};
  }
  & > div {
    display: flex;
    justify-content: space-evenly;
    & > svg {
      cursor: pointer;
    }
  }
`;
