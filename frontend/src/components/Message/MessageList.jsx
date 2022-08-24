import React from "react";
import "./Message.css";
import { MessageItem } from "./MessageItem";

export const MessageList = ({ messageList }) => {
  return (
    <div>
      {messageList.map((x, idx) => (
        <MessageItem key={idx} message={x} />
      ))}
    </div>
  );
};
