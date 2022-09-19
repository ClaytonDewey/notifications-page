import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import Footer from "./Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <h1>Notifications...</h1>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
