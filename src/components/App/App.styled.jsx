import styled from "@emotion/styled";

export const Box = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 90%;
  height: 100em;
  margin: 0 auto; 
  background-color: ${props => props.theme.colors.bgcMain};
`; 