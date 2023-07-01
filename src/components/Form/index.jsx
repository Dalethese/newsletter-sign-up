import { useState } from "react";
import Button from "../Button";
import { StyledForm, ValidRequired } from "./styles";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Form() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const history = useNavigate();

  function emailValid() {
    const emailPattern = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
    emailPattern.test(email) ? setIsValidEmail(true) : setIsValidEmail(false);
  }

  const submit = (e) => {
    e.preventDefault();

    emailValid();

    if (isValidEmail && email) {
      history("/success", {
        state: { email },
      });
    }
  };

  return (
    <StyledForm onSubmit={submit}>
      <label htmlFor="email">Email address</label>
      {!isValidEmail && <ValidRequired>Valid email required</ValidRequired>}
      <input
        type="email"
        name="email"
        id="email"
        className={!isValidEmail ? "invalid" : ""}
        placeholder="email@company.com"
        onChange={(e) => {
          setEmail(e.target.value);
          emailValid();
        }}
        onBlur={emailValid}
      />
      <Button>Subscribe to monthly newsletter</Button>
    </StyledForm>
  );
}
