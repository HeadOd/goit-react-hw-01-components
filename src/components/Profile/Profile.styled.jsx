import styled from "@emotion/styled";

export const SocialProfile = styled.div `
  width: 280px;
  height: 345px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div `
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid lightslategray;
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
  color: grey;
  margin-bottom: 10px;
`;

export const Stats = styled.ul `
  display: flex;

  border-radius: 0 0 10px 10px;
  background-color: lightgrey; 
`;

export const Item = styled.li `
  // list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 33%;
  padding: 10px;

  :not(:last-child) {
    border-right: 1px solid lightslategray;
  }
`;

export const Label = styled.span `
  color: grey;
  margin-bottom: 5px;
`;

export const Quantity = styled.span `
  font-weight: bold;
  padding: 5px;
`;