import PropTypes from "prop-types";
import { ListOfFriend } from "./FriendList.styled";
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return <ListOfFriend> 
            {friends.map( friend => (
              <FriendListItem key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
          /> 
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