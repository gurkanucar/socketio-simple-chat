import React, { useState } from "react";
import "./Message.css";

export const MessageItem = ({ message, username }) => {
  const type = message.messageType.toLowerCase();
  const self = message.username == username ? "_self" : "";

  return (
    <div className={"message_item_" + type + self}>
      {type != "server" && self == "" && (
        <span className="message_item_username">{message.username}</span>
      )}
      <div className={"message_content_" + type + self}>
        <span>{message.content}</span>
        <span>{message.createdDateTime}15:30</span>
      </div>
    </div>
  );
};
