import styled from "styled-components";
import { colors } from "../../themes/colors";

export const StyledButton = styled.button`
  width: 100%;
  /* padding: 0.5rem 1rem; */
  height: 3rem;
  background-color: ${colors.darkSlateGrey};

  font-size: 1em;
  color: ${colors.white};

  border: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to right,
      ${colors.rapsberryPink},
      ${colors.blazingOrange}
    );
  }
`;
