import styled from "@emotion/styled";
import { css } from "@emotion/react";


//! Global
export const GlobalStyles = css`
li {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
  padding: 0;
}
`;

export const Box = styled.div `
  display: flex;
  justify-content: center;

  width: 90%;
  height: 100vh;
  margin: 0 auto; 
  background-color: aliceblue;
`; 