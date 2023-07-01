import styled from "styled-components";
import { colors } from "../../themes/colors";

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
    font-size: 0.8em;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${colors.grey};
    border-radius: 0.3rem;

    &::placeholder {
      color: ${colors.grey};
    }

    &:focus {
      outline-color: black;
    }

    &.invalid {
      border-color: ${colors.red[500]};
      background-color: ${colors.red[100]};

      &::placeholder {
        color: ${colors.red[900]};
      }
    }
  }
`;

export const ValidRequired = styled.span`
  position: absolute;
  right: 0;
  /* margin-top: 8px; */

  font-size: x-small;
  color: ${colors.red[900]};
`;
