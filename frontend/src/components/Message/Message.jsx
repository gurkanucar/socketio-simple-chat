import React, { useEffect, useState } from "react";
import { useSocket } from "../../customHooks/useSocket";

import "./Message.css";
import { MessageList } from "./MessageList";

export const Message = ({ room, username }) => {
  const { isConnected, socketResponse, sendData } = useSocket(room, username);

  const [messageList, setMessageList] = useState([]);

  const addMessageToList = (val) => {
    setMessageList([...messageList, val]);
  };

  useEffect(() => {
    addMessageToList(socketResponse);
  }, [socketResponse]);

  const sendMessage = () => {
    sendData({ content: "selam denemelik" });
    addMessageToList({ content: "selam denemelik", username: username });
  };

  return (
    <div>
      <h1>Message</h1>
      <h2>Connected: {isConnected}</h2>
      <h2>{JSON.stringify(socketResponse)}</h2>
      <button onClick={() => sendMessage()}>send</button>
      <MessageList messageList={messageList} />
    </div>
  );
};
