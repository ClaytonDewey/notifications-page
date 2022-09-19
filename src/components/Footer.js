import React from "react";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter class="attribution">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://www.claytondewey.io/">Clayton Dewey</a>.
    </StyledFooter>
  );
};

export default Footer;
