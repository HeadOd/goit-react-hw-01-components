import styled from "@emotion/styled";

export const SocialProfile = styled.div `
  width: 280px;
  height: 345px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.bgcCard};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072);
`;

export const Description = styled.div `
  text-align: center;
  padding: 10px;
  border-bottom: ${props => `1px solid ${props.theme.colors.border}`};
`;

export const Avatar = styled.img `
  width: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Name = styled.h2 `
  margin-bottom: 10px;
`;

export const Info = styled.p `
  color: ${props => props.theme.colors.secondTextColor};
  margin-bottom: 10px;
`;

export const Stats = styled.ul `
  display: flex;

  border-radius: 0 0 10px 10px;
  background-color: ${props => props.theme.colors.bgcList}; 
`;

export const Item = styled.li `
  // list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 33%;
  padding: 10px;

  :not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.border}`};
  }
`;

export const Label = styled.span `
  color: ${props => props.theme.colors.secondTextColor};
  margin-bottom: 5px;
`;

export const Quantity = styled.span `
  font-weight: bold;
  padding: 5px;
`;