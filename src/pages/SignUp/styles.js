import styled from "styled-components";
import { colors } from "../../themes/colors";
import { media } from "../../themes/media";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100%;
  background: ${colors.white};

  .bannerImg {
    width: 100%;
  }

  ${media.md`
    max-width: none;
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
    padding: 2rem;
    border-radius: 2rem;
  `}
`;

export const SignUpContainer = styled.div`
  /* padding: 4rem; */
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
    width: 25rem;
  `}
`;
