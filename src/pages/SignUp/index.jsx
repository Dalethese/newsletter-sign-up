import { Container, SignUpContainer } from "./styles";
import image from "../../assets/images/illustration-sign-up-mobile.svg";
import successIcon from "../../assets/images/icon-success.svg";
import { Form } from "../../components/Form";

export function SignUp() {
  return (
    <Container>
      <img src={image} alt="design de ilustrativo" />
      <SignUpContainer>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <span>
              <img className="checkIcon" src={successIcon} alt="success icon" />
            </span>
            Product discovery and building what matters
          </li>
          <li>
            <span>
              <img className="checkIcon" src={successIcon} alt="success icon" />
            </span>
            Measuring to ensure updates are a success
          </li>
          <li>
            <span>
              <img className="checkIcon" src={successIcon} alt="success icon" />
            </span>
            And much more!
          </li>
        </ul>

        <Form />
      </SignUpContainer>
    </Container>
  );
}
