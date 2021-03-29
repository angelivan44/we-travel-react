import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Avatar({ type, src}) {
  return (
    <AvatarContainer type={type}>
      {src ? <StyleImg src={src} type={type}></StyleImg> : <h2>NP</h2>}
    </AvatarContainer>
  );
}

const medium = css`
  width: 80px;
  height: 80px;
`;

const normal = css`
  width: 150px;
  height: 150px;
`;

const setSize = {
  medium: medium,
  normal: normal,
};

const StyleImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  ${(prop) => setSize[prop.type]}
`;

const AvatarContainer = styled.div(
  ({ type, cssProp }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ffe8d6;
    border: 1px solid #ffdeb1;
    ${setSize[type]}
    ${cssProp}
    & h2 {
      margin: 24px;
      color: #6b705c;
    }
  `
);

export { Avatar };
