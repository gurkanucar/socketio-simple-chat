import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login/Login";
import { useState } from "react";
import { Message } from "./components/Message/Message";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login
          username={username}
          setUsername={setUsername}
          room={room}
          setRoom={setRoom}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <Message room={room} username={username} />
      )}
    </div>
  );
}

export default App;
