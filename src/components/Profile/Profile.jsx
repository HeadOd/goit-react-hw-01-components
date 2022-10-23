import PropTypes from "prop-types";
import { SocialProfile, Description, Avatar, Name, Info, Stats, Item, Label, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
  return <SocialProfile>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <Info>@{tag}</Info>
    <Info>{location}</Info>
  </Description>

  <Stats>
    <Item>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </Item>
    <Item>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </Item>
    <Item>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </Item>
  </Stats>
</SocialProfile>;
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};