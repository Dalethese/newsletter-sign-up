import styled from "styled-components";
import { colors } from "../../themes/colors";
import { media } from "../../themes/media";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  height: 100vh;
  padding: 1.4rem;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  img {
    align-self: flex-start;
  }

  ${media.md`
    height: auto;
    border-radius: 2rem;
  `}
`;
