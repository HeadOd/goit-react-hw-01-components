import { Global } from "@emotion/react";
import user from "../../user/user.json";
import { Profile } from "../Profile/Profile";
import { Box } from "./App.styled";
import { GlobalStyles } from '../Global/Global.styled'
import data from "../../data/data.json";
import { Statistics } from "../Statistics/Statistics";
import friends from "../../friends/friends.json";
import { FriendList } from "../FriendList/FriendList";

export const App = () => {
  return (
    <Box>
      <Global styles={GlobalStyles}
      />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats"
        stats={data}
      />

      <FriendList friends={friends}
      />
    </Box>
  );
};