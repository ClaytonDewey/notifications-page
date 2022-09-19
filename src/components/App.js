import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import { StyledContainer } from "./styles/Container.styled";
import Footer from "./Footer";

const theme = {
  colors: {
    primary: "hsl(1, 90%, 64%)",
    secondary: "hsl(219, 85%, 26%)",
    white: "hsl(0, 0%, 100%)",
    lightGrayishBlue: "hsl(210, 60%, 98%)",
    lightGrayishBlue2: "hsl(205, 33%, 90%)",
    grayishBlue: "hsl(219, 14%, 63%)",
    darkGrayishBlue: "hsl(219, 12%, 42%)",
    darkBlue: "hsl(224, 21%, 14%)",
    header: "#ebfbff",
    body: "hsl(211, 68%, 94%)",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledContainer>
          <h1>Notifications...</h1>
        </StyledContainer>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
