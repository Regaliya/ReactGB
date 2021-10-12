import { useEffect, useState } from "react";
import './App.css';
import Messege from "./components/Message";
import MessageList from './components/MessageList';
import RoboChat from "./components/RoboChat";

function App() {

  const [messageList, setMessageList] = useState([{
    name: "RoboBot", text: "Привет!"}, { name: "RoboBot", text: "Сегодня прекрасная погода!" }]);

  useEffect(() => {
    if (messageList[messageList.length - 1].name !== "RoboBot") {
      setTimeout(() => {
        setMessageList((prev) => [...prev, { name: "RoboBot", text: "Как дела?" }])
      }, 1000);
    }
  }, [messageList]);

  return (
    <div className="app">
      <h1 className="app_title">RoboChat</h1>
      <RoboChat />
      <Messege messageList={messageList} />
      <MessageList setMessageList={setMessageList} />
    </div>
  );
}

export default App;