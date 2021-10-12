import { List, ListItem } from "@material-ui/core";
import { useState } from "react";

function RoboChat() {

  const [chat] = useState([{ key: 1, name: "RoboBot" }]);

  return (
    <List >
      {chat ? chat.map((el) => <ListItem key={el}>{el.name}</ListItem>) : null}
    </List>
  );
}

export default RoboChat;