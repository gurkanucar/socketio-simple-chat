import React from "react";
import "./Message.css";

export const MessageItem = ({ message }) => {
  return (
    <div>
      <h5>{message.content}</h5>
      <h6>{message.username}</h6>
    </div>
  );
};
