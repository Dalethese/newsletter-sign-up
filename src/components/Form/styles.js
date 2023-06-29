import styled from "styled-components";
import { colors } from "../../themes/colors";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
    font-size: 0.8em;
  }

  input {
    padding: 1rem;
    border: 1px solid ${colors.grey};
    border-radius: 0.3rem;

    &::placeholder {
      color: ${colors.grey};
    }

    &:focus {
      outline-color: black;
    }
  }
`;
