import styled from "styled-components";
import { colors } from "../../themes/colors";
import { media } from "../../themes/media";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  background: ${colors.white};
  overflow: hidden;

  picture img {
    width: 100%;
  }

  ${media.md`
    width: fit-content;
    max-width: none;
    height: auto;
    max-height: 90vh;
    border-radius: 2rem;
    padding: 1rem;

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;

    picture img {
      width: 100%;
      height: 30rem;
    }
  `}
`;

export const SignUpContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.4rem;

  h1 {
    font-size: 3em;
  }

  ul > li + li {
    margin-top: 0.8rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  ${media.md`
    width: 30rem;
  `}
`;
