import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 73rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 10px;
`;
