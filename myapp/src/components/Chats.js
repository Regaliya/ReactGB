import { useParams } from "react-router-dom";
import Messege from "./Message";
import MessageList from "./MessageList";




function Chats() {
  const { id } = useParams();
  return (
    <>
      <p>chat id {id}</p>
      <Messege />
      <MessageList />
      
    </>
  );
}

export default Chats;