import { useLocation } from "react-router-dom";
import SuccessIcon from "../../components/SuccessIcon";
import { Container } from "./styles";
import Button from "../../components/Button";

export function Success() {
  const location = useLocation();
  const email = location.state.email;
  return (
    <Container>
      <div>
        <SuccessIcon />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button>Dismiss message</Button>
    </Container>
  );
}
