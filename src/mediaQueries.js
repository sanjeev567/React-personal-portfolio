import { css } from "styled-components";

export const smallScreen = (...args) => css`
  @media (max-width: 768px) {
    ${css(...args)}
  }
`;

export const mediumScreen = (...args) => css`
  @media (min-width: 1200px) {
    ${css(...args)}
  }
`;
