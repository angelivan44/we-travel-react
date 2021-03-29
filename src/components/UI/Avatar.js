import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Avatar({ type, src }) {
  return (
    <AvatarContainer type={type} avatarUrl={src}>
      {src ? "" : <h2>NP</h2>}
    </AvatarContainer>
  );
}

const medium = css`
  width: 80px;
  height: 80px;
`;

const normal = css`
  width: 120px;
  height: 100px;
`;

const setSize = {
  medium: medium,
  normal: normal,
};

const AvatarContainer = styled.div(
  ({ avatarUrl, type, cssProp }) => css`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-image: url(${avatarUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #ffe8d6;
    border: 1px solid #ffdeb1;
    ${setSize[type]}
    ${cssProp}
  `
);

export { Avatar };
