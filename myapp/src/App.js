import { useEffect, useState } from "react";
import './App.css';
import Messege from "./components/Message";
import MessageList from './components/MessageList';

function App() {

  const [messageList, setMessageList] = useState([{
    author: "RoboBot", text: "Привет!"
  }, { author: "RoboBot", text: "Сегодня прекрасная погода!" }]);

  useEffect(() => {
    if (messageList[messageList.length - 1].author !== "RoboBot") {
      setTimeout(() => {
        setMessageList((prev) => [...prev, { author: "RoboBot", text: "Как дела?" }])
      }, 10);
    }
  }, [messageList]);

  return (
    <div className="app">
      <h1 className="app_title">RoboChat</h1>
      <Messege messageList={messageList} />
      <MessageList setMessageList={setMessageList} />
    </div>
  );
}

export default App;