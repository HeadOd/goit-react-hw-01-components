import styled from "@emotion/styled";

export const TableHistory = styled.table `
  text-align: center;
  margin: 50px;
  width: 400px;

  border-spacing: 1px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
`;

export const TableHead = styled.thead `
  
`;

export const HeadLine = styled.tr `
  color: ${p => p.theme.colors.bgcCard};
  background-color: ${p => p.theme.colors.tableHead};
`;

export const TableBody = styled.tbody `
  
`;

export const BodyLine = styled.tr `
  background-color: ${p => p.theme.colors.bgcCard};

  :nth-child(2n) {
    background-color: ${p => p.theme.colors.border};
  }
`;

export const TableItem = styled.td `

`;