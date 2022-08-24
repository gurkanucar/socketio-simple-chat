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
    <div className="login_root">
      <form className="login_form" onSubmit={checkForLogin}>
        <input
          type="text"
          required
          placeholder="room name"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
