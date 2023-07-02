import { Container, SignUpContainer } from "./styles";
import mobileImg from "../../assets/images/illustration-sign-up-mobile.svg";
import desktopImg from "/images/illustration-sign-up-desktop.svg";
import { Form } from "../../components/Form";
import List from "../../components/List";

// eslint-disable-next-line react/prop-types
export function SignUp() {
  return (
    <Container>
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImg} />
        <img src={mobileImg} alt="design de ilustrativo" />
      </picture>
      <SignUpContainer>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <List />
        <Form />
      </SignUpContainer>
    </Container>
  );
}
