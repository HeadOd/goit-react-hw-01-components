import PropTypes from "prop-types";
import { ListOfFriend, FriendProfile, Status, Avatar, FriendName } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return <ListOfFriend>
    {friends.map(friend => (
      <FriendProfile key={friend.id}>
      <Status isOnline={friend.isOnline}></Status>
      <Avatar src={friend.avatar} alt={friend.name} width="48" />
      <FriendName>{friend.name}</FriendName>  
    </FriendProfile>
    ))}
  </ListOfFriend>
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })),
};