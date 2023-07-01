import { css } from "styled-components";

export const screenSizes = {
  lg: 1170,
  md: 768,
  sm: 375,
};

export const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screenSizes[label] / 16}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
