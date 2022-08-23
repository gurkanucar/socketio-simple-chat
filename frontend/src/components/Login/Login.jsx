import React from "react";

import "./Login.css";

export const Login = ({
  room,
  setRoom,
  username,
  setUsername,
  setLoggedIn,
}) => {
  const checkForLogin = (e) => {
    e.preventDefault();
    if (room == "" || username == "") {
      alert("fill the required fields");
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      <form onSubmit={checkForLogin}>
        <input
          required
          placeholder="room name"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          required
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
