import styled from "styled-components";
import { colors } from "../../themes/colors";

export const Container = styled.div`
  width: 375px;
  height: 100%;
  background: ${colors.white};
`;

export const SignUpContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  ul > li + li {
    margin-top: 0.8rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .checkIcon {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
