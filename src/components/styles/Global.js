import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
  // This defines what 1rem is.
  font-size: 62.5%; // 1rem = 10px;
  font-style: normal;
  font-weight: normal;
}

body {
  background: ${({ theme }) => theme.colors.body};
  color: hsl(192, 100%, 9%);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.5rem;
}

h1 {
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyles;
