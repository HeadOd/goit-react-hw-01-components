import styled from "@emotion/styled";

export const ListOfFriend = styled.ul `
  width: 260px;
`;

export const FriendProfile = styled.li `
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;
  margin-bottom: 10px;

  background-color: ${p => p.theme.colors.bgcCard};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
`;

export const Status = styled.span `
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${p => p.isOnline ? `${p.theme.colors.statusOk}` : `${p.theme.colors.statusNotOk}`};
`;

export const Avatar = styled.img `
  margin-right: 20px;
`;

export const FriendName = styled.p `
  font-weight: bold;
`;