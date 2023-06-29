import Button from "../Button";
import { StyledForm } from "./styles";

export function Form() {
  return (
    <StyledForm>
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
      />
      <Button>Subscribe to monthly newsletter</Button>
    </StyledForm>
  );
}
