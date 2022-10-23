import styled from "@emotion/styled";

export const Box = styled.div `
  display: flex;
  justify-content: center;

  width: 90%;
  height: 100vh;
  margin: 0 auto; 
  background-color: ${props => props.theme.colors.bgcMain};
`; 