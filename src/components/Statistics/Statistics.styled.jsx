import styled from "@emotion/styled";

export const Section = styled.section `
  width: 300px;
  margin: 50px;
`;

export const Title = styled.h2 `
  padding: 20px;
  text-align: center;

  background-color: ${props => props.theme.colors.bgcCard};
`;

export const ListOfStatistics = styled.ul `
  display: flex;
`;

export const Item = styled.li `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: ${props => props.theme.foo.widthOfItemSection};

  background-color: ${props => props.theme.foo.changeBgc};
`;

export const DataStat =styled.span `
  padding: 5px;
`;