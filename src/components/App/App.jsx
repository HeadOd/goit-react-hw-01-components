import { Global } from "@emotion/react";
import user from "../../user/user.json";
import { Profile } from "../Profile/Profile";
import { Box } from "./App.styled";
import { GlobalStyles } from '../Global/Global.styled'

export const App = () => {
  return (
    <Box>
      <Global styles={GlobalStyles} />
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
/>
    </Box>
  );
};
