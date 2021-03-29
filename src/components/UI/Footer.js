import styled from "@emotion/styled";
import { DiRuby, DiReact } from "react-icons/di";
import { BiCopyright } from "react-icons/bi";
import color from "../../app/color";
export default function Footer() {
  const ColoredLine = ({ color, width }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: width,
      }}
    />
  );

  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    color: ${color.gris1};
    align-items: center;
    & > div > span {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    & > .description {
      display: flex;
      justify-content: space-between;
      width: 85%;
    }
    & > .technologies {
      display: flex;
      gap: 15px;
    }
  `;

  return (
    <StyledDiv>
      <ColoredLine color="red" width="90%" />
      <div className="description">
        <span>
          <BiCopyright />
          <p>2021 - WeTravel</p>
        </span>
        <p>Source Code</p>
        <p>Codeable - Cohort 3 Final Project</p>
      </div>
      <div className="technologies">
        <span>
          <DiRuby />
          <p>Ruby on Rails REST API</p>
        </span>
        <span>
          <DiReact />
          <p>React Responsive SPA</p>
        </span>
      </div>
    </StyledDiv>
  );
}
