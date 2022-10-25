import {FriendProfile, Status, Avatar, FriendName } from "./FriendList.styled";

export const FriendListItem = ({avatar, name, isOnline }) => {
  return <FriendProfile>
          <Status isOnline={isOnline}></Status>
          <Avatar src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>  
        </FriendProfile>
};