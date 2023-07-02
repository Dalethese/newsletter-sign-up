import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Roboto-Bold';
    src: url('/fonts/Roboto-Bold.ttf') format('truetype');
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
  }

  body, html {
    width: 100%;
    height: 100vh;
  }

  body {
    background-color: ${colors.charcoalGrey};
    display: grid;
    place-content: center;
    font-family: 'Roboto';
    letter-spacing: .8px;
    color: ${colors.darkSlateGrey}
  }

  .app {
    width: 100%;
    height: 100%;
  }
`;
